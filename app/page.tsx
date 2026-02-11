'use client'

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { ProcessSection } from '@/components/process-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
