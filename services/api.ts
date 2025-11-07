import { Teacher, Student, SchoolEvent, Activity, Book, GalleryItem, NewsArticle, Alumnus, FaqItem, Facility, Feature, PpdbTimelineStep, PpdbPath, VirtualTourData, ScheduleEntry, Assignment, LearningMaterial } from '../types';
import { TEACHERS_DATA, STUDENTS_DATA, EVENTS_DATA, ACTIVITIES_DATA, BOOKS_DATA, GALLERY_DATA, NEWS_DATA, ALUMNI_DATA, PPDB_TIMELINE_DATA, PPDB_PATHS_DATA, PPDB_REQUIREMENTS_DATA, FAQ_DATA, FACILITIES_DATA, FEATURES_DATA, VIRTUAL_TOUR_DATA, SCHEDULE_DATA, ASSIGNMENTS_DATA, LEARNING_MATERIALS_DATA } from '../constants';


const SIMULATED_DELAY = 1200; // ms

function simulateFetch<T>(data: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, SIMULATED_DELAY);
  });
}

// Export functions to get data, simulating an API call
export const getTeachers = () => simulateFetch(TEACHERS_DATA);
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
