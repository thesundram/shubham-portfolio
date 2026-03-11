"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, GitBranch, Cpu, Zap } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", color: "bg-orange-500 text-white", icon: "☕" },
      { name: "Python", color: "bg-blue-500 text-white", icon: "🐍" },
      { name: "JavaScript", color: "bg-yellow-500 text-black", icon: "⚡" },
      { name: "TypeScript", color: "bg-blue-600 text-white", icon: "📘" },
    ],
  },
  {
    title: "Frontend Technologies",
    icon: Globe,
    skills: [
      { name: "React.js", color: "bg-cyan-500 text-white", icon: "⚛️" },
      { name: "Next.js", color: "bg-black text-white", icon: "▲" },
      { name: "HTML", color: "bg-orange-600 text-white", icon: "🌐" },
      { name: "CSS", color: "bg-blue-400 text-white", icon: "🎨" },
      { name: "Tailwind CSS", color: "bg-teal-500 text-white", icon: "💨" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", color: "bg-green-600 text-white", icon: "🟢" },
      { name: "Express.js", color: "bg-gray-700 text-white", icon: "🚀" },
      { name: "MongoDB", color: "bg-green-500 text-white", icon: "🍃" },
      { name: "MySQL", color: "bg-blue-700 text-white", icon: "🗄️" },
      { name: "Supabase", color: "bg-emerald-600 text-white", icon: "⚡" },
    ],
  },
  {
    title: "AI/ML & Tools",
    icon: GitBranch,
    skills: [
      { name: "OpenAI", color: "bg-emerald-600 text-white", icon: "🤖" },
      { name: "Google Cloud", color: "bg-red-500 text-white", icon: "☁️" },
      { name: "Git", color: "bg-orange-500 text-white", icon: "📦" },
      { name: "GitHub", color: "bg-gray-800 text-white", icon: "🐙" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-background/20 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 text-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Cpu className="h-12 w-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-accent/10"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Zap className="h-8 w-8" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-2 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(168, 85, 247, 0.3)",
                          "0 0 20px rgba(236, 72, 153, 0.3)",
                          "0 0 10px rgba(168, 85, 247, 0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Badge
                            className={`${skill.color} border-0 hover:shadow-lg transition-all duration-200 flex items-center gap-1`}
                          >
                            <span className="text-sm">{skill.icon}</span>
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
