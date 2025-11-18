'use client'

import { motion } from 'framer-motion'
import { Highlights } from '@/app/const'

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <div className="min-h-full w-full flex items-start justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-black">
      <div className="max-w-6xl w-full space-y-8 sm:space-y-12">
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
              &gt; whoami
            </motion.span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            About Me
          </h2>

          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Full-stack blockchain developer specializing in building decentralized applications from smart contracts to user interfaces.
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              I focus on the intersection of product development and blockchain technology, creating solutions that solve real business problems with Web3.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {Highlights.map((item) => {
            const isLarge = item.size === 'large'

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`${
                  isLarge ? 'md:col-span-2' : 'md:col-span-1'
                } group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-emerald-500/10 hover-desktop-only hover:border-emerald-500/30 transition-all duration-300 p-6 sm:p-8`}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4 sm:space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent blur-2xl" />
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-4"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow" />
            <span className="text-xs sm:text-sm font-mono text-emerald-500">Tech Stack</span>
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {['Solidity', 'Next.js', 'TypeScript', 'Hardhat', 'Ethers.js', 'React', 'Tailwind', 'Foundry', 'Web3.js', 'Node.js'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 hover-desktop-only hover:border-emerald-500/30 transition-colors text-center"
              >
                <span className="text-sm text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
