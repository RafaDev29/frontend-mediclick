"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { label: "Inicio", path: "/home" },
  { label: "Soluciones", path: "/solutions" },
  { label: "Planes", path: "/plans" },
]

export default function PublicNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .public-nav {
          width: 100%;
          height: 64px;
          background: #0a2e6e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .nav-logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

      

    

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
          color: rgba(255,255,255,0.6);
          border: 1px solid transparent;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }

        .nav-link.active {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        /* CTA button */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .nav-cta:hover {
          background: #1a65d6;
        }

        /* Hamburger button */
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .nav-hamburger:hover {
          background: rgba(255,255,255,0.1);
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
          margin: 5px 0;
        }

        .nav-hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .nav-hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile menu */
        .nav-mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: #0a2e6e;
          padding: 16px 20px 24px;
          flex-direction: column;
          gap: 8px;
          z-index: 49;
          border-top: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-menu.open {
          display: flex;
        }

        .nav-mobile-link {
          display: block;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          transition: all 0.2s;
        }

        .nav-mobile-link:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .nav-mobile-link.active {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .nav-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 8px;
          transition: background 0.2s;
        }

        .nav-mobile-cta:hover {
          background: #1a65d6;
        }

        /* ========== TABLET (768px) ========== */
        @media (max-width: 768px) {
          .public-nav {
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .nav-hamburger {
            display: block;
          }

       
        }

        /* ========== MOBILE (480px) ========== */
        @media (max-width: 480px) {
          .public-nav {
            padding: 0 16px;
            height: 56px;
          }

          .nav-mobile-menu {
            top: 56px;
          }

          .nav-logo-img {
            height: 32px;
          }

        }
      `}</style>

      <nav className="public-nav">
        {/* Logo */}
        <Link href="/home" className="nav-logo">
          <Image
            src="/logoooo.png"
            alt="SGIP"
            width={400}
            height={90}
            className="nav-logo-img"
            unoptimized
            priority
          />
          <div className="nav-logo-text">
            <span className="text-2xl font-bold text-white">SGIP</span>
            <span className="text-lg text-white">Sistema de Gestión Integral de Pacientes</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/login" className="nav-cta">
          Iniciar sesión
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </Link>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`nav-mobile-link ${pathname === link.path ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/login" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
          Iniciar sesión
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </Link>
      </div>
    </>
  )
}