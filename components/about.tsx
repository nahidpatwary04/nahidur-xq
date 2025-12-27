"use client"

import { useInView } from "@/hooks/use-in-view"

export function About() {
  const { ref, isInView } = useInView()

  return (
    <section
      // @ts-ignore
      ref={ref}
      id="about"
      className={`px-4 py-20 md:py-32 transition-all duration-1000 delay-100 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-[90%] mx-auto">
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground">About</h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p>
              Currently, I'm specializing in <span className="text-foreground font-medium">WordPress development</span>,
              focusing on custom theme development, plugin creation, and WooCommerce integrations. Beyond development, I
              also provide <span className="text-foreground font-medium">website security services</span> including{" "}
              <span className="text-foreground font-medium">malware removal</span> and{" "}
              <span className="text-foreground font-medium">hacked WordPress website recovery</span>, ensuring your site
              stays secure and functional.
            </p>

            <p>
              In the past, I've had the opportunity to develop and secure websites across a variety of settings — from{" "}
              <span className="text-foreground font-medium">small businesses</span> and{" "}
              <span className="text-foreground font-medium">creative agencies</span> to{" "}
              <span className="text-foreground font-medium">e-commerce platforms</span> and{" "}
              <span className="text-foreground font-medium">personal portfolios</span>. Additionally, I help clients
              recover from security breaches and protect their websites from future threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
