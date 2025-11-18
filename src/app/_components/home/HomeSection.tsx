'use client'

import { motion } from 'framer-motion'
import { Terminal, Server, Code2 } from 'lucide-react'

export const HomeSection = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-black px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="font-mono text-emerald-500 text-xs sm:text-sm md:text-base">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              &gt; _
            </motion.span>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              Facundo Duque
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
              Software engineer & Fullstack Developer
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
            <div className="flex items-center space-x-2 bg-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover-desktop-only hover:bg-gray-800 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span className="text-sm sm:text-base text-gray-300 font-bold">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover-desktop-only hover:bg-gray-800 transition-colors">
              <Server className="w-4 h-4 text-emerald-500" />
              <span className="text-sm sm:text-base text-gray-300 font-bold">Backend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover-desktop-only hover:bg-gray-800 transition-colors">
              <Code2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm sm:text-base text-gray-300 font-bold">Blockchain</span>
            </div>
          </div>
        </motion.div>
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />
      </div>
    </div>
  )
}