'use client'

import { NotificationDropdown } from '@/components/notification-dropdown'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border transition-all duration-300 header-shrink">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="RK Home Tuitions Logo"
            width={46}
            height={46}
            className="object-contain transition-all duration-300"
          />
          <span className="text-xl font-bold text-foreground">
            RK Home Tuitions
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#social-proof"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#find-connect"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Tutors
          </a>
          <NotificationDropdown />
          <a
            href="tel:9494823941"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Nav */}
        <nav className="flex md:hidden items-center gap-3">
          <NotificationDropdown />
          <a
            href="tel:9494823941"
            className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Call
          </a>
        </nav>
      </div>
    </header>
  )
}
