'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { ProjectCard } from './ProjectCard'
import {PROJECTS} from '@/app/const/Projects'

export const ProjectsSection = () => {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="font-mono text-emerald-500 text-sm md:text-base mb-4">
            <span>&gt; projects.map(renderProject)</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          
          <div className="flex items-center space-x-4">
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow"></div>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-emerald-500" />
              <span className="text-gray-400 font-mono">/projects</span>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow"></div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
        
        {/* Terminal decorative element */}
        <div className="mt-20 pt-6 border-t border-gray-800">
          <div className="font-mono text-xs text-gray-600">
            <div className="text-emerald-500/50">$ Last commit: <span className="text-gray-500">feature/projects-section</span></div>
            <div className="text-emerald-500/50">$ <span className="text-gray-500 animate-pulse">_</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}