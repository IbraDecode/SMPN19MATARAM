import React from 'react';
import { PPDB_TIMELINE_DATA, PPDB_PATHS_DATA, PPDB_REQUIREMENTS_DATA } from '../constants';

const Icons: { [key: string]: React.ReactNode } = {
    map: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    heart: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.06 4.318 12.382a4.5 4.5 0 010-6.064z" /></svg>,
    award: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
};


export default function AdmissionSection({ onAskSira }: { onAskSira: (query: string) => void }) {
    const handleAskSira = () => {
        onAskSira("Jelaskan alur pendaftaran PPDB di SMPN 19 Mataram.");
    };

    return (
        <section id="ppdb-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Penerimaan Peserta Didik Baru (PPDB)</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Langkah Anda menuju pendidikan berkualitas dimulai di sini. Temukan semua informasi yang Anda butuhkan.
                    </p>
                </div>

                {/* Timeline */}
                <div className="mb-24 scroll-reveal">
                    <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Linimasa Pendaftaran</h3>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="absolute top-1/2 -mt-px w-full h-0.5 bg-border-light dark:border-border-dark hidden md:block"></div>
                        {PPDB_TIMELINE_DATA.map((step, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full glass-card border-2 border-accent-light dark:border-accent-dark flex items-center justify-center font-bold text-xl mb-4 bg-background-light dark:bg-background-dark">{index + 1}</div>
                                <p className="font-bold">{step.title}</p>
                                <p className="text-accent-light dark:text-accent-dark font-semibold text-sm">{step.date}</p>
                                <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Jalur Pendaftaran */}
                    <div className="space-y-8 scroll-reveal">
                        <h3 className="text-3xl font-bold text-center lg:text-left gradient-text">Jalur Pendaftaran</h3>
                        {PPDB_PATHS_DATA.map(path => (
                             <div key={path.title} className="glass-card rounded-3xl p-6 flex items-start gap-6">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center text-accent-light dark:text-accent-dark">
                                    {Icons[path.icon]}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">{path.title}</h4>
                                    <p className="mt-1 text-text-secondary-light dark:text-text-secondary-dark">{path.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Persyaratan & Aksi */}
                     <div className="space-y-8 scroll-reveal">
                        <h3 className="text-3xl font-bold text-center lg:text-left gradient-text">Persyaratan Umum</h3>
                        <div className="glass-card rounded-3xl p-6">
                            <ul className="space-y-3">
                                {PPDB_REQUIREMENTS_DATA.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-accent-light dark:text-accent-dark flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span className="text-text-secondary-light dark:text-text-secondary-dark">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="flex flex-col gap-4">
                            <a href="#" className="w-full text-center px-6 py-4 btn-gradient font-bold rounded-3xl text-lg btn-glow transform hover:scale-105 transition-transform duration-300">
                                Portal Pendaftaran (Demo)
                            </a>
                            <button onClick={handleAskSira} className="w-full text-center px-6 py-4 bg-transparent text-accent-light dark:text-accent-dark border-2 border-accent-light/50 dark:border-accent-dark/50 rounded-3xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-slate-900 font-semibold transition-all duration-300 group hover:border-accent-light dark:hover:border-accent-dark">
                                Tanya Sira tentang PPDB
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}