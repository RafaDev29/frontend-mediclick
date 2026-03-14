1:"$Sreact.fragment"
9:I[36345,["/_next/static/chunks/33074d3ff5d0cd2d.js","/_next/static/chunks/c4d90098b4abc498.js"],"OutletBoundary"]
a:"$Sreact.suspense"
c:I[1793,["/_next/static/chunks/1b58afe93242196d.js"],"Image"]
2:T1b84,
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .plans-root { font-family: 'DM Sans', sans-serif; background: #fff; color: #0a2e6e; }

        .plans-hero {
          position: relative;
          padding: 120px 80px 100px;
          background: #0a2e6e;
          overflow: hidden;
          text-align: center;
        }

        .plans-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 450px; height: 450px;
          border-radius: 50%;
          background: rgba(20,87,192,0.3);
        }

        .plans-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
        }

        .plans-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 620px;
          margin: 0 auto;
          animation: fadeUp 0.8s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .plans-badge {
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

        .plans-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .plans-hero h1 em {
          font-style: normal;
          color: #93c5fd;
        }

        .plans-hero p {
          font-size: 17px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          font-weight: 300;
        }

        .plans-section {
          padding: 100px 80px;
          background: #f8fafc;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .plan-card {
          background: #fff;
          border: 1.5px solid #e8edf5;
          border-radius: 24px;
          padding: 40px 36px;
          position: relative;
          transition: all 0.25s;
          display: flex;
          flex-direction: column;
        }

        .plan-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(20,87,192,0.08);
          border-color: #c7d9f8;
        }

        .plan-card.featured {
          background: #0a2e6e;
          border-color: #0a2e6e;
        }

        .plan-card.featured:hover {
          box-shadow: 0 16px 48px rgba(10,46,110,0.3);
          border-color: #1457c0;
        }

        .featured-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #1457c0;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .plan-name {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #0a2e6e;
          margin-bottom: 10px;
        }

        .plan-card.featured .plan-name { color: #fff; }

        .plan-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          font-weight: 300;
          margin-bottom: 32px;
        }

        .plan-card.featured .plan-desc { color: rgba(255,255,255,0.55); }

        .plan-divider {
          height: 1px;
          background: #e8edf5;
          margin-bottom: 28px;
        }

        .plan-card.featured .plan-divider { background: rgba(255,255,255,0.1); }

        .plan-features {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          margin-bottom: 36px;
        }

        .plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #475569;
          font-weight: 400;
          line-height: 1.5;
        }

        .plan-card.featured .plan-features li { color: rgba(255,255,255,0.75); }

        .check-icon {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .plan-card.featured .check-icon { background: rgba(255,255,255,0.12); }

        .plan-cta {
          display: block;
          text-align: center;
          padding: 13px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          border: 1.5px solid #1457c0;
          color: #1457c0;
          background: transparent;
        }

        .plan-cta:hover {
          background: #1457c0;
          color: #fff;
        }

        .plan-card.featured .plan-cta {
          background: #fff;
          color: #0a2e6e;
          border-color: #fff;
        }

        .plan-card.featured .plan-cta:hover {
          background: #e8f0fe;
          border-color: #e8f0fe;
        }

        .plans-footer {
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
          .plans-hero, .plans-section { padding: 60px 24px; }
          .plans-footer { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
        }
      0:{"buildId":"3uzwoqYn3S_rsS9bQLw8l","rsc":["$","$1","c",{"children":[[["$","style",null,{"children":"$2"}],"$L3"],null,"$L4"]}],"loading":null,"isPartial":false}
3:["$","div",null,{"className":"plans-root","children":[["$","section",null,{"className":"plans-hero","children":["$","div",null,{"className":"plans-hero-inner","children":[["$","div",null,{"className":"plans-badge","children":"Planes"}],["$","h1",null,{"children":["El plan ideal para",["$","br",null,{}],["$","em",null,{"children":"cada clínica"}]]}],["$","p",null,{"children":"Elige el plan que mejor se adapte al tamaño y necesidades de tu clínica. Sin sorpresas."}]]}]}],["$","section",null,{"className":"plans-section","children":["$","div",null,{"className":"plans-grid","children":[["$","div","0",{"className":"plan-card ","children":[false,["$","h3",null,{"className":"plan-name","children":"Básico"}],["$","p",null,{"className":"plan-desc","children":"Ideal para clínicas pequeñas que están comenzando su transformación digital."}],["$","div",null,{"className":"plan-divider"}],["$","ul",null,{"className":"plan-features","children":[["$","li","0",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Gestión de pacientes"]}],["$","li","1",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Historial clínico básico"]}],["$","li","2",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Hasta 2 usuarios"]}],["$","li","3",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Soporte por email"]}],["$","li","4",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Acceso web"]}]]}],["$","a",null,{"href":"/login","className":"plan-cta","children":"Consultar"}]]}],["$","div","1",{"className":"plan-card featured","children":[["$","span",null,{"className":"featured-badge","children":"Más popular"}],["$","h3",null,{"className":"plan-name","children":"Profesional"}],["$","p",null,{"className":"plan-desc","children":"Para clínicas en crecimiento que necesitan más control y funcionalidades."}],["$","div",null,{"className":"plan-divider"}],["$","ul",null,{"className":"plan-features","children":[["$","li","0",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Todo lo del plan Básico"]}],["$","li","1",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Hasta 10 usuarios"]}],["$","li","2",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Historial clínico completo"]}],["$","li","3",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Reportes y estadísticas"]}],["$","li","4",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Soporte prioritario"]}],["$","li","5",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"white","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Múltiples recepcionistas"]}]]}],["$","a",null,{"href":"/login","className":"plan-cta","children":"Consultar"}]]}],["$","div","2",{"className":"plan-card ","children":[false,["$","h3",null,{"className":"plan-name","children":"Enterprise"}],["$","p",null,{"className":"plan-desc","children":"Para clínicas y grandes centros médicos con necesidades avanzadas."}],"$L5","$L6","$L7"]}]]}]}],"$L8"]}]
4:["$","$L9",null,{"children":["$","$a",null,{"name":"Next.MetadataOutlet","children":"$@b"}]}]
5:["$","div",null,{"className":"plan-divider"}]
6:["$","ul",null,{"className":"plan-features","children":[["$","li","0",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Todo lo del plan Profesional"]}],["$","li","1",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Usuarios ilimitados"]}],["$","li","2",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Módulos personalizados"]}],["$","li","3",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Integración con sistemas externos"]}],["$","li","4",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Soporte 24/7 dedicado"]}],["$","li","5",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"Capacitación del equipo"]}],["$","li","6",{"children":[["$","div",null,{"className":"check-icon","children":["$","svg",null,{"width":"10","height":"10","viewBox":"0 0 24 24","fill":"none","stroke":"#1457c0","strokeWidth":"3","children":["$","polyline",null,{"points":"20 6 9 17 4 12"}]}]}],"SLA garantizado"]}]]}]
7:["$","a",null,{"href":"/login","className":"plan-cta","children":"Consultar"}]
8:["$","footer",null,{"className":"plans-footer","children":[["$","a",null,{"href":"/home","className":"footer-logo","children":[["$","$Lc",null,{"src":"/logoooo.png","alt":"SGIP","width":120,"height":40,"className":"h-8 w-auto object-contain","unoptimized":true}],["$","span",null,{"children":"SGIP"}]]}],["$","p",null,{"className":"footer-copy","children":"© 2026 DYA Solutions · Todos los derechos reservados"}]]}]
b:null
