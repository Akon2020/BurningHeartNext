import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Protéger les routes admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/status`, {
        headers: {
          cookie: `token=${token}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.status !== 200 || !data.authenticated) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("returnUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
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

