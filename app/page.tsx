"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Rooms } from "@/components/sections/rooms"
import { Amenities } from "@/components/sections/amenities"
import { Gallery } from "@/components/sections/gallery"
import { InquiryForm } from "@/components/sections/inquiry-form"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <InquiryForm />
      </main>
      <Footer />
    </>
  )
}
