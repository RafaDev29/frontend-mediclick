import type { Metadata } from "next"
import "./globals.css"
import ConditionalNavbar from "@/components/shared/ConditionalNavbar"

export const metadata: Metadata = {
  title: "MediClick",
  description: "Plataforma de gestión hospitalaria",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  )
}