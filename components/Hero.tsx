import React from 'react';

export default function Hero() {
  const scrollToProfile = () => {
    document.getElementById('profil-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4">
      <div id="aurora-background" className="absolute inset-0"></div>
      <div className="absolute inset-0 bg-grid-slate-700/[0.05] [mask-image:linear-gradient(0deg,rgba(255,255,255,0),#fff)]"></div>

      <div className="relative z-10 p-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm text-accent-dark bg-accent-dark/10 rounded-full border border-accent-dark/20">
            Selamat Datang di Masa Depan Pendidikan
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter gradient-text">
          <span className="font-light">Membentuk Generasi</span><br/>
          Cerdas & Kreatif
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary-dark max-w-2xl mx-auto">
          Menjadi pusat keunggulan pendidikan yang mengintegrasikan teknologi, inovasi, dan karakter untuk menciptakan pemimpin masa depan.
        </p>
        <button onClick={scrollToProfile} className="mt-12 px-8 py-4 btn-gradient font-bold rounded-3xl text-lg btn-glow transform hover:scale-105 transition-transform duration-300">
          Jelajahi Sekolah
        </button>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <svg className="w-8 h-8 text-slate-100/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </section>
  );
}