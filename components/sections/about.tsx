"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder */}
          <div
            className={cn(
              "relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]",
              visible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            <Image
              src="/our-story.jpg"
              alt="Saminro Hotel exterior"
              fill
              className="object-cover"
              priority
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 rounded-xl border-2 border-white/10" />
          </div>

          {/* Text content */}
          <div
            className={cn(
              "flex flex-col gap-6",
              visible ? "animate-fade-in-up delay-200" : "opacity-0"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Our Story
              </span>
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              A Legacy of{" "}
              <span className="text-gold">Refined</span>{" "}
              Hospitality
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Nestled among breathtaking landscapes, Saminro Hotel offers an
              extraordinary retreat where every detail has been meticulously
              crafted to ensure your comfort and delight. Our philosophy is
              simple — to create moments that transcend the ordinary.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              From our thoughtfully designed rooms to our world-class dining
              experiences, every aspect of your stay is an invitation to
              discover the art of gracious living. We believe that true luxury
              lies in the warmth of genuine hospitality.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "50+", label: "Luxury Rooms" },
                { value: "15+", label: "Years of Service" },
                { value: "98%", label: "Guest Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-semibold text-gold md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
