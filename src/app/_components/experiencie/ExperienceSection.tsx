'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, experiences } from '@/app/const/Experience'

export const ExperienceSection = () => {
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
              &gt; career.log
            </motion.span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative space-y-12"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative flex gap-8"
            >
              {/* Timeline node */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-lg ${exp.current ? 'bg-emerald-500/10' : 'bg-gray-800'} 
                              flex items-center justify-center relative z-10`}>
                  <exp.icon className={`w-8 h-8 ${exp.current ? 'text-emerald-400' : 'text-gray-400'}`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 pb-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    {exp.title}
                    {exp.current && (
                      <span className="text-xs font-normal px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                        Current
                      </span>
                    )}
                  </h3>
                  <div className="text-emerald-400 font-mono text-sm">
                    {exp.company} • {exp.period}
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
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