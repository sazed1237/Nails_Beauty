import AboutHero from '@/components/Features/AboutUs/AboutHero/AboutHero'
import OurCoreValues from '@/components/Features/AboutUs/OurCoreValues/OurCoreValues'
import OurTeam from '@/components/Features/AboutUs/OurTeam/OurTeam'
import WelcomeSection from '@/components/Features/AboutUs/WelcomeSection/WelcomeSection'
import Testimonials from '@/components/Features/Home/Testimonials/Testimonials'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div>
      <AboutHero />
      <WelcomeSection />
      <OurCoreValues />
      <OurTeam />
      <Testimonials/>
    </div>
  )
}
