// Fix: Import `useEffect` from React to resolve the "Cannot find name 'useEffect'" error.
import React, { useEffect } from 'react';

const schoolInfo = [
  { icon: 'npsn', title: 'NPSN', value: '50203333' },
  { icon: 'accreditation', title: 'Akreditasi', value: 'A' },
  { icon: 'area', title: 'Luas Tanah', value: '10,500 m²' },
  { icon: 'status', title: 'Status', value: 'Negeri' },
];

const historyData = [
    { year: '1983', event: 'Pendirian sekolah sebagai filial dari SMPN 2 Mataram.' },
    { year: '1985', event: 'Peresmian menjadi sekolah mandiri dengan nama SMPN 19 Mataram.' },
    { year: '2005', event: 'Meraih predikat Sekolah Standar Nasional (SSN).' },
    { year: '2018', event: 'Implementasi Kurikulum 2013 secara penuh dan program digitalisasi sekolah.' },
    { year: '2023', event: 'Juara 1 Lomba Cerdas Cermat tingkat Provinsi dan peluncuran program AI Sira.' },
];

const Icons: { [key: string]: React.ReactNode } = {
    npsn: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    accreditation: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806 1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    area: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>,
    status: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
};

interface InfoCardProps {
    icon: React.ReactNode, 
    title: string, 
    value: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value }) => (
    <div className="glass-card rounded-3xl p-6 text-center flex flex-col items-center scroll-reveal">
        <div className="w-16 h-16 mb-4 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 flex items-center justify-center text-accent-light dark:text-accent-dark">
            {icon}
        </div>
        <h4 className="text-lg font-semibold text-text-secondary-light dark:text-text-secondary-dark">{title}</h4>
        <p className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mt-1">{value}</p>
    </div>
);

interface TimelineItemProps {
    year: string;
    event: string;
    alignLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, alignLeft }) => (
    <div className={`mb-8 flex justify-between items-center w-full ${!alignLeft ? 'flex-row-reverse' : ''}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-background-light dark:bg-background-dark shadow-xl w-14 h-14 rounded-full border-2 border-accent-light dark:border-accent-dark">
            <h1 className="mx-auto font-semibold text-lg">{year}</h1>
        </div>
        <div className={`order-1 glass-card rounded-3xl shadow-lg w-5/12 px-6 py-4 ${alignLeft ? 'timeline-item timeline-left' : 'timeline-item timeline-right'}`}>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">{event}</p>
        </div>
    </div>
);

export default function ProfileSection() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const reveals = document.querySelectorAll('.timeline-item');
        reveals.forEach(el => observer.observe(el));

        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);
    return (
        <section id="profil-section" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Profil Sekolah</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Mengenal lebih dekat identitas, sejarah, dan visi yang membentuk SMPN 19 Mataram.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                   {schoolInfo.map(info => (
                       <InfoCard key={info.title} icon={Icons[info.icon]} title={info.title} value={info.value} />
                   ))}
                </div>

                <div className="text-center mb-16 scroll-reveal">
                    <h3 className="text-3xl font-bold gradient-text">Lintasan Sejarah</h3>
                     <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">Perjalanan kami dari masa ke masa.</p>
                </div>
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute border-opacity-20 border-accent-light dark:border-accent-dark h-full border-2" style={{ left: '50%' }}></div>
                    {historyData.map((item, index) => (
                        <TimelineItem key={index} year={item.year} event={item.event} alignLeft={index % 2 !== 0} />
                    ))}
                </div>

                <div className="mt-24 scroll-reveal">
                     <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold gradient-text">Sekilas Pandang Sekolah</h3>
                        <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">Saksikan denyut kehidupan di SMPN 19 Mataram.</p>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-card shadow-lg">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/RU59Hh2iMXI?autoplay=0&mute=1&controls=1&loop=1&playlist=RU59Hh2iMXI"
                            title="Video Profil Sekolah"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-light/70 via-background-light/30 to-transparent dark:from-background-dark/70 dark:via-background-dark/30 pointer-events-none"></div>
                         <div className="absolute bottom-8 left-8 text-white pointer-events-none max-w-2xl" style={{textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                            <h4 className="text-2xl font-bold">Visi & Misi Kami</h4>
                            <p className="mt-2">Mewujudkan generasi cerdas, kreatif, berakhlak mulia, dan berwawasan global yang siap menghadapi tantangan masa depan.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}