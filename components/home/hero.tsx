"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import HomeHeader from "@/components/home/home-header"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('/bg.jpg?height=1080&width=1920')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/bg.jpg?height=1080&width=1920')",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <HomeHeader />
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="mb-6 leading-tight">Allumez le Feu de la Foi dans Votre Cœur</h1>
          <p className="text-xl mb-8 text-gray-200">
            Rejoignez notre communauté pour grandir spirituellement, trouver du soutien et découvrir votre but dans la
            vie.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Nos Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
