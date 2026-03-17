import { Users, Heart, CheckCircle, Shield, RefreshCw, ClipboardCheck } from "lucide-react"

export function SocialProof() {
  return (
    <section id="why-trust-us" className="py-20 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Trust Us?</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We're building a community of real tutors and real learners with your safety as our priority
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Interviewed Tutors</h3>
              <p className="text-muted-foreground text-sm">
                We personally interview every tutor before connecting them with students
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verified Tutors</h3>
              <p className="text-muted-foreground text-sm">Real tutors with real expertise and verified credentials</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Replacement</h3>
              <p className="text-muted-foreground text-sm">
                Any problem with your tutor? We provide on-spot service & replacement within 1-2 days
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                Priority for safety of both male/female tutors and students - immediate action when needed
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Active Community</h3>
              <p className="text-muted-foreground text-sm">Growing network of tutors & learners across Hyderabad</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Personal Touch</h3>
              <p className="text-muted-foreground text-sm">
                We personally match you with the right tutor for your needs
              </p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-secondary/50 rounded-2xl inline-block">
            <p className="text-muted-foreground mb-2">Follow us on Instagram</p>
            <a
              href="https://www.instagram.com/rkhometuitions/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @rkhometuitions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
