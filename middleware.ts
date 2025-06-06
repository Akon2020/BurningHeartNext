import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simule la vérification d'authentification
// Dans un environnement de production, vous utiliseriez des cookies ou JWT
const isAuthenticated = (request: NextRequest) => {
  // Pour la démo, on vérifie simplement si un cookie "auth" existe
  return request.cookies.has("auth")
}

export function middleware(request: NextRequest) {
  // Protéger les routes admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!isAuthenticated(request)) {
      // Rediriger vers la page de login avec l'URL de retour
      const loginUrl = new URL("/auth/login", request.url)
      loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
