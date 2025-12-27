"use client"

import { Compass as Wordpress, Shield, Bug, RefreshCw, Puzzle, Wrench } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const skills = [
  {
    icon: Wordpress,
    title: "WordPress Development",
    description: "Expert in custom WordPress themes, plugins, and WooCommerce solutions",
  },
  {
    icon: Puzzle,
    title: "Elementor Expert",
    description: "Professional page building with Elementor Pro and custom widget development",
  },
  {
    icon: Bug,
    title: "Malware Removal",
    description: "Complete malware detection, removal, and site cleaning services",
  },
  {
    icon: RefreshCw,
    title: "Hacked Site Recovery",
    description: "Full WordPress site recovery from hacks, backdoors, and security breaches",
  },
  {
    icon: Shield,
    title: "Security Hardening",
    description: "WordPress security implementation, firewall setup, and vulnerability fixes",
  },
  {
    icon: Wrench,
    title: "Site Maintenance",
    description: "Regular updates, backups, performance optimization, and ongoing support",
  },
]

export function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="px-4 py-20 md:py-32 bg-muted/30">
      <div className="w-[90%] mx-auto">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.title}
                  className={`space-y-3 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
