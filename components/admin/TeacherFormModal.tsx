import React, { useState, useEffect } from 'react';
import { Teacher } from '../../types';

interface TeacherFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (teacher: Omit<Teacher, 'id'> & { id?: number }) => void;
    teacherToEdit: Teacher | null;
}

const initialFormState: Omit<Teacher, 'id'> = {
    name: '',
    subject: '',
    photoUrl: '',
    bio: '',
    motivation: ''
};

export default function TeacherFormModal({ isOpen, onClose, onSave, teacherToEdit }: TeacherFormModalProps) {
    const [formData, setFormData] = useState(initialFormState);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (teacherToEdit) {
            setFormData(teacherToEdit);
        } else {
            setFormData(initialFormState);
        }
    }, [teacherToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        await onSave(formData);
        setIsSaving(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="glass-card w-full max-w-2xl max-h-[90vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
                    <h2 className="text-xl font-bold">{teacherToEdit ? 'Edit Guru' : 'Tambah Guru Baru'}</h2>
                    <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </header>

                <form onSubmit={handleSubmit} className="flex-1 p-6 overflow-y-auto space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Nama Lengkap</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full contact-input rounded-xl px-4 py-2.5 outline-none"/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Mata Pelajaran / Jabatan</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full contact-input rounded-xl px-4 py-2.5 outline-none"/>
                    </div>
                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">URL Foto</label>
                        <input type="url" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleChange} required className="w-full contact-input rounded-xl px-4 py-2.5 outline-none"/>
                    </div>
                     <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Bio Singkat</label>
                        <textarea id="bio" name="bio" rows={3} value={formData.bio} onChange={handleChange} required className="w-full contact-input rounded-xl px-4 py-2.5 outline-none resize-none"></textarea>
                    </div>
                     <div>
                        <label htmlFor="motivation" className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-2">Kutipan Motivasi</label>
                        <textarea id="motivation" name="motivation" rows={2} value={formData.motivation} onChange={handleChange} required className="w-full contact-input rounded-xl px-4 py-2.5 outline-none resize-none"></textarea>
                    </div>
                </form>

                <footer className="p-4 border-t border-border-light dark:border-border-dark flex justify-end gap-4">
                    <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                        Batal
                    </button>
                    <button type="submit" onClick={handleSubmit} disabled={isSaving} className="px-5 py-2.5 btn-gradient font-bold rounded-xl btn-glow transform hover:scale-105 transition-transform duration-300 disabled:opacity-50">
                        {isSaving ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </footer>
            </div>
        </div>
    );
}
