'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Definimos la interfaz del proyecto dentro del mismo archivo
export interface Project {
  title: string;
  description: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

// Definimos las props del componente
interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  techs, 
  githubLink, 
  liveLink, 
  image, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-gray-900 border border-emerald-500/20 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="h-48 w-full bg-gray-800 relative overflow-hidden">
        <motion.div
          initial={{ filter: 'blur(5px)', opacity: 0.8 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full bg-gradient-to-br from-gray-900 to-emerald-900/30 absolute top-0 left-0 z-10"
        />
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${image || '/api/placeholder/600/300'})` }}
        >
        </div>
        {/* Overlay with terminal effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/70 z-0">
          <div className="p-4 font-mono text-xs text-emerald-500/50">
            <div>$ Project::init(&ldquo;{title}&ldquo;);</div>
            <div>$ Loading assets...</div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex space-x-2">
            {githubLink && (
              <a href={githubLink} className="text-gray-400 hover:text-emerald-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} className="text-gray-400 hover:text-emerald-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-md bg-gray-800 text-emerald-400 border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}