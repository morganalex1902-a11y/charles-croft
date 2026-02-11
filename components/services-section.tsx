'use client'

import { motion } from 'framer-motion'
import { FadeInUp } from './motion-wrapper'
import { Home, TrendingDown, Zap, Globe } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Purchase Loans',
      description:
        'Whether you\'re a first-time homebuyer or looking to upgrade, I can help you find the perfect loan program with competitive rates and flexible terms.',
    },
    {
      icon: TrendingDown,
      title: 'Refinancing',
      description:
        'Lower your monthly payments, access home equity, or switch loan types with a refinance tailored to your financial goals and current situation.',
    },
    {
      icon: Zap,
      title: 'Complex Solutions',
      description:
        'Self-employed? Credit challenges? Multiple properties? I specialize in creative financing solutions when traditional lenders say no.',
    },
    {
      icon: Globe,
      title: 'Nationwide Lending',
      description:
        'Licensed nationwide, I can help you secure financing anywhere in the country with consistent service and expert guidance.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 text-center">
            My Services
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Comprehensive mortgage solutions tailored to your unique financial situation
          </p>
        </FadeInUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Icon with glow */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gold to-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-navy" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="mt-6 h-1 bg-gold rounded-full"
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
