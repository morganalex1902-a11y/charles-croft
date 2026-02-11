'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 bg-gradient-to-br from-navy via-[#1a3d66] to-[#0f2d4f] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-pretty"
            >
              Turn Your Dream Home Into Reality
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              25+ Years of Creative Financing Solutions
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              With over 25 years of experience in mortgage lending, I've helped thousands of homeowners achieve their dreams with creative, tailored financing solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gold hover:bg-yellow-400 text-navy font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Pre-Approved
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-transparent border-2 border-gold hover:bg-gold hover:text-navy text-gold font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
              >
                Calculate Payment
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
          >
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-3xl"></div>

            {/* Headshot */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 w-full max-w-sm aspect-[4/5]">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F9b12635aa2884aaba11bcdd8b97ecae6?format=webp&width=800&height=1200"
                alt="Charles Croft - Mortgage Loan Officer"
                fill
                priority
                loading="eager"
                className="object-cover"
              />
            </div>

            {/* Floating cards with stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-10 -left-10 bg-white rounded-lg p-4 shadow-xl z-20"
            >
              <div className="text-2xl font-bold text-navy">2,500+</div>
              <div className="text-sm text-gray-600">Homeowners Helped</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-5 -right-10 bg-gold rounded-lg p-4 shadow-xl z-20"
            >
              <div className="text-2xl font-bold text-navy">25+</div>
              <div className="text-sm text-navy font-semibold">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
      ></motion.div>
    </section>
  )
}
