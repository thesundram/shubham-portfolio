import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Languages, GraduationCap } from "lucide-react"

const languages = ["English", "Hindi", "Marathi"]
const courses = ["Java Developer and DSA - Kamal classes, Thane", "Introduction to Python - Analytics Vidhya"]

export function AdditionalInfo() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Speaking Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <Badge key={index} variant="secondary">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Courses & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {courses.map((course, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {course}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
