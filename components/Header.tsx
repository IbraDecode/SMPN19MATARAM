
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  href: string;
  label: string;
}

interface DropdownNav {
  label: string;
  dropdown: NavLink[];
}

type NavItem = NavLink | DropdownNav;

const navLinks: NavItem[] = [
  { href: '/#profil-section', label: 'Profil' },
  { 
    label: 'Jelajahi', 
    dropdown: [
      { href: '/guru', label: 'Guru' },
      { href: '/#siswa-section', label: 'Siswa' },
      { href: '/#alumni-section', label: 'Alumni' },
      { href: '/#fasilitas-section', label: 'Fasilitas' },
      { href: '/#virtual-tour-section', label: 'Tur Virtual'},
      { href: '/#kegiatan-section', label: 'Kegiatan' },
      { href: '/#perpustakaan-section', label: 'Perpustakaan' },
      { href: '/#galeri-section', label: 'Galeri' },
      { href: '/#berita-section', label: 'Berita' },
      { href: '/#ppdb-section', label: 'PPDB' },
      { href: '/#elearning-section', label: 'E-Learning' },
      { href: '/#sira-cerdas-section', label: 'Sira Cerdas'},
      { href: '/#faq-section', label: 'FAQ'},
    ]
  },
  { href: '/#kontak-section', label: 'Kontak' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={closeAllMenus} className="text-2xl font-bold gradient-text">
            SMPN 19 Mataram
          </Link>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                {navLinks.map(link => (
                  <li key={link.label} className="relative" ref={'dropdown' in link ? dropdownRef : null}>
                    {'dropdown' in link ? (
                      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="font-semibold p-3 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-1">
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    ) : (
                      <RouterNavLink to={link.href} onClick={closeAllMenus} className="font-semibold p-3 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors">
                        {link.label}
                      </RouterNavLink>
                    )}
                    {'dropdown' in link && link.dropdown && isDropdownOpen && (
                      <div className="absolute top-full mt-2 w-56 glass-card rounded-2xl shadow-lg p-2 origin-top-right animate-in fade-in zoom-in-95">
                         <div className="grid grid-cols-2 gap-1">
                          {link.dropdown.map(item => (
                            <Link key={item.href} to={item.href} onClick={closeAllMenus} className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggle />

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className="md:hidden text-foreground-light dark:text-foreground-dark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-2">
           {navLinks.map((link, index) => (
             'dropdown' in link ? (
                <li key={link.label} className="text-center">
                    <span className="font-bold text-2xl text-accent-dark px-3 py-2">{link.label}</span>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                        {link.dropdown.map(item => (
                            <li key={item.href}>
                                <Link to={item.href} onClick={closeAllMenus} className="font-semibold text-xl p-2">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
             ) : (
                <li key={link.label}>
                    <Link to={link.href} onClick={closeAllMenus} className="font-semibold text-2xl p-3">
                        {link.label}
                    </Link>
                </li>
             )
           ))}
        </ul>
      </div>
    </header>
  );
}
      