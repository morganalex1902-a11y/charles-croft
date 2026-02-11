'use client'

import { motion } from 'framer-motion'
import { FadeInUp, FadeIn } from './motion-wrapper'
import Image from 'next/image'

export function AboutSection() {
  const timelineItems = [
    { year: '1999', label: 'Started Career', description: 'Began journey in mortgage lending' },
    { year: '1991', label: 'Moved to Florida', description: 'Expanded client base and expertise' },
    { year: 'Now', label: 'Mortgage Expert', description: '25+ years of creative solutions' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-16 text-center">
            About Charles Croft
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Photo */}
          <FadeInUp delay={0.1}>
            <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/charles-headshot.jpg"
                alt="Charles Croft"
                width={400}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>
          </FadeInUp>

          {/* Right - Content */}
          <FadeInUp delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-navy mb-6">
                Your Trusted Mortgage Partner
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 25 years of experience in the mortgage industry, I've had the privilege of helping thousands of families achieve their dream of homeownership. My career is built on trust, expertise, and a commitment to finding creative financing solutions tailored to each client's unique needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in complex financing situations where conventional lenders might say no. Whether you're a first-time homebuyer, refinancing, or navigating complex financial circumstances, I have the knowledge and resources to find the right solution for you.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gold">2,500+</div>
                  <div className="text-sm text-gray-600">Clients Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">99%</div>
                  <div className="text-sm text-gray-600">Approval Rate</div>
                </div>
              </div>

              <p className="text-sm text-navy font-semibold">
                NMLS #2530260 | Licensed Mortgage Loan Officer
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="bg-light-gray rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-navy mb-12 text-center">Career Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <div className="text-navy font-bold text-sm">{index + 1}</div>
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="hidden md:block absolute left-full top-1/2 w-full h-1 bg-gradient-to-r from-gold to-gold/30 -translate-y-1/2 -translate-x-2"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-navy mb-1">{item.year}</div>
                  <div className="font-semibold text-navy mb-2">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Animated Counter */}
        <FadeInUp delay={0.3} className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-navy to-[#1a3d66] text-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <motion.div className="text-5xl lg:text-6xl font-bold mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                2,500+
              </motion.span>
            </motion.div>
            <p className="text-xl text-gray-200">Homeowners Helped Achieve Their Dreams</p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
