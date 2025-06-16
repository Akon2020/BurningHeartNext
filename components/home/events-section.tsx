import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Messe Chrismale",
    date: "15 Juin 2025",
    time: "18:00 - 21:00",
    location: "Cathédrale Notre Dame de la Paix",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Retraite de Carême",
    date: "10-12 Juillet 2025",
    time: "Toute la journée",
    location: "Centre Spirituel Saint-Ignace",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Veillée de Prière pour la Paix",
    date: "5 Août 2025",
    time: "19:30 - 22:00",
    location: "Paroisse Saint-Pierre Claver",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const EventsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="mb-4">Événements à Venir</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Rejoignez-nous pour ces moments spéciaux de communion, d'apprentissage et de célébration.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/evenements">
              Tous les événements <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <h3 className="text-xl">{event.title}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/evenements/${event.id}`}>En savoir plus</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
