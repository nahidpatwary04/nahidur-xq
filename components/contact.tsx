"use client"

import { Mail, Github, Linkedin, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section
      // @ts-ignore
      ref={ref}
      id="contact"
      className={`px-4 py-20 md:py-32 bg-muted/30 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-[90%] mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Get In Touch</h2>
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-balance">
            If you would like to discuss a project or just say hi, I'm always down to chat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="mailto:rahmannahidur433@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/nahidpatwary04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nahid-rahman-patwary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/nahidur.rahman.patwary.2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/8801835344041"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>© 2025 Nahidur Rahman. Crafted with care.</p>
        </div>
      </div>
    </section>
  )
}
