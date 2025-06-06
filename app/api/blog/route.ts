import { NextResponse } from "next/server"
import { getBlogPosts, createBlogPost } from "@/lib/db"
import { hasRole } from "@/lib/auth"

export async function GET() {
  try {
    const posts = await getBlogPosts()

    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des articles" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // Vérifier si l'utilisateur a les droits d'éditeur
    const isEditor = await hasRole("editor")
    if (!isEditor) {
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 })
    }

    const postData = await request.json()

    // Validation des données
    if (!postData.title || !postData.content) {
      return NextResponse.json({ error: "Titre et contenu requis" }, { status: 400 })
    }

    const post = await createBlogPost(postData)

    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la création de l'article" }, { status: 500 })
  }
}
