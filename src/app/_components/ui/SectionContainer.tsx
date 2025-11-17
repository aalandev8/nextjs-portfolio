'use client'

import { SectionId, SectionComponentProps } from '@/app/types/types'
import { sectionsConfig } from '@/app/const/sections'
import { motion, AnimatePresence } from 'framer-motion'
import { ComponentType } from 'react'

interface SectionContainerProps {
  activeSection: SectionId
}

export const SectionContainer = ({ activeSection }: SectionContainerProps) => {
  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {Object.entries(sectionsConfig).map(([id, SectionComponent]) => {
          const Component = SectionComponent as ComponentType<SectionComponentProps>;
          return activeSection === id && (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full h-full top-0 left-0 overflow-y-auto"
            >
              <Component />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  )
}