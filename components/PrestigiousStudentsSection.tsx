import React, { useState, useEffect, useRef } from 'react';
import { STUDENTS_DATA } from '../constants';
import { Student } from '../types';
import { getAiStudentNarrationText, getAiSiraSpeech, decode, decodeAudioData } from '../services/geminiService';

const fieldStyles = {
  Sains: {
    border: 'border-sky-500 dark:border-sky-400',
    glow: 'shadow-[0_0_20px_theme(colors.sky.500/0.4)] dark:shadow-[0_0_20px_theme(colors.sky.400/0.4)]',
    text: 'text-sky-500 dark:text-sky-400',
  },
  Seni: {
    border: 'border-cyan-500 dark:border-cyan-400',
    glow: 'shadow-[0_0_20px_theme(colors.cyan.500/0.4)] dark:shadow-[0_0_20px_theme(colors.cyan.400/0.4)]',
    text: 'text-cyan-500 dark:text-cyan-400',
  },
  Olahraga: {
    border: 'border-teal-500 dark:border-teal-400',
    glow: 'shadow-[0_0_20px_theme(colors.teal.500/0.4)] dark:shadow-[0_0_20px_theme(colors.teal.400/0.4)]',
    text: 'text-teal-500 dark:text-teal-400',
  },
  Akademik: {
    border: 'border-indigo-500 dark:border-indigo-400',
    glow: 'shadow-[0_0_20px_theme(colors.indigo.500/0.4)] dark:shadow-[0_0_20px_theme(colors.indigo.400/0.4)]',
    text: 'text-indigo-500 dark:text-indigo-400',
  },
};

type AudioState = 'idle' | 'loading' | 'playing' | 'error';

const StudentModal: React.FC<{ student: Student | null; onClose: () => void; }> = ({ student, onClose }) => {
  const [audioState, setAudioState] = useState<AudioState>('idle');
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    return () => {
        if (audioSourceRef.current) {
            audioSourceRef.current.stop();
        }
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
        }
        audioContextRef.current = null;
        audioSourceRef.current = null;
        setAudioState('idle');
    };
  }, [student]);

  if (!student) return null;

  const playNarration = async () => {
    if (audioState === 'loading' || audioState === 'playing') return;
    
    setAudioState('loading');

    try {
      const narrationText = await getAiStudentNarrationText(student);
      const base64Audio = await getAiSiraSpeech(narrationText);

      if (base64Audio) {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioContext = audioContextRef.current;
        
        const audioBuffer = await decodeAudioData(
            decode(base64Audio),
            audioContext,
            24000,
            1,
        );

        if (audioSourceRef.current) {
            audioSourceRef.current.stop();
        }

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        
        source.onended = () => {
            setAudioState('idle');
            audioSourceRef.current = null;
        };
        
        source.start();
        audioSourceRef.current = source;
        setAudioState('playing');

      } else {
        throw new Error('Failed to generate audio.');
      }
    } catch (error) {
        console.error("Error playing narration:", error);
        setAudioState('error');
        setTimeout(() => setAudioState('idle'), 3000); // Reset after 3 seconds
    }
  };
  
  const styles = fieldStyles[student.field];

  const renderButtonContent = () => {
    switch(audioState) {
        case 'loading':
            return (
                <>
                    <span>Memuat narasi...</span>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </>
            );
        case 'playing':
            return (
                <>
                    <span>Memutar narasi...</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M3 10L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M7 6L7 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M17 6L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 10L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </>
            );
        case 'error':
            return <span>Gagal memuat</span>;
        default: // idle
            return (
                <>
                    <span>Dengarkan Narasi Sira</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                    </svg>
                </>
            );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity duration-300" onClick={onClose}>
      <div 
        className={`glass-card w-full max-w-4xl rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl border-2 ${styles.border}`}
        onClick={e => e.stopPropagation()}
      >
        <img src={student.photoUrl} alt={student.name} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-8 flex flex-col">
          <h2 className="text-3xl font-bold">{student.name}</h2>
          <p className={`text-lg font-semibold ${styles.text}`}>{student.achievement}</p>
          <div className="mt-4 text-text-secondary-light dark:text-text-secondary-dark flex-1 overflow-y-auto pr-2">
            <h4 className="font-bold text-foreground-light dark:text-foreground-dark mb-2">Jejak Prestasi:</h4>
            <p>{student.achievementTrail}</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={playNarration}
              disabled={audioState === 'loading' || audioState === 'playing'}
              className={`px-6 py-3 bg-transparent ${styles.text} border ${styles.border} rounded-3xl hover:bg-current hover:text-white dark:hover:text-slate-900 font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed ${audioState === 'error' ? 'border-red-500 text-red-500' : ''}`}
            >
              {renderButtonContent()}
            </button>
            <button onClick={onClose} className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-3xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PrestigiousStudentsSection() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <section id="siswa-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Siswa Berprestasi</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Kilau para bintang muda yang mengharumkan nama SMPN 19 Mataram di berbagai bidang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal">
          {STUDENTS_DATA.map((student) => {
             const styles = fieldStyles[student.field];
             return (
              <div 
                key={student.id} 
                onClick={() => setSelectedStudent(student)}
                className={`group relative aspect-[3/4] rounded-3xl overflow-hidden glass-card border-2 ${styles.border} border-opacity-50 hover:border-opacity-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-lg ${styles.glow}`}
              >
                <img src={student.photoUrl} alt={student.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-6 text-slate-100 w-full">
                  <div className="transition-transform duration-500 ease-out group-hover:-translate-y-4">
                    <h3 className="text-xl font-bold">{student.name}</h3>
                    <p className={`text-sm ${styles.text} font-medium`}>{student.field}</p>
                  </div>
                  <p className="text-sm text-slate-200 absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                    {student.achievement}
                  </p>
                </div>
              </div>
            )}
          )}
        </div>
      </div>

      <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
    </section>
  );
}