import React from 'react';
import { SCHEDULE_DATA, ASSIGNMENTS_DATA, LEARNING_MATERIALS_DATA } from '../constants';

const fileIcons: { [key: string]: React.ReactNode } = {
    PDF: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" /><path d="M5.5 8.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3zM6 9v2h1V9H6z" /><path d="M9.5 8.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5 14a.5.5 0 01.5-.5h8a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5z" /></svg>,
    DOCX: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" /><path d="M5 8h10v1H5V8zm0 3h10v1H5v-1zm0 3h6v1H5v-1z" /></svg>,
    PPTX: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" /><rect x="6" y="8" width="8" height="6" rx="1" /></svg>,
};


export default function ElearningSection({ onAskSira }: { onAskSira: (query: string) => void }) {

    const handleAskSira = () => {
        onAskSira("Apa saja tugas yang harus saya kerjakan minggu ini?");
    };

    return (
        <section id="elearning-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Portal E-Learning</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Akses jadwal pelajaran, tugas, dan materi pembelajaran Anda di satu tempat.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Schedule */}
                    <div className="lg:col-span-2 space-y-8 scroll-reveal">
                        <h3 className="text-3xl font-bold gradient-text">Jadwal Pelajaran (Kelas 7)</h3>
                        <div className="glass-card rounded-3xl overflow-hidden shadow-lg">
                           <div className="overflow-x-auto">
                                <table className="w-full text-center">
                                    <thead className="bg-slate-200/50 dark:bg-slate-800/50">
                                        <tr>
                                            <th className="p-4 font-semibold">Waktu</th>
                                            <th className="p-4 font-semibold">Senin</th>
                                            <th className="p-4 font-semibold">Selasa</th>
                                            <th className="p-4 font-semibold">Rabu</th>
                                            <th className="p-4 font-semibold">Kamis</th>
                                            <th className="p-4 font-semibold">Jumat</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                        {SCHEDULE_DATA.map(row => (
                                            <tr key={row.time} className="hover:bg-slate-200/20 dark:hover:bg-slate-800/20">
                                                <td className="p-3 font-semibold text-accent-light dark:text-accent-dark whitespace-nowrap">{row.time}</td>
                                                <td className="p-3">{row.monday}</td>
                                                <td className="p-3">{row.tuesday}</td>
                                                <td className="p-3">{row.wednesday}</td>
                                                <td className="p-3">{row.thursday}</td>
                                                <td className="p-3">{row.friday}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                           </div>
                        </div>
                    </div>

                    {/* Assignments & Materials */}
                    <div className="space-y-8 scroll-reveal">
                         <div>
                            <h3 className="text-3xl font-bold mb-8 gradient-text">Tugas Mendatang</h3>
                            <div className="space-y-4">
                                {ASSIGNMENTS_DATA.map(assignment => (
                                    <div key={assignment.id} className="glass-card rounded-3xl p-5">
                                        <p className="font-bold">{assignment.subject}</p>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{assignment.title}</p>
                                        <p className="text-xs font-semibold text-accent-light dark:text-accent-dark mt-2">
                                            Tenggat: {new Date(assignment.dueDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div>
                            <h3 className="text-3xl font-bold mb-8 gradient-text">Materi Pembelajaran</h3>
                             <div className="space-y-4">
                                {LEARNING_MATERIALS_DATA.map(material => (
                                    <a href={material.fileUrl} download className="group glass-card rounded-3xl p-5 flex items-center justify-between hover:border-accent-dark/50 transition-colors duration-300">
                                        <div className="flex items-center gap-4">
                                            {fileIcons[material.fileType]}
                                            <div>
                                                 <p className="font-bold">{material.title}</p>
                                                 <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{material.subject}</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-accent-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="mt-16 text-center scroll-reveal">
                    <button onClick={handleAskSira} className="px-8 py-4 bg-transparent text-accent-dark border-2 border-accent-dark/50 rounded-3xl hover:bg-accent-dark hover:text-slate-900 font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group hover:border-accent-dark mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:rotate-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                        </svg>
                        <span>Tanya Sira tentang Tugasmu</span>
                    </button>
                </div>
            </div>
        </section>
    );
}