import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ArrowRight,
  Cpu,
  CircuitBoard,
  CheckCircle2,
  Radio,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Images,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import heroCar from "@/imports/DSC09893_cp.jpg";
import teamLogo from "@/imports/image.png";
import runGameVideo from "@/imports/video aburubocon 2026/run-game-2026-720p.mp4";
import runGamePoster from "@/imports/web/aburobocon-2026-poster.jpg";
import miningPcb from "@/imports/web/mining-pcb.jpg";
import miningDashboard from "@/imports/web/mining-dashboard.jpg";
import miningBuild from "@/imports/web/mining-build.jpg";
import robotArmPhoto from "@/imports/web/robot-arm-photo.jpg";
import robotArmYolo from "@/imports/web/robot-arm-yolo.jpg";
import pidTrainer from "@/imports/web/pid-trainer.jpg";
import seismicSchematic from "@/imports/web/seismic-schematic.jpg";
import seismicLayout from "@/imports/web/seismic-layout.jpg";

// Aset baru: R1 Basketball Shooter Robot
import basketballVideo from "@/imports/web/basketball-shooter-full.mp4";
import basketballHardware1 from "@/imports/web/basketball-hardware-1.jpg";
import basketballHardware2 from "@/imports/web/basketball-hardware-2.jpg";
import basketballAction1 from "@/imports/web/basketball-action-1.jpg";
import basketballAction2 from "@/imports/web/basketball-action-2.jpg";

// Aset baru: R1 Omni-Directional Planter
import planterVideo from "@/imports/web/planter-robot-run.mp4";
import planterPhoto from "@/imports/web/planter-robot-main.jpg";
import planterPoster from "@/imports/web/planter-video-poster.jpg";
import planterAction1 from "@/imports/web/planter-action-1.jpg";
import planterAction2 from "@/imports/web/planter-action-2.jpg";

/* ============================================================================
 *  ██  EDIT YOUR DETAILS HERE — semua konten terpusat di atas
 * ==========================================================================*/
const CONFIG = {
  // Isi dengan endpoint Formspree (https://formspree.io) bila ingin form
  // terkirim otomatis. Selama masih placeholder, form membuka aplikasi
  // email pengunjung dengan pesan yang sudah terisi.
  formspreeEndpoint: "https://formspree.io/f/YOUR_ENDPOINT_ID",
  email: "dhaniardian028@gmail.com",
};

const TEAM = {
  constructor: "MAESTRO EVO",
  division: "UNY ROBOCON TEAM",
  season: "2026",
};

const PROFILE = {
  name: "DHANI ARDIAN PRATAMA",
  role: "Robotics Programmer & Embedded Systems Engineer",
  status: "Open to Internship",
  discipline:
    "D4 Teknik Elektronika · Universitas Negeri Yogyakarta",
  location: "Yogyakarta, Indonesia",
  pitch:
    "Programmer robotika dengan rekam jejak kompetisi tiga tahun: sistem sensor fusion dan kendali yang mengantar ke podium nasional — Juara 1 & Best Design KRAI ABUROBOCON 2024, Juara 2 & Best Strategy KRAI 2026, serta finalis internasional di Vietnam. Terbiasa membangun stack ROS 2/STM32 yang memadukan LiDAR, IMU, dan visi YOLO di bawah tenggat kompetisi, lalu mengulang siklus build-test-ship yang sama untuk klien berbayar. Sedang mencari kesempatan magang untuk menerapkan keahlian ini pada proyek nyata.",
};

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LINKEDIN",
    handle: "in/dhani-ardian-pratama-304898287",
    href: "https://www.linkedin.com/in/dhani-ardian-pratama-304898287/",
  },
  {
    icon: Mail,
    label: "EMAIL",
    handle: "dhaniardian028@gmail.com",
    href: "mailto:dhaniardian028@gmail.com",
  },
  {
    icon: Phone,
    label: "WHATSAPP",
    handle: "+62 857-1482-5447",
    href: "https://wa.me/6285714825447",
  },
];

// "Spesifikasi teknis" — dikelompokkan seperti setup sheet
const SPEC_SHEET = [
  {
    unit: "POWER UNIT",
    label: "Software & Vision",
    icon: Cpu,
    items: [
      { name: "Python", tag: "LANG" },
      { name: "C / C++ (embedded)", tag: "CORE" },
      { name: "Java (Android)", tag: "APP" },
      { name: "ROS 2", tag: "MIDDLEWARE" },
      { name: "YOLO object detection", tag: "VISION" },
      { name: "OpenCV", tag: "CV" },
    ],
  },
  {
    unit: "CHASSIS",
    label: "Embedded & Hardware",
    icon: CircuitBoard,
    items: [
      { name: "STM32 / ARM Cortex-M", tag: "MCU" },
      { name: "ESP32", tag: "MCU" },
      { name: "Orange Pi / Mini PC", tag: "SBC" },
      { name: "UART · SPI · I2C", tag: "BUS" },
      { name: "CAN BUS · USB CDC · UDP", tag: "COMMS" },
      { name: "GSM / GPS telemetry", tag: "IOT" },
    ],
  },
  {
    unit: "TELEMETRY",
    label: "Control & Autonomy",
    icon: Radio,
    items: [
      { name: "Inverse kinematics", tag: "KIN" },
      { name: "Sensor fusion", tag: "FUSION" },
      { name: "Madgwick AHRS", tag: "AHRS" },
      { name: "Odometry & trajectory", tag: "NAV" },
      { name: "LiDAR distance control", tag: "LIDAR" },
      { name: "Git · Firebase", tag: "TOOLS" },
    ],
  },
];

// "Season log" — pengalaman seperti kalender balapan
const SEASONS = [
  {
    round: "R03",
    period: "2024 — 2026",
    role: "Robotics Team Member & Programmer",
    company: "Maestro Evo Robocon UNY · Yogyakarta",
    result: "2× PODIUM",
    points: [
      "Mengembangkan software autonomous aiming & shooting-control yang meraih Juara 2 nasional dan Best Strategy KRAI ABUROBOCON 2026, dengan memadukan data jarak LiDAR dan model regresi linear untuk penyesuaian RPM real-time.",
      "Membangun stack navigasi dan kendali robot penanam holonomic yang meraih Juara 1 nasional dan Best Design KRAI ABUROBOCON 2024, dengan memadukan IMU smartphone dan LiDAR/odometri lewat algoritma Madgwick AHRS di STM32.",
      "Memprogram auto-aiming berbasis YOLO yang membawa tim ke final ABUROBOCON 2024 di Vietnam dan mendapat nominasi SMC Award, dengan integrasi visual tracking serta telemetri UDP antara controller Android dan firmware ROS 2/STM32.",
    ],
  },
  {
    round: "R02",
    period: "Des 2024 — Feb 2025",
    role: "Electronics & Robotics Developer",
    company: "Freelance & Independent Contracting · Remote",
    result: "FREELANCE",
    points: [
      "Membangun dan men-deploy 25 unit telemetri embedded untuk alat berat tambang, memberi klien visibilitas real-time atas jam operasi mesin, lokasi GPS, konsumsi bahan bakar, dan performa operator.",
      "Mengintegrasikan STM32/ESP32 dengan GSM/GPS melalui UART/SPI untuk pemantauan dan konfigurasi perangkat dari jarak jauh.",
      "Membuat prototipe seismic streamer ESP32/hydrophone untuk pemetaan dasar laut, mengidentifikasi batas sampling-rate perangkat terhadap target 16 kHz klien dalam waktu satu bulan.",
      "Menyusun feasibility assessment yang mengarahkan ulang strategi komponen proyek klien.",
    ],
  },
  {
    round: "EDU",
    period: "Expected Aug 2027",
    role: "D4 Teknik Elektronika",
    company: "Universitas Negeri Yogyakarta",
    result: "EDUCATION",
    points: [
      "Menempuh pendidikan sarjana terapan (D4) Teknik Elektronika dengan fokus pada sistem tertanam, robotika, dan sistem kendali.",
      "Mengaitkan perkuliahan dengan praktik kompetisi: sensor fusion, kinematika, pemrograman embedded, dan computer vision.",
    ],
  },
];

// "Garage" — proyek seperti build
type Project = {
  serial: string;
  title: string;
  meta: string;
  award: string;
  desc: string;
  cover: string;
  gallery?: string[];
  stack: string[];
  video?: {
    src: string;
    poster: string;
    duration: string;
    label?: string;
    note?: string;
  };
  featured?: boolean;
};

const GARAGE: Project[] = [
  {
    serial: "01",
    title: "R1 Kungfu Master Robot",
    meta: "ABUROBOCON 2026 · YOGYAKARTA",
    award: "RUN GAME · 2 ROBOT",
    desc: "Robot mecanum 4 roda dengan inverse kinematics, dilengkapi weapon claw 3-axis, gripper servo dual-axis, dan lifter berkapasitas tinggi untuk mengangkat robot sekunder. Navigasi berbasis LiDAR, IMU, dan odometri mencatat koordinat serta menyimpan setpoint spasial ke Orange Pi agar rutinitas autonomous berjalan presisi.",
    cover: runGamePoster,
    gallery: [heroCar],
    stack: ["MECANUM", "ANDROID STUDIO", "LIDAR", "ORANGE PI"],
    video: {
      src: runGameVideo,
      poster: runGamePoster,
      duration: "3:22",
      label: "RUN GAME · 2 ROBOT · 3:22",
      note: "Rekaman layar uji lapangan: dua umpan kamera robot, deteksi objek & ArUco real-time, kontrol manual R1 via aplikasi Android kustom, robot R2 full otonom, serta koordinasi antar kedua robot murni menggunakan kode ArUco dan kedipan LED.",
    },
    featured: true,
  },
  {
    serial: "02",
    title: "6-DOF Robot Arm + YOLO + ArUco",
    meta: "VISION PROJECT · 2026",
    award: "VISION-GUIDED PICK & PLACE",
    desc: "Lengan robot 6-DOF dengan gripper yang dipadukan computer vision. Kamera membaca marker ArUco pada board kerja untuk kalibrasi pose dan pemetaan koordinat, lalu YOLO mendeteksi objek (cake/donut) dan mengirim target pick-and-place ke arm secara otomatis.",
    cover: robotArmYolo,
    gallery: [robotArmPhoto],
    stack: ["6-DOF ARM", "YOLO", "ARUCO", "OPENCV", "INVERSE KINEMATICS"],
  },
  {
    serial: "03",
    title: "PID Angle Control Trainer",
    meta: "LAB PROJECT · 2026",
    award: "TEACHING KIT",
    desc: "Trainer PID Angle Control untuk mempelajari kontrol sudut secara praktis: setpoint diatur lewat potensiometer, nilai Kp/Ki/Kd dapat disetel langsung dari panel, dan respons sudut ditampilkan pada OLED. Dilengkapi skala sudut 0–360°, encoder, dan tombol start.",
    cover: pidTrainer,
    stack: ["PID", "ENCODER", "OLED", "ANALOG CONTROL"],
  },
  {
    serial: "04",
    title: "R1 Basketball Shooter Robot",
    meta: "ABUROBOCON 2025 · ROS 2",
    award: "AUTO-AIMING · YOLO",
    desc: "Robot mecanum penembak 2 poin dan defender yang dikendalikan lewat telemetri UDP dari aplikasi Android buatan sendiri, dengan ROS 2 di Mini PC dan STM32 sebagai pengendali. Deteksi objek YOLO melacak ring basket untuk auto-aiming dinamis, sementara jarak LiDAR dan model regresi linear menghitung serta menyesuaikan RPM penembak secara otomatis.",
    cover: basketballHardware1,
    gallery: [basketballAction1, basketballHardware2, basketballAction2],
    video: {
      src: basketballVideo,
      poster: basketballHardware1,
      duration: "0:23",
      label: "AUTO-AIMING & SHOOTING TEST · 0:23",
      note: "Rekaman pengujian auto-aiming & mekanisme penembak bola: pelacakan ring basket secara real-time via YOLO, kalkulasi jarak dengan LiDAR, dan penyesuaian RPM motor peluncur secara otomatis.",
    },
    stack: ["ROS 2", "STM32", "YOLO", "UDP", "ANDROID", "LIDAR"],
  },
  {
    serial: "05",
    title: "Mining Telemetry Fleet",
    meta: "FREELANCE · DES 2024 — FEB 2025",
    award: "25 UNIT DEPLOYED",
    desc: "Fleet telemetri 25 unit untuk alat berat tambang batu bara: jam operasi mesin, lokasi GPS, konsumsi bahan bakar, dan performa operator terpantau real-time. STM32/ESP32 diintegrasikan dengan GSM/GPS lewat UART/SPI untuk pemantauan sekaligus konfigurasi perangkat dari jarak jauh. Termasuk desain board, dashboard pemantauan, dan proses perakitan unit.",
    cover: miningPcb,
    gallery: [miningDashboard, miningBuild],
    stack: ["STM32", "ESP32", "GSM / GPS", "UART / SPI"],
  },
  {
    serial: "06",
    title: "Seismic Streamer",
    meta: "FREELANCE · DES 2024 — FEB 2025",
    award: "TARGET 16 kHz",
    desc: "Rancangan perangkat akuisisi seismic streamer untuk memetakan kedalaman dasar laut: hydrophone menangkap getaran bawah laut, sinyal diperkuat dan dikonversi oleh ADC 24-bit ADS1256, lalu dikirim melalui RS485. Mencakup skematik, layout PCB, dan analisis batas sampling-rate terhadap target 16 kHz klien.",
    cover: seismicLayout,
    gallery: [seismicSchematic],
    stack: ["ESP32", "ADS1256", "RS485", "HYDROPHONE", "EAGLE"],
  },
  {
    serial: "07",
    title: "R1 Omni-Directional Planter",
    meta: "ABUROBOCON 2024 · JUARA 1 · BEST DESIGN",
    award: "STACK: STM32 + AHRS",
    desc: "Robot holonomic X-drive 4 roda dengan inverse kinematics untuk bernavigasi semi-otonom dan menanam bibit di zona yang ditentukan dengan presisi tinggi. Data IMU 3-axis dari smartphone dipadukan dengan LiDAR dan odometri memakai algoritma Madgwick AHRS di STM32 untuk menghitung orientasi spasial yang akurat.",
    cover: planterPhoto,
    gallery: [planterPoster, planterAction1, planterAction2],
    video: {
      src: planterVideo,
      poster: planterPoster,
      duration: "2:44",
      label: "RUN GAME MATCH · 2:44",
      note: "Rekaman pertandingan run game robot penanam di arena nasional ABUROBOCON 2024: navigasi holonomic lincah, positioning zona tanam menggunakan sensor fusion Madgwick AHRS + LiDAR, dan eksekusi penanaman bibit secara presisi.",
    },
    stack: ["STM32", "MADGWICK AHRS", "LIDAR", "ODOMETRY", "INVERSE KINEMATICS"],
  },
];


const NAV = [
  { id: "grid", label: "START" },
  { id: "spec", label: "SPEC" },
  { id: "seasons", label: "SEASONS" },
  { id: "garage", label: "GARAGE" },
  { id: "runlog", label: "RUN LOG" },
  { id: "pitwall", label: "CONTACT" },
];

const TELEMETRY = [
  {
    value: "2",
    unit: "×",
    label: "Podium nasional KRAI ABUROBOCON",
  },
  { value: "3", unit: "+", label: "Tahun track record kompetisi" },
  { value: "25", unit: "", label: "Unit telemetri tambang terdeploy" },
];

const PARTNERS = [
  "ROS 2",
  "STM32",
  "ESP32",
  "LIDAR",
  "YOLO",
  "OPENCV",
  "MADGWICK AHRS",
  "INVERSE KINEMATICS",
  "CAN BUS",
  "UDP",
  "ANDROID",
  "PYTHON",
  "C / C++",
  "ORANGE PI",
];

/* ============================================================================
 *  PRIMITIVES
 * ==========================================================================*/
const Mono = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`font-['JetBrains_Mono'] ${className}`}>
    {children}
  </span>
);

// Team logo processed to clean white monochrome so it sits on the dark livery
const TeamMark = ({
  className = "",
}: {
  className?: string;
}) => (
  <img
    src={teamLogo}
    alt="Maestro EVO — UNY Robocon Team logo"
    className={`[filter:invert(1)_contrast(1.15)] mix-blend-screen object-contain ${className}`}
  />
);

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Kicker = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-3">
    <span className="w-7 h-px bg-accent" />
    <Mono className="text-[11px] tracking-[0.32em] text-accent-2">
      {children}
    </Mono>
  </div>
);

const SectionHeader = ({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) => (
  <div className="mb-14 md:mb-20">
    <Kicker>
      {index} — {label}
    </Kicker>
    <h2 className="mt-5 text-4xl md:text-6xl leading-[0.92]">
      {title}
    </h2>
  </div>
);

/* ============================================================================
 *  PROJECT DIALOG — galeri foto & video
 * ==========================================================================*/
const ProjectDialog = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const images = [project.cover, ...(project.gallery ?? [])];
  const [index, setIndex] = useState(0);
  const [activeMedia, setActiveMedia] = useState<"video" | "photo">(
    project.video ? "video" : "photo"
  );

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (activeMedia === "photo" && images.length > 1 && e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (activeMedia === "photo" && images.length > 1 && e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [images.length, onClose, activeMedia]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-[#05081a]/92 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#0a0e22] border border-[rgba(236,239,247,0.14)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 md:px-7 py-4 bg-[#0a0e22]/95 backdrop-blur border-b border-[rgba(236,239,247,0.08)]">
          <div className="flex items-center gap-3 min-w-0">
            <Mono className="text-[11px] tracking-[0.18em] text-accent">
              {project.serial}
            </Mono>
            <span className="w-px h-4 bg-[rgba(236,239,247,0.15)]" />
            <Mono className="text-[9px] tracking-[0.24em] text-muted-foreground truncate">
              PROJECT FILE
            </Mono>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="grid place-items-center w-9 h-9 border border-[rgba(236,239,247,0.14)] hover:border-accent hover:text-accent transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 bg-black flex flex-col">
            {/* Media Selector Tabs (if both video & photo exist) */}
            {project.video && images.length > 0 && (
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[#070b1e] border-b border-[rgba(236,239,247,0.08)]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveMedia("video")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-['JetBrains_Mono'] tracking-[0.14em] transition-all border ${
                      activeMedia === "video"
                        ? "bg-accent/15 border-accent text-accent"
                        : "border-[rgba(236,239,247,0.12)] text-muted-foreground hover:text-foreground hover:border-[rgba(236,239,247,0.25)]"
                    }`}
                  >
                    <Play size={11} className={activeMedia === "video" ? "fill-accent" : ""} />
                    <span>VIDEO ({project.video.duration})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMedia("photo")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-['JetBrains_Mono'] tracking-[0.14em] transition-all border ${
                      activeMedia === "photo"
                        ? "bg-accent/15 border-accent text-accent"
                        : "border-[rgba(236,239,247,0.12)] text-muted-foreground hover:text-foreground hover:border-[rgba(236,239,247,0.25)]"
                    }`}
                  >
                    <Images size={11} />
                    <span>FOTO ({images.length})</span>
                  </button>
                </div>

                <Mono className="text-[9px] tracking-[0.16em] text-muted-foreground/70 hidden sm:inline">
                  {activeMedia === "video" ? "MODE VIDEO" : `${index + 1} / ${images.length} FOTO`}
                </Mono>
              </div>
            )}

            {/* Media Viewer Area */}
            <div className="relative flex-1 flex items-center justify-center min-h-[240px] md:min-h-[380px] lg:min-h-[500px] bg-black">
              {activeMedia === "video" && project.video ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <video
                    key={project.video.src}
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.video.poster}
                    className="w-full max-h-[70vh] aspect-video bg-black object-contain"
                  >
                    <source src={project.video.src} type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                  </video>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <ImageWithFallback
                    src={images[index]}
                    alt={`${project.title} — foto ${index + 1}`}
                    className="w-full max-h-[70vh] object-contain"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Foto sebelumnya"
                        className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 bg-[#05081a]/70 border border-[rgba(236,239,247,0.2)] hover:border-accent hover:text-accent transition-colors"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Foto berikutnya"
                        className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 bg-[#05081a]/70 border border-[rgba(236,239,247,0.2)] hover:border-accent hover:text-accent transition-colors"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <Mono className="absolute top-3 right-3 text-[9px] tracking-[0.16em] bg-[#05081a]/80 px-2.5 py-1 border border-[rgba(236,239,247,0.16)]">
                        {index + 1} / {images.length} FOTO
                      </Mono>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Photo Strip if in photo mode or if no video */}
            {(activeMedia === "photo" || !project.video) && images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto border-t border-[rgba(236,239,247,0.08)] bg-[#070b1e]">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => {
                      setIndex(i);
                      setActiveMedia("photo");
                    }}
                    aria-label={`Lihat foto ${i + 1}`}
                    className={`shrink-0 border transition-colors ${i === index ? "border-accent" : "border-transparent hover:border-[rgba(236,239,247,0.3)]"}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-14 w-20 object-cover opacity-80 hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col">
            <Mono className="text-[10px] tracking-[0.2em] text-accent-2">
              {project.meta}
            </Mono>
            <h3 className="mt-3 text-2xl md:text-3xl leading-tight">
              {project.title}
            </h3>
            <div className="mt-4 inline-flex w-fit items-center gap-2 border border-[rgba(236,239,247,0.14)] px-2.5 py-1">
              {project.video ? (
                <Play size={11} className="text-accent" />
              ) : (
                <Images size={11} className="text-accent" />
              )}
              <Mono className="text-[9px] tracking-[0.14em] text-foreground/80">
                {project.award}
              </Mono>
            </div>

            <p className="mt-5 text-[15px] text-foreground/70 leading-relaxed">
              {project.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {project.stack.map((t) => (
                <Mono
                  key={t}
                  className="text-[9px] tracking-[0.14em] text-muted-foreground"
                >
                  {t}
                </Mono>
              ))}
            </div>

            {project.video && (
              <div className="mt-7 pt-5 border-t border-[rgba(236,239,247,0.08)]">
                <div className="flex items-center gap-2">
                  <Play size={10} className="text-accent" />
                  <Mono className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase block">
                    {project.video.label || `${project.award} · ${project.video.duration}`}
                  </Mono>
                </div>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {project.video.note ||
                    "Rekaman pengujian performa robot dan sistem kendali di arena."}
                </p>
                {activeMedia !== "video" && (
                  <button
                    type="button"
                    onClick={() => setActiveMedia("video")}
                    className="mt-3.5 inline-flex items-center gap-2 text-accent text-[11px] font-['JetBrains_Mono'] tracking-[0.12em] hover:underline"
                  >
                    <Play size={11} className="fill-accent" />
                    PUTAR REKAMAN VIDEO ({project.video.duration})
                  </button>
                )}
              </div>
            )}

            <Mono className="mt-auto pt-8 text-[9px] tracking-[0.16em] text-muted-foreground/60">
              ESC UNTUK MENUTUP
              {activeMedia === "photo" && images.length > 1
                ? " · ← → UNTUK GANTI FOTO"
                : ""}
            </Mono>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ============================================================================
 *  APP
 * ==========================================================================*/
export default function App() {
  const [activeSection, setActiveSection] = useState("grid");
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState<"form" | "mail" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting && setActiveSection(e.target.id),
        ),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      if (
        CONFIG.formspreeEndpoint.includes("YOUR_ENDPOINT_ID")
      ) {
        const subject = String(data.get("subject") ?? "Pesan dari portofolio");
        const body = [
          `Nama: ${data.get("name") ?? ""}`,
          `Email: ${data.get("email") ?? ""}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent("mail");
      } else {
        await fetch(CONFIG.formspreeEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        setSent("form");
      }
      form.reset();
    } catch {
      setSent("form");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Saira'] antialiased">
      {/* ===== HEADER ===== */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[rgba(7,10,28,0.82)] backdrop-blur-xl border-b border-[rgba(236,239,247,0.08)]" : "border-b border-transparent"}`}
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("grid")}
            className="flex items-center gap-3"
          >
            <TeamMark className="h-9 w-9" />
            <span className="w-px h-7 bg-[rgba(236,239,247,0.15)]" />
            <div className="leading-none text-left">
              <div className="font-['Saira_Condensed'] text-base tracking-[0.06em]">
                {TEAM.constructor}
              </div>
              <Mono className="text-[8px] tracking-[0.24em] text-muted-foreground">
                {TEAM.division}
              </Mono>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`font-['JetBrains_Mono'] text-[11px] tracking-[0.16em] transition-colors ${
                  activeSection === n.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("pitwall")}
            className="hidden sm:flex items-center gap-2.5 border border-[rgba(236,239,247,0.18)] hover:border-accent px-4 py-2 transition-colors group"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            <Mono className="text-[10px] tracking-[0.16em] text-foreground/90">
              {PROFILE.status}
            </Mono>
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="grid"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        {/* Car photograph */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroCar}
            alt="Dhani Ardian Pratama bersama robot Maestro Evo UNY di arena ABUROBOCON"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05081a] via-[rgba(5,8,26,0.55)] to-[rgba(5,8,26,0.6)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05081a] via-[rgba(5,8,26,0.55)] to-transparent" />
        </div>

        {/* Large team emblem watermark */}
        <TeamMark className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.06]" />

        <div className="relative max-w-[1320px] mx-auto w-full px-5 md:px-8 pb-16 md:pb-24 pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7">
                <span className="w-7 h-px bg-accent" />
                <Mono className="text-[11px] tracking-[0.34em] text-accent-2">
                  {TEAM.season} SEASON
                </Mono>
                <span className="hidden sm:inline text-muted-foreground/50">
                  /
                </span>
                <Mono className="text-[10px] md:text-[11px] tracking-[0.2em] text-foreground/70">
                  {PROFILE.role}
                </Mono>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.4rem] leading-[0.88] tracking-tight">
                {PROFILE.name.split(" ")[0]}
                <br />
                <span className="text-outline text-foreground/85">
                  {PROFILE.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
                {PROFILE.pitch}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => scrollTo("garage")}
                  className="group flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3.5 hover:gap-4 transition-all"
                >
                  <span className="font-['Saira_Condensed'] tracking-[0.04em] text-lg">
                    LIHAT GARAGE
                  </span>
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
                <button
                  onClick={() => scrollTo("pitwall")}
                  className="font-['Saira_Condensed'] tracking-[0.04em] text-lg border-b border-transparent hover:border-foreground/60 pb-0.5 transition-colors"
                >
                  HUBUNGI SAYA
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={15} className="text-accent-2" />
                  <Mono className="text-[11px] tracking-[0.1em]">
                    {PROFILE.location}
                  </Mono>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Constructor lockup */}
        <div className="absolute top-24 right-5 md:right-8 hidden md:flex items-center gap-4">
          <div className="text-right leading-none">
            <div className="font-['Saira_Condensed'] text-sm tracking-[0.1em] text-foreground/90">
              {TEAM.constructor}
            </div>
            <Mono className="text-[8px] tracking-[0.24em] text-muted-foreground">
              {TEAM.division}
            </Mono>
          </div>
          <TeamMark className="h-11 w-11" />
        </div>
      </section>

      {/* ===== TELEMETRY STRIP ===== */}
      <section className="border-y border-[rgba(236,239,247,0.08)] bg-[rgba(12,16,38,0.5)]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid grid-cols-3">
          {TELEMETRY.map((t, i) => (
            <div
              key={t.label}
              className={`py-8 md:py-10 ${i > 0 ? "border-l border-[rgba(236,239,247,0.08)] pl-5 md:pl-10" : "pr-5"}`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-['Saira_Condensed'] text-4xl md:text-6xl leading-none">
                  {t.value}
                </span>
                <span className="font-['Saira_Condensed'] text-2xl md:text-3xl text-accent leading-none">
                  {t.unit}
                </span>
              </div>
              <Mono className="mt-3 block text-[10px] md:text-[11px] tracking-[0.14em] text-muted-foreground">
                {t.label}
              </Mono>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNER STRIP (quiet) ===== */}
      <div className="border-b border-[rgba(236,239,247,0.08)] py-4 overflow-hidden marquee-track select-none">
        <div className="marquee">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span
              key={i}
              className="flex items-center text-muted-foreground/60"
            >
              <Mono className="px-7 text-[10px] tracking-[0.3em]">
                {p}
              </Mono>
              <span className="text-accent/50 text-[8px]">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <main className="max-w-[1320px] mx-auto px-5 md:px-8">
        {/* SPEC SHEET */}
        <section id="spec" className="py-24 md:py-32">
          <SectionHeader
            index="01"
            label="TECHNICAL SPECIFICATIONS"
            title="Setup Sheet"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(236,239,247,0.08)] border border-[rgba(236,239,247,0.08)]">
            {SPEC_SHEET.map((group) => {
              const Icon = group.icon;
              return (
                <Reveal
                  key={group.unit}
                  className="bg-background"
                >
                  <div className="group h-full p-7 md:p-8 relative">
                    <span className="absolute top-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                    <div className="flex items-start justify-between mb-7">
                      <div>
                        <Mono className="text-[10px] tracking-[0.26em] text-accent-2 block">
                          {group.unit}
                        </Mono>
                        <div className="font-['Saira_Condensed'] text-xl mt-1.5 uppercase tracking-wide">
                          {group.label}
                        </div>
                      </div>
                      <Icon
                        size={20}
                        className="text-muted-foreground group-hover:text-accent transition-colors"
                      />
                    </div>
                    <ul className="space-y-3.5">
                      {group.items.map((s) => (
                        <li
                          key={s.name}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="flex items-center gap-2.5 text-[15px] text-foreground/85">
                            <ChevronRight
                              size={13}
                              className="text-accent shrink-0"
                            />
                            {s.name}
                          </span>
                          <Mono className="text-[9px] tracking-[0.1em] text-muted-foreground shrink-0">
                            {s.tag}
                          </Mono>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* SEASON LOG */}
        <section id="seasons" className="py-24 md:py-32">
          <SectionHeader
            index="02"
            label="SEASON LOG"
            title="Race History"
          />
          <div className="space-y-px bg-[rgba(236,239,247,0.08)] border border-[rgba(236,239,247,0.08)]">
            {SEASONS.map((s) => (
              <Reveal key={s.round} className="bg-background">
                <div className="group p-7 md:p-10 hover:bg-[rgba(12,16,38,0.5)] transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3">
                        <span className="font-['Saira_Condensed'] text-3xl text-accent">
                          {s.round}
                        </span>
                        <Mono className="text-[10px] tracking-[0.12em] text-foreground/70 border border-[rgba(236,239,247,0.14)] px-2 py-0.5">
                          {s.result}
                        </Mono>
                      </div>
                      <Mono className="mt-4 block text-[11px] tracking-[0.14em] text-accent-2">
                        {s.period}
                      </Mono>
                      <h3 className="mt-2 text-2xl leading-tight">
                        {s.role}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {s.company}
                      </p>
                    </div>
                    <div className="lg:col-span-8 lg:border-l lg:border-[rgba(236,239,247,0.08)] lg:pl-10">
                      <ul className="space-y-3">
                        {s.points.map((p, i) => (
                          <li
                            key={i}
                            className="flex gap-3.5 text-[15px] text-foreground/75 leading-relaxed"
                          >
                            <Mono className="text-muted-foreground text-[11px] pt-1 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </Mono>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GARAGE */}
        <section id="garage" className="py-24 md:py-32">
          <SectionHeader
            index="03"
            label="THE GARAGE"
            title="Builds"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GARAGE.map((p) => (
              <Reveal
                key={p.serial}
                className={p.featured ? "md:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(p)}
                  aria-label={`Lihat detail ${p.title}`}
                  className="group w-full text-left border border-[rgba(236,239,247,0.08)] hover:border-[rgba(236,239,247,0.2)] transition-colors h-full flex flex-col bg-surface"
                >
                  <div
                    className={`relative overflow-hidden bg-[#0c1026] ${p.featured ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`}
                  >
                    <ImageWithFallback
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05081a] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-4 left-5 font-['Saira_Condensed'] text-2xl text-foreground/60">
                      {p.serial}
                    </span>

                    {(p.video || (p.gallery?.length ?? 0) > 0) && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#05081a]/85 backdrop-blur border border-[rgba(236,239,247,0.16)] px-2.5 py-1">
                        {p.video && (p.gallery?.length ?? 0) > 0 ? (
                          <>
                            <Play size={10} className="text-accent fill-accent" />
                            <Mono className="text-[9px] tracking-[0.14em] text-foreground/90">
                              VIDEO + {(p.gallery?.length ?? 0) + 1} FOTO
                            </Mono>
                          </>
                        ) : p.video ? (
                          <>
                            <Play size={10} className="text-accent fill-accent" />
                            <Mono className="text-[9px] tracking-[0.14em] text-foreground/85">
                              VIDEO {p.video.duration}
                            </Mono>
                          </>
                        ) : (
                          <>
                            <Images size={10} className="text-accent" />
                            <Mono className="text-[9px] tracking-[0.14em] text-foreground/85">
                              {(p.gallery?.length ?? 0) + 1} FOTO
                            </Mono>
                          </>
                        )}
                      </div>
                    )}

                    <Mono className="absolute bottom-4 left-5 text-[9px] tracking-[0.18em] text-accent">
                      {p.award}
                    </Mono>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <Mono className="text-[9px] tracking-[0.18em] text-accent-2">
                      {p.meta}
                    </Mono>
                    <h3 className="mt-2.5 text-2xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-foreground/70 leading-relaxed flex-1 line-clamp-3">
                      {p.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.stack.map((t) => (
                        <Mono
                          key={t}
                          className="text-[9px] tracking-[0.14em] text-muted-foreground"
                        >
                          {t}
                        </Mono>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[rgba(236,239,247,0.08)] flex items-center justify-between gap-4">
                      <Mono className="text-[9px] tracking-[0.14em] text-muted-foreground">
                        {p.video && (p.gallery?.length ?? 0) > 0
                          ? "LIHAT VIDEO & FOTO"
                          : p.video
                            ? "LIHAT REKAMAN"
                            : "LIHAT GALERI"}
                      </Mono>
                      <span className="flex items-center gap-2 text-accent text-[11px] font-['JetBrains_Mono'] tracking-[0.12em]">
                        DETAIL
                        <ArrowUpRight
                          size={14}
                          className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RUN LOG */}
        <section id="runlog" className="py-24 md:py-32">
          <SectionHeader
            index="04"
            label="RUN LOG — ABUROBOCON 2026"
            title="Field Test"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[rgba(236,239,247,0.08)] border border-[rgba(236,239,247,0.08)]">
            <div className="lg:col-span-8 bg-black p-2 md:p-3">
              <video
                controls
                playsInline
                preload="metadata"
                poster={runGamePoster}
                className="w-full aspect-video bg-black"
              >
                <source src={runGameVideo} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </div>
            <div className="lg:col-span-4 bg-background p-7 md:p-9 flex flex-col">
              <Mono className="text-[10px] tracking-[0.2em] text-accent-2">
                2 ROBOT · 1 OPERATOR · 3:22
              </Mono>
              <h3 className="mt-3 text-2xl leading-tight">
                Latihan Run Game Dua Robot
              </h3>
              <p className="mt-4 text-[15px] text-foreground/70 leading-relaxed">
                Rekaman layar uji lapangan menjelang ABUROBOCON
                2026. Operator mengendalikan robot R1 manual
                melalui aplikasi controller Android kustom via
                UDP, sementara robot R2 bergerak full otonom
                tanpa kendali operator. Kedua robot berkoordinasi
                dan berkomunikasi murni melalui deteksi kode
                visual ArUco serta sinyal kedipan LED.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/65">
                {[
                  "Dual camera feed + telemetri real-time",
                  "R1 dikontrol manual via Android (UDP)",
                  "R2 beroperasi full otonom tanpa kendali",
                  "Komunikasi antar robot: ArUco & kedipan LED",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={13}
                      className="text-accent shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Mono className="mt-auto pt-7 text-[9px] tracking-[0.16em] text-muted-foreground/70">
                RAW FOOTAGE · TANPA EDIT
              </Mono>
            </div>
          </div>
        </section>
      </main>

      {/* ===== CONTACT / PIT WALL ===== */}
      <section
        id="pitwall"
        className="border-t border-[rgba(236,239,247,0.08)] bg-[rgba(12,16,38,0.5)]"
      >
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 py-24 md:py-32">
          <SectionHeader
            index="05"
            label="TEAM RADIO"
            title="Get In Touch"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-lg text-foreground/75 leading-relaxed mb-9">
                Terbuka untuk kesempatan magang, kolaborasi
                proyek robotika, atau diskusi seputar embedded,
                ROS 2, dan computer vision. Kirim pesan — saya
                akan segera membalas.
              </p>
              <div className="border-t border-[rgba(236,239,247,0.08)]">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group flex items-center gap-4 py-5 border-b border-[rgba(236,239,247,0.08)] hover:px-2 transition-all"
                    >
                      <Icon
                        size={17}
                        className="text-muted-foreground group-hover:text-accent transition-colors"
                      />
                      <div className="flex-1">
                        <Mono className="text-[9px] tracking-[0.24em] text-muted-foreground block">
                          {s.label}
                        </Mono>
                        <span className="text-[15px]">
                          {s.handle}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              {sent ? (
                <div className="border border-[rgba(236,239,247,0.1)] py-16 px-6 text-center">
                  <div className="inline-grid place-items-center w-14 h-14 bg-accent text-accent-foreground mb-5">
                    {sent === "mail" ? (
                      <Mail size={26} />
                    ) : (
                      <CheckCircle2 size={26} />
                    )}
                  </div>
                  <h3 className="text-2xl">
                    {sent === "mail"
                      ? "Email Siap Dikirim"
                      : "Pesan Terkirim"}
                  </h3>
                  <Mono className="mt-2 block text-[12px] tracking-[0.1em] text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {sent === "mail"
                      ? "Aplikasi email Anda sudah terbuka dengan pesan yang terisi otomatis — tinggal tekan kirim."
                      : "Terima kasih — saya akan segera membalas."}
                  </Mono>
                  <button
                    onClick={() => setSent(null)}
                    className="mt-7 font-['Saira_Condensed'] tracking-[0.04em] text-base border-b border-[rgba(236,239,247,0.3)] hover:border-accent pb-0.5 transition-colors"
                  >
                    KIRIM PESAN LAIN
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-[rgba(236,239,247,0.1)] p-7 md:p-9 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <Mono className="text-[9px] tracking-[0.2em] text-muted-foreground block mb-2">
                        NAMA
                      </Mono>
                      <input
                        required
                        name="name"
                        placeholder="Nama Anda"
                        className="w-full bg-transparent border-b border-[rgba(236,239,247,0.18)] py-2.5 focus:border-accent transition-colors placeholder:text-muted-foreground/50"
                      />
                    </label>
                    <label className="block">
                      <Mono className="text-[9px] tracking-[0.2em] text-muted-foreground block mb-2">
                        EMAIL
                      </Mono>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="email@contoh.com"
                        className="w-full bg-transparent border-b border-[rgba(236,239,247,0.18)] py-2.5 focus:border-accent transition-colors placeholder:text-muted-foreground/50"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <Mono className="text-[9px] tracking-[0.2em] text-muted-foreground block mb-2">
                      SUBJEK
                    </Mono>
                    <input
                      required
                      name="subject"
                      placeholder="Perihal"
                      className="w-full bg-transparent border-b border-[rgba(236,239,247,0.18)] py-2.5 focus:border-accent transition-colors placeholder:text-muted-foreground/50"
                    />
                  </label>
                  <label className="block">
                    <Mono className="text-[9px] tracking-[0.2em] text-muted-foreground block mb-2">
                      PESAN
                    </Mono>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tulis pesan Anda…"
                      className="w-full bg-transparent border-b border-[rgba(236,239,247,0.18)] py-2.5 focus:border-accent transition-colors resize-none placeholder:text-muted-foreground/50"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group flex items-center gap-3 bg-accent text-accent-foreground px-8 py-3.5 disabled:opacity-60 hover:gap-4 transition-all"
                  >
                    <Radio size={16} />
                    <span className="font-['Saira_Condensed'] text-lg tracking-[0.04em]">
                      {isSending ? "MENGIRIM…" : "KIRIM PESAN"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[rgba(236,239,247,0.08)]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 py-9 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TeamMark className="h-7 w-7" />
            <Mono className="text-[11px] tracking-[0.14em] text-muted-foreground">
              © {TEAM.season} {PROFILE.name} —{" "}
              {TEAM.constructor}
            </Mono>
          </div>
          <Mono className="text-[10px] tracking-[0.18em] text-muted-foreground/70">
            ROBOTICS & EMBEDDED SYSTEMS · UNY · REACT + TAILWIND
          </Mono>
        </div>
      </footer>

      {activeProject && (
        <ProjectDialog
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}