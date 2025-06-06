import { ThemeDebugger } from "@/components/theme-debugger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ThemeTestPage() {
  return (
    <div className="container py-20">
      <h1 className="text-center mb-8">Test du thème</h1>

      <ThemeDebugger />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Carte de test</CardTitle>
            <CardDescription>Cette carte teste le thème</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Le contenu de cette carte devrait s'adapter au thème actuel.</p>
          </CardContent>
          <CardFooter>
            <Button>Bouton de test</Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Carte primaire</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Cette carte utilise la couleur primaire
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Le contenu avec la couleur primaire.</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Bouton secondaire</Button>
          </CardFooter>
        </Card>

        <Card className="bg-secondary text-secondary-foreground">
          <CardHeader>
            <CardTitle>Carte secondaire</CardTitle>
            <CardDescription>Cette carte utilise la couleur secondaire</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Le contenu avec la couleur secondaire.</p>
          </CardContent>
          <CardFooter>
            <Button variant="destructive">Bouton destructif</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link href="/">
          <Button variant="outline">Retour à l'accueil</Button>
        </Link>
      </div>
    </div>
  )
}
