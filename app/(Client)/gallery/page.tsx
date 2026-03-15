import Gallery from '@/components/Features/Gallery/Gallery'
import Transformations from '@/components/Features/Gallery/Transformations'
import Testimonials from '@/components/Features/Home/Testimonials/Testimonials'
import React from 'react'

export default function GalleryPage() {
  return (
    <div>
        <Gallery />
        <Transformations />
        <Testimonials />
    </div>
  )
}
