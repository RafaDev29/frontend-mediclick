export default function SolutionsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .sol-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #0a2e6e; }

        /* HERO */
        .sol-hero {
          position: relative;
          padding: 120px 80px 100px;
          background: #0a2e6e;
          overflow: hidden;
        }

        .sol-hero::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(20,87,192,0.3);
        }

        .sol-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
        }

        .sol-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 680px;
          animation: fadeUp 0.8s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sol-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 24px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .sol-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .sol-hero h1 em {
          font-style: normal;
          color: #93c5fd;
        }

        .sol-hero p {
          font-size: 17px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          font-weight: 300;
          max-width: 520px;
        }

        /* MODULES */
        .sol-modules {
          padding: 100px 80px;
          background: #f8fafc;
        }

        .section-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1457c0;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 700;
          color: #0a2e6e;
          line-height: 1.2;
          margin-bottom: 14px;
        }

        .section-sub {
          font-size: 15px;
          color: #64748b;
          max-width: 480px;
          line-height: 1.7;
          margin-bottom: 56px;
          font-weight: 300;
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .module-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }

        .module-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1457c0, #60a5fa);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .module-card:hover {
          border-color: #c7d9f8;
          box-shadow: 0 12px 40px rgba(20,87,192,0.08);
          transform: translateY(-4px);
        }

        .module-card:hover::before { opacity: 1; }

        .module-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .module-card h3 {
          font-size: 17px;
          font-weight: 600;
          color: #0a2e6e;
          margin-bottom: 10px;
        }

        .module-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.7;
          font-weight: 300;
        }

        .module-tag {
          display: inline-block;
          margin-top: 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #1457c0;
          background: #eff6ff;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* ROLES */
        .sol-roles {
          padding: 100px 80px;
          background: #fff;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 56px;
        }

        .role-card {
          border-radius: 24px;
          padding: 40px 36px;
          transition: transform 0.25s;
        }

        .role-card:hover { transform: translateY(-4px); }

        .role-card.admin { background: #0a2e6e; }
        .role-card.doctor { background: #0f5132; }
        .role-card.receptionist { background: #1e3a5f; }

        .role-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .role-avatar {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .role-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }

        .role-card .role-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }

        .role-benefits {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .role-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          font-weight: 300;
          line-height: 1.5;
        }

        .role-benefits li::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* FOOTER */
        .sol-footer {
          background: #060f24;
          padding: 36px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .footer-logo-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: #1457c0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo span {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }

        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .sol-hero, .sol-modules, .sol-roles { padding: 60px 24px; }
          .sol-footer { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="sol-root">

        {/* HERO */}
        <section className="sol-hero">
          <div className="sol-hero-inner">
            <div className="sol-badge">Soluciones</div>
            <h1>
              Herramientas diseñadas<br />
              para <em>cada rol</em> del hospital
            </h1>
            <p>
              MediClick ofrece módulos especializados para cada área de tu hospital, desde la recepción hasta la consulta médica.
            </p>
          </div>
        </section>

        {/* MODULES */}
        <section className="sol-modules">
          <p className="section-label">Módulos</p>
          <h2 className="section-title">Todo en una sola plataforma</h2>
          <p className="section-sub">Cada módulo está diseñado para resolver un problema específico del flujo hospitalario diario.</p>

          <div className="modules-grid">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                ),
                title: "Gestión de Citas",
                desc: "Agenda médica centralizada con vista diaria, semanal y mensual. Confirmaciones automáticas y control de disponibilidad.",
                tag: "Disponible"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Gestión de Pacientes",
                desc: "Historial completo de cada paciente, atenciones previas, datos personales y seguimiento de tratamientos.",
                tag: "Disponible"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                title: "Reportes y Estadísticas",
                desc: "Métricas en tiempo real sobre atenciones, citas completadas, cancelaciones y rendimiento del equipo médico.",
                tag: "Próximamente"
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1457c0" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                ),
                title: "Historial Clínico",
                desc: "Registro digital de diagnósticos, recetas y notas médicas por paciente, organizado y de fácil acceso.",
                tag: "Próximamente"
              },
            ].map((m, i) => (
              <div className="module-card" key={i}>
                <div className="module-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <span className="module-tag">{m.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ROLES */}
        <section className="sol-roles">
          <p className="section-label">Por tipo de usuario</p>
          <h2 className="section-title">Una experiencia para cada rol</h2>
          <p className="section-sub">Cada usuario accede solo a lo que necesita, con una interfaz adaptada a su función dentro del hospital.</p>

          <div className="roles-grid">
            {[
              {
                cls: "admin",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                ),
                role: "Administrador",
                sub: "Control total del sistema",
                benefits: [
                  "Gestión completa de usuarios y roles",
                  "Acceso a todos los módulos y reportes",
                  "Configuración del sistema hospitalario",
                  "Supervisión de toda la operación",
                ]
              },
              {
                cls: "doctor",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                role: "Médico",
                sub: "Gestión de consultas y pacientes",
                benefits: [
                  "Vista de agenda y citas del día",
                  "Acceso al historial clínico del paciente",
                  "Registro de diagnósticos y notas",
                  "Seguimiento de atenciones activas",
                ]
              },
              {
                cls: "receptionist",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                ),
                role: "Recepcionista",
                sub: "Gestión de agenda y pacientes",
                benefits: [
                  "Agendamiento y reprogramación de citas",
                  "Registro de nuevos pacientes",
                  "Confirmación y cancelación de citas",
                  "Vista general de la agenda diaria",
                ]
              },
            ].map((r, i) => (
              <div className={`role-card ${r.cls}`} key={i}>
                <div className="role-header">
                  <div className="role-avatar">{r.icon}</div>
                  <div>
                    <h3>{r.role}</h3>
                    <p className="role-sub">{r.sub}</p>
                  </div>
                </div>
                <ul className="role-benefits">
                  {r.benefits.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sol-footer">
          <a href="/home" className="footer-logo">
            <div className="footer-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>MediClick</span>
          </a>
          <p className="footer-copy">© 2026 DYA Solutions · Todos los derechos reservados</p>
        </footer>

      </div>
    </>
  )
}