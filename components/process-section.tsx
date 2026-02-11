'use client'

import { motion } from 'framer-motion'
import { FadeInUp } from './motion-wrapper'
import { MessageSquare, FileText, CheckCircle, Home } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Initial meeting to understand your needs, goals, and financial situation.',
      timeline: '1-2 days',
    },
    {
      number: 2,
      icon: FileText,
      title: 'Apply',
      description: 'Complete application with all necessary documentation and information.',
      timeline: '3-5 days',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Approve',
      description: 'Review, verification, and approval of your mortgage application.',
      timeline: '5-7 days',
    },
    {
      number: 4,
      icon: Home,
      title: 'Close',
      description: 'Final walkthrough, signing, and official transfer of keys.',
      timeline: '3-5 days',
    },
  ]

  return (
    <section id="process" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 text-center">
            The Process
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            A straightforward path from consultation to closing
          </p>
        </FadeInUp>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Animated connecting line - visible on desktop */}
          <motion.svg
            className="hidden md:block absolute top-20 left-0 w-full h-2"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 50 L 1000 50"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Steps */}
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  {/* Circle number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex justify-center mb-8"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <div className="text-center">
                        <IconComponent className="w-8 h-8 text-navy mx-auto mb-1" />
                        <div className="text-lg font-bold text-navy">{step.number}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg text-center"
                  >
                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-xs font-semibold text-gold uppercase tracking-wide">
                      {step.timeline}
                    </div>
                  </motion.div>

                  {/* Mobile vertical connector */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-12 top-24 w-0.5 h-20 bg-gradient-to-b from-gold to-gold/30"></div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom text */}
        <FadeInUp delay={0.8} className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-navy">Typical timeline:</span> 15-20 business days
            from consultation to closing
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
