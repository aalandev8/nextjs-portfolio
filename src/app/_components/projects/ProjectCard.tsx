'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  techs,
  githubLink,
  liveLink,
  image,
  index
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className="group relative bg-gray-950 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
    >
      {/* Image section with overlay */}
      <div className="h-44 sm:h-52 md:h-56 w-full relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image || '/api/placeholder/600/300'})` }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating links on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {githubLink && (
            <a
              href={githubLink}
              className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-gray-700/50 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-gray-700/50 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4 relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-emerald-50 transition-colors">
            {title}
          </h3>
          {liveLink && (
            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-0.5" />
          )}
        </div>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {techs.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/5 text-emerald-400/80 border border-emerald-500/10 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
