import { Code2, Palette, Database, Zap, Settings, Globe } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "WordPress Development",
    description: "Custom themes, plugins, and WooCommerce development",
  },
  {
    icon: Palette,
    title: "Frontend Technologies",
    description: "HTML, CSS, JavaScript, React, and modern frameworks",
  },
  {
    icon: Database,
    title: "Backend & Database",
    description: "PHP, MySQL, REST API, and server management",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed optimization, caching, and SEO best practices",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored plugins and integrations for unique needs",
  },
  {
    icon: Globe,
    title: "Web Standards",
    description: "Accessibility, responsive design, and modern web practices",
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div key={skill.title} className="space-y-3">
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
