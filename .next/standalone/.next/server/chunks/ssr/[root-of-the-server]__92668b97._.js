module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70864,a=>{a.n(a.i(33290))},9014,a=>{a.n(a.i(70055))},79070,a=>{a.n(a.i(96918))},77303,a=>{a.n(a.i(77645))},80757,a=>{a.n(a.i(51548))},20811,a=>{"use strict";var b=a.i(33256);function c(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .home-root {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          color: #0a2e6e;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1800&q=80');
          background-size: cover;
          background-position: center;
          filter: brightness(0.22);
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, #0a2e6ecc 0%, #1457c099 60%, transparent 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          padding: 0 80px;
          animation: fadeUp 0.9s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #a8c8ff;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
          letter-spacing: 0.02em;
        }

        .hero-badge span {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero h1 em {
          font-style: normal;
          color: #93c5fd;
        }

        .hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1457c0;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 8px 32px rgba(20,87,192,0.4);
        }

        .hero-cta:hover {
          background: #1a65d6;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(20,87,192,0.5);
        }

        /* FEATURES */
        .features {
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
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 700;
          color: #0a2e6e;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .section-sub {
          font-size: 16px;
          color: #64748b;
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 60px;
          font-weight: 300;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.25s;
        }

        .feature-card:hover {
          border-color: #1457c0;
          box-shadow: 0 8px 32px rgba(20,87,192,0.08);
          transform: translateY(-4px);
        }

        .feature-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 17px;
          font-weight: 600;
          color: #0a2e6e;
          margin-bottom: 10px;
        }

        .feature-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.7;
          font-weight: 300;
        }

        /* STATS */
        .stats {
          padding: 80px;
          background: #0a2e6e;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        /* FOOTER */
        .footer {
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
          letter-spacing: -0.01em;
        }

        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-content { padding: 0 24px; }
          .features { padding: 60px 24px; }
          .stats { padding: 60px 24px; }
          .footer { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
        }
      `}),(0,b.jsxs)("div",{className:"home-root",children:[(0,b.jsxs)("section",{className:"hero",children:[(0,b.jsx)("div",{className:"hero-bg"}),(0,b.jsx)("div",{className:"hero-overlay"}),(0,b.jsxs)("div",{className:"hero-content",children:[(0,b.jsxs)("div",{className:"hero-badge",children:[(0,b.jsx)("span",{}),"Plataforma hospitalaria digital"]}),(0,b.jsxs)("h1",{children:["Gestión de citas",(0,b.jsx)("br",{}),(0,b.jsx)("em",{children:"médicas simple"}),(0,b.jsx)("br",{}),"y eficiente"]}),(0,b.jsx)("p",{children:"MediClick centraliza la agenda médica de tu hospital. Programa, confirma y da seguimiento a cada cita con facilidad."}),(0,b.jsxs)("a",{href:"/login",className:"hero-cta",children:["Comenzar ahora",(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),(0,b.jsxs)("section",{className:"features",children:[(0,b.jsx)("p",{className:"section-label",children:"¿Por qué MediClick?"}),(0,b.jsxs)("h2",{className:"section-title",children:["Todo lo que necesita",(0,b.jsx)("br",{}),"tu hospital"]}),(0,b.jsx)("p",{className:"section-sub",children:"Una plataforma diseñada para simplificar la gestión médica diaria, desde la agenda hasta el historial del paciente."}),(0,b.jsx)("div",{className:"features-grid",children:[{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),title:"Agenda inteligente",desc:"Programa y gestiona citas médicas en tiempo real, evitando conflictos de horarios y reduciendo ausencias."},{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,b.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,b.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"Gestión de pacientes",desc:"Centraliza el historial, datos y atenciones de cada paciente en un solo lugar, accesible para todo el equipo médico."},{icon:(0,b.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),title:"Seguimiento en tiempo real",desc:"Monitorea el estado de cada atención médica con actualizaciones instantáneas para médicos y recepcionistas."},{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,b.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),title:"Acceso por roles",desc:"Control de acceso seguro para administradores, médicos y recepcionistas, cada uno con su vista personalizada."}].map((a,c)=>(0,b.jsxs)("div",{className:"feature-card",children:[(0,b.jsx)("div",{className:"feature-icon",children:a.icon}),(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.desc})]},c))})]}),(0,b.jsx)("section",{className:"stats",children:[{value:"99.9%",label:"Disponibilidad garantizada"},{value:"< 1s",label:"Tiempo de respuesta"},{value:"256bit",label:"Encriptación de datos"},{value:"24/7",label:"Soporte disponible"}].map((a,c)=>(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"stat-value",children:a.value}),(0,b.jsx)("div",{className:"stat-label",children:a.label})]},c))}),(0,b.jsxs)("footer",{className:"footer",children:[(0,b.jsxs)("a",{href:"/home",className:"footer-logo",children:[(0,b.jsx)("div",{className:"footer-logo-icon",children:(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:(0,b.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,b.jsx)("span",{children:"MediClick"})]}),(0,b.jsx)("p",{className:"footer-copy",children:"© 2026 DYA Solutions · Todos los derechos reservados"})]})]})]})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__92668b97._.js.map