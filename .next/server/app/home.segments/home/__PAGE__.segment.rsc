1:"$Sreact.fragment"
6:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"OutletBoundary"]
7:"$Sreact.suspense"
9:I[1793,["/_next/static/chunks/1b58afe93242196d.js"],"Image"]
2:T287e,
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-root {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          color: #0a2e6e;
          overflow-x: hidden;
        }

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
          background-image: url('/home.jpeg');
          background-size: cover;
          background-position: center;
          filter: brightness(0.22);
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, #0a2e6ecc 0%, #1457c099 10%, transparent 100%);
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

        /* ========== TABLET (1024px) ========== */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 0 48px;
          }
          .features {
            padding: 80px 48px;
          }
          .stats {
            padding: 60px 48px;
            gap: 32px;
          }
          .footer {
            padding: 32px 48px;
          }
          .stat-value {
            font-size: 40px;
          }
        }

        /* ========== MOBILE LANDSCAPE / TABLET SMALL (768px) ========== */
        @media (max-width: 768px) {
          .hero {
            min-height: 80vh;
          }
          .hero-content {
            padding: 0 24px;
          }
          .hero h1 {
            font-size: 36px;
          }
          .hero p {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .hero-cta {
            padding: 12px 28px;
            font-size: 14px;
          }
          .features {
            padding: 60px 24px;
          }
          .section-title {
            font-size: 28px;
          }
          .section-sub {
            font-size: 15px;
            margin-bottom: 40px;
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .feature-card {
            padding: 28px 24px;
          }
          .stats {
            padding: 48px 24px;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .stat-value {
            font-size: 36px;
          }
          .stat-label {
            font-size: 13px;
          }
          .footer {
            padding: 28px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* ========== MOBILE (480px) ========== */
        @media (max-width: 480px) {
          .hero {
            min-height: 70vh;
            align-items: flex-end;
            padding-bottom: 48px;
          }
          .hero-content {
            padding: 0 20px;
          }
          .hero-badge {
            font-size: 11px;
            padding: 5px 12px;
            margin-bottom: 20px;
          }
          .hero h1 {
            font-size: 28px;
            margin-bottom: 16px;
          }
          .hero p {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .hero-cta {
            padding: 12px 24px;
            font-size: 13px;
            border-radius: 12px;
            width: 100%;
            justify-content: center;
          }
          .features {
            padding: 48px 20px;
          }
          .section-label {
            font-size: 11px;
          }
          .section-title {
            font-size: 24px;
          }
          .section-sub {
            font-size: 14px;
            margin-bottom: 32px;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .feature-card {
            padding: 24px 20px;
            border-radius: 16px;
          }
          .feature-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            margin-bottom: 16px;
          }
          .feature-card h3 {
            font-size: 16px;
          }
          .feature-card p {
            font-size: 13px;
          }
          .stats {
            padding: 40px 20px;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .stat-value {
            font-size: 28px;
          }
          .stat-label {
            font-size: 11px;
          }
          .footer {
            padding: 24px 20px;
            gap: 12px;
          }
          .footer-copy {
            font-size: 12px;
          }
        }
      0:{"buildId":"3uzwoqYn3S_rsS9bQLw8l","rsc":["$","$1","c",{"children":[[["$","style",null,{"children":"$2"}],"$L3"],null,"$L4"]}],"loading":null,"isPartial":false}
3:["$","div",null,{"className":"home-root","children":[["$","section",null,{"className":"hero","children":[["$","div",null,{"className":"hero-bg"}],["$","div",null,{"className":"hero-overlay"}],["$","div",null,{"className":"hero-content","children":[["$","div",null,{"className":"hero-badge","children":[["$","span",null,{}],"Plataforma clínica digital"]}],["$","h1",null,{"children":["Gestión de pacientes",["$","br",null,{}],["$","em",null,{"children":"completa y segura"}],["$","br",null,{}],"en tu clínica"]}],["$","p",null,{"children":"SGIP centraliza el historial clínico, datos y atenciones de cada paciente. Todo tu equipo médico conectado en un solo lugar."}],["$","a",null,{"href":"/login","className":"hero-cta","children":["Comenzar ahora",["$","svg",null,{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2.5","children":["$","path",null,{"d":"M5 12h14M12 5l7 7-7 7"}]}]]}]]}]]}],["$","section",null,{"className":"features","children":[["$","p",null,{"className":"section-label","children":"¿Por qué SGIP?"}],["$","h2",null,{"className":"section-title","children":["Todo lo que necesita",["$","br",null,{}],"tu clínica"]}],["$","p",null,{"className":"section-sub","children":"Una plataforma diseñada para simplificar la gestión de pacientes, desde el historial clínico hasta el seguimiento de cada atención."}],["$","div",null,{"className":"features-grid","children":[["$","div","0",{"className":"feature-card","children":[["$","div",null,{"className":"feature-icon","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}],["$","polyline",null,{"points":"14 2 14 8 20 8"}],["$","line",null,{"x1":"12","y1":"18","x2":"12","y2":"12"}],["$","line",null,{"x1":"9","y1":"15","x2":"15","y2":"15"}]]}]}],["$","h3",null,{"children":"Historial clínico completo"}],["$","p",null,{"children":"Registra y accede al historial médico de cada paciente: diagnósticos, tratamientos, exámenes, alergias y evoluciones en un solo lugar."}]]}],["$","div","1",{"className":"feature-card","children":[["$","div",null,{"className":"feature-icon","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}],["$","circle",null,{"cx":"9","cy":"7","r":"4"}],["$","path",null,{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}],["$","path",null,{"d":"M16 3.13a4 4 0 0 1 0 7.75"}]]}]}],["$","h3",null,{"children":"Gestión de pacientes"}],["$","p",null,{"children":"Administra el perfil completo de cada paciente: datos personales, contactos de emergencia, antecedentes familiares y documentos adjuntos."}]]}],["$","div","2",{"className":"feature-card","children":[["$","div",null,{"className":"feature-icon","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":["$","path",null,{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]}]}],["$","h3",null,{"children":"Seguimiento de atenciones"}],["$","p",null,{"children":"Monitorea el estado clínico de cada paciente con actualizaciones en tiempo real para médicos, enfermeras y recepcionistas."}]]}],["$","div","3",{"className":"feature-card","children":[["$","div",null,{"className":"feature-icon","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","rect",null,{"x":"3","y":"11","width":"18","height":"11","rx":"2"}],["$","path",null,{"d":"M7 11V7a5 5 0 0 1 10 0v4"}]]}]}],["$","h3",null,{"children":"Acceso por roles"}],["$","p",null,{"children":"Control de acceso seguro para administradores, médicos y recepcionistas de la clínica, cada uno con su vista personalizada."}]]}]]}]]}],["$","section",null,{"className":"stats","children":[["$","div","0",{"children":[["$","div",null,{"className":"stat-value","children":"99.9%"}],["$","div",null,{"className":"stat-label","children":"Disponibilidad garantizada"}]]}],["$","div","1",{"children":[["$","div",null,{"className":"stat-value","children":"< 1s"}],["$","div",null,{"className":"stat-label","children":"Tiempo de respuesta"}]]}],["$","div","2",{"children":[["$","div",null,{"className":"stat-value","children":"256bit"}],["$","div",null,{"className":"stat-label","children":"Encriptación de datos"}]]}],["$","div","3",{"children":[["$","div",null,{"className":"stat-value","children":"24/7"}],["$","div",null,{"className":"stat-label","children":"Soporte disponible"}]]}]]}],"$L5"]}]
4:["$","$L6",null,{"children":["$","$7",null,{"name":"Next.MetadataOutlet","children":"$@8"}]}]
5:["$","footer",null,{"className":"footer","children":[["$","a",null,{"href":"/home","className":"footer-logo","children":[["$","$L9",null,{"src":"/logoooo.png","alt":"SGIP","width":120,"height":40,"className":"h-8 w-auto object-contain","unoptimized":true}],["$","span",null,{"children":"SGIP"}]]}],["$","p",null,{"className":"footer-copy","children":"© 2026 DYA Solutions · Todos los derechos reservados"}]]}]
8:null
