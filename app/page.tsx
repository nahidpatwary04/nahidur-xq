import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { ClientsMap } from "@/components/clients-map"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ClientsMap />
      <Projects />
      <Contact />
    </main>
  )
}
