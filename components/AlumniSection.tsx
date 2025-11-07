import React from 'react';
import { ALUMNI_DATA } from '../constants';
import { Alumnus } from '../types';

const AlumniCard: React.FC<{ alumnus: Alumnus, isFeatured: boolean }> = ({ alumnus, isFeatured }) => {
    if (isFeatured) {
        return (
            <div className="lg:col-span-2 glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
                <img src={alumnus.photoUrl} alt={alumnus.name} className="w-32 h-32 rounded-full object-cover border-4 border-accent-dark/50 flex-shrink-0" />
                <div className="text-center md:text-left">
                    <p className="text-xl text-text-secondary-dark italic">"{alumnus.testimonial}"</p>
                    <div className="mt-4">
                        <h4 className="text-xl font-bold">{alumnus.name}</h4>
                        <p className="text-accent-dark">{alumnus.occupation} - Lulusan {alumnus.graduationYear}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-3xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:border-accent-dark/50">
            <img src={alumnus.photoUrl} alt={alumnus.name} className="w-24 h-24 rounded-full object-cover border-4 border-accent-dark/20 mb-4" />
            <h4 className="text-lg font-bold">{alumnus.name}</h4>
            <p className="text-sm text-accent-dark">{alumnus.occupation}</p>
            <p className="text-xs text-text-secondary-dark mt-1">Lulusan {alumnus.graduationYear}</p>
            <p className="text-sm text-text-secondary-dark mt-3 flex-grow italic">"{alumnus.testimonial}"</p>
        </div>
    );
};

export default function AlumniSection({ onAskSira }: { onAskSira: (query: string) => void }) {
    const featuredAlumnus = ALUMNI_DATA[0];
    const otherAlumni = ALUMNI_DATA.slice(1);

    const handleAskSira = () => {
        onAskSira("Ceritakan tentang beberapa alumni sukses dari SMPN 19 Mataram.");
    };

    return (
        <section id="alumni-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Jejak Alumni</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Kisah sukses para lulusan yang telah mengukir prestasi dan membawa nama baik sekolah ke panggung dunia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-reveal">
                    {/* Featured Alumnus */}
                    <AlumniCard alumnus={featuredAlumnus} isFeatured={true} />

                    {/* Other Alumni */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {otherAlumni.map(alumnus => (
                            <AlumniCard key={alumnus.id} alumnus={alumnus} isFeatured={false} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center scroll-reveal">
                    <button onClick={handleAskSira} className="px-8 py-4 bg-transparent text-accent-dark border-2 border-accent-dark/50 rounded-3xl hover:bg-accent-dark hover:text-slate-900 font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group hover:border-accent-dark mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:rotate-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                        </svg>
                        <span>Tanya Sira tentang Alumni</span>
                    </button>
                </div>
            </div>
        </section>
    );
}