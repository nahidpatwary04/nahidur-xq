"use client"

import { Briefcase, GraduationCap, Users, ShieldCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Experience() {
  const { ref, isInView } = useInView()

  const WordPressIcon = () => (
    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.064.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0z" />
    </svg>
  )

  const WordPressSecurityIcon = () => (
    <div className="relative w-5 h-5">
      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.064.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0z" />
      </svg>
      <ShieldCheck className="absolute -bottom-1 -right-1 w-3 h-3 text-primary bg-background rounded-full" />
    </div>
  )

  const experiences = [
    {
      title: "WordPress Web Developer",
      company: "SocialResponse",
      type: "Remote",
      icon: WordPressIcon,
    },
    {
      title: "WordPress Security Checker",
      company: "WP War",
      type: "Remote",
      icon: WordPressSecurityIcon,
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
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                <p className="text-muted-foreground">WordPress Development, Security & Teaching</p>
              </div>
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
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {typeof Icon === "function" ? <Icon /> : <Icon className="w-6 h-6 text-primary" />}
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
