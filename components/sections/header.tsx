"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      id="header"
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-2"
        >
          <span
            className={cn(
              "font-heading text-2xl font-semibold tracking-tight transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Saminro
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.25em] transition-colors duration-500",
              scrolled ? "text-gold" : "text-white/70"
            )}
          >
            Hotel
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10",
                scrolled
                  ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => handleNavClick("#contact")}
            className={cn(
              "ml-2 transition-all duration-300",
              !scrolled &&
                "bg-white/15 text-white backdrop-blur-sm border-white/20 hover:bg-white/25"
            )}
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn(
            "md:hidden",
            !scrolled && "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon
            icon={mobileOpen ? Cancel01Icon : Menu01Icon}
            strokeWidth={2}
            className="size-5"
          />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-none"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-2.5 text-left text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => handleNavClick("#contact")}
            className="mt-2"
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  )
}
