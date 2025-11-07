import React from 'react';

const quickLinks = [
  { href: '#profil-section', label: 'Profil Sekolah' },
  { href: '#fasilitas-section', label: 'Fasilitas' },
  { href: '#ppdb-section', label: 'PPDB' },
  { href: '#berita-section', label: 'Berita' },
  { href: '#kontak-section', label: 'Kontak' },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-slate-200/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold gradient-text">SMPN 19 Mataram</h3>
            <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Jl. Pendidikan No. 19, Dasan Agung, Kec. Mataram, Kota Mataram, Nusa Tenggara Barat.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground-light dark:text-foreground-dark">Tautan Cepat</h4>
            <ul className="mt-2 space-y-1">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-accent-dark transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground-light dark:text-foreground-dark">Hubungi Kami</h4>
            <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Email: info@smpn19mataram.sch.id
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Telp: (0370) 612345
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border-light dark:border-border-dark pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <p className="font-semibold">Dikembangkan oleh Ibra Decode. Siswa SMPN 19 Mataram.</p>
          <a href="#top" onClick={(e) => scrollTo(e, '#top')} className="mt-4 sm:mt-0 hover:text-accent-dark transition-colors">
            Kembali ke Atas &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}