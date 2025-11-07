import React, { useState, useMemo } from 'react';
import { Teacher } from '../types';

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="group relative w-full h-96 rounded-3xl overflow-hidden perspective-1000">
      <div className="relative w-full h-full transform-style-3d group-hover:rotate-y-180 transition-transform duration-700 ease-in-out">
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <img src={teacher.photoUrl} alt={teacher.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-slate-100">
            <h3 className="text-xl font-bold">{teacher.name}</h3>
            <p className="text-accent-dark">{teacher.subject}</p>
          </div>
        </div>
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 glass-card p-6 flex flex-col justify-center items-center text-center">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{teacher.bio}</p>
          <p className="mt-4 text-lg italic text-accent-dark font-semibold">"{teacher.motivation}"</p>
        </div>
      </div>
    </div>
  );
};

interface TeachersSectionProps {
    teachers: Teacher[];
    onAskSira: () => void;
}

export default function TeachersSection({ teachers, onAskSira }: TeachersSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, teachers]);

  return (
    <section id="guru-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Guru & Staf Pengajar</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Bertemu dengan para pendidik berdedikasi yang menjadi pilar utama SMPN 19 Mataram.
          </p>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center scroll-reveal">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Cari guru atau mata pelajaran..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 contact-input rounded-3xl outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
           <button onClick={onAskSira} className="px-6 py-3 bg-transparent text-accent-light dark:text-accent-dark border border-accent-light dark:border-accent-dark rounded-3xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-slate-900 font-semibold transition-colors duration-300 flex items-center space-x-2">
            <span>Tanya AI Sira</span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
