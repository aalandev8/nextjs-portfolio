import { LucideIcon } from 'lucide-react'
import { ComponentType } from 'react'

// Using object type instead of Record<string, never>
export type SectionComponentProps = object;

export type NavId = 'home' | 'about' | 'experience' | 'projects'

export interface NavItem {
  id: NavId
  label: string
  icon: LucideIcon
}

export type SectionId = 'home' | 'about' | 'projects' | 'experience'

export type SectionsConfig = Record<SectionId, ComponentType<SectionComponentProps>>

export interface Section {
  id: SectionId
  component: ComponentType<SectionComponentProps>
  label: string
  icon: LucideIcon
}

export interface NavbarProps {
  activeSection: SectionId
  onSectionChange: (section: SectionId) => void
}

export interface SectionContainerProps {
  activeSection: SectionId
}

export interface Project {
  title: string;
  description: string;
  techs: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}