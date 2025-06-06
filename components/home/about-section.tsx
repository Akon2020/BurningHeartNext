import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="À propos de Burning Heart"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-primary mb-6">À Propos de Nous</h2>
            <p className="text-lg mb-6">
              Burning Heart est une communauté dynamique fondée en 2010 avec une vision claire : allumer le feu
              de la foi dans le coeur de chaque personne qui franchit nos portes.
            </p>
            <p className="text-lg mb-6">
              Notre communauté est un lieu où chacun peut se sentir accueilli, quelle que soit son origine ou son
              parcours. Nous croyons que la foi est un voyage personnel qui s'enrichit dans la communauté.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">Notre Mission</h4>
                <p>Inspirer et équiper chacun pour vivre une vie de foi authentique.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">Notre Vision</h4>
                <p>Être une communauté qui transforme des vies et impacte positivement la société.</p>
              </div>
            </div>

            <Button asChild>
              <Link href="/a-propos">
                En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
