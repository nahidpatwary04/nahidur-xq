"use client"

import { Briefcase, GraduationCap, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Experience() {
  const { ref, isInView } = useInView()

  const experiences = [
    {
      title: "WordPress Web Developer",
      company: "SocialResponse",
      type: "Remote",
      icon: Briefcase,
    },
    {
      title: "WordPress Security Checker",
      company: "WP War",
      type: "Remote",
      icon: Briefcase,
    },
    {
      title: "Web Development with WordPress Instructor",
      company: "MULTIsoft IT Institute",
      type: "Teaching",
      icon: GraduationCap,
    },
    {
      title: "Freelance WordPress Developer",
      company: "Local Teams & Agencies",
      type: "Freelance",
      icon: Users,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div
        ref={ref}
        className="w-[90%] mx-auto"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div
            className="bg-card border border-border rounded-lg p-6"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.2s",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-lg font-medium text-foreground/90">B.Sc (Honours) in Mathematics</p>
                <p className="text-muted-foreground mt-1">Bachelor's Degree</p>
              </div>
            </div>
          </div>

          {/* Work Experience Header */}
          <div
            className="bg-card border border-border rounded-lg p-6 flex items-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-out 0.3s",
            }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <p className="text-muted-foreground">WordPress Development, Security & Teaching</p>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${0.4 + index * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{exp.title}</h4>
                    <p className="text-foreground/80 mb-2">{exp.company}</p>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
