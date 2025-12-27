import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Get In Touch</h2>
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-balance">
            If you would like to discuss a project or just say hi, I'm always down to chat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="mailto:hello@nahidurrahman.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>© 2025 Nahidur Rahman. Crafted with care.</p>
        </div>
      </div>
    </section>
  )
}
