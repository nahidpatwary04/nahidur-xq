import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Nahidur Rahman</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">WordPress Web Developer</p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          I build accessible, pixel-perfect websites using WordPress. Specializing in custom themes, plugin development,
          and creating seamless digital experiences.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
