"use client"

import { useState, useEffect, useRef } from "react"
import {
  Zap,
  X,
  GraduationCap,
  UserPlus,
  MessageCircle,
  Phone,
} from "lucide-react"

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      className="
        fixed z-50
        bottom-20 right-4
        md:bottom-6 md:right-6
      "
    >
      {/* Menu Items */}
      {isOpen && (
        <div
          ref={menuRef}
          className="
            flex flex-col gap-3 mb-3
            animate-in fade-in slide-in-from-bottom-4 duration-200
          "
        >
          <a
            href="#find-tutor"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 bg-card border border-border rounded-full py-2 px-4 shadow-lg hover:bg-secondary transition-colors"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Find a Tutor</span>
          </a>

          <a
            href="https://forms.gle/8TevKa5AkxkH4ooy6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 bg-card border border-border rounded-full py-2 px-4 shadow-lg hover:bg-secondary transition-colors"
          >
            <UserPlus className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Become a Tutor</span>
          </a>

          <a
            href="https://whatsapp.com/channel/0029VawwhqX3wtb49PA4Nm2u"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 bg-card border border-border rounded-full py-2 px-4 shadow-lg hover:bg-secondary transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">WhatsApp Channel</span>
          </a>

          <a
            href="tel:9494823941"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 bg-card border border-border rounded-full py-2 px-4 shadow-lg hover:bg-secondary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Call Us</span>
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
        className="
          w-14 h-14 rounded-full
          bg-primary text-primary-foreground
          shadow-xl
          flex items-center justify-center
          transition-transform active:scale-95
        "
        type="button"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
      </button>
    </div>
  )
}
