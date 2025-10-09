import type { ReactNode } from "react"

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  popular?: boolean
  features: string[]
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  features?: string[] | Feature[]
  stats?: Stat[]
  testimonials?: Testimonial[]
  pricing?: PricingPlan[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
