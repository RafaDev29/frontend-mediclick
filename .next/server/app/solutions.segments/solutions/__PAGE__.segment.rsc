1:"$Sreact.fragment"
a:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"OutletBoundary"]
b:"$Sreact.suspense"
d:I[1793,["/_next/static/chunks/1b58afe93242196d.js"],"Image"]
2:T1e98,
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .sol-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #0a2e6e; }

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

        .module-tag.soon {
          color: #92400e;
          background: #fef3c7;
        }

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
      0:{"buildId":"3uzwoqYn3S_rsS9bQLw8l","rsc":["$","$1","c",{"children":[[["$","style",null,{"children":"$2"}],"$L3"],null,"$L4"]}],"loading":null,"isPartial":false}
3:["$","div",null,{"className":"sol-root","children":[["$","section",null,{"className":"sol-hero","children":["$","div",null,{"className":"sol-hero-inner","children":[["$","div",null,{"className":"sol-badge","children":"Soluciones"}],["$","h1",null,{"children":["Herramientas diseñadas",["$","br",null,{}],"para ",["$","em",null,{"children":"cada rol"}]," de la clínica"]}],["$","p",null,{"children":"SGIP ofrece módulos especializados para cada área de tu clínica, desde la recepción hasta la consulta médica."}]]}]}],["$","section",null,{"className":"sol-modules","children":[["$","p",null,{"className":"section-label","children":"Módulos"}],["$","h2",null,{"className":"section-title","children":"Todo en una sola plataforma"}],["$","p",null,{"className":"section-sub","children":"Cada módulo está diseñado para resolver un problema específico del flujo clínico diario."}],["$","div",null,{"className":"modules-grid","children":[["$","div","0",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}],["$","circle",null,{"cx":"9","cy":"7","r":"4"}],["$","path",null,{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}],["$","path",null,{"d":"M16 3.13a4 4 0 0 1 0 7.75"}]]}]}],["$","h3",null,{"children":"Gestión de Pacientes"}],["$","p",null,{"children":"Administra el perfil completo de cada paciente: datos personales, contactos de emergencia, antecedentes y documentos adjuntos."}],["$","span",null,{"className":"module-tag","children":"Disponible"}]]}],["$","div","1",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","path",null,{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}],["$","polyline",null,{"points":"14 2 14 8 20 8"}],["$","line",null,{"x1":"12","y1":"18","x2":"12","y2":"12"}],["$","line",null,{"x1":"9","y1":"15","x2":"15","y2":"15"}]]}]}],["$","h3",null,{"children":"Historial Clínico"}],["$","p",null,{"children":"Registro digital completo de diagnósticos, tratamientos, exámenes, alergias y evoluciones por paciente."}],["$","span",null,{"className":"module-tag","children":"Disponible"}]]}],["$","div","2",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":["$","path",null,{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]}]}],["$","h3",null,{"children":"Reportes y Estadísticas"}],["$","p",null,{"children":"Métricas en tiempo real sobre atenciones, diagnósticos frecuentes, evolución de pacientes y rendimiento del equipo médico."}],["$","span",null,{"className":"module-tag soon","children":"Próximamente"}]]}],["$","div","3",{"className":"module-card","children":[["$","div",null,{"className":"module-icon","children":["$","svg",null,{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"2","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}]}],["$","h3",null,{"children":"Agenda de Citas"}],["$","p",null,{"children":"Programación de citas vinculada directamente al perfil del paciente, con vista diaria, semanal y control de disponibilidad."}],["$","span",null,{"className":"module-tag soon","children":"Próximamente"}]]}]]}]]}],["$","section",null,{"className":"sol-roles","children":[["$","p",null,{"className":"section-label","children":"Por tipo de usuario"}],["$","h2",null,{"className":"section-title","children":"Una experiencia para cada rol"}],["$","p",null,{"className":"section-sub","children":"Cada usuario accede solo a lo que necesita, con una interfaz adaptada a su función dentro de la clínica."}],["$","div",null,{"className":"roles-grid","children":[["$","div","0",{"className":"role-card admin","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":[["$","path",null,{"d":"M12 20h9"}],["$","path",null,{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}]]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Administrador"}],"$L5"]}]]}],"$L6"]}],"$L7","$L8"]}]]}],"$L9"]}]
4:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
5:["$","p",null,{"className":"role-sub","children":"Control total del sistema"}]
6:["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Gestión completa de usuarios y roles"}],["$","li","1",{"children":"Acceso a todos los módulos y reportes"}],["$","li","2",{"children":"Configuración del sistema de la clínica"}],["$","li","3",{"children":"Supervisión de toda la operación"}]]}]
7:["$","div","1",{"className":"role-card doctor","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":["$","path",null,{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Médico"}],["$","p",null,{"className":"role-sub","children":"Gestión de consultas y pacientes"}]]}]]}],["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Vista de sus pacientes asignados"}],["$","li","1",{"children":"Acceso y edición del historial clínico"}],["$","li","2",{"children":"Registro de diagnósticos y evoluciones"}],["$","li","3",{"children":"Seguimiento de tratamientos activos"}]]}]]}]
8:["$","div","2",{"className":"role-card receptionist","children":[["$","div",null,{"className":"role-header","children":[["$","div",null,{"className":"role-avatar","children":["$","svg",null,{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"2","children":[["$","rect",null,{"x":"3","y":"4","width":"18","height":"18","rx":"2"}],["$","line",null,{"x1":"16","y1":"2","x2":"16","y2":"6"}],["$","line",null,{"x1":"8","y1":"2","x2":"8","y2":"6"}],["$","line",null,{"x1":"3","y1":"10","x2":"21","y2":"10"}]]}]}],["$","div",null,{"children":[["$","h3",null,{"children":"Recepcionista"}],["$","p",null,{"className":"role-sub","children":"Registro y gestión de pacientes"}]]}]]}],["$","ul",null,{"className":"role-benefits","children":[["$","li","0",{"children":"Registro y actualización de pacientes"}],["$","li","1",{"children":"Consulta de datos y contactos"}],["$","li","2",{"children":"Gestión de llegadas y atenciones del día"}],["$","li","3",{"children":"Vista general de la agenda de la clínica"}]]}]]}]
9:["$","footer",null,{"className":"sol-footer","children":[["$","a",null,{"href":"/home","className":"footer-logo","children":[["$","$Ld",null,{"src":"/logoooo.png","alt":"SGIP","width":120,"height":40,"className":"h-8 w-auto object-contain","unoptimized":true}],["$","span",null,{"children":"SGIP"}]]}],["$","p",null,{"className":"footer-copy","children":"© 2026 DYA Solutions · Todos los derechos reservados"}]]}]
c:null
