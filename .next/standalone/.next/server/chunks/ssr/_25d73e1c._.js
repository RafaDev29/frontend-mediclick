module.exports=[91418,a=>{"use strict";var b=a.i(34076),c=a.i(82840);function d({items:a}){return(0,b.jsx)("nav",{className:"flex items-center gap-2.5 mb-6",children:a.map((d,e)=>{let f=e===a.length-1;return(0,b.jsxs)("div",{className:"flex items-center gap-2.5",children:[e>0&&(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-slate-300",children:(0,b.jsx)("path",{d:"m9 18 6-6-6-6"})}),f||!d.href?(0,b.jsx)("span",{className:`text-xl font-semibold ${f?"text-[#0a2e6e]":"text-slate-400"}`,children:d.label}):(0,b.jsx)(c.default,{href:d.href,className:"text-xl font-medium text-slate-400 hover:text-[#1457c0] transition-colors",children:d.label})]},e)})})}a.s(["default",()=>d])},20877,a=>{"use strict";var b=a.i(34076),c=a.i(91418),d=a.i(24321);let e=[{id:"rec-001",date:"2026-02-15",doctor:"Dr. Carlos Mendoza",specialty:"Medicina General",diagnosis:"Faringitis aguda",treatment:"Amoxicilina 500mg cada 8h por 7 días",status:"COMPLETED"},{id:"rec-002",date:"2026-01-08",doctor:"Dra. Ana Torres",specialty:"Cardiología",diagnosis:"Hipertensión leve",treatment:"Losartán 50mg diario, dieta baja en sodio",status:"COMPLETED"},{id:"rec-003",date:"2025-11-20",doctor:"Dr. Luis Paredes",specialty:"Traumatología",diagnosis:"Esguince de tobillo grado II",treatment:"Reposo, hielo, ibuprofeno 400mg cada 8h",status:"COMPLETED"},{id:"rec-004",date:"2025-09-03",doctor:"Dra. María Quispe",specialty:"Medicina General",diagnosis:"Control preventivo anual",treatment:"Sin tratamiento. Resultados normales.",status:"COMPLETED"}],f="Rafael Andrés Rossel Galarza";function g(){let{id:a}=(0,d.useParams)(),g=(0,d.useRouter)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        .detail-patient-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          padding: 32px;
        }

        .detail-patient-top {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .detail-avatar {
          width: 64px; height: 64px;
          border-radius: 16px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1457c0;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
        }

        .detail-name-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .detail-name {
          font-size: 24px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .detail-dni {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .detail-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .detail-info-label {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .detail-info-value {
          font-size: 14px;
          color: #334155;
          font-weight: 500;
          word-break: break-word;
        }

        /* Records section */
        .records-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .records-title {
          font-size: 18px;
          font-weight: 700;
          color: #0a2e6e;
        }

        .records-count {
          font-size: 14px;
          color: #94a3b8;
        }

        .records-table-wrap {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          overflow: hidden;
        }

        .records-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .records-scroll table {
          min-width: 720px;
          width: 100%;
        }

        /* Mobile record cards */
        .mobile-records {
          display: none;
        }

        .mobile-record-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 10px;
        }

        .mobile-record-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mobile-record-date {
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .mobile-record-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          background: #ecfdf5;
          color: #059669;
        }

        .mobile-record-status span {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #10b981;
        }

        .mobile-record-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .mobile-record-field-label {
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .mobile-record-field-value {
          font-size: 13px;
          color: #334155;
          font-weight: 500;
        }

        .mobile-record-diagnosis {
          grid-column: 1 / -1;
          margin-top: 4px;
          padding-top: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .mobile-record-view {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          margin-top: 12px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: none;
          color: #1457c0;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
        }

        .mobile-record-view:hover {
          background: #eff6ff;
          border-color: #1457c0;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .detail-info-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .detail-patient-card {
            padding: 20px;
          }

          .detail-patient-top {
            flex-direction: column;
            gap: 16px;
          }

          .detail-avatar {
            width: 52px; height: 52px;
            font-size: 17px;
            border-radius: 14px;
          }

          .detail-name {
            font-size: 20px;
          }

          .detail-info-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          /* Ocultar tabla, mostrar cards */
          .desktop-records {
            display: none;
          }

          .mobile-records {
            display: block;
          }

          .records-title {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .detail-patient-card {
            padding: 16px;
          }

          .detail-name {
            font-size: 18px;
          }

          .detail-name-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .detail-info-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .mobile-record-card {
            padding: 14px;
          }

          .mobile-record-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsx)(c.default,{items:[{label:"Pacientes",href:"/dashboard/patients"},{label:"Historial clínico"}]}),(0,b.jsx)("div",{className:"detail-patient-card",children:(0,b.jsxs)("div",{className:"detail-patient-top",children:[(0,b.jsx)("div",{className:"detail-avatar",children:f.split(" ").map(a=>a[0]).slice(0,2).join("")}),(0,b.jsxs)("div",{style:{flex:1},children:[(0,b.jsxs)("div",{className:"detail-name-row",children:[(0,b.jsx)("h1",{className:"detail-name",children:f}),(0,b.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600",children:[(0,b.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"Activo"]})]}),(0,b.jsxs)("p",{className:"detail-dni",children:["DNI: ","77451417"]}),(0,b.jsx)("div",{className:"detail-info-grid",children:[{label:"Email",value:"rosselgalarzarafael@gmail.com"},{label:"Teléfono",value:"987654321"},{label:"Tipo de sangre",value:"O+"},{label:"Seguro",value:`Rimac \xb7 RIM-001`},{label:"Dirección",value:"Av. Lima 123, Miraflores"},{label:"Ciudad",value:"Lima"},{label:"Alergias",value:"Penicilina"},{label:"Observaciones",value:"Ninguna"}].map((a,c)=>(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"detail-info-label",children:a.label}),(0,b.jsx)("p",{className:"detail-info-value",children:a.value})]},c))})]})]})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"records-header",children:(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"records-title",children:"Historial clínico"}),(0,b.jsxs)("p",{className:"records-count",children:[e.length," atenciones registradas"]})]})}),(0,b.jsxs)("div",{className:"records-table-wrap",children:[(0,b.jsx)("div",{className:"desktop-records records-scroll",children:(0,b.jsxs)("table",{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{className:"border-b border-slate-100 bg-slate-50/60",children:[(0,b.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Fecha"}),(0,b.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Médico"}),(0,b.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Especialidad"}),(0,b.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Diagnóstico"}),(0,b.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Estado"}),(0,b.jsx)("th",{className:"px-6 py-3.5"})]})}),(0,b.jsx)("tbody",{className:"divide-y divide-slate-50",children:e.map(c=>(0,b.jsxs)("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:new Date(c.date).toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"})}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm font-medium text-slate-800",children:c.doctor}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-slate-500",children:c.specialty}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:c.diagnosis}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600",children:[(0,b.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"Completado"]})}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsx)("button",{onClick:()=>g.push(`/dashboard/patients/${a}/records/${c.id}`),className:"p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})})]},c.id))})]})}),(0,b.jsx)("div",{className:"mobile-records",style:{padding:16},children:e.map(c=>(0,b.jsxs)("div",{className:"mobile-record-card",children:[(0,b.jsxs)("div",{className:"mobile-record-top",children:[(0,b.jsx)("div",{className:"mobile-record-date",children:new Date(c.date).toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"})}),(0,b.jsxs)("div",{className:"mobile-record-status",children:[(0,b.jsx)("span",{}),"Completado"]})]}),(0,b.jsxs)("div",{className:"mobile-record-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"mobile-record-field-label",children:"Médico"}),(0,b.jsx)("div",{className:"mobile-record-field-value",children:c.doctor})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"mobile-record-field-label",children:"Especialidad"}),(0,b.jsx)("div",{className:"mobile-record-field-value",children:c.specialty})]}),(0,b.jsxs)("div",{className:"mobile-record-diagnosis",children:[(0,b.jsx)("div",{className:"mobile-record-field-label",children:"Diagnóstico"}),(0,b.jsx)("div",{className:"mobile-record-field-value",children:c.diagnosis})]})]}),(0,b.jsxs)("button",{className:"mobile-record-view",onClick:()=>g.push(`/dashboard/patients/${a}/records/${c.id}`),children:[(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"Ver detalle"]})]},c.id))})]})]})]})]})}a.s(["default",()=>g])}];

//# sourceMappingURL=_25d73e1c._.js.map