import React, { useState } from 'react';
import { VIRTUAL_TOUR_DATA } from '../constants';

export default function VirtualTourSection() {
    const [currentSceneId, setCurrentSceneId] = useState('library-entrance');
    const [infoHotspot, setInfoHotspot] = useState<{ title: string; description: string } | null>(null);

    const currentScene = VIRTUAL_TOUR_DATA[currentSceneId];

    const handleHotspotClick = (action: { type: 'navigate' | 'info'; target: string; }) => {
        if (action.type === 'navigate') {
            setCurrentSceneId(action.target);
            setInfoHotspot(null);
        } else {
            const infoData = VIRTUAL_TOUR_DATA[currentSceneId].hotspots.find(h => h.id === action.target)?.info;
            if(infoData) {
                setInfoHotspot(infoData);
            }
        }
    };

    return (
        <section id="virtual-tour-section" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                 <div className="mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Tur Virtual 360°</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                       Jelajahi setiap sudut SMPN 19 Mataram dari kenyamanan rumah Anda. Rasakan atmosfer belajar kami secara virtual.
                    </p>
                </div>
                
                <div className="relative aspect-video rounded-3xl overflow-hidden glass-card shadow-lg scroll-reveal">
                    <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000" style={{backgroundImage: `url('${currentScene.panoramaUrl}')`}}></div>
                    
                    {currentScene.hotspots.map(hotspot => (
                        <button
                            key={hotspot.id}
                            className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-accent-dark transition-all duration-300 animate-pulse hover:animate-none group"
                            style={{ left: hotspot.position.x, top: hotspot.position.y }}
                            onClick={() => handleHotspotClick(hotspot.action)}
                        >
                             {hotspot.action.type === 'navigate' ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             }
                             <span className="absolute bottom-full mb-2 w-max px-3 py-1 bg-black/70 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">{hotspot.label}</span>
                        </button>
                    ))}

                    {infoHotspot && (
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:w-96 p-6 glass-card rounded-2xl text-left border-2 border-accent-dark/50" onClick={() => setInfoHotspot(null)}>
                            <h4 className="text-xl font-bold">{infoHotspot.title}</h4>
                            <p className="mt-2 text-text-secondary-dark">{infoHotspot.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}