import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Spacer div to prevent content from being hidden under the fixed header */}
      <div className="h-16 md:h-20"></div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
