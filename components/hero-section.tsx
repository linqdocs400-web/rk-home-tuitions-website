"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Users } from "lucide-react"
import { useEffect, useState } from "react"

const categories = [
  "Home Tuitions",
  "Music",
  "Dance",
  "Yoga",
  "Bhagavad Gita",
  "Skills & More",
]

export function HeroSection() {
  /* ---------- Typing Effect ---------- */
  const lines = [
    "Whatever You Want to Learn.",
    "Whatever You Want to Teach.",
    "We Connect You.",
  ]

  const [displayText, setDisplayText] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const currentLine = lines[lineIndex]

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentLine[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 45)

      return () => clearTimeout(timeout)
    }

    const lineBreakTimeout = setTimeout(() => {
      setDisplayText((prev) => prev + "\n")
      setLineIndex((prev) => prev + 1)
      setCharIndex(0)
    }, 400)

    return () => clearTimeout(lineBreakTimeout)
  }, [charIndex, lineIndex])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      {/* Floating blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6 fade-slide-in">
            <img
              src="/logo.png"
              alt="RK Home Tuitions Logo"
              width={180}
              height={180}
              className="object-contain hover:scale-105 transition-transform"
            />
          </div>

          {/* Typing Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line min-h-[8.5rem]">
            {displayText}
            <span className="typing-cursor">|</span>
          </h1>

          {/* Moving Categories */}
          <div className="relative mt-6 overflow-hidden h-10">
            <div className="flex gap-10 animate-marquee">
              {[...categories, ...categories].map((item, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl text-muted-foreground whitespace-nowrap"
                >
                  ✨ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Find a Tutor → WhatsApp */}
            <Button asChild size="lg" className="text-lg px-8 py-6 hover:scale-105">
              <a
                href="https://wa.me/919494823941?text=Hi%2C%20I%20am%20searching%20for%20a%20tutor."
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Find a Tutor
              </a>
            </Button>

            {/* Become a Tutor → Google Form */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 bg-transparent hover:scale-105"
            >
              <a
                href="https://forms.gle/8TevKa5AkxkH4ooy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="mr-2 h-5 w-5" />
                Become a Tutor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
