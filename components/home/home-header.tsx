"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Événements", href: "/#events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4 text-white",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={cn("text-2xl font-bold transition-colors", isScrolled ? "text-primary" : "text-white")}>
            Burning Heart
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-black hover:text-primary" : "hover:text-primary-foreground/80",
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild variant={isScrolled ? "default" : "outline"}>
            <Link href="/faire-un-don" className="text-black hover:text-primary">Faire un don</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant={isScrolled ? "outline" : "ghost"}
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/faire-un-don" onClick={() => setIsMenuOpen(false)}>
                Faire un don
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
