"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Supprimer le cookie d'authentification
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    // Afficher un message de confirmation
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
    })

    // Rediriger vers la page d'accueil
    setTimeout(() => {
      router.push("/")
    }, 1000)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Déconnexion en cours...</h1>
        <p className="text-muted-foreground">Vous allez être redirigé vers la page d'accueil.</p>
      </div>
    </div>
  )
}
