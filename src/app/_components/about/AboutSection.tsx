'use client'

import { motion } from 'framer-motion'
import { Highlights } from '@/app/const'
import {
  SiNextdotjs, SiTypescript, SiReact, SiGreensock, SiSolidity,
  SiNodedotjs, SiTailwindcss, SiEthereum
} from 'react-icons/si'
import { TbHammer, TbBrandFramerMotion } from 'react-icons/tb'

const techStack = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-blue-400' },
  { name: 'React', icon: SiReact, color: 'group-hover:text-cyan-400' },
  { name: 'GSAP', icon: SiGreensock, color: 'group-hover:text-green-400' },
  { name: 'Framer Motion', icon: TbBrandFramerMotion, color: 'group-hover:text-purple-400' },
  { name: 'Solidity', icon: SiSolidity, color: 'group-hover:text-gray-300' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-green-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'group-hover:text-cyan-300' },
  { name: 'Ethers.js', icon: SiEthereum, color: 'group-hover:text-indigo-400' },
  { name: 'Foundry', icon: TbHammer, color: 'group-hover:text-orange-400' },
]

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-full w-full flex items-start justify-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-20 pb-16 bg-black">
      <div className="max-w-6xl w-full space-y-10 sm:space-y-14">
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
              Full-stack developer and founder building across the entire stack — from high-performance frontends with GSAP and Next.js to smart contracts and blockchain infrastructure.
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
              I run a web studio for the music and nightlife industry, build AI-powered logistics platforms, and develop decentralized applications for the Polkadot ecosystem. I focus on turning real business problems into products that work.
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-3 pt-2"
          >
            <span className="text-xs sm:text-sm font-mono text-gray-500">
              🎓 B.Sc. in Computer Science — <span className="text-gray-400">Universidad de Montevideo</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Bento Grid - Redesigned */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
        >
          {Highlights.map((item, index) => {
            const isLarge = item.size === 'large'
            const gradients = [
              'from-emerald-500/10 via-emerald-600/5 to-transparent',
              'from-cyan-500/10 via-blue-600/5 to-transparent',
              'from-violet-500/10 via-purple-600/5 to-transparent',
            ]
            const accents = [
              'emerald',
              'cyan',
              'violet',
            ]
            const accent = accents[index % accents.length]
            const borderColors = [
              'border-emerald-500/20 hover:border-emerald-500/50',
              'border-cyan-500/20 hover:border-cyan-500/50',
              'border-violet-500/20 hover:border-violet-500/50',
            ]
            const iconBgs = [
              'bg-emerald-500/10 ring-emerald-500/30',
              'bg-cyan-500/10 ring-cyan-500/30',
              'bg-violet-500/10 ring-violet-500/30',
            ]
            const iconColors = [
              'text-emerald-400',
              'text-cyan-400',
              'text-violet-400',
            ]
            const tagStyles = [
              'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
              'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
              'bg-violet-500/10 text-violet-400 border-violet-500/20',
            ]

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`${isLarge ? 'md:col-span-12' : 'md:col-span-6'
                  } group relative overflow-hidden rounded-2xl bg-gray-950 border ${borderColors[index % borderColors.length]} transition-all duration-500 p-6 sm:p-8`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Decorative corner glow */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 bg-${accent}-500/5 rounded-full blur-3xl group-hover:bg-${accent}-500/10 transition-all duration-500`} />

                {/* Decorative line */}
                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${accent}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative space-y-5 sm:space-y-6">
                  {/* Icon with glow effect */}
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 ${iconBgs[index % iconBgs.length].split(' ')[0]} rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className={`relative inline-flex p-3.5 rounded-xl ${iconBgs[index % iconBgs.length]} ring-1`}>
                      <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColors[index % iconColors.length]}`} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white/95 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-mono rounded-lg ${tagStyles[index % tagStyles.length]} border transition-all duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tech Stack - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-4"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow" />
            <span className="text-xs sm:text-sm font-mono text-emerald-500 tracking-wider uppercase">&lt;tech_stack /&gt;</span>
            <div className="h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 flex-grow" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-gray-950 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <tech.icon className={`relative w-7 h-7 sm:w-8 sm:h-8 text-gray-500 ${tech.color} transition-colors duration-300`} />
                <span className="relative text-xs sm:text-sm text-gray-400 font-medium group-hover:text-gray-200 transition-colors duration-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
