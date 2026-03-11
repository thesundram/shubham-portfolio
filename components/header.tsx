"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-teal-400 bg-clip-text text-transparent"
          >
            Aditya Shelke
          </a>
        </div>

        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 text-white border-0">
            Contact Me
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="space-y-2 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 py-2">
              <ThemeToggle />
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 text-white border-0">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
