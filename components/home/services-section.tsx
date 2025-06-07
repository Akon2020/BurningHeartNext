import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookIcon as Bible, Heart, Users, Music, BookOpen, Coffee } from "lucide-react"

const services = [
  {
    title: "Culte du Dimanche",
    description: "Un moment de louange, d'enseignement biblique et de communion fraternelle pour toute la famille.",
    icon: Bible,
  },
  {
    title: "Groupes de Maison",
    description: "Des rencontres hebdomadaires en petits groupes pour approfondir sa foi et créer des liens.",
    icon: Users,
  },
  {
    title: "Ministère de Louange",
    description: "Exprimez votre adoration à travers la musique et rejoignez notre équipe de louange.",
    icon: Music,
  },
  {
    title: "École du Dimanche",
    description: "Un enseignement adapté aux enfants pour leur permettre de grandir dans la foi.",
    icon: BookOpen,
  },
  {
    title: "Actions Sociales",
    description: "Des initiatives pour aider les plus démunis et avoir un impact positif dans notre communauté.",
    icon: Heart,
  },
  {
    title: "Café-Rencontre",
    description: "Un espace convivial pour accueillir les nouveaux venus et favoriser les échanges.",
    icon: Coffee,
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nos Départements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les différentes façons de vous impliquer dans notre communauté et de grandir spirituellement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
