import React, { useState } from 'react';
import { getAiCreativeResponse } from '../services/geminiService';
import { MarkdownRenderer } from './AiSiraChat'; // Re-using renderer

type CreativeTool = 'yel-yel' | 'mading' | 'planner';

const tools: { id: CreativeTool; title: string; placeholder: string; icon: React.ReactNode }[] = [
    { 
        id: 'yel-yel', 
        title: 'Generator Yel-Yel', 
        placeholder: 'Contoh: Sportivitas O2SN',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg>
    },
    { 
        id: 'mading', 
        title: 'Asisten Majalah Dinding', 
        placeholder: 'Contoh: Hari Pahlawan',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    },
    { 
        id: 'planner', 
        title: 'Perencana Belajar Pribadi', 
        placeholder: 'Contoh: Matematika & IPA',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    }
];

export default function SiraCerdasSection() {
    const [activeTool, setActiveTool] = useState<CreativeTool>('yel-yel');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue || isLoading) return;
        setIsLoading(true);
        setResult('');
        const response = await getAiCreativeResponse(activeTool, inputValue);
        setResult(response);
        setIsLoading(false);
    };

    const currentTool = tools.find(t => t.id === activeTool)!;

    return (
        <section id="sira-cerdas-section" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Sira Cerdas: Pusat Kreativitas AI</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Manfaatkan kecerdasan Sira untuk membantu tugas kreatif dan akademis Anda. Pilih alat di bawah ini untuk memulai.
                    </p>
                </div>

                <div className="glass-card rounded-3xl shadow-lg overflow-hidden scroll-reveal">
                    <div className="flex flex-col sm:flex-row border-b border-border-light dark:border-border-dark">
                        {tools.map(tool => (
                            <button
                                key={tool.id}
                                onClick={() => { setActiveTool(tool.id); setResult(''); setInputValue(''); }}
                                className={`flex-1 p-4 sm:p-6 font-semibold flex items-center justify-center gap-3 transition-colors duration-300 ${activeTool === tool.id ? 'bg-accent-dark/10 text-accent-dark' : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/50'}`}
                            >
                                {tool.icon}
                                {tool.title}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="creative-input" className="block text-lg font-semibold mb-3 text-center">{currentTool.title}</label>
                            <div className="relative">
                                <input
                                    id="creative-input"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={currentTool.placeholder}
                                    className="w-full pl-4 pr-32 py-3 contact-input rounded-3xl outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
                                />
                                <button type="submit" disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full btn-gradient font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-wait">
                                    {isLoading ? '...' : 'Buat'}
                                </button>
                            </div>
                        </form>

                        {(isLoading || result) && (
                            <div className="mt-8 p-6 glass-card rounded-2xl min-h-[150px]">
                                {isLoading ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-accent-dark rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                            <div className="w-2 h-2 bg-accent-dark rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-2 h-2 bg-accent-dark rounded-full animate-bounce"></div>
                                            <span className="text-text-secondary-dark ml-2">Sira sedang berpikir...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <MarkdownRenderer text={result} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}