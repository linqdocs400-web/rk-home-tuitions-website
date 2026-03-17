import { MapPin, BookOpen, Star, MessageCircle } from "lucide-react"

const tutors = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    subject: "Mathematics (Class 6-10)",
    location: "Kukatpally, Hyderabad",
    experience: "5 years",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    initials: "RK",
    subject: "Physics & Chemistry (Class 11-12)",
    location: "Madhapur, Hyderabad",
    experience: "8 years",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Ananya Reddy",
    initials: "AR",
    subject: "Carnatic Vocal Music",
    location: "Ameerpet, Hyderabad",
    experience: "10 years",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Mohammed Fahad",
    initials: "MF",
    subject: "English & Communication",
    location: "Dilsukhnagar, Hyderabad",
    experience: "6 years",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Lakshmi Devi",
    initials: "LD",
    subject: "Yoga & Meditation",
    location: "Gachibowli, Hyderabad",
    experience: "12 years",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Suresh Babu",
    initials: "SB",
    subject: "Bharatanatyam Dance",
    location: "Secunderabad, Hyderabad",
    experience: "15 years",
    rating: 5.0,
  },
]

export function AvailableTutors() {
  return (
    <section id="find-tutor" className="py-20 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Available Tutors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet some of our verified tutors ready to help you learn. Contact us to get connected!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-secondary/30 rounded-xl p-6 border border-border hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">{tutor.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-lg">{tutor.name}</h3>
                  <div className="flex items-center gap-1 text-accent mt-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{tutor.rating}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2 flex-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{tutor.subject}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{tutor.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">Experience: {tutor.experience}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={`https://wa.me/919494823941?text=${encodeURIComponent(`Hi, I want the contact details of the tutor "${tutor.name}" mentioned on your webpage.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Tutor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
