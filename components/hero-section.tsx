"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, MapPin, Download, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Aditya_Shelke_Resume.pdf"
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 dark:from-purple-900/20 dark:via-blue-900/10 dark:to-purple-800/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-red-500 to-emerald-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Aditya Sanjay Shelke
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    'Computer Engineer',
                    2000,
                    'Software Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Highly motivated and detail-oriented Computer Engineer with a strong passion for building innovative
                  software solutions. Proficient in a range of programming languages and technologies, including React
                  JS, MySQL, Java, and more.
                </p>
              </Card>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
                onClick={scrollToProjects}
              >
                <Eye className="h-4 w-4" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 bg-white/80 gap-2"
                onClick={downloadResume}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Photo and Contact Info */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/aditya-profile.jpg"
                  alt="Aditya Sanjay Shelke"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-3 w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-muted-foreground">adityasshelke02@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-emerald-500" />
                    <span className="text-muted-foreground">7499836847</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    <a
                      href="https://www.linkedin.com/in/aditya-shelke-133256272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-muted-foreground">Alibag, Raigad</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
