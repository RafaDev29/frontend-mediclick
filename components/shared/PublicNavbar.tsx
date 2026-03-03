"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Inicio", path: "/home" },
  { label: "Soluciones", path: "/solutions" },
  { label: "Planes", path: "/plans" },
]

export default function PublicNavbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full h-16 bg-[#0a2e6e] flex items-center justify-between px-10 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/home" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-bold text-white text-base tracking-tight">MediClick</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-white/15 text-white border border-white/20"
                  : "text-white/60 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <Link
        href="/login"
        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#1457c0] hover:bg-[#1a65d6] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-black/20"
      >
        Iniciar sesión
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      </Link>
    </nav>
  )
}