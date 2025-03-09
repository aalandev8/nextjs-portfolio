'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code2, Binary, Lightbulb } from 'lucide-react'

export const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Engineering Background",
      description: "Software Engineering student with a strong foundation in problem-solving and analytical thinking",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building modern web applications with a focus on clean architecture and user experience",
    },
    {
      icon: Binary,
      title: "Blockchain Technology",
      description: "Exploring decentralized solutions and smart contract development",
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Passionate about leveraging technology to create impactful solutions",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-black">
      <div className="max-w-4xl w-full space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        > 
          <div className="font-mono text-emerald-500 text-sm md:text-base">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              &gt; whoami
            </motion.span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              Engineering student and software developer with a passion for building innovative solutions. 
              I combine my technical expertise with engineering principles to create robust and scalable applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Currently focused on full-stack development and blockchain technology, always eager to embrace new challenges 
              and contribute to meaningful projects.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="p-6 rounded-lg bg-gray-900/50 border border-emerald-500/10
                        hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10
                              flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle gradient line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>
    </div>
  )
}