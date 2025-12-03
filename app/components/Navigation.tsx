"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  onNavClick: (index: number) => void
}

export default function Navigation({ onNavClick }: NavigationProps) {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 px-8 py-6 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="36" fill="none" className="h-8 w-auto">
            <path className="fill-primary" fillRule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clipRule="evenodd" transform="scale(0.75)"/>
            <path className="fill-foreground" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Z" transform="scale(0.75)"/>
          </svg>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavClick(2)}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Features
          </button>
          <button 
            onClick={() => onNavClick(3)}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Benefits
          </button>
          <button 
            onClick={() => onNavClick(4)}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Pricing
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="https://app.optimal.miami/">Talk to sales</a>
          </Button>
          <Button
            asChild
          >
            <a href="https://app.optimal.miami/">Request a demo</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
