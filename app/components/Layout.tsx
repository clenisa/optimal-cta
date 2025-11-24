"use client"

import { ReactNode, useEffect, useState } from 'react'
import { Squares } from "./ui/squares-background"
import { useTheme } from "next-themes"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'
  const backgroundColor = isDark ? "#1A1D24" : "#FFFFFF"
  const borderColor = isDark ? "#333" : "#E2E8F0"
  const hoverFillColor = isDark ? "#222" : "#F1F5F9"

  if (!mounted) {
    return (
      <div className="h-screen overflow-hidden bg-background relative">
        <div className="absolute inset-0 z-10">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
            backgroundColor="#1A1D24"
          />
        </div>
        <div className="relative z-20 h-full">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen overflow-hidden bg-background relative">
      <div className="absolute inset-0 z-10">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor={borderColor} 
          hoverFillColor={hoverFillColor}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
