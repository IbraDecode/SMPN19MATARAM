import React, { useEffect } from 'react';
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

type AppContext = {
    handleOpenChat: (query?: string) => void;
};

export default function HomePage() {
  const { handleOpenChat } = useOutletContext<AppContext>();

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