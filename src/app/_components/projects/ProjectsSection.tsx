'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { ProjectCard } from './ProjectCard'
import {PROJECTS} from '@/app/const/Projects'

export const ProjectsSection = () => {
  return (
    <div className="min-h-full w-full bg-black px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="font-mono text-emerald-500 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
            <span>&gt; projects.map(renderProject)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">Projects</h2>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
              <span className="text-xs sm:text-sm text-gray-400 font-mono">/projects</span>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow"></div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
        <div className="mt-8 sm:mt-12 md:mt-20 pt-4 sm:pt-6 border-t border-gray-800">
          <div className="font-mono text-xs text-gray-600">
            <div className="text-emerald-500/50">$ Last commit: <span className="text-gray-500">feature/projects-section</span></div>
            <div className="text-emerald-500/50">$ <span className="text-gray-500 animate-pulse">_</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}