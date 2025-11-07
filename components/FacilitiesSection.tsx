import React from 'react';
import { FACILITIES_DATA } from '../constants';
import { Facility } from '../types';

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => (
    <div className="group relative glass-card rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2">
        <img src={facility.imageUrl} alt={facility.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-slate-100">
            <h3 className="text-xl font-bold">{facility.name}</h3>
            <p className="mt-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {facility.description}
            </p>
        </div>
    </div>
);

export default function FacilitiesSection() {
    const handleVirtualTourClick = () => {
        document.getElementById('virtual-tour-section')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section id="fasilitas-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Fasilitas Sekolah</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Menyediakan lingkungan belajar yang modern, nyaman, dan lengkap untuk mendukung potensi siswa secara maksimal.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
                    {FACILITIES_DATA.map(facility => (
                        <FacilityCard key={facility.id} facility={facility} />
                    ))}
                </div>
                
                 <div className="mt-16 text-center scroll-reveal">
                    <button onClick={handleVirtualTourClick} className="px-8 py-4 bg-transparent text-accent-dark border-2 border-accent-dark/50 rounded-3xl hover:bg-accent-dark hover:text-slate-900 font-semibold transition-all duration-300 group hover:border-accent-dark mx-auto">
                        Jelajahi dengan Tur Virtual 360°
                    </button>
                </div>
            </div>
        </section>
    );
}