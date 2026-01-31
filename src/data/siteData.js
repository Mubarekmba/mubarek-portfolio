// src/data/siteData.js
import profileImage from "../assets/mub.jpg";
import amazon from "../assets/amazon-project.jpeg";
import apple from "../assets/apple-project.jpeg";
import evangadif from "../assets/evangadi-forum.jpeg";
import netflix from "../assets/netflix project.jpeg";

export const siteData = {
  brand: "Mub-Dev",
  person: {
    name: "Mubarek Mohammedb.",
    role: "Full-Stack Web App Developer",
    location: "Addis Ababa, Ethiopia",
    email: "mubarekmohammedb@gmail.com",
    telegram: "@hakimedad",

    profileImage,
  },
  hero: {
    subtitle: "Hi, I'm Mubarek Mohammedb 👋",
    titlePrefix: "I create",
    typewriterWords: [
      "Sleek Frontends",
      "Robust Backends",
      "Full-Stack Apps",
      "Digital Solutions",
    ],
    description:
      "I’m a Full-Stack Developer who loves turning complex ideas into simple, beautiful, and functional web applications. Whether it's the design you see or the logic you don't—I'm here to build it right.",
    cta: { label: "Let's Talk", href: "#contact" },
    secondaryCta: { label: "See My Work", href: "#projects" },
  },
  about: {
    heading: "The Professional Story",
    title: "Crafting high-performance web apps",
    paragraphs: [
      "I am a Full-Stack Developer based in Addis Ababa with a passion for building scalable, community-driven platforms. My approach combines the precision of frontend engineering with the robustness of backend architecture.",
      "Beyond code, I leverage design tools like Figma and Photoshop to ensure every product I build feels premium. I thrive in collaborative environments, using tools like Notion and Trello to maintain clean, agile workflows.",
    ],
    highlights: [
      { label: "Built Projects", value: "10+" },
      { label: "Experience", value: "1 yr" },
      { label: "Code Quality", value: "A+" },
    ],
  },
  skills: [
    {
      title: "Core Development",
      items: [
        { name: "React & JavaScript", level: 80 },
        { name: "Node.js & Express", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap 5", level: 95 },
      ],
    },
    {
      title: "Backend & Data",
      items: [
        { name: "MySQL Database", level: 70 },
        { name: "Firebase Auth/DB", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "Server Logic", level: 80 },
      ],
    },
    {
      title: "Design & Workflow",
      items: [
        { name: "Figma & Canva", level: 70 },
        { name: "Photoshop", level: 70 },
        { name: "Notion & Trello", level: 70 },
        { name: "Git & Version Control", level: 80 },
      ],
    },
  ],
  projects: [
    {
      title: "Evangadi Forum Web App",
      category: "Full-Stack System",
      description:
        "A community Q&A platform featuring secure user authentication, real-time question posting, and persistent answer threads. Engineered with React and a robust backend API.",
      tags: ["React", "NodeJS", "MySQL", "CSS"],
      image: evangadif,
      links: {
        live: "https://evangadiforum.mubarekmohammedb.com/",
        code: "https://github.com/Mubarekmba/evangadi-forum-2025.git",
      },
    },
    {
      title: "Amazon Full-Stack Clone",
      category: "E-Commerce",
      description:
        "A comprehensive e-commerce replica with functional user sign-ins, product listings, and a dynamic shopping cart system powered by backend integration.",
      tags: ["React", "NodeJS", "Firebase", "Bootstrap"],
      image: amazon,
      links: {
        live: "https://mub-amazon-clone-2025.netlify.app/",
        code: "https://github.com/Mubarekmba/amazon-clone-2025.git",
      },
    },
    {
      title: "Netflix UI Clone",
      category: "Frontend Dev",
      description:
        "A high-fidelity Netflix clone focusing on dynamic data fetching from movie APIs and a high-performance responsive layout.",
      tags: ["React", "API Integration", "CSS", "Bootstrap"],
      image: netflix,
      links: {
        live: "https://mubarekmba.github.io/Netflix-Clone-2025/",
        code: "https://github.com/Mubarekmba/Netflix-Clone-2025.git",
      },
    },
    {
      title: "Apple Website Clone",
      category: "Frontend Dev",
      description:
        "An aesthetically precise clone of the Apple homepage, emphasizing modern CSS layouts, spacing, and high-quality asset management.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      image: apple,
      links: {
        live: "#",
        code: "https://github.com/Mubarekmba/apple-clone-2025.git",
      },
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/mubarek-mohammedberhan-582a5b104",
    github: "https://github.com/Mubarekmba",
    twitter: "#",
  },
  footerNote: "© 2026 Mubarek Mohammedb.",
};
