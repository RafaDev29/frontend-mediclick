"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { authService } from "@/features/auth/services/auth.service"
import { useAuthStore } from "@/store/auth.store"
import Link from "next/link"
import Image from "next/image"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const router = useRouter()
  const { setAuth } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const res = await authService.login({ email, password })
      if (res.success) {
        setSuccess(res.message)
        setAuth(res.data.user, res.data.accessToken, res.data.refreshToken)
        setTimeout(() => router.push("/dashboard"), 800)
      } else {
        setError(res.message)
      }
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Error al conectar con el servidor"
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
        }

        /* ===== LEFT PANEL ===== */
        .login-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 55%;
          padding: 56px;
          position: relative;
          overflow: hidden;
        }

        .login-left-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80');
          background-size: cover;
          background-position: center;
        }

        .login-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,46,110,0.9) 0%, rgba(20,87,192,0.8) 50%, rgba(30,111,219,0.7) 100%);
        }

        .login-left-circle1 {
          position: absolute;
          top: -80px; right: -80px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        .login-left-circle2 {
          position: absolute;
          bottom: -100px; left: -60px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        .login-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          position: relative;
          z-index: 10;
        }

        .login-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .login-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .login-logo-title {
          font-weight: 700;
          color: #fff;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .login-logo-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
        }

        .login-left-content {
          position: relative;
          z-index: 10;
        }

        .login-left-content h1 {
          color: #fff;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .login-left-content h1 span {
          color: #bfdbfe;
        }

        .login-left-content p {
          color: rgba(255,255,255,0.6);
          font-size: 18px;
          max-width: 380px;
          line-height: 1.6;
        }

        /* ===== RIGHT PANEL ===== */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f4fb;
          padding: 32px;
        }

        .login-form-container {
          width: 100%;
          max-width: 420px;
        }

        .login-form-container h2 {
          font-size: 30px;
          font-weight: 700;
          color: #0a2e6e;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .login-form-container .login-subtitle {
          color: #64748b;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .login-alert {
          margin-bottom: 20px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .login-alert.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
        }

        .login-alert.success {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669;
        }

        .login-field {
          margin-bottom: 20px;
        }

        .login-field label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          margin-bottom: 6px;
        }

        .login-input-wrap {
          position: relative;
        }

        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          display: flex;
        }

        .login-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e2e8f0;
          color: #1e293b;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }

        .login-input:focus {
          border-color: #1457c0;
          box-shadow: 0 0 0 3px rgba(20,87,192,0.1);
        }

        .login-input::placeholder {
          color: #94a3b8;
        }

        .login-input.has-toggle {
          padding-right: 44px;
        }

        .login-toggle-pw {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          display: flex;
          transition: color 0.2s;
        }

        .login-toggle-pw:hover {
          color: #475569;
        }

        .login-submit {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(20,87,192,0.3);
        }

        .login-submit:hover {
          background: #0a2e6e;
        }

        .login-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-copy {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin-top: 40px;
        }

        /* ===== MOBILE HERO (oculto en desktop) ===== */
        .login-mobile-hero {
          display: none;
        }

        /* ========== TABLET (1024px) ========== */
        @media (max-width: 1024px) {
          .login-left {
            width: 45%;
            padding: 40px;
          }
          .login-left-content h1 {
            font-size: 36px;
          }
          .login-left-content p {
            font-size: 16px;
          }
        }

        /* ========== MOBILE (768px) ========== */
        @media (max-width: 768px) {
          .login-wrapper {
            flex-direction: column;
          }

          /* Ocultar panel izquierdo desktop */
          .login-left {
            display: none;
          }

          /* Mostrar hero móvil */
          .login-mobile-hero {
            display: block;
            position: relative;
            padding: 48px 24px 40px;
            overflow: hidden;
          }

          .login-mobile-hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80');
            background-size: cover;
            background-position: center;
          }

          .login-mobile-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(10,46,110,0.88) 0%, rgba(20,87,192,0.8) 50%, rgba(30,111,219,0.72) 100%);
          }

          .login-mobile-hero-content {
            position: relative;
            z-index: 10;
          }

          .login-mobile-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            margin-bottom: 28px;
          }

          .login-mobile-logo-img {
            height: 36px;
            width: auto;
            object-fit: contain;
          }

          .login-mobile-logo-title {
            font-weight: 700;
            color: #fff;
            font-size: 17px;
          }

          .login-mobile-hero h1 {
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 12px;
          }

          .login-mobile-hero h1 span {
            color: #bfdbfe;
          }

          .login-mobile-hero p {
            color: rgba(255,255,255,0.6);
            font-size: 15px;
            line-height: 1.6;
          }

          .login-right {
            padding: 32px 24px 48px;
          }
        }

        /* ========== MOBILE SMALL (480px) ========== */
        @media (max-width: 480px) {
          .login-mobile-hero {
            padding: 36px 20px 32px;
          }

          .login-mobile-hero h1 {
            font-size: 24px;
          }

          .login-mobile-hero p {
            font-size: 14px;
          }

          .login-mobile-logo-img {
            height: 30px;
          }

          .login-right {
            padding: 28px 20px 40px;
          }

          .login-form-container h2 {
            font-size: 24px;
          }

          .login-submit {
            padding: 14px;
          }
        }
      `}</style>

      <div className="login-wrapper">

        {/* ===== MOBILE HERO (solo visible en móvil) ===== */}
        <div className="login-mobile-hero">
          <div className="login-mobile-hero-bg" />
          <div className="login-mobile-hero-overlay" />
          <div className="login-mobile-hero-content">
            <Link href="/home" className="login-mobile-logo">
              <Image
                src="/logoooo.png"
                alt="SGIP"
                width={300}
                height={80}
                className="login-mobile-logo-img"
                unoptimized
                priority
              />
              <span className="login-mobile-logo-title">SGIP</span>
            </Link>
            <h1>
              Gestiona tus<br />
              <span>pacientes</span><br />
              fácilmente
            </h1>
            <p>Plataforma integral para Clínicas. Administra, controla y da seguimiento a cada paciente.</p>
          </div>
        </div>

        {/* ===== LEFT PANEL (solo visible en desktop) ===== */}
        <div className="login-left">
          <div className="login-left-bg" />
          <div className="login-left-overlay" />
          <div className="login-left-circle1" />
          <div className="login-left-circle2" />

          <Link href="/home" className="login-logo">
            <Image
              src="/logoooo.png"
              alt="SGIP"
              width={300}
              height={80}
              className="login-logo-img"
              unoptimized
              priority
            />
            <div className="login-logo-text">
              <span className="login-logo-title">SGIP</span>
              <span className="login-logo-sub">Sistema de Gestión Integral de Pacientes</span>
            </div>
          </Link>

          <div className="login-left-content">
            <h1>
              Gestiona tus<br />
              <span>pacientes</span><br />
              fácilmente
            </h1>
            <p>Plataforma integral para Clínicas. Administra, controla y da seguimiento a cada paciente.</p>
          </div>

          <div />
        </div>

        {/* ===== RIGHT PANEL ===== */}
        <div className="login-right">
          <div className="login-form-container">

            <h2>Bienvenido</h2>
            <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

            {error && (
              <div className="login-alert error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            {success && (
              <div className="login-alert success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="login-field">
                <label>Correo electrónico</label>
                <div className="login-input-wrap">
                  <div className="login-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@hospital.com"
                    required
                    className="login-input"
                  />
                </div>
              </div>

              <div className="login-field">
                <label>Contraseña</label>
                <div className="login-input-wrap">
                  <div className="login-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="login-input has-toggle"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-toggle-pw"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} className="login-submit">
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle opacity="0.25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path opacity="0.75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Ingresando...
                  </>
                ) : "Ingresar"}
              </button>
            </form>

            <p className="login-copy">© {new Date().getFullYear()} D&A Intelligent Solutions · Todos los derechos reservados</p>
          </div>
        </div>

      </div>
    </>
  )
}