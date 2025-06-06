import { NextResponse } from "next/server"
import { register } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    const user = await register(name, email, password)

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
  }
}
