import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiFigma,
  SiNextdotjs, SiDotnet, SiBootstrap,
  SiRedux, SiPostman,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import profilePhoto from "@/assets/profile-3d.png";

/* ============================================================
   PERSONAL INFO — edit this section to update your basic info
   ============================================================ */
export const personal = {
  name: "Vaibhavi Dave",
  roles: [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    ".NET Developer",
    "Frontend Specialist",
  ],
  tagline:
    "I build responsive, scalable web applications using modern technologies like React, .NET, MERN Stack, and more.",
  email: "vaibhavidavee@gmail.com",
  resumeUrl: "/resume.pdf", // place resume.pdf in the /public folder
  photo: profilePhoto,       // replace src/assets/profile.jpg with your photo
  location: "India 🌏",
  socials: {
    github: "https://github.com/vaibhavi-development-project",
    linkedin: "https://www.linkedin.com/in/vaibhavi-dave-440a56376/",
    twitter: "",
  },
};

/* ============================================================
   ABOUT — paragraphs displayed in the About section
   ============================================================ */
export const about = {
  paragraphs: [
    "I'm a Full Stack Web Developer with experience building responsive and scalable web applications using modern technologies like React, Node.js, .NET and C#.",
    "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have strong expertise in .NET/C# for enterprise-grade backend solutions.",
    "Writing code that not only works, but feels right. Designing and developing applications that people genuinely enjoy using.",
  ],
  stats: [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years coding" },
    { value: "5+", label: "Happy clients" },
  ],
};

/* ============================================================
   SKILLS — add / remove freely. Each skill needs a react-icon.
   Browse icons at https://react-icons.github.io/react-icons/icons/si/
   ============================================================ */
export type Skill = { name: string; icon: IconType; color: string };
export type SkillCategory = { title: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "C#", icon: SiDotnet, color: "#239120" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQL Server", icon: FaDatabase, color: "#CC2927" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

/* Currently learning — small badges */
export const currentlyLearning = [
  "System Design",
  "Java",
  "Docker",
  "Angular",
  "Microservices",
];

/* ============================================================
   QUICK HIGHLIGHTS — small cards under the hero
   ============================================================ */
export type Highlight = { value: string; label: string; sub: string };
export const highlights: Highlight[] = [
  { value: "10+", label: "Projects shipped", sub: "Web apps & ML demos" },
  { value: "10+", label: "Technologies", sub: "React, .NET, MERN & more" },
  { value: "2+", label: "Years building", sub: "Always learning" },
  { value: "∞", label: "Curiosity", sub: "Every day a new thing" },
];

/* ============================================================
   WHAT I'M EXPLORING — Web Dev → AI / Data Science journey
   ============================================================ */
export type ExploreItem = { title: string; desc: string; tag: string };
export const exploring: ExploreItem[] = [
  {
    tag: "Now",
    title: "Building Full-Stack Web Applications",
desc: "Building responsive full-stack applications using React, ASP.NET Core, C#, and SQL with clean backend integration.",  },
  {
    tag: "Learning",
    title: "Docker & Java",
    desc: "Exploring containerization with Docker and strengthening core programming concepts using Java.",
  },
  {
    tag: "Next",
    title: "System Design & Microservices",
    desc: "Learning scalable architecture, microservices, API communication, and distributed system fundamentals.",
  },
];
/* ============================================================
   PROJECTS — add as many as you want. Each project needs an image.
   Drop project images into src/assets/ and import them at the top.
   ============================================================ */
export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Frontend" | "Full Stack" | "Backend";
  demo?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Dynamic Furniture Showcase",
    description:
    "A modern furniture showcase web app featuring a premium UI/UX, interactive product browsing, WhatsApp integration, and an admin panel for dynamic product management with real-time updates.",
    image: project1,
    tags: ["React", "Framer Motion", "Node.js",  "TypeScript"],
    category: "Full Stack",
    demo: "https://example.com",
    code: "https://github.com/vaibhavi-development-project/dynamic-furniture-showcase",
    featured: true,
  },
  {
    title: "RePlate – Food Waste Reduction Platform",
    description:
    "A modern food rescue platform where restaurants can list surplus food and customers can discover, reserve, and pick up meals in real-time through a premium UI/UX experience.",
    image: project2,
    tags: ["React", "TypeScript", "JWT","Radix UI"],
    category: "Full Stack",
    demo: "https://example.com",
    code: "https://github.com/vaibhavi-development-project/RePlate",
  },
  {
    title: "Cravora – Campus Food & Delivery Platform",
    description:
      "Full-stack e-commerce site with product filtering, cart, secure checkout and an admin panel.",
    image: project3,
    tags: ["Express.js","MongoDB", "Node.js", "Cloudinary"],
    category: "Full Stack",
    demo: "https://example.com",
    code: "https://github.com/vaibhavi-development-project/CampusEats",
  },
  {
    title: "CourseHub – Learning Management System",
    description:
    "A web-based learning management system for managing courses and student enrollments with authentication and scalable REST APIs.",
    image: project4,
    tags: ["Node.js", "Express", "React","MongoDB"],
    category: "Full Stack",
    demo: "https://example.com",
    code: "https://github.com/vaibhavi-development-project/coursehub-platform",
  },
];

/* ============================================================
   RESUME / TIMELINE
   ============================================================ */
export type TimelineItem = {
  year: string;
  title: string;
  place: string;
  desc: string;
  type: "work" | "education";
};
export const timeline: TimelineItem[] = [
  {
    year: "2026 — Present",
    title: "Freelance Web Developer",
    place: "Remote",
    desc: "Designing and developing responsive websites and full-stack web applications for startups and clients.",
    type: "work",
  },
  {
    year: "2023 — 2026",
    title: "B.Sc. Information Technology",
    place: "University of Mumbai",
    desc: "Studied Data Structures, Algorithms, Web Development, Databases, Software Engineering and AI.",
    type: "education",
  },
  {
    year: "2022 — 2023",
    title: "Higher Secondary Certificate",
    place: "Maharashtra Board",
    desc: "Completed higher secondary education with strong focus on IT and Mathematics.",
    type: "education",
  },
];