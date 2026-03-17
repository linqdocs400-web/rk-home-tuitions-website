"use client"

import { useState, useRef } from "react"
import { GraduationCap, Users } from "lucide-react"
import { AvailableTutors } from "@/components/available-tutors"
import { TuitionSeekers } from "@/components/tuition-seekers"

export function FindConnect() {
  const [activeTab, setActiveTab] = useState<"tutors" | "students">("tutors")
  const contentRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tab: "tutors" | "students") => {
    setActiveTab(tab)

    // smooth auto-scroll after state update
    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  return (
    <section
      id="find-connect"
      className="py-16 bg-secondary/30 scroll-mt-20"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Find What You’re Looking For
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Choose one option to continue
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-card border border-border rounded-xl p-1 shadow-sm w-full max-w-md">
            
            {/* Find Tutors */}
            <button
              onClick={() => handleTabChange("tutors")}
              className={`flex-1 flex items-center justify-center gap-2
                rounded-lg font-medium transition-all
                px-3 py-2 text-sm md:px-6 md:py-3 md:text-base
                ${
                  activeTab === "tutors"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
              Find Tutors
            </button>

            {/* Find Students */}
            <button
              onClick={() => handleTabChange("students")}
              className={`flex-1 flex items-center justify-center gap-2
                rounded-lg font-medium transition-all
                px-3 py-2 text-sm md:px-6 md:py-3 md:text-base
                ${
                  activeTab === "students"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              Find Students
            </button>
          </div>
        </div>

        {/* Content (auto-scroll target) */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {activeTab === "tutors" && <AvailableTutors />}
          {activeTab === "students" && <TuitionSeekers />}
        </div>

      </div>
    </section>
  )
}
