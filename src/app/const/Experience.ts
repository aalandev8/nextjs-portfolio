import { Code2, GanttChart, Rocket } from 'lucide-react'

export const experiences = [
  {
    title: "Founder & Web Developer",
    company: "duque.studio",
    period: "2024 - Present",
    description: "Web developer and founder of duque.studio, designing premium websites for the music and nightlife industry — DJs, producers, venues, festivals, photographers, and visual artists.",
    icon: Rocket,
    current: true,
  },
  {
    title: "Full Stack developer",
    company: "Definecreative",
    period: "2023 - Present",
    description: "Developing full-stack applications and blockchain solutions with a focus on the Polkadot ecosystem. Working on smart contracts,centralized and decentralized applications to one of most important companies of music.",
    icon: GanttChart,
    current: true,
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2022 - 2023",
    description: "Built various web applications for clients, gaining hands-on experience with modern development technologies and project management.",
    icon: Code2,
    current: false,
  },
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
}