import { MessageCircle, Bell } from "lucide-react"

export function WhatsAppChannel() {
  return (
    <section id="whatsapp-channel" className="py-20 bg-accent/10 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
            <Bell className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our WhatsApp Channel</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We regularly post tutor and student requirements on our WhatsApp Channel. Stay updated and find the perfect
            opportunity for you!
          </p>
          <a
            href="https://whatsapp.com/channel/0029VawwhqX3wtb49PA4Nm2u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    </section>
  )
}
