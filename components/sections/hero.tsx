"use client"

import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Placeholder background – replace with real image */}
      <div className="placeholder-gradient-hero absolute inset-0" />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-white/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-in-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/60 md:text-sm">
          Welcome to
        </p>

        <h1 className="animate-fade-in-up delay-100 font-heading text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          Saminro
          <span className="block text-gold-light">Hotel</span>
        </h1>

        <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Where timeless elegance meets modern luxury. Discover a sanctuary of
          comfort nestled in the heart of paradise.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gold text-white hover:bg-gold-dark border-gold/50 min-w-[160px]"
          >
            Make an Inquiry
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white min-w-[160px]"
          >
            Explore
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 transition-colors hover:text-white/70"
        aria-label="Scroll down"
      >
        <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={1.5} className="size-6" />
      </button>
    </section>
  )
}
