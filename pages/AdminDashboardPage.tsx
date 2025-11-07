import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { getTeachers, addTeacher, updateTeacher, deleteTeacher } from '../services/api';
import { Teacher } from '../types';
import TeacherFormModal from '../components/admin/TeacherFormModal';

export default function AdminDashboardPage() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teacherToEdit, setTeacherToEdit] = useState<Teacher | null>(null);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        setIsLoading(true);
        try {
            const data = await getTeachers();
            setTeachers(data);
        } catch (error) {
            console.error("Failed to fetch teachers:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    const handleOpenModal = (teacher: Teacher | null = null) => {
        setTeacherToEdit(teacher);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTeacherToEdit(null);
    };

    const handleSaveTeacher = async (teacherData: Omit<Teacher, 'id'> & { id?: number }) => {
        try {
            if (teacherData.id) {
                // Update existing teacher
                await updateTeacher(teacherData as Teacher);
            } else {
                // Add new teacher
                await addTeacher(teacherData);
            }
            fetchTeachers(); // Re-fetch all teachers to see the update
            handleCloseModal();
        } catch (error) {
            console.error("Failed to save teacher:", error);
        }
    };
    
    const handleDeleteTeacher = async (teacherId: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data guru ini?")) {
            try {
                await deleteTeacher(teacherId);
                fetchTeachers(); // Re-fetch to update the list
            } catch (error) {
                console.error("Failed to delete teacher:", error);
            }
        }
    };


    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">Selamat datang, {currentUser?.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors self-end sm:self-center"
                    >
                        Logout
                    </button>
                </header>

                <div className="glass-card rounded-3xl p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Manajemen Guru</h2>
                        <button onClick={() => handleOpenModal()} className="px-5 py-2.5 btn-gradient font-bold rounded-xl text-sm btn-glow transform hover:scale-105 transition-transform duration-300">
                            Tambah Guru
                        </button>
                    </div>
                    
                    {isLoading ? (
                        <p className="text-center p-8">Loading data guru...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark">
                                    <tr>
                                        <th className="p-4">Foto</th>
                                        <th className="p-4">Nama</th>
                                        <th className="p-4 hidden md:table-cell">Mata Pelajaran</th>
                                        <th className="p-4">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teachers.map(teacher => (
                                        <tr key={teacher.id} className="border-b border-border-light dark:border-border-dark last:border-b-0">
                                            <td className="p-4">
                                                <img src={teacher.photoUrl} alt={teacher.name} className="w-12 h-12 rounded-full object-cover"/>
                                            </td>
                                            <td className="p-4 font-semibold">{teacher.name}</td>
                                            <td className="p-4 hidden md:table-cell">{teacher.subject}</td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <button onClick={() => handleOpenModal(teacher)} className="p-2 text-sky-500 dark:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors">Edit</button>
                                                    <button onClick={() => handleDeleteTeacher(teacher.id)} className="p-2 text-red-500 dark:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">Hapus</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            
            <TeacherFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTeacher}
                teacherToEdit={teacherToEdit}
            />
        </div>
    );
}
