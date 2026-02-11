'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-bold mb-2">Charles Croft</h3>
            <p className="text-gray-300 text-sm">Mortgage Loan Officer</p>
            <p className="text-gold text-sm font-semibold mt-2">NMLS #2530260</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-sm text-gray-300 mb-2">
              <a
                href="tel:5551234567"
                className="hover:text-gold transition-colors"
              >
                (555) 123-4567
              </a>
            </p>
            <p className="text-sm text-gray-300">
              <a
                href="mailto:charles@croftmortgage.com"
                className="hover:text-gold transition-colors"
              >
                charles@croftmortgage.com
              </a>
            </p>
            <p className="text-sm text-gray-300 mt-2">Mon-Fri 9AM-6PM EST</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Charles Croft - Mortgage Loan Officer. All rights reserved. NMLS #2530260
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This website is for informational purposes only and not an offer to enter into an agreement.
          </p>
        </div>
      </div>
    </footer>
  )
}
