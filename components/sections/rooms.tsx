"use client"

import { useEffect, useRef, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const rooms = [
  {
    name: "Deluxe Room",
    description:
      "Elegantly appointed with panoramic views, plush furnishings, and a private balcony that invites the beauty of the surrounding landscape into your personal retreat.",
    size: "35 m²",
    price: "From $180/night",
    gradient: "placeholder-gradient-1",
  },
  {
    name: "Premium Suite",
    description:
      "A spacious haven featuring a separate living area, luxurious bath amenities, and floor-to-ceiling windows that frame the breathtaking scenery beyond.",
    size: "55 m²",
    price: "From $320/night",
    gradient: "placeholder-gradient-2",
  },
  {
    name: "Royal Villa",
    description:
      "The pinnacle of luxury living with a private terrace, infinity plunge pool, dedicated butler service, and bespoke interiors crafted for the discerning traveler.",
    size: "95 m²",
    price: "From $580/night",
    gradient: "placeholder-gradient-3",
  },
]

export function Rooms() {
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

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="section-padding bg-muted/40"
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
              Accommodations
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Rooms & Suites
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Each room is a sanctuary of comfort, designed with meticulous
            attention to detail and finished with the finest materials.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Card
              key={room.name}
              className={cn(
                "group overflow-hidden border-none bg-card shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                visible
                  ? `animate-fade-in-up delay-${(index + 1) * 200}`
                  : "opacity-0"
              )}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 transition-transform duration-700 group-hover:scale-105",
                    room.gradient
                  )}
                />
                <div className="absolute bottom-3 left-3 text-[0.6rem] tracking-[0.15em] text-white/40 uppercase">
                  Room image — replace
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {room.size}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold">
                  {room.name}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-semibold text-gold">
                    {room.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={scrollToContact}
                    className="text-xs"
                  >
                    Inquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
