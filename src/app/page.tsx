'use client'

import { useState } from 'react'
import { Navbar } from './_components/ui/Navbar'
import { SectionId } from './types/types'
import { SectionContainer } from './_components/ui/SectionContainer'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionId>('home')

  return (
    <div className="flex">
      <Navbar
        activeSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <main className="flex-1 md:ml-24">
        <SectionContainer activeSection={currentSection} />
      </main>
    </div>
  )
}