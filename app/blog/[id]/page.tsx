import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, User, ChevronLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Exemple de données de blog (à remplacer par des données réelles)
const blogPosts = [
  {
    id: 1,
    title: "La puissance de la prière dans la vie quotidienne",
    content: `
      <p>La prière est l'un des aspects les plus fondamentaux de la vie chrétienne. C'est notre ligne directe avec Dieu, un moyen de communication qui nous permet de nous connecter avec notre Créateur. Mais au-delà de cette définition simple, la prière est une pratique qui peut transformer profondément notre vie quotidienne.</p>
      
      <h2>Qu'est-ce que la prière?</h2>
      
      <p>La prière n'est pas simplement une liste de demandes que nous présentons à Dieu. C'est une conversation, un dialogue intime avec Celui qui nous connaît mieux que nous ne nous connaissons nous-mêmes. Elle implique de parler, mais aussi d'écouter, d'être attentif à la voix de Dieu qui peut se manifester de différentes manières dans notre vie.</p>
      
      <p>Dans l'Évangile selon Saint Matthieu, Jésus nous enseigne comment prier à travers le Notre Père, nous donnant un modèle qui couvre tous les aspects essentiels de la prière : la louange, la soumission à la volonté de Dieu, les demandes pour nos besoins quotidiens, le pardon et la protection.</p>
      
      <h2>Les bienfaits de la prière régulière</h2>
      
      <p>La pratique régulière de la prière apporte de nombreux bienfaits dans notre vie :</p>
      
      <ul>
        <li><strong>Paix intérieure</strong> : La prière nous aide à déposer nos inquiétudes aux pieds de Dieu, nous permettant d'expérimenter cette "paix qui surpasse toute intelligence" dont parle l'apôtre Paul.</li>
        <li><strong>Clarté mentale</strong> : En prenant le temps de nous arrêter et de communier avec Dieu, nous gagnons souvent une perspective nouvelle sur nos problèmes et nos défis.</li>
        <li><strong>Force spirituelle</strong> : La prière nous connecte à la source de toute force et nous équipe pour faire face aux épreuves de la vie.</li>
        <li><strong>Transformation du caractère</strong> : En passant du temps en présence de Dieu, nous sommes progressivement transformés à son image.</li>
      </ul>
      
      <h2>Comment intégrer la prière dans votre quotidien</h2>
      
      <p>Voici quelques suggestions pratiques pour faire de la prière une partie intégrante de votre vie quotidienne :</p>
      
      <ol>
        <li><strong>Établissez un moment régulier</strong> : Choisissez un moment spécifique de la journée dédié à la prière, que ce soit le matin au réveil, pendant votre pause déjeuner ou avant de vous coucher.</li>
        <li><strong>Créez un espace dédié</strong> : Désignez un endroit calme dans votre maison où vous pouvez prier sans distraction.</li>
        <li><strong>Utilisez des supports</strong> : Un journal de prière, des livres de dévotion ou des applications de prière peuvent enrichir votre temps de prière.</li>
        <li><strong>Pratiquez la prière spontanée</strong> : Au-delà des moments formels, apprenez à communiquer avec Dieu tout au long de la journée, dans les petits moments comme dans les grands défis.</li>
        <li><strong>Priez en communauté</strong> : Rejoignez un groupe de prière ou priez régulièrement avec votre famille pour enrichir votre vie de prière.</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>La prière n'est pas une obligation religieuse, mais un privilège incroyable qui nous est offert. C'est une invitation à entrer dans une relation vivante avec le Dieu de l'univers, qui désire communier avec nous et transformer notre vie de l'intérieur.</p>
      
      <p>En faisant de la prière une priorité dans notre vie quotidienne, nous ouvrons la porte à une transformation profonde qui affectera non seulement notre propre vie, mais aussi celle de ceux qui nous entourent.</p>
      
      <p>Comme l'a si bien dit C.S. Lewis : "La prière ne change pas Dieu, elle me change." Engagez-vous aujourd'hui à approfondir votre vie de prière et observez les changements merveilleux qui en découleront.</p>
    `,
    date: "10 Mai 2025",
    author: "Père Ciza",
    authorBio:
      "Fondateur principal de la communauté Burning Heart depuis 2015, passionné par l'enseignement biblique et l'accompagnement spirituel.",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "5 min",
    image: "/placeholder.svg?height=500&width=1000",
    category: "Spiritualité",
    tags: ["Prière", "Vie spirituelle", "Développement personnel"],
  },
]

// Fonction pour récupérer un article par son ID
const getPostById = (id: string) => {
  return blogPosts.find((post) => post.id === Number.parseInt(id)) || null
}

// Fonction pour récupérer des articles similaires
const getSimilarPosts = (currentId: number) => {
  return blogPosts.filter((post) => post.id !== currentId).slice(0, 3)
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h1>Article non trouvé</h1>
        <p className="mt-4">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
        <Button className="mt-6" asChild>
          <Link href="/blog">Retour au blog</Link>
        </Button>
      </div>
    )
  }

  const similarPosts = getSimilarPosts(post.id)

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">{post.category}</span>
          </div>
          <h1 className="mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} de lecture</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-medium">Partagez cet article:</p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Partager sur Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Partager sur Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Partager sur LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mb-16">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl mb-2">{post.author}</h3>
                <p className="text-muted-foreground mb-4">{post.authorBio}</p>
                <Button variant="outline" size="sm">
                  Voir tous ses articles
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Similar Posts */}
        {similarPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarPosts.map((similarPost) => (
                <Card key={similarPost.id} className="overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image
                      src={similarPost.image || "/placeholder.svg"}
                      alt={similarPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/blog/${similarPost.id}`} className="hover:text-primary transition-colors">
                      <h3 className="font-bold mb-2 line-clamp-2">{similarPost.title}</h3>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{similarPost.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
