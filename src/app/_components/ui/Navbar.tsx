'use client'

import { useState } from "react"
import { SectionId, NavbarProps } from "@/app/types/types"
import { sectionsList } from "@/app/const/sections"
import { Menu, X } from "lucide-react"

export const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [hoveredTab, setHoveredTab] = useState<SectionId | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = (id: SectionId): void => {
    setHoveredTab(id)
  }

  const handleMouseLeave = (): void => {
    setHoveredTab(null)
  }

  const handleSectionChange = (id: SectionId) => {
    onSectionChange(id)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-6 z-50 p-3 rounded-lg bg-[#030303]/90 backdrop-blur-md border border-emerald-500/20 text-emerald-400 shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="h-full w-20 md:w-24 bg-[#030303]/90 backdrop-blur-md border-r border-[#1a1a1a] shadow-2xl">
          <div className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 py-8">
            {sectionsList.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id
              const isHovered = hoveredTab === id

              return (
                <button
                  key={id}
                  onClick={() => handleSectionChange(id)}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                  type="button"
                  aria-label={label}
                  className={`relative group p-3 md:p-4 rounded-xl transition-all duration-300 ease-out
                    hover-desktop-only transform hover:scale-110 active:scale-95
                    ${isActive
                      ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 shadow-lg shadow-emerald-500/20'
                      : 'hover:bg-white/5'}
                    ${isActive ? 'animate-bounce-small' : ''}`}
                >
                  <Icon
                    size={24}
                    className={`transition-all duration-300 ease-out
                      hover-desktop-only transform group-hover:rotate-12
                      ${isActive
                        ? 'text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                        : 'text-gray-500 group-hover:text-emerald-400'}`}
                  />

                  {/* Label tooltip */}
                  <div
                    className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2
                      px-4 py-2 bg-[#0a0a0a] text-emerald-500 text-sm rounded-lg whitespace-nowrap
                      transition-all duration-300 ease-out border border-emerald-900/50
                      ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
                      shadow-lg shadow-emerald-500/20 backdrop-blur-sm`}
                  >
                    {label}
                    <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2
                      border-4 border-transparent border-r-[#0a0a0a]" />
                  </div>

                  {/* Indicator */}
                  <div
                    className={`absolute -right-0.5 top-1/2 transform -translate-y-1/2
                      w-1 h-8 rounded-full transition-all duration-300 ease-out
                      ${isActive
                        ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50 scale-100'
                        : 'scale-0'}`}
                  />
                </button>
              )
            })}
          </div>

          {/* Decorative gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/5 via-emerald-600/5 to-transparent
                        opacity-30 pointer-events-none" />
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
