1:"$Sreact.fragment"
2:I[77630,["/_next/static/chunks/1e8442a917767224.js"],"default"]
3:I[3097,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"default"]
4:I[99299,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"default"]
9:I[16153,[],"default"]
:HL["/_next/static/chunks/2db2b4b221bedce1.css","style"]
5:T1e8b,
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
      0:{"P":null,"b":"HeOGiyjMuNLuoU64t-Kva","c":["","solutions"],"q":"","i":false,"f":[[["",{"children":["solutions",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/2db2b4b221bedce1.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/1e8442a917767224.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"es","children":["$","body",null,{"children":[["$","$L2",null,{}],["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[[["$","style",null,{"children":"$5"}],"$L6"],null,"$L7"]}],{},null,false,false]},null,false,false]},null,false,false],"$L8",false]],"m":"$undefined","G":["$9",[]],"S":true}
f:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"OutletBoundary"]
10:"$Sreact.suspense"
12:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"ViewportBoundary"]
14:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"MetadataBoundary"]
6:["$","div",null,{"className":"sol-root","children":[["$","section",null,{"className":"sol-hero","children":["$","div",null,{"className":"sol-hero-inner","children":[["$","div",null,{"className":"sol-badge","children":"Soluciones"}],["$","h1",null,{"children":["Herramientas diseñadas",["$","br",null,{}],"para ",["$","em",null,{"children":"cada rol"}]," del hospital"]}],["$","p",null,{"children":"MediClick ofrece módulos especializados para cada área de tu hospital, desde la recepción hasta la consulta médica."}]]}]}],["$","section",null,{"className":"sol-modules","children":[["$","p",null,{"className":"section-label","children":"Módulos"}],["$","h2",null,{"className":"section-title","children":"Todo en una sola plataforma"}],["$","p",null,{"className":"section-sub","children":"Cada módulo está diseñado para resolver un problema específico del flujo hospitalario diario."}],["$","div",null,{"className":"modules-grid","children":[["$","div","0",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}]}],["$","h3",null,{"children":"Gestión de Citas"}],["$","p",null,{"children":"Agenda médica centralizada con vista diaria, semanal y mensual. Confirmaciones automáticas y control de disponibilidad."}],["$","span",null,{"className":"module-tag","children":"Disponible"}]]}],["$","div","1",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}],["$","circle",null,{"cx":"9","cy":"7","r":"4"}],["$","path",null,{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}],["$","path",null,{"d":"M16 3.13a4 4 0 0 1 0 7.75"}]]}]}],["$","h3",null,{"children":"Gestión de Pacientes"}],["$","p",null,{"children":"Historial completo de cada paciente, atenciones previas, datos personales y seguimiento de tratamientos."}],["$","span",null,{"className":"module-tag","children":"Disponible"}]]}],["$","div","2",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":["$","path",null,{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]}]}],["$","h3",null,{"children":"Reportes y Estadísticas"}],["$","p",null,{"children":"Métricas en tiempo real sobre atenciones, citas completadas, cancelaciones y rendimiento del equipo médico."}],["$","span",null,{"className":"module-tag","children":"Próximamente"}]]}],["$","div","3",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}],["$","polyline",null,{"points":"14 2 14 8 20 8"}],["$","line",null,{"x1":"16","y1":"13","x2":"8","y2":"13"}],["$","line",null,{"x1":"16","y1":"17","x2":"8","y2":"17"}],["$","polyline",null,{"points":"10 9 9 9 8 9"}]]}]}],["$","h3",null,{"children":"Historial Clínico"}],["$","p",null,{"children":"Registro digital de diagnósticos, recetas y notas médicas por paciente, organizado y de fácil acceso."}],["$","span",null,{"className":"module-tag","children":"Próximamente"}]]}]]}]]}],["$","section",null,{"className":"sol-roles","children":[["$","p",null,{"className":"section-label","children":"Por tipo de usuario"}],["$","h2",null,{"className":"section-title","children":"Una experiencia para cada rol"}],["$","p",null,{"className":"section-sub","children":"Cada usuario accede solo a lo que necesita, con una interfaz adaptada a su función dentro del hospital."}],["$","div",null,{"className":"roles-grid","children":[["$","div","0",{"className":"role-card admin","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":[["$","path",null,{"d":"M12 20h9"}],["$","path",null,{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}]]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Administrador"}],"$La"]}]]}],"$Lb"]}],"$Lc","$Ld"]}]]}],"$Le"]}]
7:["$","$Lf",null,{"children":["$","$10",null,{"name":"Next.MetadataOutlet","children":"$@11"}]}]
8:["$","$1","h",{"children":[null,["$","$L12",null,{"children":"$L13"}],["$","div",null,{"hidden":true,"children":["$","$L14",null,{"children":["$","$10",null,{"name":"Next.Metadata","children":"$L15"}]}]}],null]}]
a:["$","p",null,{"className":"role-sub","children":"Control total del sistema"}]
b:["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Gestión completa de usuarios y roles"}],["$","li","1",{"children":"Acceso a todos los módulos y reportes"}],["$","li","2",{"children":"Configuración del sistema hospitalario"}],["$","li","3",{"children":"Supervisión de toda la operación"}]]}]
c:["$","div","1",{"className":"role-card doctor","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":["$","path",null,{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Médico"}],["$","p",null,{"className":"role-sub","children":"Gestión de consultas y pacientes"}]]}]]}],["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Vista de agenda y citas del día"}],["$","li","1",{"children":"Acceso al historial clínico del paciente"}],["$","li","2",{"children":"Registro de diagnósticos y notas"}],["$","li","3",{"children":"Seguimiento de atenciones activas"}]]}]]}]
d:["$","div","2",{"className":"role-card receptionist","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Recepcionista"}],["$","p",null,{"className":"role-sub","children":"Gestión de agenda y pacientes"}]]}]]}],["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Agendamiento y reprogramación de citas"}],["$","li","1",{"children":"Registro de nuevos pacientes"}],["$","li","2",{"children":"Confirmación y cancelación de citas"}],["$","li","3",{"children":"Vista general de la agenda diaria"}]]}]]}]
e:["$","footer",null,{"className":"sol-footer","children":[["$","a",null,{"href":"/home","className":"footer-logo","children":[["$","div",null,{"className":"footer-logo-icon","children":["$","svg",null,{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","children":["$","path",null,{"d":"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5","stroke":"white","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"}]}]}],["$","span",null,{"children":"MediClick"}]]}],["$","p",null,{"className":"footer-copy","children":"© 2026 DYA Solutions · Todos los derechos reservados"}]]}]
13:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
16:I[20414,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"IconMark"]
11:null
15:[["$","title","0",{"children":"MediClick"}],["$","meta","1",{"name":"description","content":"Plataforma de gestión hospitalaria"}],["$","link","2",{"rel":"icon","href":"/favicon.ico?favicon.0b3bf435.ico","sizes":"256x256","type":"image/x-icon"}],["$","$L16","3",{}]]
