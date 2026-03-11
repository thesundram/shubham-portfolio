import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { AdditionalInfo } from "@/components/additional-info"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section id="about">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <AdditionalInfo />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  )
}
