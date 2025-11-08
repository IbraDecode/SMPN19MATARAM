# SMPN 19 Mataram - Official Website Documentation

## 1. Introduction

This is the official website for SMPN 19 Mataram, designed to be an ultra-modern, interactive, and cinematic digital gateway for students, parents, and the public. The project's core is to provide a world-class, warm, and futuristic digital experience that reflects the school's vision and values. A key feature is the integrated AI assistant, "Sira," powered by the Google Gemini API, which serves as a friendly and intelligent guide for users.

## 2. Core Features

- **Modern & Responsive UI/UX**: Built with Tailwind CSS, the UI is fully responsive, featuring a sleek "glassmorphism" design, smooth animations, and a user-friendly layout that works across all devices.
- **AI Assistant (Sira)**: An integrated chat assistant that can answer questions about the school, its staff, facilities, and academic programs. Sira is context-aware, leveraging a comprehensive dataset about the school.
- **AI-Powered Creative Tools**: The "Sira Cerdas" section provides creative tools powered by Gemini, such as a slogan generator, a study planner, and a content assistant for the school's wall magazine.
- **AI-Generated Audio Narration**: In the "Prestigious Students" section, users can listen to AI-generated cinematic narrations about student achievements, created using Gemini's text-to-speech capabilities.
- **Interactive Sections**: The website is divided into multiple engaging sections:
    - **Hero**: A cinematic full-screen intro.
    - **Profil Sekolah**: History, vision, mission, and a video profile.
    - **Guru & Staf**: An interactive 3D card-flip view of the teachers.
    - **Siswa Berprestasi**: Showcasing top students with AI narration.
    - **Fasilitas & Tur Virtual 360°**: An interactive panorama tour of the school's key facilities.
    - **E-Learning Portal**: A centralized hub for schedules, assignments, and learning materials.
    - **Berita & Galeri**: Dynamic sections for the latest news and media.
    - **PPDB (Admissions)**: A clear, step-by-step guide to the student admission process.
    - **Alumni**: Spotlighting the success stories of former students.
- **Dark/Light Mode**: A seamless theme toggle for user preference.
- **SEO & Accessibility**: Optimized for search engines with proper meta tags, semantic HTML, and ARIA attributes for accessibility.
- **Simulated API**: Utilizes a mock API service to simulate asynchronous data fetching, making the frontend robust and ready for a real backend.

## 3. Technology Stack

- **Frontend Framework**: [React](https://react.dev/) (v19) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [Google Gemini API (`@google/genai`)](https://ai.google.dev/docs)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6)
- **Deployment**: The application is built as a static site and can be deployed on any modern web hosting service (e.g., Vercel, Netlify, Firebase Hosting).

## 4. Project Structure

The project is organized into a logical and scalable structure.

```
/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable React components (Header, Footer, Cards, etc.)
│   ├── pages/               # Page-level components (HomePage, TeachersPage)
│   ├── services/            # API calls and Gemini service logic
│   │   ├── api.ts           # Simulated API for fetching school data
│   │   └── geminiService.ts # Core logic for all Gemini API interactions
│   ├── types.ts             # TypeScript type definitions for all data structures
│   ├── constants.ts         # Centralized static data (teachers, events, etc.)
│   ├── router.tsx           # Application routing configuration
│   └── index.tsx            # Main application entry point
├── index.html               # Main HTML file with Tailwind CSS config
├── metadata.json            # Project metadata
└── docs/
    └── README.md            # This documentation file
```

## 5. Setup and Local Development

To run this project locally, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install Dependencies**
    Assuming you have Node.js and npm installed:
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    The application requires a Google Gemini API key. Create a `.env` file in the project root and add your key:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    The application is configured to load this variable automatically.

4.  **Run the Development Server**
    ```bash
    npm start
    ```
    This will start the development server, and you can view the application in your browser, typically at `http://localhost:3000`.

## 6. Key Components Deep Dive

### `services/geminiService.ts`

This is the brain of the AI integration. It abstracts all interactions with the Gemini API into clean, reusable functions.

-   `getAiSiraResponse(query)`: Powers the main Sira chatbot. It dynamically constructs a detailed `systemInstruction` by fetching the latest school data (teachers, alumni, schedule) from the simulated API. This ensures Sira's responses are always based on the most current context.
-   `getAiCreativeResponse(tool, theme)`: Manages the "Sira Cerdas" creative tools. It uses different system instructions based on the selected tool (`yel-yel`, `mading`, `planner`) to generate tailored, creative content.
-   `getAiStudentNarrationText(student)`: Creates inspiring, cinematic narrations for the "Prestigious Students" section.
-   `getAiSiraSpeech(text)`: Converts text into speech using the Gemini text-to-speech model. It returns a base64-encoded audio string.
-   **Audio Processing Helpers**: Includes `decode` and `decodeAudioData` functions to correctly process the raw PCM audio data returned by the TTS API for playback in the browser.

### `components/AiSiraChat.tsx`

This component provides the full-screen chat interface for Sira.

-   **State Management**: Manages the conversation history, user input, and loading states.
-   **Markdown Renderer**: Includes a custom, lightweight Markdown renderer to format Sira's responses beautifully (bold, italics, lists).
-   **Initial Prompts**: The chat window can be opened with a pre-filled prompt from various sections of the website, creating a seamless user experience.

### `components/PrestigiousStudentsSection.tsx`

This section showcases a multi-step AI workflow:

1.  When a user clicks "Listen to Narration," it first calls `getAiStudentNarrationText()` to generate an inspiring story about the student.
2.  It then takes the generated text and passes it to `getAiSiraSpeech()` to get the audio data.
3.  Finally, it uses the Web Audio API (`AudioContext`) to decode and play the raw audio stream, providing a rich, interactive experience.

## 7. Future Enhancements

-   **Real Backend Integration**: Replace the simulated `api.ts` with a real backend service (e.g., Node.js/Express, Firebase) to manage and serve school data from a database.
-   **User Authentication**: Implement a login system for students and teachers to access personalized content within the E-Learning Portal.
-   **CMS Integration**: Connect the website to a Headless CMS (like Strapi or Sanity) to allow school administrators to easily update content (news, events, teacher profiles) without touching the code.
-   **Advanced AI Features**:
    -   Implement Gemini's function calling for more interactive tasks (e.g., booking an appointment with a teacher).
    -   Use multimodal input (image uploads) for Sira to answer questions about pictures.
    -   Expand the E-Learning portal with AI-powered tutoring or assignment grading assistance.