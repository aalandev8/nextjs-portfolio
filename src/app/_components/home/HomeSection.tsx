'use client'

import { motion } from 'framer-motion'
import { Terminal, Server, Code2 } from 'lucide-react'

export const HomeSection = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Intro text with typing animation */}
          <div className="font-mono text-emerald-500 text-sm md:text-base">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              &gt; _
            </motion.span>
          </div>

          {/* Name and role */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Facundo Duque
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400">
              Software engineer & Fullstack Developer
            </h2>
          </div>

          {/* Skills section */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-300 font-bold">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
              <Server className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-300 font-bold">Backend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg">
              <Code2 className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-300 font-bold">Blockchain</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle decorative gradient */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />
      </div>
    </div>
  )
}