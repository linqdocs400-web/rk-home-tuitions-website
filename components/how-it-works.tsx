import { MessageSquare, Users, Sparkles } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-muted-foreground text-lg">Simple steps to get started</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-secondary/50 rounded-2xl p-8 text-center h-full hover:bg-secondary/70 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tell Us Your Needs</h3>
              <p className="text-muted-foreground">Share what you want to learn or teach</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-secondary/50 rounded-2xl p-8 text-center h-full hover:bg-secondary/70 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <Users className="h-8 w-8" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">We Connect You</h3>
              <p className="text-muted-foreground">We find the perfect match for you</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-secondary/50 rounded-2xl p-8 text-center h-full hover:bg-secondary/70 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Start Your Journey</h3>
              <p className="text-muted-foreground">Begin learning or teaching with confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
