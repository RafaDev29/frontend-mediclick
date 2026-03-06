(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46598,e=>{"use strict";var s=e.i(98134),a=e.i(99352);function l({items:e}){return(0,s.jsx)("nav",{className:"flex items-center gap-2.5 mb-6",children:e.map((l,t)=>{let i=t===e.length-1;return(0,s.jsxs)("div",{className:"flex items-center gap-2.5",children:[t>0&&(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-slate-300",children:(0,s.jsx)("path",{d:"m9 18 6-6-6-6"})}),i||!l.href?(0,s.jsx)("span",{className:`text-xl font-semibold ${i?"text-[#0a2e6e]":"text-slate-400"}`,children:l.label}):(0,s.jsx)(a.default,{href:l.href,className:"text-xl font-medium text-slate-400 hover:text-[#1457c0] transition-colors",children:l.label})]},t)})})}e.s(["default",()=>l])},55587,e=>{"use strict";var s=e.i(98134),a=e.i(75201),l=e.i(54858);let t=async()=>{let{data:e}=await l.default.get("/patients");return e},i=async e=>{let{data:s}=await l.default.post("/patients",e);return s},r=async(e,s)=>{let{data:a}=await l.default.put(`/patients/${e}`,s);return a},n=async e=>{let{data:s}=await l.default.delete(`/patients/${e}`);return s},d=async e=>{let{data:s}=await l.default.get(`/dni/${e}`);return s};var c=e.i(24601),o=e.i(46598);let x=[{value:"MALE",label:"Masculino"},{value:"FEMALE",label:"Femenino"}],h=[{value:"A_POSITIVE",label:"A+"},{value:"A_NEGATIVE",label:"A-"},{value:"B_POSITIVE",label:"B+"},{value:"B_NEGATIVE",label:"B-"},{value:"O_POSITIVE",label:"O+"},{value:"O_NEGATIVE",label:"O-"},{value:"AB_POSITIVE",label:"AB+"},{value:"AB_NEGATIVE",label:"AB-"}],m=[{value:"PRE_REGISTRO",label:"Pre-registro",color:"bg-slate-100 text-slate-600"},{value:"REGISTRADO",label:"Registrado",color:"bg-blue-50 text-blue-600"},{value:"CITA_PROGRAMADA",label:"Cita Programada",color:"bg-indigo-50 text-indigo-600"},{value:"EN_SALA_ESPERA",label:"En Sala de Espera",color:"bg-amber-50 text-amber-600"},{value:"EN_TRIAJE",label:"En Triaje / Evaluación Inicial",color:"bg-orange-50 text-orange-600"},{value:"EN_CONSULTA",label:"En Consulta Médica",color:"bg-cyan-50 text-cyan-600"},{value:"EN_EXAMENES",label:"En Exámenes / Diagnóstico",color:"bg-purple-50 text-purple-600"},{value:"EN_PROCEDIMIENTO",label:"En Procedimiento",color:"bg-pink-50 text-pink-600"},{value:"DIAGNOSTICO_EMITIDO",label:"Diagnóstico Emitido",color:"bg-teal-50 text-teal-600"},{value:"TRATAMIENTO_EN_CURSO",label:"Tratamiento en Curso",color:"bg-yellow-50 text-yellow-700"},{value:"HOSPITALIZACION",label:"Observación / Hospitalización",color:"bg-red-50 text-red-600"},{value:"ALTA_MEDICA",label:"Alta Médica",color:"bg-emerald-50 text-emerald-600"},{value:"FACTURACION_PENDIENTE",label:"Facturación Pendiente",color:"bg-orange-50 text-orange-700"},{value:"PAGO_REALIZADO",label:"Pago Realizado",color:"bg-green-50 text-green-600"},{value:"CONTROL_PROGRAMADO",label:"Control Programado",color:"bg-sky-50 text-sky-600"},{value:"CERRADO",label:"Cerrado",color:"bg-gray-100 text-gray-500"}],p=e=>m[e%m.length],b={firstName:"",lastName:"",dni:"",email:"",phone:"",birthDate:"",gender:"MALE",bloodType:"O_POSITIVE",address:"",district:"",city:"",insuranceName:"",insuranceCode:"",allergies:"",observations:""};function u(){let e=(0,c.useRouter)(),[l,u]=(0,a.useState)([]),[g,j]=(0,a.useState)(!0),[v,f]=(0,a.useState)(!1),[N,y]=(0,a.useState)(null),[w,k]=(0,a.useState)(b),[C,E]=(0,a.useState)(!1),[A,I]=(0,a.useState)(null),[T,M]=(0,a.useState)(""),[O,S]=(0,a.useState)(null),[R,B]=(0,a.useState)(!1),[D,P]=(0,a.useState)(!1),[_,z]=(0,a.useState)("PRE_REGISTRO"),[L,W]=(0,a.useState)(1),$=(e,s)=>{I({type:e,msg:s}),setTimeout(()=>I(null),3500)},G=async()=>{try{j(!0);let e=await t();e.success?u(e.data):$("error",e.message)}catch(e){$("error",e?.response?.data?.message||"Error al cargar pacientes")}finally{j(!1)}};(0,a.useEffect)(()=>{G()},[]),(0,a.useEffect)(()=>{W(1)},[T]);let V=e=>{y(e),P(!1),z("REGISTRADO"),k({firstName:e.firstName,lastName:e.lastName,dni:e.dni,email:e.email,phone:e.phone,birthDate:e.birthDate.split("T")[0],gender:e.gender,bloodType:e.bloodType,address:e.address,district:e.district,city:e.city,insuranceName:e.insuranceName||"",insuranceCode:e.insuranceCode||"",allergies:e.allergies||"",observations:e.observations||""}),f(!0)},q=async()=>{if(!(w.dni.length<6)){B(!0);try{let e=await d(w.dni);e.success?(k(s=>({...s,firstName:e.data.firstName,lastName:e.data.lastName})),$("success",e.message)):$("error",e.message)}catch(e){$("error",e?.response?.data?.message||"DNI no encontrado")}finally{B(!1)}}},F=async e=>{e.preventDefault(),E(!0);try{let e=N?await r(N.id,w):await i(w);e.success?($("success",e.message),f(!1),G()):$("error",e.message)}catch(e){$("error",e?.response?.data?.message||"Error al guardar")}finally{E(!1)}},H=async()=>{if(O)try{let e=await n(O);e.success?($("success",e.message),S(null),G()):$("error",e.message)}catch(e){$("error",e?.response?.data?.message||"Error al eliminar")}},U=e=>s=>k(a=>({...a,[e]:s.target.value})),K=l.filter(e=>e.fullName.toLowerCase().includes(T.toLowerCase())||e.dni.includes(T)||e.email.toLowerCase().includes(T.toLowerCase())),Z=Math.max(1,Math.ceil(K.length/10)),J=K.slice((L-1)*10,10*L),X=0===K.length?0:(L-1)*10+1,Q=Math.min(10*L,K.length),Y="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all",ee="block text-xs font-medium text-slate-600 mb-1.5";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:`
        .patients-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .patients-table-wrap table {
          min-width: 860px;
        }

        .patients-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .patients-search {
          max-width: 380px;
          width: 100%;
        }

        .pagination-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pagination-info {
          font-size: 13px;
          color: #64748b;
        }

        .pagination-buttons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pagination-btn {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #fff;
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }

        .pagination-btn:hover:not(:disabled):not(.active) {
          border-color: #1457c0;
          color: #1457c0;
          background: #eff6ff;
        }

        .pagination-btn.active {
          background: #1457c0;
          border-color: #1457c0;
          color: #fff;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-ellipsis {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 13px;
        }

        /* ===== MOBILE CARDS (ocultas en desktop) ===== */
        .mobile-cards {
          display: none;
        }

        .mobile-card {
          background: #fff;
          border: 1px solid #e8edf5;
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 12px;
        }

        .mobile-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .mobile-card-patient {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-card-avatar {
          width: 38px; height: 38px;
          border-radius: 12px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1457c0;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }

        .mobile-card-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .mobile-card-location {
          font-size: 12px;
          color: #94a3b8;
        }

        .mobile-card-actions {
          display: flex;
          gap: 4px;
        }

        .mobile-card-actions button {
          padding: 6px;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          color: #94a3b8;
          transition: all 0.15s;
        }

        .mobile-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .mobile-card-field {
          font-size: 12px;
        }

        .mobile-card-field-label {
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .mobile-card-field-value {
          color: #334155;
          font-weight: 500;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .patients-search {
            max-width: 320px;
          }
        }

        @media (max-width: 768px) {
          .patients-header {
            flex-direction: column;
            align-items: stretch;
          }

          .patients-search {
            max-width: 100%;
          }

          /* Ocultar tabla desktop, mostrar cards */
          .desktop-table {
            display: none;
          }

          .mobile-cards {
            display: block;
          }

          .pagination-wrap {
            padding: 12px 16px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .pagination-info {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .mobile-card {
            padding: 14px;
          }

          .mobile-card-grid {
            grid-template-columns: 1fr;
          }

          .pagination-btn {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}),(0,s.jsxs)("div",{className:"space-y-4",children:[A&&(0,s.jsxs)("div",{className:`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl text-sm font-medium shadow-xl flex items-center gap-3 transition-all ${"success"===A.type?"bg-emerald-50 border border-emerald-200 text-emerald-700":"bg-red-50 border border-red-200 text-red-700"}`,children:["success"===A.type?(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,s.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,s.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),A.msg]}),(0,s.jsxs)("div",{className:"patients-header",children:[(0,s.jsx)(o.default,{items:[{label:"Pacientes"}]}),(0,s.jsxs)("button",{onClick:()=>{y(null),k(b),P(!1),z("PRE_REGISTRO"),f(!0)},className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#1457c0]/20",children:[(0,s.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,s.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,s.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Nuevo paciente"]})]}),(0,s.jsx)("div",{className:"patients-search",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,s.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),(0,s.jsx)("input",{type:"text",placeholder:"Buscar por nombre, DNI o email...",value:T,onChange:e=>M(e.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all"})]})}),(0,s.jsx)("div",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm",children:g?(0,s.jsxs)("div",{className:"flex items-center justify-center py-20 text-slate-400",children:[(0,s.jsxs)("svg",{className:"animate-spin w-6 h-6 mr-3",viewBox:"0 0 24 24",fill:"none",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]}),"Cargando pacientes..."]}):0===K.length?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center py-20 text-slate-400",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"mb-3 opacity-40",children:[(0,s.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"9",cy:"7",r:"4"})]}),(0,s.jsx)("p",{className:"text-sm",children:"No se encontraron pacientes"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"desktop-table patients-table-wrap",children:(0,s.jsxs)("table",{className:"w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"bg-[#0a2e6e]",children:[(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Paciente"}),(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"DNI"}),(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Contacto"}),(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Sangre"}),(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Registro"}),(0,s.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Estado"}),(0,s.jsx)("th",{className:"px-6 py-4"})]})}),(0,s.jsx)("tbody",{className:"divide-y divide-slate-50",children:J.map((a,l)=>{let t=p((L-1)*10+l);return(0,s.jsxs)("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)("div",{className:"w-9 h-9 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#1457c0] font-bold text-sm shrink-0",children:[a.firstName[0],a.lastName[0]]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-semibold text-slate-800",children:a.fullName}),(0,s.jsxs)("p",{className:"text-xs text-slate-400",children:[a.city,", ",a.district]})]})]})}),(0,s.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:a.dni}),(0,s.jsxs)("td",{className:"px-6 py-4",children:[(0,s.jsx)("p",{className:"text-sm text-slate-600",children:a.email}),(0,s.jsx)("p",{className:"text-xs text-slate-400",children:a.phone})]}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsx)("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-semibold",children:h.find(e=>e.value===a.bloodType)?.label})}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsxs)("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${a.isActive?"bg-emerald-50 text-emerald-600":"bg-slate-100 text-slate-500"}`,children:[(0,s.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${a.isActive?"bg-emerald-500":"bg-slate-400"}`}),a.isActive?"Activo":"Inactivo"]})}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsx)("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${t.color}`,children:t.label})}),(0,s.jsx)("td",{className:"px-6 py-4",children:(0,s.jsxs)("div",{className:"flex items-center gap-2 justify-end",children:[(0,s.jsx)("button",{onClick:()=>V(a),className:"p-2 rounded-lg text-slate-400 hover:text-[#1457c0] hover:bg-[#eff6ff] transition-all",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),(0,s.jsx)("button",{onClick:()=>S(a.id),className:"p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,s.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,s.jsx)("path",{d:"M10 11v6"}),(0,s.jsx)("path",{d:"M14 11v6"}),(0,s.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,s.jsx)("button",{onClick:()=>e.push(`/dashboard/patients/${a.id}`),className:"p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})]})})]},a.id)})})]})}),(0,s.jsx)("div",{className:"mobile-cards p-4",children:J.map((a,l)=>{let t=p((L-1)*10+l);return(0,s.jsxs)("div",{className:"mobile-card",children:[(0,s.jsxs)("div",{className:"mobile-card-header",children:[(0,s.jsxs)("div",{className:"mobile-card-patient",children:[(0,s.jsxs)("div",{className:"mobile-card-avatar",children:[a.firstName[0],a.lastName[0]]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mobile-card-name",children:a.fullName}),(0,s.jsxs)("div",{className:"mobile-card-location",children:[a.city,", ",a.district]})]})]}),(0,s.jsxs)("div",{className:"mobile-card-actions",children:[(0,s.jsx)("button",{onClick:()=>V(a),className:"hover:text-[#1457c0] hover:bg-[#eff6ff]",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),(0,s.jsx)("button",{onClick:()=>S(a.id),className:"hover:text-red-500 hover:bg-red-50",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,s.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,s.jsx)("path",{d:"M10 11v6"}),(0,s.jsx)("path",{d:"M14 11v6"}),(0,s.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,s.jsx)("button",{onClick:()=>e.push(`/dashboard/patients/${a.id}`),className:"hover:text-emerald-600 hover:bg-emerald-50",children:(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),(0,s.jsxs)("div",{className:"mobile-card-grid",children:[(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"DNI"}),(0,s.jsx)("div",{className:"mobile-card-field-value",children:a.dni})]}),(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"Sangre"}),(0,s.jsx)("div",{className:"mobile-card-field-value",children:(0,s.jsx)("span",{className:"inline-flex items-center px-2 py-0.5 rounded-md bg-red-50 text-red-600 text-xs font-semibold",children:h.find(e=>e.value===a.bloodType)?.label})})]}),(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"Email"}),(0,s.jsx)("div",{className:"mobile-card-field-value",style:{fontSize:12,wordBreak:"break-all"},children:a.email})]}),(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"Teléfono"}),(0,s.jsx)("div",{className:"mobile-card-field-value",children:a.phone})]}),(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"Registro"}),(0,s.jsx)("div",{className:"mobile-card-field-value",children:(0,s.jsxs)("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold ${a.isActive?"bg-emerald-50 text-emerald-600":"bg-slate-100 text-slate-500"}`,children:[(0,s.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${a.isActive?"bg-emerald-500":"bg-slate-400"}`}),a.isActive?"Activo":"Inactivo"]})})]}),(0,s.jsxs)("div",{className:"mobile-card-field",children:[(0,s.jsx)("div",{className:"mobile-card-field-label",children:"Estado"}),(0,s.jsx)("div",{className:"mobile-card-field-value",children:(0,s.jsx)("span",{className:`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${t.color}`,children:t.label})})]})]})]},a.id)})}),(0,s.jsxs)("div",{className:"pagination-wrap",children:[(0,s.jsxs)("div",{className:"pagination-info",children:["Mostrando ",X,"-",Q," de ",K.length," pacientes"]}),(0,s.jsxs)("div",{className:"pagination-buttons",children:[(0,s.jsx)("button",{className:"pagination-btn",disabled:1===L,onClick:()=>W(e=>e-1),children:(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,s.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(()=>{let e=[];if(Z<=7)for(let s=1;s<=Z;s++)e.push(s);else{e.push(1),L>3&&e.push("...");for(let s=Math.max(2,L-1);s<=Math.min(Z-1,L+1);s++)e.push(s);L<Z-2&&e.push("..."),e.push(Z)}return e})().map((e,a)=>"..."===e?(0,s.jsx)("div",{className:"pagination-ellipsis",children:"..."},`ellipsis-${a}`):(0,s.jsx)("button",{className:`pagination-btn ${L===e?"active":""}`,onClick:()=>W(e),children:e},e)),(0,s.jsx)("button",{className:"pagination-btn",disabled:L===Z,onClick:()=>W(e=>e+1),children:(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,s.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]})]})]})}),v&&(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,s.jsxs)("div",{className:"bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white z-10 rounded-t-3xl",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-lg font-bold text-[#0a2e6e]",children:N?"Editar paciente":"Nuevo paciente"}),(0,s.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"Completa los datos del paciente"})]}),(0,s.jsx)("button",{onClick:()=>f(!1),className:"p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all",children:(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,s.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,s.jsxs)("form",{onSubmit:F,className:"px-8 py-6 space-y-6 modal-form-content",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Datos personales"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,s.jsxs)("div",{className:"col-span-2",children:[(0,s.jsx)("label",{className:ee,children:"DNI *"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("input",{required:!0,value:w.dni,onChange:U("dni"),placeholder:"77777777",maxLength:8,className:Y}),(0,s.jsxs)("button",{type:"button",onClick:q,disabled:R||w.dni.length<6,className:"px-4 py-2.5 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shrink-0",children:[R?(0,s.jsxs)("svg",{className:"animate-spin w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"white",d:"M4 12a8 8 0 018-8v8z"})]}):(0,s.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,s.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),"Buscar"]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Nombres *"}),(0,s.jsx)("input",{required:!0,value:w.firstName,onChange:U("firstName"),placeholder:"Nombres",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Apellidos *"}),(0,s.jsx)("input",{required:!0,value:w.lastName,onChange:U("lastName"),placeholder:"Apellidos",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Fecha de nacimiento *"}),(0,s.jsx)("input",{required:!0,type:"date",value:w.birthDate,onChange:U("birthDate"),className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Género *"}),(0,s.jsx)("select",{required:!0,value:w.gender,onChange:U("gender"),className:Y,children:x.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Tipo de sangre *"}),(0,s.jsx)("select",{required:!0,value:w.bloodType,onChange:U("bloodType"),className:Y,children:h.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Estado del paciente"}),(0,s.jsx)("select",{value:_,onChange:e=>z(e.target.value),className:Y,children:m.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,s.jsxs)("div",{className:"col-span-2",children:[(0,s.jsx)("label",{className:ee,children:"Donación de órganos"}),(0,s.jsxs)("div",{className:"flex gap-3 mt-1",children:[(0,s.jsxs)("button",{type:"button",onClick:()=>P(!0),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${D?"bg-emerald-50 border-emerald-300 text-emerald-700":"bg-slate-50 border-slate-200 text-slate-400 hover:border-emerald-200 hover:text-emerald-600"}`,children:[(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:D?"#059669":"none",stroke:D?"#059669":"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),"Sí dona"]}),(0,s.jsxs)("button",{type:"button",onClick:()=>P(!1),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${!D?"bg-red-50 border-red-200 text-red-600":"bg-slate-50 border-slate-200 text-slate-400 hover:border-red-200 hover:text-red-400"}`,children:[(0,s.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),(0,s.jsx)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"No dona"]})]})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Contacto"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Email *"}),(0,s.jsx)("input",{required:!0,type:"email",value:w.email,onChange:U("email"),placeholder:"paciente@email.com",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Teléfono *"}),(0,s.jsx)("input",{required:!0,value:w.phone,onChange:U("phone"),placeholder:"987654321",className:Y})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Dirección"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,s.jsxs)("div",{className:"col-span-2",children:[(0,s.jsx)("label",{className:ee,children:"Dirección *"}),(0,s.jsx)("input",{required:!0,value:w.address,onChange:U("address"),placeholder:"Av. Lima 123",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Distrito *"}),(0,s.jsx)("input",{required:!0,value:w.district,onChange:U("district"),placeholder:"Miraflores",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Ciudad *"}),(0,s.jsx)("input",{required:!0,value:w.city,onChange:U("city"),placeholder:"Lima",className:Y})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Seguro médico"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Nombre del seguro"}),(0,s.jsx)("input",{value:w.insuranceName,onChange:U("insuranceName"),placeholder:"Rimac",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Código del seguro"}),(0,s.jsx)("input",{value:w.insuranceCode,onChange:U("insuranceCode"),placeholder:"RIM-001",className:Y})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Info clínica"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Alergias"}),(0,s.jsx)("input",{value:w.allergies,onChange:U("allergies"),placeholder:"Penicilina, Ibuprofeno...",className:Y})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:ee,children:"Observaciones"}),(0,s.jsx)("textarea",{value:w.observations,onChange:U("observations"),placeholder:"Observaciones relevantes...",rows:3,className:Y+" resize-none"})]})]})]}),(0,s.jsxs)("div",{className:"flex gap-3 pt-2 modal-actions",children:[(0,s.jsx)("button",{type:"button",onClick:()=>f(!1),className:"flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all",children:"Cancelar"}),(0,s.jsx)("button",{type:"submit",disabled:C,className:"flex-1 py-3 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-[#1457c0]/20",children:C?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("svg",{className:"animate-spin w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"white",d:"M4 12a8 8 0 018-8v8z"})]}),"Guardando..."]}):N?"Guardar cambios":"Crear paciente"})]})]})]})}),O&&(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,s.jsxs)("div",{className:"bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center",children:[(0,s.jsx)("div",{className:"w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4",children:(0,s.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ef4444",strokeWidth:"2",children:[(0,s.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,s.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,s.jsx)("path",{d:"M10 11v6"}),(0,s.jsx)("path",{d:"M14 11v6"}),(0,s.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,s.jsx)("h3",{className:"text-lg font-bold text-slate-800 mb-2",children:"¿Eliminar paciente?"}),(0,s.jsx)("p",{className:"text-sm text-slate-500 mb-6",children:"Esta acción no se puede deshacer."}),(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)("button",{onClick:()=>S(null),className:"flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all",children:"Cancelar"}),(0,s.jsx)("button",{onClick:H,className:"flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all",children:"Eliminar"})]})]})})]})]})}e.s(["default",()=>u],55587)}]);