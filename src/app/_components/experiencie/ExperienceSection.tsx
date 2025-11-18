'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, experiences } from '@/app/const/Experience'

export const ExperienceSection = () => {
  return (
    <div className="min-h-full w-full flex items-start justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-black">
      <div className="max-w-4xl w-full space-y-8 sm:space-y-12 md:space-y-16">
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
              &gt; career.log
            </motion.span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-8 sm:space-y-12"
        >
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent hidden sm:block" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative flex gap-4 sm:gap-6 md:gap-8"
            >
              <div className="relative flex-shrink-0">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg ${exp.current ? 'bg-emerald-500/10' : 'bg-gray-800'}
                              flex items-center justify-center relative z-10`}>
                  <exp.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${exp.current ? 'text-emerald-400' : 'text-gray-400'}`} />
                </div>
              </div>
                <div className="flex-1 space-y-3 sm:space-y-4 pb-4 sm:pb-8">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white flex flex-wrap items-center gap-2 sm:gap-3 leading-tight">
                    {exp.title}
                    {exp.current && (
                      <span className="text-xs font-normal px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </h3>
                  <div className="text-emerald-400 font-mono text-xs sm:text-sm">
                    {exp.company} • {exp.period}
                  </div>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}