import { Project } from '../_components/projects/ProjectCard';

export const PROJECTS: Project[] = [
  {
    title: "Recetas Ya",
    description: "AI bot to provide recipes from 3 or more ingredients. This is a sideproject that I am looking to scale up to have a consolidated app with users. ",
    techs: ["NextJS", "TailwindCSS", "OpenAI API", "NestJS"],
    liveLink: "https://recetas-ya.netlify.app",
    image: "/recetas-ya.png" 
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with futuristic style and smooth animations.",
    techs: ["Next.js", "Framer Motion", "TailwindCSS"],
    githubLink: "https://github.com/aalandev8/nextjs-portfolio",
    liveLink: "https://aalandev.xyz",
    image: "/aalandevPortfolio.png"
  }
];