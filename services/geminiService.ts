import { GoogleGenAI, Modality } from "@google/genai";
import { 
    getTeachers,
    getAlumni,
    getSchedule,
    getAssignments
} from './api';
import { Student } from '../types';

const SCHOOL_CONTEXT = `
Nama Sekolah: SMPN 19 Mataram
Alamat: Jl. Pendidikan No. 19, Dasan Agung, Kec. Mataram, Kota Mataram, Nusa Tenggara Barat.
NPSN: 50203333
Akreditasi: A
Visi: Menjadi pusat keunggulan pendidikan yang mengintegrasikan teknologi, inovasi, dan karakter untuk menciptakan pemimpin masa depan.
Misi: Mewujudkan generasi cerdas, kreatif, berakhlak mulia, dan berwawasan global yang siap menghadapi tangan masa depan.
Sejarah Singkat: Didirikan tahun 1983, menjadi sekolah mandiri tahun 1985, meraih predikat Sekolah Standar Nasional (SSN) tahun 2005.
AI Asisten: Sira.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// Function to get the full context asynchronously
async function getFullContext() {
    const [
        TEACHERS_DATA, 
        ALUMNI_DATA, 
        SCHEDULE_DATA, 
        ASSIGNMENTS_DATA
    ] = await Promise.all([
        getTeachers(), 
        getAlumni(),
        getSchedule(),
        getAssignments()
    ]);

    return `
Anda adalah Sira, asisten AI yang ramah, cerdas, dan sangat membantu untuk SMPN 19 Mataram.
Identitas Anda: Anda dikembangkan oleh Ibra Decode (Ibra Ramdan), seorang siswa dari SMPN 19 Mataram. Ini adalah sebuah proyek inovatif untuk sekolah.
Tugas Anda: Jawab pertanyaan tentang sekolah berdasarkan data dan konteks yang diberikan. Selalu jawab dalam bahasa Indonesia yang sopan, jelas, dan profesional. Gunakan Markdown untuk pemformatan (seperti daftar, tebal, miring) agar mudah dibaca.

# Data Kontekstual Sekolah
${SCHOOL_CONTEXT}

## Guru dan Staf: Terdapat ${TEACHERS_DATA.length} guru utama. Kenali mereka, termasuk Kepala Sekolah Drs. H. Lalu Tisnawan.
## Siswa Berprestasi: Kenali siswa berprestasi seperti Budi Hartono (OSN), Citra Lestari (Puisi), dll.
## Alumni: Kenali alumni sukses seperti Dr. Rina Suryani (Peneliti) dan Andi Wijaya (CEO Start-up).
## PPDB: Jalur pendaftaran meliputi Zonasi, Afirmasi, Prestasi, dan Perpindahan Tugas. Persyaratan utama adalah ijazah SD, usia maks 15, dan KK.
## Fasilitas: Sekolah memiliki fasilitas modern seperti Lab Komputer, Perpustakaan Digital, Lab IPA, dan lainnya. Terdapat fitur Tur Virtual 360 untuk eksplorasi.
## E-Learning: Siswa dapat mengakses jadwal pelajaran, daftar tugas, dan materi pembelajaran melalui Portal E-Learning.
## FAQ: Anda memiliki akses ke data FAQ untuk menjawab pertanyaan umum secara konsisten.
## Data Lengkap (JSON untuk referensi Anda):
- Teachers: ${JSON.stringify(TEACHERS_DATA.map(t => ({ name: t.name, subject: t.subject })))}
- Alumni: ${JSON.stringify(ALUMNI_DATA.map(a => ({ name: a.name, occupation: a.occupation, graduationYear: a.graduationYear })))}
- Schedule: ${JSON.stringify(SCHEDULE_DATA)}
- Assignments: ${JSON.stringify(ASSIGNMENTS_DATA.map(a => ({ subject: a.subject, title: a.title, dueDate: a.dueDate })))}
`;
}


export async function getAiSiraResponse(query: string): Promise<string> {
  try {
    const model = "gemini-2.5-flash"; 
    const fullContext = await getFullContext();
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `Pertanyaan Pengguna: "${query}"`,
      config: {
        systemInstruction: fullContext,
      }
    });
    
    return response.text;

  } catch (error) {
    console.error("Error getting response from AI Sira:", error);
    return "Maaf, sepertinya terjadi kesalahan saat menghubungi Sira. Silakan coba lagi nanti.";
  }
}


export async function getAiCreativeResponse(tool: 'yel-yel' | 'mading' | 'planner', theme: string): Promise<string> {
  let systemInstruction = '';

  switch (tool) {
    case 'yel-yel':
      systemInstruction = `Anda adalah Sira, AI yang kreatif dan penuh semangat. Buatkan sebuah yel-yel yang singkat, energik, dan mudah dihafal untuk siswa SMP dengan tema: "${theme}". Gunakan kata-kata yang membangkitkan semangat dan positif.`;
      break;
    case 'mading':
      systemInstruction = `Anda adalah Sira, seorang editor majalah dinding sekolah yang cerdas. Berikan 3 ide konten menarik dan singkat (bisa berupa judul artikel, kutipan, atau puisi pendek) untuk majalah dinding dengan tema: "${theme}".`;
      break;
    case 'planner':
      systemInstruction = `Anda adalah Sira, seorang konselor akademis yang suportif. Buatkan contoh rencana belajar mingguan sederhana dalam format Markdown (gunakan list) untuk seorang siswa SMP yang ingin fokus pada mata pelajaran: "${theme}". Berikan juga satu tips belajar singkat.`;
      break;
  }
  
  try {
    const model = "gemini-2.5-flash"; 
    const response = await ai.models.generateContent({
      model: model,
      contents: "Buatkan sekarang.",
      config: {
        systemInstruction,
        temperature: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error getting creative response from AI Sira:", error);
    return "Maaf, terjadi kesalahan saat menghasilkan konten kreatif. Coba lagi.";
  }
}

export async function getAiStudentNarrationText(student: Student): Promise<string> {
    try {
        const model = "gemini-2.5-flash";
        const systemInstruction = `Anda adalah Sira, AI pencerita yang antusias untuk SMPN 19 Mataram. 
        Tugas Anda adalah membuat narasi singkat (sekitar 2-3 kalimat), inspiratif, dan bergaya sinematik tentang prestasi seorang siswa.
        Gunakan bahasa yang positif dan membangkitkan semangat.
        Fokus pada perjuangan dan pencapaian siswa berdasarkan data yang diberikan.`;
        
        const prompt = `Buatkan narasi tentang ${student.name}, yang meraih prestasi "${student.achievement}". 
        Berikut adalah detail jejak prestasinya: "${student.achievementTrail}".`;

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error getting narration text from AI Sira:", error);
        return `Ini adalah kisah luar biasa tentang ${student.name}, yang berhasil meraih ${student.achievement}. Sebuah pencapaian yang membanggakan!`; // Fallback text
    }
}

export async function getAiSiraSpeech(text: string): Promise<string | null> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: `Say cheerfully: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        return base64Audio || null;
    } catch (error) {
        console.error("Error getting speech from AI Sira:", error);
        return null;
    }
}

// Helper functions for audio processing
export function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
