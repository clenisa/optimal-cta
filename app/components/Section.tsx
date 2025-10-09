"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react"

const iconMap: { [key: string]: any } = {
  "Real-time account synchronization": Zap,
  "AI-powered financial insights": TrendingUp,
  "Bank-level security": Shield,
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  content, 
  isActive, 
  showButton, 
  buttonText,
  features,
  stats,
  testimonials,
  pricing
}: SectionProps) {
  
  const renderFeatures = () => {
    if (!features) return null

    // Check if features is an array of strings or objects
    const isSimpleFeatures = typeof features[0] === 'string'

    if (isSimpleFeatures) {
      return (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {(features as string[]).map((feature, index) => {
            const Icon = iconMap[feature] || CheckCircle2
            return (
              <div key={index} className="flex items-center space-x-3 text-white/80">
                <Icon className="w-5 h-5 text-[#FF4D00] flex-shrink-0" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            )
          })}
        </motion.div>
      )
    }

    // Render detailed features
    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {(features as any[]).map((feature, index) => (
          <div key={index} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-white/60 text-sm">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    )
  }

  const renderStats = () => {
    if (!stats) return null

    return (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FF4D00] mb-2">{stat.value}</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    )
  }

  const renderTestimonials = () => {
    if (!testimonials) return null

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
            <p className="text-white/80 italic mb-4">"{testimonial.quote}"</p>
            <div>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </motion.div>
    )
  }

  const renderPricing = () => {
    if (!pricing) return null

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {pricing.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-8 ${
              plan.popular 
                ? 'border-[#FF4D00] bg-[#FF4D00]/10' 
                : 'border-white/20 bg-white/5'
            } backdrop-blur-sm relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4D00] text-black px-3 py-1 rounded-full text-xs font-semibold">
                MOST POPULAR
              </div>
            )}
            <div className="text-2xl font-bold text-white mb-2">{plan.name}</div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-white/60 ml-2">{plan.period}</span>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4D00] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full mt-6 ${
                plan.popular
                  ? 'bg-[#FF4D00] text-black hover:bg-[#FF4D00]/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {plan.price === "Custom" ? "Contact Sales" : "Choose Plan"}
            </Button>
          </div>
        ))}
      </motion.div>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        {subtitle && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        
        {renderFeatures()}
        {renderStats()}
        {renderTestimonials()}
        {renderPricing()}
        
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors font-semibold px-8"
              asChild
            >
              <a href="https://www.carloslenis.com/">{buttonText}</a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
