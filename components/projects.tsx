"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Custom WooCommerce solution with advanced filtering, custom checkout flow, and payment gateway integration.",
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    year: "2024",
  },
  {
    title: "Corporate Website",
    description:
      "Responsive corporate website with custom Gutenberg blocks, advanced ACF implementation, and multilingual support.",
    tech: ["WordPress", "ACF", "Gutenberg", "WPML"],
    year: "2024",
  },
  {
    title: "Portfolio Theme",
    description:
      "Minimalist portfolio theme for creatives with smooth animations, dark mode, and optimized performance.",
    tech: ["WordPress", "React", "GSAP", "CSS"],
    year: "2023",
  },
  {
    title: "Custom LMS Plugin",
    description: "Learning management system plugin with course builder, quiz functionality, and progress tracking.",
    tech: ["WordPress", "PHP", "MySQL", "REST API"],
    year: "2023",
  },
  {
    title: "Real Estate Directory",
    description: "Property listing website with advanced search, map integration, and agent management system.",
    tech: ["WordPress", "Custom Post Types", "Google Maps API", "PHP"],
    year: "2023",
  },
  {
    title: "Restaurant Website",
    description: "Modern restaurant website with online ordering, reservation system, and dynamic menu management.",
    tech: ["WordPress", "WooCommerce", "Custom Theme", "JavaScript"],
    year: "2022",
  },
]

export function Projects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div
          // @ts-ignore
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Selected Projects</h2>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
