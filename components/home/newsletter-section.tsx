"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Mail } from "lucide-react"
import { NewsletterModal } from "@/components/modals/newsletter-modal"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  // const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubscribe = () => {
    setIsModalOpen(true)
  }

  /* const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse email.",
        variant: "destructive",
      })
      return
    }

    // setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscription réussie!",
        description: "Vous êtes maintenant inscrit à notre newsletter.",
      })
      setEmail("")
      // setIsLoading(false)
    }, 1500)
  } */

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="mb-4">Restez Informé</h2>
          <p className="text-lg mb-8 text-white/80">
            Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles, événements et enseignements
            directement dans votre boîte mail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button onClick={handleSubscribe} variant="secondary">
              Inscription
            </Button>
            {/* <Button type="submit" variant="secondary" disabled={isLoading}>
              {isLoading ? "Inscription..." : "S'inscrire"}
            </Button> */}
          </div>

          <p className="text-sm mt-4 text-white/70">
            Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
