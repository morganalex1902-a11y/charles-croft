'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeInUp } from './motion-wrapper'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:5551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'charles@croftmortgage.com',
      href: 'mailto:charles@croftmortgage.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nationwide Licensed',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri 9AM-6PM EST',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Ready to start your mortgage journey? Contact me today for a free consultation.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <FadeInUp delay={0.1}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-navy mb-8">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group hover:cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                    </motion.div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-lg text-navy font-semibold group-hover:text-gold transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Quick facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-light-gray rounded-xl border-l-4 border-gold"
              >
                <h4 className="font-bold text-navy mb-3">Why Choose Me?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 25+ years of experience</li>
                  <li>✓ Creative financing solutions</li>
                  <li>✓ Competitive rates</li>
                  <li>✓ Personalized service</li>
                  <li>✓ Licensed nationwide (NMLS #2530260)</li>
                </ul>
              </motion.div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-light-gray rounded-2xl p-8 lg:p-10"
            >
              <div className="space-y-6">
                {/* Name */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your situation..."
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-gold hover:to-yellow-500 text-navy font-bold py-4 rounded-lg transition-all transform shadow-lg"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>

                {/* Success message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center text-sm font-semibold"
                  >
                    Thank you! I'll get back to you within 24 hours.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
