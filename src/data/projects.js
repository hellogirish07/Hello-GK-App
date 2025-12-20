import qcs from "../assets/projects/codepan-mini.png";
import mos from "../assets/projects/MOS.png";
import pdf from "../assets/projects/pdf.png";
import bg from "../assets/projects/BG-remover.png";
import weather from "../assets/projects/weather.png";
import qr from "../assets/projects/QR Code.png";

export const projects = [
  {
    id: 1,
    title: "CodePan Mini",
    desc: "Live code editor with instant preview.",
    tech: ["React JS", "Tailwind CSS"],
    image: qcs,
    link: "https://girish-18-codepen-mini.netlify.app/",
  },
  {
    id: 2,
    title: "MotionOnScroll (MOS)",
    desc: "Lightweight scroll animation library.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: mos,
    link: "https://motion-on-scroll.netlify.app/",
  },
  {
    id: 3,
    title: "PDF Merger App",
    desc: "Merge PDFs directly in browser.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: pdf,
    link: "https://girish18-pdf-merger.netlify.app/",
  },
  {
    id: 4,
    title: "Background Remover",
    desc: "Remove image backgrounds via API.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: bg,
    link: "https://girish18-bg-remover.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    desc: "Real-time weather with forecast.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: weather,
    link: "https://girish18-weathe-app.netlify.app/",
  },
  {
    id: 6,
    title: "QR Code Generator",
    desc: "Generate QR codes instantly.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: qr,
    link: "https://girish18-qr-code.netlify.app/",
  },
];
