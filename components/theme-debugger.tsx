"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ThemeDebugger() {
  const { theme, resolvedTheme, setTheme, themes } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto my-8">
      <CardHeader>
        <CardTitle>Débogueur de thème</CardTitle>
        <CardDescription>Informations sur l'état actuel du thème</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p>
            <strong>Thème actuel:</strong> {theme || "Non défini"}
          </p>
          <p>
            <strong>Thème résolu:</strong> {resolvedTheme || "Non résolu"}
          </p>
          <p>
            <strong>Thèmes disponibles:</strong> {themes.join(", ")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => setTheme("light")} className="px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80">
            Clair
          </button>
          <button onClick={() => setTheme("dark")} className="px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80">
            Sombre
          </button>
          <button
            onClick={() => setTheme("system")}
            className="px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80"
          >
            Système
          </button>
        </div>
        <div className="text-xs text-muted-foreground">
          <p>Classe HTML: {document.documentElement.classList.contains("dark") ? "dark" : "light"}</p>
          <p>Préférence système: {window.matchMedia("(prefers-color-scheme: dark)").matches ? "sombre" : "clair"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
