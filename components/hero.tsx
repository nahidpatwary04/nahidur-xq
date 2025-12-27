"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/images/nahidovi.png"
                  alt="Nahidur Rahman - WordPress Web Developer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 order-2 md:order-2">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Nahidur Rahman</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">WordPress Web Developer</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              I build accessible, pixel-perfect websites using WordPress. Specializing in custom themes, plugin
              development, website security, malware removal, and hacked WordPress website recovery.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#skills">
                  My Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
