import { Code2, GanttChart, Rocket, Truck } from 'lucide-react'

export const experiences = [
  {
    title: "Founder & CTO",
    company: "Punto Centro",
    period: "2025 - Present",
    description: "Tech-powered courier and logistics company managing 500+ monthly packages and billing up to $10,000 USD per client. Built the platform from scratch with QR-based tracking, AI-automated delivery routes, and a complete management system for collections and operations.",
    icon: Truck,
    current: true,
  },
  {
    title: "Founder",
    company: "duque.studio",
    period: "2026 - Present",
    description: "Web development agency specializing in the music and nightlife industry. We build high-performance websites with GSAP, Lenis, and Next.js for DJs, producers, venues, and festivals. We come from the scene — we understand what a promoter needs when tickets aren't moving and that a DJ's site needs to load fast on backstage wifi.",
    icon: Rocket,
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "Definecreative",
    period: "2023 - Present",
    description: "Developing full-stack applications and blockchain solutions with a focus on the Polkadot ecosystem. Working on smart contracts, centralized and decentralized applications for one of the most important companies in music.",
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