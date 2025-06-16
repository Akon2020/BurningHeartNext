import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, FileText, Users, Feather, Target, Globe, Camera, Wallet, Compass, Handshake, UserCog, Megaphone, Bible } from "lucide-react"

const services = [
  {
    title: "Coordination",
    description: "Pilote central de l’organisation, le coordinateur supervise les départements, définit les responsabilités, veille à la mission spirituelle et forme les accompagnateurs.",
    icon: Compass,
  },
  {
    title: "Spiritual Supervisor",
    description: "Responsable de la qualité des enseignements spirituels, il accompagne les membres dans leur foi et veille à l’unité avec la tradition ignatienne.",
    icon: Feather,
  },
  {
    title: "Supervision",
    description: "Composée des accompagnateurs, cette équipe suit les âmes, forme les membres et transmet la tradition spirituelle et ignatienne.",
    icon: Handshake,
  },
  {
    title: "Assistant",
    description: "Appuie la coordination, supervise les départements, gère les ressources humaines et les relations extérieures, et modère les rencontres.",
    icon: UserCog,
  },
  {
    title: "HR Manager",
    description: "Responsable des ressources humaines et du bon fonctionnement des équipes, il assure le lien entre la gestion humaine et opérationnelle.",
    icon: Users,
  },
  {
    title: "Administrator Manager",
    description: "Gère la logistique, contrôle le matériel, prépare les espaces de réunion, assure l’inventaire, les déplacements, la sonorisation et les installations techniques.",
    icon: Package,
  },
  {
    title: "Accountant & Treasury",
    description: "Gère les finances : budgets, entrées et sorties, rapports financiers, rédaction de projets, et inventaire économique.",
    icon: Wallet,
  },
  {
    title: "Secrétariat",
    description: "Planifie les activités, gère les convocations, rédige les PV, s’occupe des archives, de la propreté des lieux, des fournitures et des supports pour les rencontres.",
    icon: FileText,
  },
  {
    title: "Communication Office",
    description: "S’occupe de la communication interne et externe, crée les supports visuels, gère les réseaux sociaux et assure la visibilité du groupe.",
    icon: Megaphone,
  },
  {
    title: "Médias",
    description: "Couvre les événements en photo et vidéo, gère les archives médiatiques, assure la diffusion du message via la presse et les plateformes numériques.",
    icon: Camera,
  },
  {
    title: "Vocation Promotor",
    description: "Accompagne les membres à discerner et vivre leur appel personnel, en accord avec la mission de Burning Heart.",
    icon: Target,
  },
  {
    title: "Spiritual Officer",
    description: "Organise les activités liturgiques et spirituelles : retraites, veillées, prières communautaires, et animation pastorale.",
    icon: Bible,
  },
  {
    title: "Social & Well-being",
    description: "Responsable de l’accueil, de la convivialité, des sorties, fêtes, approvisionnement alimentaire et de la sécurité (protocole).",
    icon: Globe,
  }
]



const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Nos Départements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les différentes façons dont nous nous impliquons dans la communauté et la faisons grandir.
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
