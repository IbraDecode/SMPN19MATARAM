import { Teacher, Student, SchoolEvent, Activity, Book, GalleryItem, NewsArticle, Alumnus, FaqItem, Facility, Feature, PpdbTimelineStep, PpdbPath, VirtualTourData, ScheduleEntry, Assignment, LearningMaterial } from '../types';
import { STUDENTS_DATA, EVENTS_DATA, ACTIVITIES_DATA, BOOKS_DATA, GALLERY_DATA, NEWS_DATA, ALUMNI_DATA, PPDB_TIMELINE_DATA, PPDB_PATHS_DATA, PPDB_REQUIREMENTS_DATA, FAQ_DATA, FACILITIES_DATA, FEATURES_DATA, VIRTUAL_TOUR_DATA, SCHEDULE_DATA, ASSIGNMENTS_DATA, LEARNING_MATERIALS_DATA } from '../constants';


const SIMULATED_DELAY = 500; // ms

// --- In-memory data store ---
let teachers: Teacher[] = [
  { id: 1, name: 'Drs. H. Lalu Tisnawan', subject: 'Kepala Sekolah', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Berpengalaman lebih dari 20 tahun dalam dunia pendidikan, berfokus pada inovasi dan pengembangan karakter siswa.', motivation: 'Pendidikan adalah kunci untuk membuka dunia, sebuah paspor untuk kebebasan.' },
  { id: 2, name: 'Dra. Hj. Baiq Tuhfatul Aini, M.Pd.', subject: 'Matematika', photoUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Lulusan S2 Pendidikan Matematika dengan spesialisasi dalam metode pembelajaran interaktif dan teknologi.', motivation: 'Setiap angka memiliki cerita, dan saya membantu siswa untuk membacanya.' },
  { id: 3, name: 'I Komang Suastika, S.Pd.', subject: 'Bahasa Inggris', photoUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Memiliki sertifikasi TESOL dan berpengalaman mengajar di program pertukaran pelajar internasional.', motivation: 'Bahasa membuka jendela baru untuk memahami dunia dan diri sendiri.' },
  { id: 4, name: 'Siti Aminah, S.Kom.', subject: 'Ilmu Komputer & TIK', photoUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Pengembang perangkat lunak yang beralih menjadi pendidik untuk menginspirasi generasi digital berikutnya.', motivation: 'Kode adalah puisi masa depan. Mari kita tulis bersama.' },
  { id: 5, name: 'Ahmad Fauzi, S.Pd.jas', subject: 'Pendidikan Jasmani', photoUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Mantan atlet provinsi yang berdedikasi untuk menanamkan semangat sportivitas dan gaya hidup sehat.', motivation: 'Kemenangan sejati adalah mengalahkan dirimu yang kemarin.' },
  { id: 6, name: 'Rina Wulandari, S.Sn.', subject: 'Seni & Budaya', photoUrl: 'https://images.unsplash.com/photo-1542296791-325b4527f44b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Seniman dan praktisi seni rupa yang aktif dalam komunitas seni lokal dan nasional.', motivation: 'Setiap anak adalah seniman. Masalahnya adalah bagaimana tetap menjadi seniman saat kita dewasa.' },
];
// ---

function simulateFetch<T>(data: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, SIMULATED_DELAY);
  });
}

// --- Teacher CRUD Functions ---
export const getTeachers = () => simulateFetch([...teachers]);

// Fix(services/api.ts line 35): The IIFE syntax was likely causing a parsing error. Rewrote for clarity.
export const addTeacher = (teacher: Omit<Teacher, 'id'>) => {
    const newId = teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1;
    const newTeacher = { ...teacher, id: newId };
    teachers.push(newTeacher);
    return simulateFetch(newTeacher);
};

// Fix(services/api.ts line 46): The IIFE syntax was likely causing a parsing error. Rewrote for clarity.
export const updateTeacher = (updatedTeacher: Teacher) => {
    const index = teachers.findIndex(t => t.id === updatedTeacher.id);
    if (index !== -1) {
        teachers[index] = updatedTeacher;
        return simulateFetch(updatedTeacher);
    }
    throw new Error("Teacher not found");
};

// Fix(services/api.ts line 57): The IIFE syntax was likely causing a parsing error. Rewrote for clarity.
export const deleteTeacher = (teacherId: number) => {
    const initialLength = teachers.length;
    teachers = teachers.filter(t => t.id !== teacherId);
    if (teachers.length === initialLength) {
        throw new Error("Teacher not found");
    }
    return simulateFetch(teacherId);
};
// --- End Teacher CRUD ---


// Export functions to get data, simulating an API call
export const getStudents = () => simulateFetch(STUDENTS_DATA);
export const getEvents = () => simulateFetch(EVENTS_DATA);
export const getActivities = () => simulateFetch(ACTIVITIES_DATA);
export const getBooks = () => simulateFetch(BOOKS_DATA);
export const getGalleryItems = () => simulateFetch(GALLERY_DATA);
export const getNews = () => simulateFetch(NEWS_DATA);
export const getAlumni = () => simulateFetch(ALUMNI_DATA);
export const getPpdbTimeline = () => simulateFetch(PPDB_TIMELINE_DATA);
export const getPpdbPaths = () => simulateFetch(PPDB_PATHS_DATA);
export const getPpdbRequirements = () => simulateFetch(PPDB_REQUIREMENTS_DATA);
export const getFaqs = () => simulateFetch(FAQ_DATA);
export const getFacilities = () => simulateFetch(FACILITIES_DATA);
export const getFeatures = () => simulateFetch(FEATURES_DATA);
export const getVirtualTourData = () => simulateFetch(VIRTUAL_TOUR_DATA);
export const getSchedule = () => simulateFetch(SCHEDULE_DATA);
export const getAssignments = () => simulateFetch(ASSIGNMENTS_DATA);
export const getLearningMaterials = () => simulateFetch(LEARNING_MATERIALS_DATA);