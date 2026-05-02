"use client"

import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

const policies = [
  "Privacy Policy",
  "Terms of Service",
  "Cancellation Policy",
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-semibold tracking-tight">Saminro</span>
              <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold">Hotel</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Where timeless elegance meets modern luxury. Creating unforgettable experiences since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => handleNavClick(link.href)} className="text-sm text-background/60 transition-colors hover:text-gold">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Contact</h3>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li>123 Paradise Avenue</li>
              <li>Saminro City, SC 10001</li>
              <li className="pt-2">hello@saminrohotel.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Legal</h3>
            <ul className="space-y-2.5">
              {policies.map((policy) => (
                <li key={policy}>
                  <span className="text-sm text-background/60 transition-colors cursor-pointer hover:text-gold">{policy}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Saminro Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <span key={social} className="text-xs text-background/40 transition-colors cursor-pointer hover:text-gold">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
