"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Plus, Edit, Trash } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Exemple de données des membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Père Ciza",
    role: "Fondateur principal",
    bio: "Fondateur de la communauté Burning Heart, le Père Ciza a plus de 20 ans d'expérience dans le ministère.",
    image: "/placeholder.svg?height=300&width=300",
    order: 1,
  },
  {
    id: 2,
    name: "Sarah Martin",
    role: "Directrice de la Louange",
    bio: "Sarah dirige l'équipe de louange depuis 2018 et est également compositrice de plusieurs chants.",
    image: "/placeholder.svg?height=300&width=300",
    order: 2,
  },
  {
    id: 3,
    name: "Thomas Leclerc",
    role: "Responsable Jeunesse",
    bio: "Thomas s'occupe du ministère de la jeunesse et organise des activités pour les 12-25 ans.",
    image: "/placeholder.svg?height=300&width=300",
    order: 3,
  },
  {
    id: 4,
    name: "Marie Dubois",
    role: "Coordinatrice des Groupes de Maison",
    bio: "Marie supervise tous les groupes de maison et forme les nouveaux leaders.",
    image: "/placeholder.svg?height=300&width=300",
    order: 4,
  },
  {
    id: 5,
    name: "Jean Moreau",
    role: "Responsable de l'Accueil",
    bio: "Jean coordonne l'équipe d'accueil et veille à ce que chaque visiteur se sente bienvenu.",
    image: "/placeholder.svg?height=300&width=300",
    order: 5,
  },
  {
    id: 6,
    name: "Sophie Lambert",
    role: "Responsable de l'École du Dimanche",
    bio: "Sophie organise les activités pour les enfants et forme les moniteurs.",
    image: "/placeholder.svg?height=300&width=300",
    order: 6,
  },
]

export default function TeamAdminPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filtrer les membres de l'équipe en fonction de la recherche
  const filteredMembers = teamMembers
    .filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => a.order - b.order)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestion de l'Équipe</h1>
        <Button asChild>
          <Link href="/admin/team/new">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un membre
          </Link>
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher un membre..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground line-clamp-2 mb-4">{member.bio}</p>
              <div className="flex justify-between">
                <div className="text-sm text-muted-foreground">Ordre d'affichage: {member.order}</div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/admin/team/${member.id}/edit`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Modifier</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Supprimer</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
