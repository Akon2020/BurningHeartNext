// Ce fichier simule une base de données pour la démonstration

// Types
export interface User {
  id: number
  name: string
  email: string
  role: "admin" | "editor" | "member"
  status: "active" | "pending" | "inactive"
  avatar?: string
  lastLogin?: string
  createdAt: Date
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: User
  status: "published" | "draft"
  category: string
  tags: string[]
  image?: string
  views: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image?: string
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Newsletter {
  id: number
  title: string
  subject: string
  content: string
  status: "draft" | "scheduled" | "sent"
  recipients: number
  openRate?: string
  createdAt: Date
  scheduledAt?: Date
  sentAt?: Date
}

export interface Event {
  id: number
  title: string
  description: string
  date: Date
  time: string
  location: string
  image?: string
  createdAt: Date
  updatedAt: Date
}

// Fonctions simulées pour interagir avec la "base de données"
export async function getUsers(): Promise<User[]> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Retourner des données fictives
  return [
    {
      id: 1,
      name: "Isaac Akonkwa",
      email: "akonkwaushindi@gmail.com",
      role: "admin",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      lastLogin: "Il y a 2 heures",
      createdAt: new Date("2023-01-15"),
    },
    {
      id: 2,
      name: "Samuel Diambu",
      email: "samueldiambu@gmail.com",
      role: "member",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      lastLogin: "Il y a 5 heures",
      createdAt: new Date("2023-02-20"),
    },
    // ... autres utilisateurs
  ]
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Retourner des données fictives
  return [
    {
      id: 1,
      title: "La puissance de la prière dans la vie quotidienne",
      slug: "puissance-priere-vie-quotidienne",
      excerpt: "Découvrez comment la prière peut transformer votre vie quotidienne et vous apporter paix et sérénité.",
      content: "<p>La prière est l'un des aspects les plus fondamentaux de la vie chrétienne...</p>",
      author: {
        id: 1,
        name: "Père Ciza",
        email: "pere.ciza@gmail.com",
        role: "admin",
        status: "active",
        createdAt: new Date("2022-01-01"),
      },
      status: "published",
      category: "Spiritualité",
      tags: ["Prière", "Vie spirituelle", "Développement personnel"],
      image: "/placeholder.svg?height=500&width=1000",
      views: 1245,
      createdAt: new Date("2025-05-01"),
      updatedAt: new Date("2025-05-10"),
      publishedAt: new Date("2025-05-10"),
    },
    // ... autres articles
  ]
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Retourner des données fictives
  return [
    {
      id: 1,
      name: "Père Ciza",
      role: "Promoteur principal",
      bio: "Fondateur de Burning Heart, le Père Ciza a plus de 20 ans d'expérience dans le ministère.",
      image: "/placeholder.svg?height=300&width=300",
      order: 1,
      createdAt: new Date("2022-01-01"),
      updatedAt: new Date("2022-01-01"),
    },
    // ... autres membres
  ]
}

// Fonctions CRUD simulées
export async function createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simuler la création d'un utilisateur
  return {
    id: Math.floor(Math.random() * 1000),
    ...userData,
    createdAt: new Date(),
  }
}

export async function createBlogPost(
  postData: Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "views">,
): Promise<BlogPost> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simuler la création d'un article
  return {
    id: Math.floor(Math.random() * 1000),
    ...postData,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

// Autres fonctions CRUD similaires pour les autres entités...
