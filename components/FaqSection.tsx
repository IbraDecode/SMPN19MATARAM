import React, { useState, useMemo } from 'react';
import { FAQ_DATA } from '../constants';
import { FaqCategory } from '../types';

const FaqAccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-border-light dark:border-border-dark">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-6"
            >
                <span className="font-semibold text-lg">{question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 px-6 text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default function FaqSection() {
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<FaqCategory | 'Semua'>('Semua');
    const [searchTerm, setSearchTerm] = useState('');

    const categories: (FaqCategory | 'Semua')[] = ['Semua', 'Umum', 'Akademik', 'PPDB', 'Fasilitas'];

    const filteredFaqs = useMemo(() => {
        return FAQ_DATA.filter(faq => {
            const matchesCategory = activeCategory === 'Semua' || faq.category === activeCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const handleToggle = (id: number) => {
        setOpenFaqId(prevId => (prevId === id ? null : id));
    };

    return (
        <section id="faq-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Pertanyaan Umum (FAQ)</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan mengenai sekolah kami.
                    </p>
                </div>
                
                <div className="mb-8 space-y-4 scroll-reveal">
                     <div className="relative w-full">
                        <input
                        type="text"
                        placeholder="Cari pertanyaan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 contact-input rounded-3xl outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {categories.map(category => (
                            <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-3xl font-semibold transition-colors duration-300 ${activeCategory === category ? 'bg-accent-light dark:bg-accent-dark text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}
                            >
                            {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="glass-card rounded-3xl overflow-hidden shadow-lg scroll-reveal">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map(faq => (
                            <FaqAccordionItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaqId === faq.id}
                                onClick={() => handleToggle(faq.id)}
                            />
                        ))
                    ) : (
                        <p className="text-center p-8 text-text-secondary-light dark:text-text-secondary-dark">
                            Tidak ada pertanyaan yang cocok dengan pencarian Anda.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}