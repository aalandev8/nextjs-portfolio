'use client'

import { useState } from "react"
import { SectionId, NavbarProps } from "@/app/types/types"
import { sectionsList } from "@/app/const/sections"

export const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [hoveredTab, setHoveredTab] = useState<SectionId | null>(null)

  const handleMouseEnter = (id: SectionId): void => {
    setHoveredTab(id)
  }

  const handleMouseLeave = (): void => {
    setHoveredTab(null)
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="bg-[#030303]/80 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-lg border border-[#1a1a1a]
                    transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 mt-2">
        <div className="flex items-center space-x-2 md:space-x-6">
          {sectionsList.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id
            const isHovered = hoveredTab === id
            
            return (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                type="button"
                className={`relative group px-4 py-2 md:px-6 md:py-3 rounded-xl transition-all duration-300 ease-out
                  transform hover:scale-110 active:scale-95
                  ${isActive 
                    ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 shadow-lg shadow-emerald-500/20' 
                    : 'hover:bg-white/5'}
                  ${isActive ? 'animate-bounce-small' : ''}`}
              >
                <div className="flex items-center justify-center">
                  <Icon 
                    size={24} 
                    className={`transition-all duration-300 ease-out
                      transform group-hover:rotate-12
                      ${isActive 
                        ? 'text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                        : 'text-gray-500 group-hover:text-emerald-400'}`}
                  />
                  
                  {/* Label tooltip */}
                  <div
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 
                      px-4 py-2 bg-[#0a0a0a] text-emerald-500 text-sm rounded-lg
                      transition-all duration-300 ease-out border border-emerald-900/50
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                      shadow-lg shadow-emerald-500/20 backdrop-blur-sm`}
                  >
                    {label}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                      border-4 border-transparent border-t-[#0a0a0a]
                      transition-transform duration-300" />
                  </div>

                  {/* Indicator dot */}
                  <div
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2
                      w-1 h-1 rounded-full transition-all duration-300 ease-out
                      ${isActive 
                        ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50 scale-100' 
                        : 'scale-0'}`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/10 via-emerald-600/10 to-emerald-700/10 
                      blur-xl rounded-full transform scale-150 opacity-30
                      animate-pulse transition-opacity duration-1000" />
      </div>
    </div>
  )
}
