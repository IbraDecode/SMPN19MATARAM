import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Gagal untuk login. Periksa kembali email dan password Anda.');
            console.error(err);
        }

        setLoading(false);
    };
    
    // Jika sudah login, redirect ke dashboard
    React.useEffect(() => {
      if(currentUser) {
        navigate('/admin/dashboard');
      }
    }, [currentUser, navigate]);


    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold gradient-text">Admin Login</h1>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">SMPN 19 Mataram</p>
                </div>
                <div className="glass-card rounded-3xl p-8 shadow-lg">
                    {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-center">{error}</div>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Alamat Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="w-full contact-input rounded-3xl px-4 py-3 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" a-label="password" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                className="w-full contact-input rounded-3xl px-4 py-3 outline-none"
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={loading}
                                className="w-full px-8 py-4 btn-gradient font-bold rounded-3xl text-lg btn-glow transform hover:scale-105 transition-all duration-300 disabled:opacity-50">
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}