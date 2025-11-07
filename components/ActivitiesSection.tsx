import React, { useState } from 'react';
import { EVENTS_DATA, ACTIVITIES_DATA } from '../constants';
import { SchoolEvent, Activity } from '../types';

const EventModal: React.FC<{ event: SchoolEvent | null; onClose: () => void }> = ({ event, onClose }) => {
  if (!event) return null;

  const handleAddToCalendar = () => {
    // This is a simplified example. A real implementation would generate an .ics file or use a library.
    alert(`Menambahkan "${event.title}" ke kalender Anda (simulasi).`);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="glass-card w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-light/50 dark:border-accent-dark/50" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <span className="text-sm font-semibold text-accent-light dark:text-accent-dark">{new Date(event.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <h2 className="text-3xl font-bold mt-1">{event.title}</h2>
          <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark">{event.description}</p>
          <div className="mt-6">
            <button onClick={handleAddToCalendar} className="w-full px-6 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-slate-900 rounded-3xl font-bold hover:scale-105 transition-transform duration-300 btn-glow">
              Tambah ke Kalender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
    <div className="group relative glass-card rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2">
        <img src={activity.imageUrl} alt={activity.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="p-6">
            <h4 className="text-xl font-bold">{activity.name}</h4>
            <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark h-20 overflow-hidden">{activity.description}</p>
        </div>
    </div>
);

export default function ActivitiesSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthName = currentDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

  const changeMonth = (offset: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  const eventsForMonth = EVENTS_DATA.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === currentDate.getFullYear() && eventDate.getMonth() === currentDate.getMonth();
  });

  return (
    <section id="kegiatan-section" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Kegiatan & Agenda</h2>
          <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
            Ikuti berbagai kegiatan ekstrakurikuler menarik dan jangan lewatkan setiap momen penting dalam kalender sekolah kami.
          </p>
        </div>

        <div className="mb-24">
            <div className="text-center mb-12 scroll-reveal">
                <h3 className="text-3xl font-bold gradient-text">Ekstrakurikuler Unggulan</h3>
                <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">Temukan dan kembangkan bakatmu di luar kelas.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal">
                {ACTIVITIES_DATA.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>
        </div>

        <div className="text-center mb-12 scroll-reveal">
            <h3 className="text-3xl font-bold gradient-text">Agenda Sekolah</h3>
            <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">Catat tanggal-tanggal penting berikut.</p>
        </div>
        <div className="glass-card rounded-3xl p-6 shadow-lg scroll-reveal">
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <h3 className="text-2xl font-bold text-center">{monthName}</h3>
            <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => <div key={day}>{day}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-2">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
            {Array.from({ length: daysInMonth }).map((_, day) => {
              const date = day + 1;
              const event = eventsForMonth.find(e => new Date(e.date).getDate() === date);
              return (
                <div key={date} 
                     onClick={() => event && setSelectedEvent(event)}
                     className={`aspect-square p-2 flex items-center justify-center rounded-full text-sm transition-colors ${event ? 'bg-accent-light/20 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark font-bold cursor-pointer hover:bg-accent-light/40 dark:hover:bg-accent-dark/40' : ''}`}>
                  {date}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}