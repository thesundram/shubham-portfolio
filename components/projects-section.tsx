"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, Leaf, BookOpen, ShoppingCart, Smartphone, Code } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Smart Agriculture System",
    description:
      "IoT-based project implementing sensors, Machine Learning, and Image Processing for sustainable farming. Provides real-time data analysis for crop monitoring, disease detection, and resource management.",
    tags: ["IoT", "Machine Learning", "Image Processing", "Agriculture"],
    type: "Major Project",
    icon: Leaf,
    image: "https://tracextech.com/wp-content/uploads/2023/07/smart-farming-scaled.jpg",
  },
  {
    title: "eLearning Platform",
    description:
      "Cutting-edge eLearning platform designed to facilitate seamless knowledge sharing and skill development. Built using modern web technologies for optimal user experience.",
    tags: ["React.js", "Node.js", "MongoDB", "Education"],
    type: "Web Application",
    icon: BookOpen,
    image: "https://img.freepik.com/premium-vector/online-education-concept-banner-elearning-home-schooling-woman-student-working-laptop_1446161-1253.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    title: "Image Detection System",
    description:
      "Sophisticated image recognition system leveraging a trained dataset, enabling 98% accurate identification and naming of diverse images, improving user experience and operational efficiency.",
    tags: ["OpenCV", "Computer Vision", "Python", "AI"],
    type: "AI/ML Project",
    icon: Brain,
    image: "https://www.shutterstock.com/image-vector/city-street-crossing-through-eyes-260nw-1377458216.jpg",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Modern e-commerce admin dashboard with real-time analytics, inventory management, and order tracking. Features responsive design and interactive charts for business insights.",
    tags: ["React", "Chart.js", "REST API", "Dashboard"],
    type: "Web Application",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
  },
  {
    title: "Mobile Task Manager",
    description:
      "Cross-platform mobile application for task management with offline sync, push notifications, and collaborative features. Built with React Native for iOS and Android.",
    tags: ["React Native", "Firebase", "Mobile", "Cross-platform"],
    type: "Mobile App",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=center",
  },
  {
    title: "Code Snippet Manager",
    description:
      "Developer tool for organizing and sharing code snippets with syntax highlighting, tagging system, and team collaboration features. Supports multiple programming languages.",
    tags: ["Vue.js", "Electron", "CodeMirror", "Developer Tools"],
    type: "Desktop App",
    icon: Code,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const extendedProjects = [...projects, ...projects]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= projects.length - 1) {
          return projects.length
        }
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentIndex === projects.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0)
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <section className="py-16 px-4 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              transitionDuration: currentIndex === projects.length ? '0ms' : '700ms'
            }}
          >
            {extendedProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <Icon className="h-5 w-5 text-primary" />
                        </motion.div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {project.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-2 bg-transparent border-primary/50 hover:border-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: projects.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === (currentIndex % projects.length) ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
