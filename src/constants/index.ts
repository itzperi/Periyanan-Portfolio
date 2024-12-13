import { GithubIcon, LinkedinIcon } from "lucide-react";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Future Intern",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other technologies",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to other developers",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Hyptonism Private Lmtd",
    date: "Dec 2023 - Present",
    points: [
      "Building responsive and interactive user interfaces using modern JavaScript frameworks",
      "Collaborating with cross-functional teams to create high-quality products",
      "Optimizing applications for maximum speed and scalability",
    ],
  },
];

export const projects = [
  {
    name: "Brainwave SAAS Landing Page",
    description: "A visually stunning landing page with exciting animations, parallax effects, and a sleek bento box layout. Features a beautiful hero section with cursor-reactive shapes.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "animation", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    source_code_link: "https://github.com/Periyanan/Project",
    live_demo_link: "https://brainwave-peri-project/",
  },
  {
    name: "Marketing Agency Website",
    description: "A comprehensive marketing agency website showcasing services, portfolio, and client testimonials. Features modern design with smooth animations and interactive elements.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    source_code_link: "https://github.com/Periyanan",
    live_demo_link: "https://strong-zabaione-f16ce3.netlify.app/",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/itzperi",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/periyanan-p",
  },
];