import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Uttam Innovatives",
    duration: "9 months",
    period: "Apr 2024 - Present",
    description:
      "Developed AI-powered invoice processing system using React, Node.js, and Google Cloud Vision API achieving 90% reduction in manual entry. Built automated raw material forecasting pipeline with TypeScript and OpenAI GPT-4, delivering type-safe enterprise solutions.",
    skills: ["React", "Node.js", "TypeScript", "AI/ML", "Google Cloud", "OpenAI"],
  },
  {
    title: "Web Development Intern",
    company: "PHN Technology Pvt. Ltd.",
    duration: "2 months",
    period: "2020-2024",
    description:
      "Developed a strong foundation in front-end web development, utilizing HTML, CSS, and JavaScript to create engaging user experiences. Made significant contributions to various projects, highlighting technical skills, creativity, and a commitment to excellence.",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development"],
  },
]

const education = [
  {
    degree: "Computer Engineering",
    institution: "Vishwaniketan's IMEET, Khalapur",
    percentage: "70.94%",
    period: "2020-2024",
  },
  {
    degree: "HSC, Science",
    institution: "Janta Shikshan Mandal, Alibag",
    percentage: "59.07%",
    period: "2018-2020",
  },
  {
    degree: "SSC",
    institution: "Chintamanrao Kelkar Vidyalay, Alibag",
    percentage: "81.20%",
    period: "2018",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <p className="text-muted-foreground">Professional journey and contributions</p>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground">Academic background and achievements</p>
            </div>

            <div className="space-y-2">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg border-b-blue-400">{edu.institution}</CardTitle>
                    {/* <div className="text-muted-foreground"></div> */}
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{edu.period}</Badge>
                      {/* <span className="text-sm text-muted-foreground"></span> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
