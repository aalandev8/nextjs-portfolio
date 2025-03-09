import { 
  HomeSection, 
  AboutSection, 
  ProjectsSection, 
  ExperienceSection 
} from "@/app/_components/index"
import { Home, User, Briefcase, FolderGit2 } from "lucide-react";
import { SectionsConfig, Section } from "@/app/types/types"

export const sectionsConfig: SectionsConfig = {
  home: HomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  experience: ExperienceSection
}

export const sectionsList: Section[] = [
  {
    id: 'home',
    component: HomeSection,
    label: 'Home',
    icon: Home,
  },
  {
    id: 'about',
    component: AboutSection,
    label: 'About',
    icon: User,
  },
  {
    id: 'projects',
    component: ProjectsSection,
    label: 'Projects',
    icon: Briefcase
  },
  {
    id: 'experience',
    component: ExperienceSection,
    label: 'Experience',
    icon: FolderGit2
  }
]