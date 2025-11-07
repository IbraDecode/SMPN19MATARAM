import React, { useState } from 'react';

const SocialButton: React.FC<{ href: string; children: React.ReactNode, label: string }> = ({ href, children, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
        className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent-light dark:text-accent-dark hover:text-white dark:hover:text-slate-900 hover:bg-accent-light dark:hover:bg-accent-dark transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);


export default function ContactSection() {
    const [formState, setFormState] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => {
            setFormState('sent');
        }, 2000);
    }

    return (
        <section id="kontak-section" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 scroll-reveal">
                    <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Kontak & Lokasi</h2>
                    <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                        Kami siap terhubung dengan Anda. Kunjungi kami atau kirimkan pesan melalui formulir di bawah ini.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Map and Info */}
                    <div className="space-y-8 scroll-reveal">
                        <div className="aspect-video rounded-3xl overflow-hidden glass-card shadow-lg">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.170243194093!2d116.0863223147833!3d-8.57962399383803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf61ffffffff%3A0x1333917a2a5d351!2sSMP%20Negeri%2019%20Mataram!5e0!3m2!1sen!2sid!4v1689324021234!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                className="dark:grayscale dark:invert"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                         <div className="glass-card rounded-3xl p-6">
                            <h3 className="text-2xl font-bold mb-4 gradient-text">Alamat & Kontak</h3>
                            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">Jl. Pendidikan No. 19, Dasan Agung, <br/>Kec. Mataram, Kota Mataram, Nusa Tenggara Barat.</p>
                             <div className="mt-4 space-y-2">
                                <p className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-light dark:text-accent-dark" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> (0370) 612345</p>
                                <p className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-light dark:text-accent-dark" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg> info@smpn19mataram.sch.id</p>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <SocialButton href="#" label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></SocialButton>
                            <SocialButton href="#" label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></SocialButton>
                            <SocialButton href="#" label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></SocialButton>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="glass-card rounded-3xl p-8 scroll-reveal">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Kirim Pesan</h3>
                        {formState === 'sent' ? (
                             <div className="text-center py-10">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-light/20 dark:bg-accent-dark/20 flex items-center justify-center text-accent-light dark:text-accent-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h4 className="text-xl font-bold">Pesan Terkirim!</h4>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2">Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
                                <button onClick={() => setFormState('idle')} className="mt-6 px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-3xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300">
                                    Kirim Pesan Lain
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Nama Lengkap</label>
                                    <input type="text" id="name" required className="w-full contact-input rounded-3xl px-4 py-3 outline-none"/>
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Alamat Email</label>
                                    <input type="email" id="email" required className="w-full contact-input rounded-3xl px-4 py-3 outline-none"/>
                                </div>
                                 <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Pesan Anda</label>
                                    <textarea id="message" rows={5} required className="w-full contact-input rounded-3xl px-4 py-3 outline-none resize-none"></textarea>
                                </div>
                                <div>
                                    <button type="submit" disabled={formState === 'sending'}
                                        className="w-full px-8 py-4 btn-gradient font-bold rounded-3xl text-lg btn-glow transform hover:scale-105 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-wait disabled:shadow-none">
                                        {formState === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}