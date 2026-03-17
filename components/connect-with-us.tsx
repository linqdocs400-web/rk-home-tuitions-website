import { Phone, MessageCircle, FileText } from "lucide-react"

export function ConnectWithUs() {
  return (
    <section
      id="connect-with-us"
      className="py-20 bg-secondary/30 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Get You Connected 🤝
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you want to learn or love to teach — we’ll guide you every step.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Learners Card */}
          <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              For Parents / Students
            </h3>

            <p className="text-muted-foreground mb-6">
              Looking for the right tutor? Call us or message on WhatsApp — we’ll
              find the perfect match for your needs.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:9494823941"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/919494823941"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-green-500 text-green-600 px-6 py-3 font-medium hover:bg-green-50 transition"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Tutors Card */}
          <div className="group bg-card rounded-2xl p-8 border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              For Tutors / Teachers
            </h3>

            <p className="text-muted-foreground mb-6">
              Want to teach and earn? Register with us and become part of a
              growing learning community.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://forms.gle/8TevKa5AkxkH4ooy6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition"
              >
                <FileText className="h-5 w-5" />
                Register as Tutor
              </a>

              <a
                href="https://www.instagram.com/rkhometuitions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-pink-500 text-pink-600 px-6 py-3 font-medium hover:bg-pink-50 transition"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
