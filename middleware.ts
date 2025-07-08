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

// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const protectedPaths = ['/admin'];
//   const isProtected = protectedPaths.some((path) =>
//     request.nextUrl.pathname.startsWith(path)
//   );

//   if (!isProtected) return NextResponse.next();

//   const token = request.cookies.get('token');

//   if (!token) {
//     return redirectToLogin(request);
//   }

//   try {
//     // Appel à ton backend pour vérifier si le token est valide
//     const authStatusRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/status`, {
//       headers: {
//         cookie: `token=${token.value}`,
//       },
//       credentials: 'include',
//     });

//     const authData = await authStatusRes.json();

//     if (authStatusRes.status !== 200 || !authData.authenticated) {
//       return redirectToLogin(request);
//     }

//     return NextResponse.next();
//   } catch (err) {
//     console.error('Erreur de vérification du token :', err);
//     return redirectToLogin(request);
//   }
// }

// function redirectToLogin(request: NextRequest) {
//   const loginUrl = request.nextUrl.clone();
//   loginUrl.pathname = '/auth/login';
//   loginUrl.searchParams.set('returnUrl', request.nextUrl.pathname);
//   return NextResponse.redirect(loginUrl);
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };

