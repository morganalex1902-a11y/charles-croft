'use client'

import { motion } from 'framer-motion'
import { FadeInUp } from './motion-wrapper'
import { Award, Lightbulb, Heart } from 'lucide-react'

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Experience',
      description:
        '25+ years in mortgage lending with proven expertise in complex financing situations. Licensed NMLS #2530260.',
    },
    {
      icon: Lightbulb,
      title: 'Insight',
      description:
        'Deep knowledge of the market combined with creative problem-solving. I find solutions others say are impossible.',
    },
    {
      icon: Heart,
      title: 'Dedication',
      description:
        'Your success is my success. I\'m committed to personalized service and your complete satisfaction throughout the process.',
    },
  ]

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-16 text-center">
            Why Choose Charles Croft?
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <FadeInUp key={reason.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative">
                      {/* Animated background */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      ></motion.div>

                      {/* Icon */}
                      <div className="relative bg-gradient-to-br from-gold to-yellow-400 rounded-full w-20 h-20 flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-navy" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-navy mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    viewport={{ once: true }}
                    className="h-1 bg-gold rounded-full mx-auto mt-6"
                  ></motion.div>
                </motion.div>
              </FadeInUp>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.5} className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started on your journey to homeownership?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-navy hover:bg-navy/90 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </FadeInUp>
      </div>
    </section>
  )
}
