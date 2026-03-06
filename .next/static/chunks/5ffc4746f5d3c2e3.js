(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46598,e=>{"use strict";var a=e.i(98134),i=e.i(99352);function s({items:e}){return(0,a.jsx)("nav",{className:"flex items-center gap-2.5 mb-6",children:e.map((s,t)=>{let l=t===e.length-1;return(0,a.jsxs)("div",{className:"flex items-center gap-2.5",children:[t>0&&(0,a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-slate-300",children:(0,a.jsx)("path",{d:"m9 18 6-6-6-6"})}),l||!s.href?(0,a.jsx)("span",{className:`text-xl font-semibold ${l?"text-[#0a2e6e]":"text-slate-400"}`,children:s.label}):(0,a.jsx)(i.default,{href:s.href,className:"text-xl font-medium text-slate-400 hover:text-[#1457c0] transition-colors",children:s.label})]},t)})})}e.s(["default",()=>s])},60673,e=>{"use strict";var a=e.i(98134),i=e.i(46598),s=e.i(24601);let t=[{id:"rec-001",date:"2026-02-15",doctor:"Dr. Carlos Mendoza",specialty:"Medicina General",diagnosis:"Faringitis aguda",treatment:"Amoxicilina 500mg cada 8h por 7 días",status:"COMPLETED"},{id:"rec-002",date:"2026-01-08",doctor:"Dra. Ana Torres",specialty:"Cardiología",diagnosis:"Hipertensión leve",treatment:"Losartán 50mg diario, dieta baja en sodio",status:"COMPLETED"},{id:"rec-003",date:"2025-11-20",doctor:"Dr. Luis Paredes",specialty:"Traumatología",diagnosis:"Esguince de tobillo grado II",treatment:"Reposo, hielo, ibuprofeno 400mg cada 8h",status:"COMPLETED"},{id:"rec-004",date:"2025-09-03",doctor:"Dra. María Quispe",specialty:"Medicina General",diagnosis:"Control preventivo anual",treatment:"Sin tratamiento. Resultados normales.",status:"COMPLETED"}],l="Rafael Andrés Rossel Galarza";function r(){let{id:e}=(0,s.useParams)(),r=(0,s.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)(i.default,{items:[{label:"Pacientes",href:"/dashboard/patients"},{label:"Historial clínico"}]}),(0,a.jsx)("div",{className:"detail-patient-card",children:(0,a.jsxs)("div",{className:"detail-patient-top",children:[(0,a.jsx)("div",{className:"detail-avatar",children:l.split(" ").map(e=>e[0]).slice(0,2).join("")}),(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsxs)("div",{className:"detail-name-row",children:[(0,a.jsx)("h1",{className:"detail-name",children:l}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"Activo"]})]}),(0,a.jsxs)("p",{className:"detail-dni",children:["DNI: ","77451417"]}),(0,a.jsx)("div",{className:"detail-info-grid",children:[{label:"Email",value:"rosselgalarzarafael@gmail.com"},{label:"Teléfono",value:"987654321"},{label:"Tipo de sangre",value:"O+"},{label:"Seguro",value:`Rimac \xb7 RIM-001`},{label:"Dirección",value:"Av. Lima 123, Miraflores"},{label:"Ciudad",value:"Lima"},{label:"Alergias",value:"Penicilina"},{label:"Observaciones",value:"Ninguna"}].map((e,i)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"detail-info-label",children:e.label}),(0,a.jsx)("p",{className:"detail-info-value",children:e.value})]},i))})]})]})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"records-header",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"records-title",children:"Historial clínico"}),(0,a.jsxs)("p",{className:"records-count",children:[t.length," atenciones registradas"]})]})}),(0,a.jsxs)("div",{className:"records-table-wrap",children:[(0,a.jsx)("div",{className:"desktop-records records-scroll",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-slate-100 bg-slate-50/60",children:[(0,a.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Fecha"}),(0,a.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Médico"}),(0,a.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Especialidad"}),(0,a.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Diagnóstico"}),(0,a.jsx)("th",{className:"text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider",children:"Estado"}),(0,a.jsx)("th",{className:"px-6 py-3.5"})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-slate-50",children:t.map(i=>(0,a.jsxs)("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[(0,a.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:new Date(i.date).toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"})}),(0,a.jsx)("td",{className:"px-6 py-4 text-sm font-medium text-slate-800",children:i.doctor}),(0,a.jsx)("td",{className:"px-6 py-4 text-sm text-slate-500",children:i.specialty}),(0,a.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:i.diagnosis}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-600",children:[(0,a.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),"Completado"]})}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)("button",{onClick:()=>r.push(`/dashboard/patients/${e}/records/${i.id}`),className:"p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all",children:(0,a.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,a.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})})]},i.id))})]})}),(0,a.jsx)("div",{className:"mobile-records",style:{padding:16},children:t.map(i=>(0,a.jsxs)("div",{className:"mobile-record-card",children:[(0,a.jsxs)("div",{className:"mobile-record-top",children:[(0,a.jsx)("div",{className:"mobile-record-date",children:new Date(i.date).toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"})}),(0,a.jsxs)("div",{className:"mobile-record-status",children:[(0,a.jsx)("span",{}),"Completado"]})]}),(0,a.jsxs)("div",{className:"mobile-record-grid",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mobile-record-field-label",children:"Médico"}),(0,a.jsx)("div",{className:"mobile-record-field-value",children:i.doctor})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mobile-record-field-label",children:"Especialidad"}),(0,a.jsx)("div",{className:"mobile-record-field-value",children:i.specialty})]}),(0,a.jsxs)("div",{className:"mobile-record-diagnosis",children:[(0,a.jsx)("div",{className:"mobile-record-field-label",children:"Diagnóstico"}),(0,a.jsx)("div",{className:"mobile-record-field-value",children:i.diagnosis})]})]}),(0,a.jsxs)("button",{className:"mobile-record-view",onClick:()=>r.push(`/dashboard/patients/${e}/records/${i.id}`),children:[(0,a.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,a.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"Ver detalle"]})]},i.id))})]})]})]})]})}e.s(["default",()=>r])}]);