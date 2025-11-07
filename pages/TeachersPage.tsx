import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TeachersSection from '../components/TeachersSection';
import { TeacherCardShimmer } from '../components/Shimmer';
import { getTeachers } from '../services/api';
import { Teacher } from '../types';

type AppContext = {
    handleOpenChat: (query?: string) => void;
};

export default function TeachersPage() {
    const { handleOpenChat } = useOutletContext<AppContext>();
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            setIsLoading(true);
            const data = await getTeachers();
            setTeachers(data);
            setIsLoading(false);
        };

        fetchTeachers();
    }, []);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return (
            <div className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Guru & Staf Pengajar</h2>
                        <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                            Memuat data para pendidik berdedikasi...
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <TeacherCardShimmer key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <TeachersSection 
            teachers={teachers} 
            onAskSira={() => handleOpenChat('Tolong berikan informasi tentang guru-guru di SMPN 19 Mataram.')}
        />
    );
}
