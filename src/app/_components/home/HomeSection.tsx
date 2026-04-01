'use client'

import { motion } from 'framer-motion'
import { Terminal, Server, Code2, ArrowDown } from 'lucide-react'

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    }
  }
}

export const HomeSection = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-black px-4 sm:px-6 lg:px-12 py-16 sm:py-20 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-600/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-emerald-500 text-xs sm:text-sm md:text-base flex items-center gap-2"
          >
            <span className="text-emerald-500/50">~/portfolio</span>
            <span className="text-gray-600">$</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              whoami
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-emerald-400 ml-0.5"
            >
              _
            </motion.span>
          </motion.div>

          {/* Name and title */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Facundo Duque
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl"
            >
              Software Engineer &{' '}
              <span className="text-emerald-400">Full-Stack Developer</span>
            </motion.h2>
          </div>

          {/* Specialty badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-2"
          >
            {[
              { icon: Terminal, label: 'Frontend', desc: 'Next.js / GSAP' },
              { icon: Server, label: 'Backend', desc: 'Node / APIs' },
              { icon: Code2, label: 'Blockchain', desc: 'Solidity / DeFi' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                className="group flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <span className="text-sm sm:text-base text-white font-semibold block leading-tight">{item.label}</span>
                  <span className="text-xs text-gray-500 font-mono">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-6 sm:pt-10 font-mono text-xs text-gray-600 flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-500">Available for projects</span>
            </span>
            <span className="text-gray-800">|</span>
            <span className="text-gray-500">Based in Uruguay</span>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-30"
        >
          <ArrowDown className="w-4 h-4 text-emerald-500" />
        </motion.div>
      </div>

      {/* Top gradient line */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />
    </div>
  )
}
