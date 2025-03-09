'use client'

import { useState } from 'react'
import { Navbar } from './_components/ui/Navbar'
import { SectionId } from './types/types'
import { SectionContainer } from './_components/ui/SectionContainer'
export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionId>('home')

  return (
    <>
      <SectionContainer activeSection={currentSection} />
      <Navbar 
        activeSection={currentSection} 
        onSectionChange={setCurrentSection}
      />
    </>
  )
}