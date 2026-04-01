import { Code2, Boxes, Rocket } from 'lucide-react'

export const Highlights = [
  {
    icon: Code2,
    title: "Frontend & Creative Development",
    description: "Building high-performance websites and immersive web experiences with Next.js, GSAP, Lenis, and Framer Motion. Focused on smooth animations, creative interactions, and pixel-perfect execution.",
    tags: ["Next.js", "GSAP", "Lenis", "Framer Motion"],
    size: "large" as const
  },
  {
    icon: Boxes,
    title: "Blockchain & Smart Contracts",
    description: "Developing secure smart contracts and decentralized applications with Solidity. Working on DeFi protocols and dApps in the Polkadot ecosystem.",
    tags: ["Solidity", "Hardhat", "Foundry", "Ethers.js"],
    size: "medium" as const
  },
  {
    icon: Rocket,
    title: "Product & Full-Stack",
    description: "From idea to production — building full-stack platforms, AI-powered logistics systems, and turning business problems into scalable products.",
    tags: ["Node.js", "TypeScript", "AI", "Architecture"],
    size: "medium" as const
  }
]