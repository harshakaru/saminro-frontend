"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SwimmingIcon,
  Restaurant02Icon,
  DumbbellIcon,
  Wifi01Icon,
  Car03Icon,
  BodyPartMuscleIcon,
  Coffee01Icon,
  DrinkIcon,
} from "@hugeicons/core-free-icons"

const amenities = [
  {
    icon: SwimmingIcon,
    title: "Infinity Pool",
    description: "Stunning rooftop pool with panoramic views",
  },
  {
    icon: DrinkIcon,
    title: "Luxury Spa",
    description: "Rejuvenating treatments for body and mind",
  },
  {
    icon: Restaurant02Icon,
    title: "Fine Dining",
    description: "World-class cuisine by award-winning chefs",
  },
  {
    icon: DumbbellIcon,
    title: "Fitness Center",
    description: "State-of-the-art equipment available 24/7",
  },
  {
    icon: Wifi01Icon,
    title: "High-Speed WiFi",
    description: "Complimentary connectivity throughout",
  },
  {
    icon: Car03Icon,
    title: "Valet Parking",
    description: "Secure parking with personal valet service",
  },
  {
    icon: BodyPartMuscleIcon,
    title: "Concierge",
    description: "Dedicated team for personalized experiences",
  },
  {
    icon: Coffee01Icon,
    title: "Lounge & Bar",
    description: "Handcrafted cocktails in an elegant setting",
  },
]

export function Amenities() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={cn(
            "mb-16 text-center",
            visible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Experiences
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Hotel Amenities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Every detail is designed to elevate your experience. Discover a
            world of curated amenities that define modern luxury.
          </p>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={cn(
                "group flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-muted/60",
                visible
                  ? `animate-fade-in-up delay-${Math.min((index + 1) * 100, 600)}`
                  : "opacity-0"
              )}
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                <HugeiconsIcon
                  icon={amenity.icon}
                  strokeWidth={1.5}
                  className="size-6"
                />
              </div>
              <h3 className="font-heading text-base font-semibold">
                {amenity.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
