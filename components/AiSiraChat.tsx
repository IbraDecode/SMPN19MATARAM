import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { getAiSiraResponse } from '../services/geminiService';

interface AiSiraChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  const renderInline = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const blocks = text.split(/\n\s*\n/).filter(block => block.trim() !== '');

  return (
    <div className="text-left">
      {blocks.map((block, index) => {
        const lines = block.split('\n');
        const isList = lines.every(line => line.trim().startsWith('* ') || line.trim().startsWith('- '));

        if (isList) {
          return (
            <ul key={index} className="list-disc pl-5 space-y-1 my-2">
              {lines.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item.replace(/^\s*[-*]\s*/, ''))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="mb-2 last:mb-0">
            {lines.map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {renderInline(line)}
                {lineIndex < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
};


const LoadingBubble: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full animate-bounce"></div>
  </div>
);

const suggestions = [
  { title: "Jalur Pendaftaran", prompt: "Jelaskan tentang jalur pendaftaran PPDB" },
  { title: "Ekstrakurikuler", prompt: "Sebutkan ekstrakurikuler yang tersedia" },
  { title: "Jadwal Belajar", prompt: "Bagaimana cara melihat jadwal belajar?" },
  { title: "Cari Guru", prompt: "Siapa guru yang mengajar TIK?" },
];


export default function AiSiraChat({ isOpen, onClose, initialQuery }: AiSiraChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialQuerySent = useRef(false);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (messageToSend?: string) => {
    const query = messageToSend || input;
    if (query.trim() === '' || isLoading) return;
    
    const userMessage: ChatMessage = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    
    // Add a loading message placeholder
    const loadingMessage: ChatMessage = { sender: 'sira', text: '', isLoading: true };
    setMessages(prev => [...prev, loadingMessage]);

    if (!messageToSend) {
      setInput('');
    }
    setIsLoading(true);

    const responseText = await getAiSiraResponse(query);
    const siraMessage: ChatMessage = { sender: 'sira', text: responseText };
    
    setMessages(prev => {
        const newMessages = [...prev];
        // Replace the last message (the loading one) with the actual response
        newMessages[newMessages.length - 1] = siraMessage;
        return newMessages;
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset messages if chat is re-opened without an initial query
      if (!initialQuery) {
          setMessages([]);
      }
      if (initialQuery && !isInitialQuerySent.current) {
        isInitialQuerySent.current = true;
        handleSend(initialQuery);
      }
    } else {
      document.body.style.overflow = 'auto';
      isInitialQuerySent.current = false;
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, initialQuery]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="glass-card w-full max-w-2xl h-[80vh] max-h-[700px] rounded-3xl flex flex-col overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent-light dark:text-accent-dark">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
            </div>
            <div>
                <h2 className="text-lg font-bold">AI Sira</h2>
                <p className="text-xs text-accent-light dark:text-accent-dark">Online</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          {messages.length === 0 && !isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-20 h-20 rounded-full bg-accent-dark/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mt-6">Halo! Ada yang bisa saya bantu?</h2>
              <p className="mt-2 text-text-secondary-dark max-w-sm">
                Saya Sira, dikembangkan oleh Ibra Decode, siswa SMPN 19 Mataram.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                {suggestions.map(suggestion => (
                  <button 
                    key={suggestion.title}
                    onClick={() => handleSend(suggestion.prompt)}
                    className="p-4 glass-card rounded-2xl text-left hover:border-accent-dark/50 transition-colors duration-300"
                  >
                    <p className="font-semibold">{suggestion.title}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'sira' && <div className="w-8 h-8 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 flex-shrink-0"></div>}
                  <div className={`max-w-xs md:max-w-md px-4 py-3 rounded-3xl ${msg.sender === 'user' ? 'bg-accent-light dark:bg-accent-dark text-white dark:text-slate-900 rounded-br-lg' : 'bg-slate-200 dark:bg-slate-700 rounded-bl-lg'}`}>
                    {msg.isLoading ? <LoadingBubble /> : <MarkdownRenderer text={msg.text} />}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <footer className="p-4 border-t border-border-light dark:border-border-dark">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Ketik pertanyaan Anda..."
              className="w-full pl-4 pr-12 py-3 contact-input rounded-3xl outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
            />
            <button onClick={() => handleSend()} disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-accent-light dark:bg-accent-dark text-white dark:text-slate-900 hover:scale-110 transition-transform duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}