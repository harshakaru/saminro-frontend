"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const galleryItems = [
  {
    image: "/gallery-1.jpg",
    label: "Hotel lobby",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/gallery-2.jpg",
    label: "Restaurant",
    span: "",
  },
  {
    image: "/gallery-3.jpg",
    label: "Pool area",
    span: "",
  },
  {
    image: "/gallery-4.jpg",
    label: "Suite interior",
    span: "",
  },
  {
    image: "/gallery-6.jpg",
    label: "Garden view",
    span: "",
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
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
              Glimpses
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            A visual journey through the spaces and experiences that await you
            at Saminro Hotel.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl",
                item.span,
                visible
                  ? `animate-fade-in-up delay-${Math.min((index + 1) * 100, 600)}`
                  : "opacity-0"
              )}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs font-medium tracking-wider text-white uppercase">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
