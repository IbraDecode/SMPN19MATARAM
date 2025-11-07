import React, { useState } from 'react';
import { NEWS_DATA } from '../constants';
import { NewsArticle } from '../types';

// Category Styles
const categoryStyles: { [key: string]: string } = {
  Prestasi: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Pengumuman: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Kegiatan: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Akademik: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
};

const NewsModal: React.FC<{ article: NewsArticle | null; onClose: () => void }> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-border-dark"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-full h-64 md:h-80 bg-slate-900 flex-shrink-0">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="flex items-center gap-4 mb-2">
            <span className={`inline-block px-3 py-1 text-sm rounded-full ${categoryStyles[article.category]}`}>{article.category}</span>
            <span className="text-sm text-text-secondary-dark">{new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h2 className="text-3xl font-bold">{article.title}</h2>
          <p className="mt-4 text-text-secondary-dark whitespace-pre-wrap">{article.content}</p>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

export default function NewsSection({ onAskSira }: { onAskSira: (query: string) => void }) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const featuredArticle = NEWS_DATA[0];
  const latestArticles = NEWS_DATA.slice(1);

  const handleAskSira = () => {
    const newsContext = NEWS_DATA.slice(0, 3).map(a => `- ${a.title}: ${a.summary}`).join('\n');
    onAskSira(`Tolong rangkum tiga berita terbaru dari SMPN 19 Mataram ini dalam satu paragraf singkat:\n${newsContext}`);
  };

  return (
    <section id="berita-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Berita & Pengumuman</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Ikuti informasi terkini, prestasi, dan kegiatan terbaru dari lingkungan sekolah kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch scroll-reveal">
          {/* Featured Article */}
          <div 
            className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer shadow-lg"
            onClick={() => setSelectedArticle(featuredArticle)}
          >
            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <span className={`inline-block px-3 py-1 text-sm rounded-full mb-2 self-start ${categoryStyles[featuredArticle.category]}`}>{featuredArticle.category}</span>
              <h3 className="text-3xl font-bold leading-tight">{featuredArticle.title}</h3>
              <p className="mt-2 text-slate-300 hidden sm:block">{featuredArticle.summary}</p>
              <span className="mt-4 font-semibold text-accent-dark group-hover:underline">Baca Selengkapnya &rarr;</span>
            </div>
          </div>

          {/* Latest News & AI Button */}
          <div className="flex flex-col gap-8">
            {latestArticles.slice(0, 2).map(article => (
              <div 
                key={article.id}
                className="group glass-card rounded-3xl p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors duration-300"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <span className={`inline-block px-2 py-0.5 text-xs rounded-full mb-1 ${categoryStyles[article.category]}`}>{article.category}</span>
                  <h4 className="font-bold text-md sm:text-lg leading-tight group-hover:text-accent-dark transition-colors">{article.title}</h4>
                  <p className="text-xs sm:text-sm text-text-secondary-dark mt-1">{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
             <button onClick={handleAskSira} className="w-full text-center px-6 py-4 bg-transparent text-accent-dark border-2 border-accent-dark/50 rounded-3xl hover:bg-accent-dark hover:text-slate-900 font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group hover:border-accent-dark">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:rotate-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
                <span>Minta Sira Rangkum Berita Terbaru</span>
            </button>
          </div>
        </div>

      </div>
      <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </section>
  );
}