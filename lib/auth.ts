// Types
export interface AuthUser {
  id: number
  name: string
  email: string
  role: "admin" | "editeur" | "membre"
}

// État simulé
let currentUser: AuthUser | null = null

// Fonctions d'authentification simulées
export async function login(email: string, password: string): Promise<AuthUser> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simuler une vérification d'identifiants (dans un vrai système, vous vérifieriez les identifiants dans la base de données)
  if (email && password) {
    // Pour la démo, on accepte n'importe quel email/mot de passe
    currentUser = {
      id: 1,
      name: "Administrateur",
      email: email,
      role: "admin",
    }
    return currentUser
  }

  throw new Error("Identifiants invalides")
}

export async function register(name: string, email: string, password: string): Promise<AuthUser> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simuler une création d'utilisateur (dans un vrai système, vous créeriez l'utilisateur dans la base de données)
  if (name && email && password) {
    currentUser = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      role: "membre",
    }
    return currentUser
  }

  throw new Error("Données d'inscription invalides")
}

export async function logout(): Promise<void> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Déconnecter l'utilisateur
  currentUser = null
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  // Simuler un délai de réseau
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Retourner l'utilisateur actuel
  return currentUser
}

export async function isAuthenticated(): Promise<boolean> {
  // Vérifier si l'utilisateur est connecté
  return (await getCurrentUser()) !== null
}

export async function hasRole(role: "admin" | "editor" | "membre"): Promise<boolean> {
  // Vérifier si l'utilisateur a le rôle spécifié
  const user = await getCurrentUser()
  if (!user) return false

  if (role === "admin") return user.role === "admin"
  if (role === "editor") return user.role === "admin" || user.role === "editor"
  return true // Tous les utilisateurs ont au moins le rôle "membre"
}
