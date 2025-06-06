import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CalendarIcon, Clock, User } from "lucide-react"

// Exemple de données de blog (à remplacer par des données réelles)
const blogPosts = [
  {
    id: 1,
    title: "La puissance de la prière dans la vie quotidienne",
    excerpt: "Découvrez comment la prière peut transformer votre vie quotidienne et vous apporter paix et sérénité.",
    date: "10 Mai 2025",
    author: "Père Ciza",
    readTime: "5 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Spiritualité",
  },
  {
    id: 2,
    title: "Comment étudier la Bible efficacement",
    excerpt:
      "Des méthodes pratiques pour tirer le meilleur de votre temps d'étude biblique et approfondir votre compréhension.",
    date: "2 Mai 2025",
    author: "Samuel Diambu",
    readTime: "8 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Étude Biblique",
  },
  {
    id: 3,
    title: "L'importance de la communauté dans la foi",
    excerpt:
      "Pourquoi la communion fraternelle est essentielle pour une vie de foi épanouissante et comment la cultiver.",
    date: "25 Avril 2025",
    author: "Isaac Akonkwa",
    readTime: "6 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Communauté",
  },
  {
    id: 4,
    title: "Témoignage: Comment j'ai trouvé ma vocation",
    excerpt: "L'histoire inspirante de Jean qui a découvert son appel à travers les épreuves et les bénédictions.",
    date: "18 Avril 2025",
    author: "David Cubaka",
    readTime: "10 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Témoignages",
  },
  {
    id: 5,
    title: "La louange comme mode de vie",
    excerpt: "Comment intégrer la louange dans tous les aspects de votre vie quotidienne, au-delà du dimanche matin.",
    date: "10 Avril 2025",
    author: "Wani Rudendeza",
    readTime: "7 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Louange",
  },
  {
    id: 6,
    title: "Élever des enfants dans la foi aujourd'hui",
    excerpt:
      "Conseils pratiques pour les parents qui souhaitent transmettre leur foi à leurs enfants dans un monde moderne.",
    date: "2 Avril 2025",
    author: "Père Ciza",
    readTime: "9 min",
    image: "/placeholder.svg?height=300&width=600",
    category: "Famille",
  },
]

// Catégories pour le filtre
const categories = ["Tous", "Spiritualité", "Étude Biblique", "Communauté", "Témoignages", "Louange", "Famille"]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Notre Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez des articles inspirants, des enseignements profonds et des témoignages qui nourriront votre foi et
            votre vie spirituelle.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "Tous" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 left-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded">{post.category}</span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                  <h3 className="text-xl line-clamp-2">{post.title}</h3>
                </Link>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/blog/${post.id}`}>Lire l'article</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Précédent
            </Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Suivant</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
