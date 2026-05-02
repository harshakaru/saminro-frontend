import { Figtree, Geist_Mono, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Saminro Hotel — Luxury Redefined",
  description:
    "Experience unparalleled luxury at Saminro Hotel. Discover elegant rooms, world-class amenities, and impeccable hospitality for an unforgettable stay.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        figtree.variable,
        playfair.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Toaster position="bottom-right" richColors duration={3000} closeButton />
      </body>
    </html>
  )
}
