"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function ClientsMap() {
  const { ref, isInView } = useInView()

  const clients = [
    { country: "Bangladesh", flag: "🇧🇩", x: 72, y: 48, projects: "15+" },
    { country: "United Kingdom", flag: "🇬🇧", x: 49, y: 32, projects: "8+" },
    { country: "United States", flag: "🇺🇸", x: 20, y: 38, projects: "12+" },
    { country: "Germany", flag: "🇩🇪", x: 51, y: 33, projects: "6+" },
  ]

  return (
    <section id="clients" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Client Base</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by clients across multiple countries, delivering quality WordPress solutions worldwide
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl border border-border p-4 md:p-8 shadow-xl overflow-hidden">
            {/* World Map Image */}
            <div className="absolute inset-0 opacity-30">
              <Image src="/detailed-world-map-with-continents-in-dark-blue-th.jpg" alt="World Map" fill className="object-cover" />
            </div>

            {/* Connection Lines */}
            {isInView &&
              clients.map((client, index) => (
                <svg
                  key={`line-${index}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    opacity: 0.3,
                    animation: `fadeIn 1s ease-in-out ${index * 0.3}s forwards`,
                  }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${client.x}%`}
                    y2={`${client.y}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    className="animate-pulse"
                  />
                </svg>
              ))}

            {/* Client Markers */}
            {clients.map((client, index) => (
              <div
                key={client.country}
                className="absolute transition-all duration-700 z-10"
                style={{
                  left: `${client.x}%`,
                  top: `${client.y}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0,
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="relative group">
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse scale-150"></div>

                  {/* Main dot with glow */}
                  <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:scale-[2] transition-transform duration-300 cursor-pointer"></div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3 bg-card/95 backdrop-blur-sm border-2 border-primary/30 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 scale-90 group-hover:scale-100">
                    <div className="text-sm font-medium">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl">{client.flag}</span>
                        <span className="font-bold text-base">{client.country}</span>
                      </div>
                      <div className="text-xs text-primary font-semibold mt-1">
                        {client.projects} Projects Completed
                      </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-8 border-transparent border-t-card/95"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Countries Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div
                key={client.country}
                className={`flex flex-col items-center gap-2 px-4 py-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <span className="text-4xl">{client.flag}</span>
                <span className="font-semibold text-center text-sm">{client.country}</span>
                <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {client.projects} Projects
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
