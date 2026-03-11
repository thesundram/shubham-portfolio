import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss a project or just say hello!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Mail className="h-4 w-4" />
            adityashelke02@gmail.com
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Phone className="h-4 w-4" />
            7499836847
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
            <a
              href="https://www.linkedin.com/in/aditya-shelke-133256272"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </Button>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Aditya Sanjay Shelke. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
