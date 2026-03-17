import { MapPin, BookOpen, GraduationCap, FileText } from "lucide-react"

const seekers = [
  {
    id: 1,
    name: "Parent of Arjun",
    requirement: "Class 8 - Maths & Science",
    location: "Begumpet, Hyderabad",
    mode: "Home Tuition",
    timing: "Evenings (5-7 PM)",
  },
  {
    id: 2,
    name: "Sneha R.",
    requirement: "Guitar Lessons (Beginner)",
    location: "Banjara Hills, Hyderabad",
    mode: "Home / Online",
    timing: "Weekends",
  },
  {
    id: 3,
    name: "Parent of Kavya",
    requirement: "Class 10 - All Subjects",
    location: "Miyapur, Hyderabad",
    mode: "Home Tuition",
    timing: "After School Hours",
  },
  {
    id: 4,
    name: "Ravi K.",
    requirement: "Spoken English Classes",
    location: "LB Nagar, Hyderabad",
    mode: "Online Preferred",
    timing: "Flexible",
  },
  {
    id: 5,
    name: "Parent of Aditya",
    requirement: "IIT-JEE Preparation",
    location: "Kondapur, Hyderabad",
    mode: "Home Tuition",
    timing: "Daily 2 Hours",
  },
  {
    id: 6,
    name: "Meera S.",
    requirement: "Classical Dance (Kuchipudi)",
    location: "Jubilee Hills, Hyderabad",
    mode: "Home / Studio",
    timing: "Weekday Evenings",
  },
]

export function TuitionSeekers() {
  return (
    <section id="become-tutor" className="py-20 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Students Looking for Tutors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you a tutor? These students are actively looking for teachers. Register with us to get connected!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {seekers.map((seeker) => (
            <div
              key={seeker.id}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-lg">{seeker.name}</h3>
                  <span className="text-sm text-primary font-medium">{seeker.mode}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2 flex-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{seeker.requirement}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{seeker.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">Preferred Timing: {seeker.timing}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <a
                  href="https://forms.gle/8TevKa5AkxkH4ooy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  {"I'm Interested"}
                </a>
                <a
                  href={`https://ig.me/m/rkhometuitions?text=${encodeURIComponent(`Hi, I am interested in one of the student profiles provided on your webpage: "${seeker.name} - ${seeker.requirement}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-pink-500 text-pink-600 px-4 py-2 text-sm font-medium hover:bg-pink-50 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Message on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/8TevKa5AkxkH4ooy6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Register as a Tutor
          </a>
        </div>
      </div>
    </section>
  )
}
