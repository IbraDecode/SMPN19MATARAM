import React, { useState, useMemo } from 'react';
import { GALLERY_DATA } from '../constants';
import { GalleryItem } from '../types';

type GalleryCategory = 'Semua' | 'Foto' | 'Video' | 'Kenangan Alumni';

const GalleryModal: React.FC<{ item: GalleryItem | null; onClose: () => void; }> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 transition-opacity duration-300" onClick={onClose}>
      <div 
        className="glass-card w-full max-w-5xl max-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl border-2 border-accent-light/50 dark:border-accent-dark/50"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-full aspect-video bg-slate-900 flex items-center justify-center">
            {item.type === 'Video' ? (
                <iframe
                    className="w-full h-full"
                    src={`${item.url}?autoplay=1&rel=0`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <img src={item.url} alt={item.title} className="max-w-full max-h-full object-contain" />
            )}
        </div>
        <div className="p-6 bg-slate-100/30 dark:bg-slate-800/30">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">{item.description}</p>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};


export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Semua');

  const categories: GalleryCategory[] = ['Semua', 'Foto', 'Video', 'Kenangan Alumni'];
  
  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua') {
      return GALLERY_DATA;
    }
    return GALLERY_DATA.filter(item => item.type === activeCategory);
  }, [activeCategory]);
  
  return (
    <section id="galeri-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Galeri Sekolah</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Abadikan momen, raih prestasi. Inilah potret perjalanan dan kenangan kami di SMPN 19 Mataram.
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
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 scroll-reveal">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-video rounded-3xl overflow-hidden glass-card cursor-pointer"
            >
              <img 
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                 <div className="text-white">
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </div>
              {item.type === 'Video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-accent-light dark:group-hover:bg-accent-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}