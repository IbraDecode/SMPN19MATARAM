import { Teacher, Student, SchoolEvent, Activity, Book, GalleryItem, NewsArticle, Alumnus, FaqItem, Facility, Feature, PpdbTimelineStep, PpdbPath, VirtualTourData, ScheduleEntry, Assignment, LearningMaterial } from './types';

export const TEACHERS_DATA: Teacher[] = [
  { id: 1, name: 'Drs. H. Lalu Tisnawan', subject: 'Kepala Sekolah', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Berpengalaman lebih dari 20 tahun dalam dunia pendidikan, berfokus pada inovasi dan pengembangan karakter siswa.', motivation: 'Pendidikan adalah kunci untuk membuka dunia, sebuah paspor untuk kebebasan.' },
  { id: 2, name: 'Dra. Hj. Baiq Tuhfatul Aini, M.Pd.', subject: 'Matematika', photoUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Lulusan S2 Pendidikan Matematika dengan spesialisasi dalam metode pembelajaran interaktif dan teknologi.', motivation: 'Setiap angka memiliki cerita, dan saya membantu siswa untuk membacanya.' },
  { id: 3, name: 'I Komang Suastika, S.Pd.', subject: 'Bahasa Inggris', photoUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Memiliki sertifikasi TESOL dan berpengalaman mengajar di program pertukaran pelajar internasional.', motivation: 'Bahasa membuka jendela baru untuk memahami dunia dan diri sendiri.' },
  { id: 4, name: 'Siti Aminah, S.Kom.', subject: 'Ilmu Komputer & TIK', photoUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Pengembang perangkat lunak yang beralih menjadi pendidik untuk menginspirasi generasi digital berikutnya.', motivation: 'Kode adalah puisi masa depan. Mari kita tulis bersama.' },
  { id: 5, name: 'Ahmad Fauzi, S.Pd.jas', subject: 'Pendidikan Jasmani', photoUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Mantan atlet provinsi yang berdedikasi untuk menanamkan semangat sportivitas dan gaya hidup sehat.', motivation: 'Kemenangan sejati adalah mengalahkan dirimu yang kemarin.' },
  { id: 6, name: 'Rina Wulandari, S.Sn.', subject: 'Seni & Budaya', photoUrl: 'https://images.unsplash.com/photo-1542296791-325b4527f44b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', bio: 'Seniman dan praktisi seni rupa yang aktif dalam komunitas seni lokal dan nasional.', motivation: 'Setiap anak adalah seniman. Masalahnya adalah bagaimana tetap menjadi seniman saat kita dewasa.' },
];

export const STUDENTS_DATA: Student[] = [
    { id: 1, name: 'Budi Hartono', achievement: 'Juara 1 Olimpiade Sains Nasional', field: 'Sains', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', achievementTrail: 'Budi secara konsisten menunjukkan bakat luar biasa di bidang Fisika dan Kimia. Perjalanannya dimulai dengan memenangkan kompetisi tingkat kota, provinsi, hingga akhirnya meraih medali emas di tingkat nasional, mengalahkan ratusan peserta dari seluruh Indonesia.' },
    { id: 2, name: 'Citra Lestari', achievement: 'Juara 1 Lomba Cipta Puisi FLS2N', field: 'Seni', photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', achievementTrail: 'Citra dikenal dengan kemampuannya merangkai kata menjadi puisi yang indah dan menyentuh. Karyanya yang berjudul "Senja di Ufuk Mataram" berhasil memukau dewan juri dan memberikannya penghargaan tertinggi di Festival Lomba Seni Siswa Nasional (FLS2N).' },
    { id: 3, name: 'Eka Saputra', achievement: 'Medali Emas Kejuaraan Karate O2SN', field: 'Olahraga', photoUrl: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', achievementTrail: 'Dengan disiplin dan latihan keras, Eka berhasil menjadi yang terbaik di cabang Karate pada Olimpiade Olahraga Siswa Nasional (O2SN). Teknik dan staminanya yang unggul membawanya ke podium juara, mengharumkan nama sekolah.' },
    { id: 4, name: 'Dewi Anggraini', achievement: 'Juara 1 Debat Bahasa Inggris Tingkat Provinsi', field: 'Akademik', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', achievementTrail: 'Kemampuan Dewi dalam berargumentasi dan penguasaan Bahasa Inggris yang fasih membuatnya menjadi debater yang disegani. Bersama timnya, ia berhasil menyisihkan puluhan sekolah lain dan meraih gelar juara debat tingkat provinsi.' },
];

export const EVENTS_DATA: SchoolEvent[] = [
    { date: '2024-07-15', title: 'Hari Pertama Sekolah & MPLS', description: 'Penyambutan siswa baru dan Masa Pengenalan Lingkungan Sekolah.' },
    { date: '2024-08-17', title: 'Upacara HUT Kemerdekaan RI', description: 'Upacara bendera dan lomba-lomba kemerdekaan.' },
    { date: '2024-09-22', title: 'Penilaian Tengah Semester (PTS)', description: 'Pelaksanaan ujian tengah semester ganjil.' },
    { date: '2024-10-28', title: 'Peringatan Sumpah Pemuda', description: 'Kegiatan Bulan Bahasa dan Sastra.' },
    { date: '2024-12-16', title: 'Penilaian Akhir Semester (PAS)', description: 'Pelaksanaan ujian akhir semester ganjil.' },
    { date: '2024-12-21', title: 'Penerimaan Rapor Semester Ganjil', description: 'Pembagian hasil belajar siswa semester ganjil.' },
];

export const ACTIVITIES_DATA: Activity[] = [
    { id: 1, name: 'Pramuka', description: 'Membentuk karakter mandiri, disiplin, dan cinta alam melalui kegiatan kepramukaan yang seru dan menantang.', imageUrl: 'https://images.unsplash.com/photo-1605333246368-80a93a180f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Paskibra', description: 'Melatih kedisiplinan, kepemimpinan, dan cinta tanah air melalui baris-berbaris dan tata upacara bendera.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661962842419-5a5071131a31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Klub Robotik', description: 'Mengembangkan kreativitas dan logika dalam merancang, membangun, dan memprogram robot untuk kompetisi.', imageUrl: 'https://images.unsplash.com/photo-1678942245347-4d7a3178c734?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Klub Musik & Vokal', description: 'Mewadahi bakat siswa di bidang musik, mulai dari bermain alat musik modern hingga seni olah vokal.', imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const BOOKS_DATA: Book[] = [
    { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', category: 'Fiksi', coverUrl: 'https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg', description: 'Kisah inspiratif tentang perjuangan 10 anak dari keluarga miskin yang bersekolah di sebuah sekolah Muhammadiyah di Belitung.' },
    { id: 2, title: 'Cosmos', author: 'Carl Sagan', category: 'Sains', coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348274039l/55030.jpg', description: 'Sebuah perjalanan epik melintasi alam semesta, menjelajahi asal-usul kehidupan, kosmos, dan tempat kita di dalamnya.' },
    { id: 3, title: 'Sapiens: Riwayat Singkat Umat Manusia', author: 'Yuval Noah Harari', category: 'Sejarah', coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg', description: 'Menjelajahi sejarah umat manusia dari Zaman Batu hingga Zaman Silikon, dan bagaimana Homo Sapiens menjadi spesies dominan.' },
    { id: 4, title: 'Habis Gelap Terbitlah Terang', author: 'R.A. Kartini', category: 'Biografi', coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Habis_Gelap_Terbitlah_Terang_1922.jpg/220px-Habis_Gelap_Terbitlah_Terang_1922.jpg', description: 'Kumpulan surat-surat R.A. Kartini yang mengungkapkan pemikirannya tentang pendidikan dan emansipasi wanita di Indonesia.' },
    { id: 5, title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', category: 'Fiksi', coverUrl: 'https://upload.wikimedia.org/wikipedia/id/thumb/f/f3/Bumi_Manusia_sampul.jpg/220px-Bumi_Manusia_sampul.jpg', description: 'Bagian pertama dari Tetralogi Buru yang menceritakan kisah Minke, seorang priyayi Jawa di awal abad ke-20.' },
];

export const GALLERY_DATA: GalleryItem[] = [
    { id: 1, title: 'Juara Lomba Cerdas Cermat', description: 'Tim Cerdas Cermat SMPN 19 Mataram berhasil meraih Juara 1 Tingkat Provinsi.', type: 'Foto', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnailUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Pentas Seni Akhir Tahun', description: 'Keceriaan siswa-siswi dalam menampilkan bakat mereka di acara pentas seni tahunan.', type: 'Video', url: 'https://www.youtube.com/embed/RU59Hh2iMXI', thumbnailUrl: 'https://img.youtube.com/vi/RU59Hh2iMXI/hqdefault.jpg' },
    { id: 3, title: 'Kegiatan Pramuka di Alam Terbuka', description: 'Momen kebersamaan dan belajar mandiri saat kegiatan perkemahan Sabtu-Minggu.', type: 'Foto', url: 'https://images.unsplash.com/photo-1517964402324-72d53a9623b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnailUrl: 'https://images.unsplash.com/photo-1517964402324-72d53a9623b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, title: 'Studi Tur ke Museum Lombok', description: 'Siswa belajar sejarah dan budaya lokal langsung di Museum Negeri Nusa Tenggara Barat.', type: 'Foto', url: 'https://images.unsplash.com/photo-1564982294248-89c0a6b99b53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnailUrl: 'https://images.unsplash.com/photo-1564982294248-89c0a6b99b53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, title: 'Reuni Akbar Alumni Angkatan 90-an', description: 'Momen haru dan gembira saat para alumni angkatan 1990-an berkumpul kembali di sekolah.', type: 'Kenangan Alumni', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnailUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, title: 'Peluncuran AI Sira', description: 'Peresmian Asisten AI Sira sebagai inovasi digital terbaru sekolah.', type: 'Video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
];

export const NEWS_DATA: NewsArticle[] = [
  { id: 1, title: 'SMPN 19 Mataram Raih Gelar Sekolah Adiwiyata Tingkat Nasional', summary: 'Komitmen terhadap lingkungan membawa sekolah kami meraih penghargaan Adiwiyata Nasional dari Kementerian Lingkungan Hidup dan Kehutanan.', content: 'Mataram - SMPN 19 Mataram berhasil mengukir prestasi gemilang dengan meraih penghargaan sebagai Sekolah Adiwiyata Tingkat Nasional tahun 2023. Penghargaan ini diberikan oleh Kementerian Lingkungan Hidup dan Kehutanan sebagai pengakuan atas komitmen dan upaya sekolah dalam mewujudkan lingkungan belajar yang bersih, sehat, dan berwawasan lingkungan.\n\nKepala Sekolah, Drs. H. Lalu Tisnawan, menyatakan bahwa pencapaian ini adalah hasil kerja keras seluruh warga sekolah, mulai dari siswa, guru, staf, hingga orang tua murid. "Program-program seperti bank sampah, penanaman seribu pohon, dan pengurangan sampah plastik menjadi kunci keberhasilan kami," ujarnya. Dengan gelar ini, SMPN 19 Mataram bertekad untuk terus menjadi pelopor sekolah ramah lingkungan di Nusa Tenggara Barat.', imageUrl: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc3b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '2024-06-20', category: 'Prestasi' },
  { id: 2, title: 'Informasi Pendaftaran Ulang PPDB Jalur Zonasi', summary: 'Bagi calon siswa yang dinyatakan lolos seleksi PPDB jalur zonasi, diharapkan segera melakukan pendaftaran ulang sesuai jadwal yang ditentukan.', content: 'Diberitahukan kepada seluruh calon peserta didik baru yang telah dinyatakan LULUS seleksi Penerimaan Peserta Didik Baru (PPDB) SMPN 19 Mataram Tahun Pelajaran 2024/2025 melalui JALUR ZONASI, untuk segera melakukan proses pendaftaran ulang. Proses ini akan dilaksanakan pada tanggal 2-4 Juli 2024 di ruang tata usaha sekolah. Harap membawa dokumen asli yang telah diunggah saat pendaftaran online. Keterlambatan dalam melakukan pendaftaran ulang dianggap mengundurkan diri.', imageUrl: 'https://images.unsplash.com/photo-1596496181848-3091d4376449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '2024-07-01', category: 'Pengumuman' },
  { id: 3, title: 'Gelar Karya P5: Siswa Pamerkan Proyek Inovatif Bertema Kearifan Lokal', summary: 'Siswa-siswi kelas 7 dan 8 menampilkan berbagai proyek kreatif dalam acara Gelar Karya Proyek Penguatan Profil Pelajar Pancasila (P5).', content: 'SMPN 19 Mataram sukses menyelenggarakan Gelar Karya Proyek Penguatan Profil Pelajar Pancasila (P5) dengan tema "Kearifan Lokal". Acara ini menjadi ajang bagi para siswa untuk memamerkan hasil belajar mereka selama satu semester dalam bentuk proyek-proyek inovatif. Berbagai karya ditampilkan, mulai dari kuliner tradisional, kerajinan tangan dari bahan daur ulang, hingga pertunjukan seni yang mengangkat budaya Sasak. Acara ini diapresiasi oleh orang tua murid dan dinas pendidikan setempat sebagai wujud implementasi Kurikulum Merdeka yang efektif.', imageUrl: 'https://images.unsplash.com/photo-1616469829935-c2f334a05a02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '2024-06-15', category: 'Kegiatan' },
];

export const ALUMNI_DATA: Alumnus[] = [
    { id: 1, name: 'Dr. Rina Suryani, M.Sc.', graduationYear: 1998, occupation: 'Peneliti LIPI (BRIN)', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', testimonial: 'SMPN 19 Mataram adalah tempat fondasi keingintahuan saya terhadap sains dibangun. Guru-guru yang inspiratif membuka mata saya pada keajaiban dunia penelitian.' },
    { id: 2, name: 'Andi Wijaya', graduationYear: 2005, occupation: 'Founder & CEO Start-up EduTech', photoUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', testimonial: 'Disiplin dan kreativitas yang saya pelajari di sini menjadi modal utama dalam membangun usaha. Saya belajar bahwa tidak ada yang tidak mungkin jika kita berusaha keras.' },
    { id: 3, name: 'Lia Amelia', graduationYear: 2010, occupation: 'Sutradara Film Pendek', photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', testimonial: 'Ekstrakurikuler teater di sekolah ini adalah awal dari segalanya. Di sanalah saya menemukan hasrat saya untuk bercerita melalui visual.' },
    { id: 4, name: 'Bayu Pratama', graduationYear: 2008, occupation: 'Atlet Atletik Nasional', photoUrl: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', testimonial: 'Dukungan dari guru olahraga sangat luar biasa. Beliau yang pertama kali melihat potensi saya dan mendorong saya untuk serius di bidang atletik.' },
];

export const PPDB_TIMELINE_DATA: PpdbTimelineStep[] = [
    { title: 'Pendaftaran Online', date: '1-5 Juli 2024', description: 'Calon siswa melakukan pendaftaran melalui portal PPDB online resmi.' },
    { title: 'Verifikasi Berkas', date: '6-8 Juli 2024', description: 'Panitia melakukan verifikasi data dan dokumen yang diunggah oleh pendaftar.' },
    { title: 'Pengumuman Hasil', date: '10 Juli 2024', description: 'Hasil seleksi diumumkan secara online melalui portal PPDB.' },
    { title: 'Daftar Ulang', date: '11-13 Juli 2024', description: 'Siswa yang lolos melakukan pendaftaran ulang di sekolah.' },
];

export const PPDB_PATHS_DATA: PpdbPath[] = [
    { icon: 'map', title: 'Jalur Zonasi (50%)', description: 'Diperuntukkan bagi calon siswa yang berdomisili di dalam wilayah zonasi yang telah ditetapkan.' },
    { icon: 'heart', title: 'Jalur Afirmasi (15%)', description: 'Bagi calon siswa dari keluarga ekonomi tidak mampu dan penyandang disabilitas.' },
    { icon: 'award', title: 'Jalur Prestasi (30%)', description: 'Untuk calon siswa dengan prestasi akademik maupun non-akademik yang diakui.' },
    { icon: 'users', title: 'Jalur Perpindahan Tugas (5%)', description: 'Bagi calon siswa yang orang tuanya pindah tugas ke wilayah Kota Mataram.' },
];

export const PPDB_REQUIREMENTS_DATA: string[] = [
    'Telah lulus SD/MI atau sederajat, dibuktikan dengan ijazah atau surat keterangan lulus.',
    'Berusia paling tinggi 15 tahun pada tanggal 1 Juli tahun berjalan.',
    'Memiliki Kartu Keluarga (KK) yang diterbitkan paling singkat 1 tahun sebelum tanggal pendaftaran.',
    'Akta kelahiran atau surat keterangan lahir.',
    'Dokumen pendukung sesuai dengan jalur pendaftaran yang dipilih (misal: KIP, piagam prestasi).',
];

export const FAQ_DATA: FaqItem[] = [
  { id: 1, question: 'Kapan pendaftaran siswa baru (PPDB) dibuka?', answer: 'Pendaftaran Peserta Didik Baru (PPDB) biasanya dibuka sekitar bulan Juni-Juli setiap tahunnya. Informasi detail mengenai jadwal, jalur, dan persyaratan akan diumumkan di website ini dan media sosial sekolah. Pantau terus halaman PPDB kami untuk informasi terbaru.', category: 'PPDB' },
  { id: 2, question: 'Apa saja ekstrakurikuler yang tersedia?', answer: 'Kami memiliki beragam ekstrakurikuler untuk menyalurkan minat dan bakat siswa, antara lain Pramuka, Paskibra, Klub Robotik, Klub Musik & Vokal, Olahraga (Karate, Futsal, Basket), dan Palang Merah Remaja (PMR).', category: 'Akademik' },
  { id: 3, question: 'Bagaimana sistem kurikulum yang digunakan?', answer: 'SMPN 19 Mataram menerapkan Kurikulum Merdeka untuk kelas 7 dan 8, serta Kurikulum 2013 untuk kelas 9. Kami fokus pada pembelajaran yang berpusat pada siswa dan pengembangan Proyek Penguatan Profil Pelajar Pancasila (P5).', category: 'Akademik' },
  { id: 4, question: 'Apakah sekolah menyediakan fasilitas laboratorium?', answer: 'Ya, kami memiliki fasilitas laboratorium yang lengkap, meliputi Laboratorium Komputer, Laboratorium IPA (Fisika, Kimia, Biologi), dan Laboratorium Bahasa untuk mendukung proses pembelajaran yang efektif dan interaktif.', category: 'Fasilitas' },
  { id: 5, question: 'Bagaimana cara menghubungi pihak sekolah?', answer: 'Anda dapat menghubungi kami melalui telepon di (0370) 612345, email di info@smpn19mataram.sch.id, atau datang langsung ke sekolah di Jl. Pendidikan No. 19, Mataram pada jam kerja. Anda juga bisa menggunakan formulir kontak di website ini.', category: 'Umum' },
  { id: 6, question: 'Apa saja jalur pendaftaran yang ada di PPDB?', answer: 'PPDB SMPN 19 Mataram memiliki empat jalur utama: Jalur Zonasi, Jalur Afirmasi, Jalur Prestasi, dan Jalur Perpindahan Tugas Orang Tua. Proporsi kuota untuk setiap jalur disesuaikan dengan peraturan dinas pendidikan yang berlaku.', category: 'PPDB' },
];

export const FACILITIES_DATA: Facility[] = [
    { id: 1, name: 'Laboratorium Komputer', description: 'Dilengkapi dengan perangkat modern dan akses internet cepat untuk mendukung pembelajaran digital.', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Perpustakaan Digital', description: 'Koleksi ribuan buku fisik dan digital untuk memperluas wawasan dan imajinasi siswa.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Laboratorium IPA Terpadu', description: 'Fasilitas lengkap untuk praktikum Fisika, Kimia, dan Biologi dengan standar keamanan tinggi.', imageUrl: 'https://images.unsplash.com/photo-1628834433839-5853f65295c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Lapangan Olahraga Multifungsi', description: 'Area olahraga outdoor untuk Futsal, Basket, dan Voli yang mendukung aktivitas fisik siswa.', imageUrl: 'https://images.unsplash.com/photo-1575042813331-3315a45e8b46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Ruang Kesenian', description: 'Ruang kedap suara untuk latihan musik, vokal, dan kegiatan seni lainnya.', imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Masjid Sekolah', description: 'Sarana ibadah yang nyaman untuk pembinaan rohani dan kegiatan keagamaan siswa.', imageUrl: 'https://images.unsplash.com/photo-1587038347915-c28892751791?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const FEATURES_DATA: Feature[] = [
    { icon: 'tech', title: 'Kurikulum Berbasis Teknologi', description: 'Mengintegrasikan teknologi dalam setiap mata pelajaran untuk mempersiapkan siswa menghadapi era digital, termasuk coding, desain grafis, dan literasi digital.' },
    { icon: 'teachers', title: 'Guru Profesional & Berpengalaman', description: 'Didukung oleh tenaga pendidik yang tidak hanya ahli di bidangnya, tetapi juga berdedikasi tinggi dalam membimbing dan menginspirasi setiap siswa.' },
    { icon: 'facilities', title: 'Fasilitas Modern & Lengkap', description: 'Menyediakan lingkungan belajar yang representatif dengan laboratorium, perpustakaan, lapangan olahraga, dan ruang kreatif yang mendukung semua potensi siswa.' },
    { icon: 'character', title: 'Pengembangan Karakter & Akhlak', description: 'Tidak hanya fokus pada akademis, kami juga menanamkan nilai-nilai integritas, kepemimpinan, dan kepedulian sosial melalui kegiatan keagamaan dan sosial.' },
];

export const VIRTUAL_TOUR_DATA: VirtualTourData = {
    'library-entrance': {
        panoramaUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hotspots: [
            {
                id: 'enter-library',
                position: { x: '50%', y: '60%' },
                label: 'Masuk Perpustakaan',
                action: { type: 'navigate', target: 'library-main' },
            },
            {
                id: 'info-library',
                position: { x: '20%', y: '50%' },
                label: 'Informasi Perpustakaan',
                action: { type: 'info', target: 'info-library' },
                info: {
                    title: 'Perpustakaan Digital & Fisik',
                    description: 'Koleksi ribuan buku fisik dan digital untuk memperluas wawasan dan imajinasi siswa. Buka setiap hari kerja dari jam 08:00 - 15:00.',
                },
            },
        ],
    },
    'library-main': {
        panoramaUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hotspots: [
            {
                id: 'exit-library',
                position: { x: '10%', y: '80%' },
                label: 'Kembali ke Pintu Masuk',
                action: { type: 'navigate', target: 'library-entrance' },
            },
            {
                id: 'go-to-computer-lab',
                position: { x: '85%', y: '55%' },
                label: 'Menuju Lab Komputer',
                action: { type: 'navigate', target: 'computer-lab' },
            },
            {
                id: 'info-reading-area',
                position: { x: '50%', y: '50%' },
                label: 'Area Baca',
                action: { type: 'info', target: 'info-reading-area' },
                info: {
                    title: 'Area Baca yang Nyaman',
                    description: 'Dilengkapi dengan meja, kursi, dan pencahayaan yang baik untuk mendukung kegiatan literasi siswa.',
                },
            },
        ],
    },
    'computer-lab': {
        panoramaUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        hotspots: [
            {
                id: 'exit-computer-lab',
                position: { x: '20%', y: '85%' },
                label: 'Kembali ke Perpustakaan',
                action: { type: 'navigate', target: 'library-main' },
            },
            {
                id: 'info-specs',
                position: { x: '60%', y: '45%' },
                label: 'Spesifikasi Komputer',
                action: { type: 'info', target: 'info-specs' },
                info: {
                    title: 'Laboratorium Komputer Modern',
                    description: 'Dilengkapi 40 unit komputer dengan spesifikasi terbaru dan akses internet cepat untuk mendukung pembelajaran TIK dan persiapan kompetisi.',
                },
            },
        ],
    },
};

export const SCHEDULE_DATA: ScheduleEntry[] = [
    { time: '07:15 - 08:35', monday: 'Matematika', tuesday: 'Bahasa Inggris', wednesday: 'IPA Terpadu', thursday: 'Pendidikan Jasmani', friday: 'Pramuka' },
    { time: '08:35 - 09:55', monday: 'Bahasa Indonesia', tuesday: 'PPKn', wednesday: 'IPS Terpadu', thursday: 'Seni Budaya', friday: 'Pramuka' },
    { time: '10:15 - 11:35', monday: 'IPA Terpadu', tuesday: 'Matematika', wednesday: 'Bahasa Inggris', thursday: 'Bahasa Indonesia', friday: 'Kegiatan Keagamaan' },
];

export const ASSIGNMENTS_DATA: Assignment[] = [
    { id: 1, subject: 'Matematika', title: 'Mengerjakan Latihan Soal Bab 3: Aljabar', dueDate: '2024-07-29' },
    { id: 2, subject: 'Bahasa Indonesia', title: 'Membuat Puisi bertema Kemerdekaan', dueDate: '2024-08-05' },
    { id: 3, subject: 'IPA Terpadu', title: 'Laporan Praktikum Fotosintesis', dueDate: '2024-08-02' },
];

export const LEARNING_MATERIALS_DATA: LearningMaterial[] = [
    { id: 1, subject: 'Matematika', title: 'Modul Aljabar Kelas 7', fileUrl: '#', fileType: 'PDF' },
    { id: 2, subject: 'IPA Terpadu', title: 'Presentasi Sistem Tata Surya', fileUrl: '#', fileType: 'PPTX' },
    { id: 3, subject: 'Bahasa Inggris', title: 'Kumpulan Teks Naratif', fileUrl: '#', fileType: 'DOCX' },
];
