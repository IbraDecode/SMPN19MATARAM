import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import ProfileSection from '../components/ProfileSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PrestigiousStudentsSection from '../components/PrestigiousStudentsSection';
import FacilitiesSection from '../components/FacilitiesSection';
import ActivitiesSection from '../components/ActivitiesSection';
import DigitalLibrarySection from '../components/DigitalLibrarySection';
import GallerySection from '../components/GallerySection';
import NewsSection from '../components/NewsSection';
import AdmissionSection from '../components/AdmissionSection';
import AlumniSection from '../components/AlumniSection';
import FaqSection from '../components/FaqSection';
import VirtualTourSection from '../components/VirtualTourSection';
import ElearningSection from '../components/ElearningSection';
import SiraCerdasSection from '../components/SiraCerdasSection';
import ContactSection from '../components/ContactSection';
import TeachersSection from '../components/TeachersSection';
import { getTeachers } from '../services/api';
import { Teacher } from '../types';
import { TeacherCardShimmer } from '../components/Shimmer';

type AppContext = {
    handleOpenChat: (query?: string) => void;
};

export default function HomePage() {
  const { handleOpenChat } = useOutletContext<AppContext>();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
        setIsLoadingTeachers(true);
        // Use a shorter delay for homepage preview
        const data = await getTeachers();
        setTeachers(data);
        setIsLoadingTeachers(false);
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Special handling for timeline items
          if (entry.target.classList.contains('timeline-item')) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.add('active');
          }
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.scroll-reveal, .timeline-item');
    reveals.forEach(el => observer.observe(el));

    return () => reveals.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <Hero />
      <ProfileSection />
      <WhyChooseUsSection />
      
      {isLoadingTeachers ? (
          <section id="guru-section-loading" className="py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                      <div className="h-12 w-3/4 mx-auto rounded-lg bg-slate-200/50 dark:bg-slate-800/50 animate-pulse mb-4"></div>
                      <div className="h-6 w-1/2 mx-auto rounded-lg bg-slate-200/50 dark:bg-slate-800/50 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {Array.from({ length: 6 }).map((_, index) => (
                          <TeacherCardShimmer key={index} />
                      ))}
                  </div>
              </div>
          </section>
      ) : (
          <TeachersSection 
              teachers={teachers.slice(0, 6)} 
              onAskSira={() => handleOpenChat('Tanya tentang guru')} 
              showViewAllButton={true} 
          />
      )}
      
      <PrestigiousStudentsSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <DigitalLibrarySection onAskSira={() => handleOpenChat('Rekomendasikan buku fiksi yang menarik untuk saya baca.')} />
      <GallerySection />
      <NewsSection onAskSira={handleOpenChat} />
      <AdmissionSection onAskSira={() => handleOpenChat("Jelaskan alur pendaftaran PPDB di SMPN 19 Mataram.")} />
      <AlumniSection onAskSira={() => handleOpenChat("Ceritakan tentang beberapa alumni sukses dari SMPN 19 Mataram.")} />
      <FaqSection />
      <VirtualTourSection />
      <ElearningSection onAskSira={() => handleOpenChat("Apa saja tugas yang harus saya kerjakan minggu ini?")} />
      <SiraCerdasSection />
      <ContactSection />
    </>
  );
}