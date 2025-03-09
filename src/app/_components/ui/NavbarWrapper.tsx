'use client'

import { useState } from "react";
import { SectionId } from "@/app/types/types";
import { Navbar } from "./Navbar";

export default function NavbarWrapper() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const handleSectionChange = (section: SectionId) => {
    setActiveSection(section);
  };

  return (
    <Navbar 
      activeSection={activeSection} 
      onSectionChange={handleSectionChange} 
    />
  );
}