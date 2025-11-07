import React, { useState, useMemo } from 'react';
import { BOOKS_DATA } from '../constants';
import { Book } from '../types';

type Category = 'Semua' | 'Fiksi' | 'Sains' | 'Sejarah' | 'Biografi';

const BookModal: React.FC<{ book: Book | null; onClose: () => void; }> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity duration-300" onClick={onClose}>
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl border-2 border-accent-dark/50"
        onClick={e => e.stopPropagation()}
      >
        <img src={book.coverUrl} alt={book.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-8 flex flex-col">
          <span className="text-sm font-semibold text-accent-light dark:text-accent-dark">{book.category}</span>
          <h2 className="text-3xl font-bold mt-1">{book.title}</h2>
          <p className="text-md text-text-secondary-light dark:text-text-secondary-dark mt-1">oleh {book.author}</p>
          <div className="mt-4 text-text-secondary-light dark:text-text-secondary-dark flex-1 overflow-y-auto pr-2">
            <p>{book.description}</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="#" className="px-6 py-3 bg-accent-dark text-slate-900 rounded-3xl font-bold hover:scale-105 transition-transform duration-300 btn-glow flex items-center justify-center space-x-2 text-center">
              <span>Baca Sekarang (Demo)</span>
            </a>
            <button onClick={onClose} className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-3xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function DigitalLibrarySection({ onAskSira }: { onAskSira: (query: string) => void }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');

  const categories: Category[] = ['Semua', 'Fiksi', 'Sains', 'Sejarah', 'Biografi'];
  
  const filteredBooks = useMemo(() => {
    if (activeCategory === 'Semua') {
      return BOOKS_DATA;
    }
    return BOOKS_DATA.filter(book => book.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <section id="perpustakaan-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Perpustakaan Digital</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Jelajahi dunia pengetahuan dan imajinasi melalui koleksi buku pilihan kami.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center items-center gap-4 scroll-reveal">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-3xl font-semibold transition-colors duration-300 ${activeCategory === category ? 'bg-accent-light dark:bg-accent-dark text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}
            >
              {category}
            </button>
          ))}
           <button onClick={() => onAskSira('Rekomendasikan buku fiksi yang menarik untuk saya baca.')} className="px-6 py-2 bg-transparent text-accent-light dark:text-accent-dark border border-accent-light dark:border-accent-dark rounded-3xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-slate-900 font-semibold transition-colors duration-300 flex items-center space-x-2">
            <span>Minta Rekomendasi Sira</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
           </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 scroll-reveal">
          {filteredBooks.map(book => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="group relative aspect-[3/4.5] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:border-accent-light/50 dark:hover:border-accent-dark/50 hover:shadow-xl hover:-translate-y-2"
            >
              <img 
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="font-bold">{book.title}</h3>
                  <p className="text-xs text-slate-300">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </section>
  );
}