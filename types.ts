
export interface Teacher {
  id: number;
  name: string;
  subject: string;
  photoUrl: string;
  bio: string;
  motivation: string;
}

export interface ChatMessage {
  sender: 'user' | 'sira';
  text: string;
  isLoading?: boolean;
}

export interface Student {
  id: number;
  name: string;
  achievement: string;
  field: 'Sains' | 'Seni' | 'Olahraga' | 'Akademik';
  photoUrl: string;
  achievementTrail: string;
}

export interface SchoolEvent {
  date: string; // ISO date string
  title: string;
  description: string;
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    category: 'Fiksi' | 'Sains' | 'Sejarah' | 'Biografi';
    coverUrl: string;
    description: string;
}

export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    type: 'Foto' | 'Video' | 'Kenangan Alumni';
    url: string;
    thumbnailUrl: string;
}

export interface NewsArticle {
    id: number;
    title: string;
    summary: string;
    content: string;
    imageUrl: string;
    date: string; // ISO date string
    category: 'Prestasi' | 'Pengumuman' | 'Kegiatan' | 'Akademik';
}

export interface Alumnus {
  id: number;
  name: string;
  graduationYear: number;
  occupation: string;
  photoUrl: string;
  testimonial: string;
}

export type FaqCategory = 'Umum' | 'Akademik' | 'PPDB' | 'Fasilitas';

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    category: FaqCategory;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface PpdbTimelineStep {
    title: string;
    date: string;
    description: string;
}

export interface PpdbPath {
    icon: string;
    title: string;
    description: string;
}

export interface Hotspot {
    id: string;
    position: { x: string; y: string }; // percentage strings
    label: string;
    action: {
        type: 'navigate' | 'info';
        target: string; // scene ID or hotspot ID
    };
    info?: {
        title: string;
        description: string;
    };
}

export interface VirtualTourScene {
    panoramaUrl: string;
    hotspots: Hotspot[];
}

export interface VirtualTourData {
    [sceneId: string]: VirtualTourScene;
}

// E-Learning Types
export interface ScheduleEntry {
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
}

export interface Assignment {
    id: number;
    subject: string;
    title: string;
    dueDate: string; // ISO Date String
}

export interface LearningMaterial {
    id: number;
    subject: string;
    title: string;
    fileUrl: string;
    fileType: 'PDF' | 'DOCX' | 'PPTX';
}
