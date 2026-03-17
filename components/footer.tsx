import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="RK Home Tuitions"
              width={40}
              height={40}
              className="object-contain bg-white rounded-lg p-1"
            />
            <span className="text-xl font-bold">RK Home Tuitions</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/919494823941"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/rkhometuitions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="italic text-primary-foreground/70">
            “Learning made personal. Teaching made meaningful.”
          </p>
          <p className="mt-4 text-sm text-primary-foreground/50">
            © 2025 RK Home Tuitions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
