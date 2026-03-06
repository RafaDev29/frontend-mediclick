module.exports=[40126,a=>{"use strict";var b=a.i(34076),c=a.i(88972),d=a.i(53250);let e=async()=>{let{data:a}=await d.default.get("/patients");return a},f=async a=>{let{data:b}=await d.default.post("/patients",a);return b},g=async(a,b)=>{let{data:c}=await d.default.put(`/patients/${a}`,b);return c},h=async a=>{let{data:b}=await d.default.delete(`/patients/${a}`);return b},i=async a=>{let{data:b}=await d.default.get(`/dni/${a}`);return b};var j=a.i(24321),k=a.i(91418);let l=[{value:"MALE",label:"Masculino"},{value:"FEMALE",label:"Femenino"}],m=[{value:"A_POSITIVE",label:"A+"},{value:"A_NEGATIVE",label:"A-"},{value:"B_POSITIVE",label:"B+"},{value:"B_NEGATIVE",label:"B-"},{value:"O_POSITIVE",label:"O+"},{value:"O_NEGATIVE",label:"O-"},{value:"AB_POSITIVE",label:"AB+"},{value:"AB_NEGATIVE",label:"AB-"}],n=[{value:"PRE_REGISTRO",label:"Pre-registro",color:"bg-slate-100 text-slate-600"},{value:"REGISTRADO",label:"Registrado",color:"bg-blue-50 text-blue-600"},{value:"CITA_PROGRAMADA",label:"Cita Programada",color:"bg-indigo-50 text-indigo-600"},{value:"EN_SALA_ESPERA",label:"En Sala de Espera",color:"bg-amber-50 text-amber-600"},{value:"EN_TRIAJE",label:"En Triaje / Evaluación Inicial",color:"bg-orange-50 text-orange-600"},{value:"EN_CONSULTA",label:"En Consulta Médica",color:"bg-cyan-50 text-cyan-600"},{value:"EN_EXAMENES",label:"En Exámenes / Diagnóstico",color:"bg-purple-50 text-purple-600"},{value:"EN_PROCEDIMIENTO",label:"En Procedimiento",color:"bg-pink-50 text-pink-600"},{value:"DIAGNOSTICO_EMITIDO",label:"Diagnóstico Emitido",color:"bg-teal-50 text-teal-600"},{value:"TRATAMIENTO_EN_CURSO",label:"Tratamiento en Curso",color:"bg-yellow-50 text-yellow-700"},{value:"HOSPITALIZACION",label:"Observación / Hospitalización",color:"bg-red-50 text-red-600"},{value:"ALTA_MEDICA",label:"Alta Médica",color:"bg-emerald-50 text-emerald-600"},{value:"FACTURACION_PENDIENTE",label:"Facturación Pendiente",color:"bg-orange-50 text-orange-700"},{value:"PAGO_REALIZADO",label:"Pago Realizado",color:"bg-green-50 text-green-600"},{value:"CONTROL_PROGRAMADO",label:"Control Programado",color:"bg-sky-50 text-sky-600"},{value:"CERRADO",label:"Cerrado",color:"bg-gray-100 text-gray-500"}],o=a=>n[a%n.length],p={firstName:"",lastName:"",dni:"",email:"",phone:"",birthDate:"",gender:"MALE",bloodType:"O_POSITIVE",address:"",district:"",city:"",insuranceName:"",insuranceCode:"",allergies:"",observations:""};function q(){let a=(0,j.useRouter)(),[d,q]=(0,c.useState)([]),[r,s]=(0,c.useState)(!0),[t,u]=(0,c.useState)(!1),[v,w]=(0,c.useState)(null),[x,y]=(0,c.useState)(p),[z,A]=(0,c.useState)(!1),[B,C]=(0,c.useState)(null),[D,E]=(0,c.useState)(""),[F,G]=(0,c.useState)(null),[H,I]=(0,c.useState)(!1),[J,K]=(0,c.useState)(!1),[L,M]=(0,c.useState)("PRE_REGISTRO"),[N,O]=(0,c.useState)(1),P=(a,b)=>{C({type:a,msg:b}),setTimeout(()=>C(null),3500)},Q=async()=>{try{s(!0);let a=await e();a.success?q(a.data):P("error",a.message)}catch(a){P("error",a?.response?.data?.message||"Error al cargar pacientes")}finally{s(!1)}};(0,c.useEffect)(()=>{Q()},[]),(0,c.useEffect)(()=>{O(1)},[D]);let R=a=>{w(a),K(!1),M("REGISTRADO"),y({firstName:a.firstName,lastName:a.lastName,dni:a.dni,email:a.email,phone:a.phone,birthDate:a.birthDate.split("T")[0],gender:a.gender,bloodType:a.bloodType,address:a.address,district:a.district,city:a.city,insuranceName:a.insuranceName||"",insuranceCode:a.insuranceCode||"",allergies:a.allergies||"",observations:a.observations||""}),u(!0)},S=async()=>{if(!(x.dni.length<6)){I(!0);try{let a=await i(x.dni);a.success?(y(b=>({...b,firstName:a.data.firstName,lastName:a.data.lastName})),P("success",a.message)):P("error",a.message)}catch(a){P("error",a?.response?.data?.message||"DNI no encontrado")}finally{I(!1)}}},T=async a=>{a.preventDefault(),A(!0);try{let a=v?await g(v.id,x):await f(x);a.success?(P("success",a.message),u(!1),Q()):P("error",a.message)}catch(a){P("error",a?.response?.data?.message||"Error al guardar")}finally{A(!1)}},U=async()=>{if(F)try{let a=await h(F);a.success?(P("success",a.message),G(null),Q()):P("error",a.message)}catch(a){P("error",a?.response?.data?.message||"Error al eliminar")}},V=a=>b=>y(c=>({...c,[a]:b.target.value})),W=d.filter(a=>a.fullName.toLowerCase().includes(D.toLowerCase())||a.dni.includes(D)||a.email.toLowerCase().includes(D.toLowerCase())),X=Math.max(1,Math.ceil(W.length/10)),Y=W.slice((N-1)*10,10*N),Z=0===W.length?0:(N-1)*10+1,$=Math.min(10*N,W.length),_="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all",aa="block text-xs font-medium text-slate-600 mb-1.5";return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("div",{className:"space-y-4",children:[B&&(0,b.jsxs)("div",{className:`fixed top-6 right-6 z-50 px-5 py-3.5 rounded-2xl text-sm font-medium shadow-xl flex items-center gap-3 transition-all ${"success"===B.type?"bg-emerald-50 border border-emerald-200 text-emerald-700":"bg-red-50 border border-red-200 text-red-700"}`,children:["success"===B.type?(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),B.msg]}),(0,b.jsxs)("div",{className:"patients-header",children:[(0,b.jsx)(k.default,{items:[{label:"Pacientes"}]}),(0,b.jsxs)("button",{onClick:()=>{w(null),y(p),K(!1),M("PRE_REGISTRO"),u(!0)},className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[#1457c0]/20",children:[(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,b.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,b.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Nuevo paciente"]})]}),(0,b.jsx)("div",{className:"patients-search",children:(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("div",{className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,b.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),(0,b.jsx)("input",{type:"text",placeholder:"Buscar por nombre, DNI o email...",value:D,onChange:a=>E(a.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#1457c0] focus:ring-2 focus:ring-[#1457c0]/10 transition-all"})]})}),(0,b.jsx)("div",{className:"bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm",children:r?(0,b.jsxs)("div",{className:"flex items-center justify-center py-20 text-slate-400",children:[(0,b.jsxs)("svg",{className:"animate-spin w-6 h-6 mr-3",viewBox:"0 0 24 24",fill:"none",children:[(0,b.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,b.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8z"})]}),"Cargando pacientes..."]}):0===W.length?(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center py-20 text-slate-400",children:[(0,b.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",className:"mb-3 opacity-40",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"})]}),(0,b.jsx)("p",{className:"text-sm",children:"No se encontraron pacientes"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"desktop-table patients-table-wrap",children:(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{className:"bg-[#0a2e6e]",children:[(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Paciente"}),(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"DNI"}),(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Contacto"}),(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Sangre"}),(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Registro"}),(0,b.jsx)("th",{className:"text-left px-6 py-4 text-xs font-semibold text-white/70 uppercase tracking-wider",children:"Estado"}),(0,b.jsx)("th",{className:"px-6 py-4"})]})}),(0,b.jsx)("tbody",{className:"divide-y divide-slate-50",children:Y.map((c,d)=>{let e=o((N-1)*10+d);return(0,b.jsxs)("tr",{className:"hover:bg-slate-50/60 transition-colors",children:[(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsxs)("div",{className:"w-9 h-9 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#1457c0] font-bold text-sm shrink-0",children:[c.firstName[0],c.lastName[0]]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-sm font-semibold text-slate-800",children:c.fullName}),(0,b.jsxs)("p",{className:"text-xs text-slate-400",children:[c.city,", ",c.district]})]})]})}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-slate-600",children:c.dni}),(0,b.jsxs)("td",{className:"px-6 py-4",children:[(0,b.jsx)("p",{className:"text-sm text-slate-600",children:c.email}),(0,b.jsx)("p",{className:"text-xs text-slate-400",children:c.phone})]}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsx)("span",{className:"inline-flex items-center px-2.5 py-1 rounded-lg bg-red-50 text-red-600 text-xs font-semibold",children:m.find(a=>a.value===c.bloodType)?.label})}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsxs)("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${c.isActive?"bg-emerald-50 text-emerald-600":"bg-slate-100 text-slate-500"}`,children:[(0,b.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${c.isActive?"bg-emerald-500":"bg-slate-400"}`}),c.isActive?"Activo":"Inactivo"]})}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsx)("span",{className:`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${e.color}`,children:e.label})}),(0,b.jsx)("td",{className:"px-6 py-4",children:(0,b.jsxs)("div",{className:"flex items-center gap-2 justify-end",children:[(0,b.jsx)("button",{onClick:()=>R(c),className:"p-2 rounded-lg text-slate-400 hover:text-[#1457c0] hover:bg-[#eff6ff] transition-all",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,b.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),(0,b.jsx)("button",{onClick:()=>G(c.id),className:"p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,b.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,b.jsx)("path",{d:"M10 11v6"}),(0,b.jsx)("path",{d:"M14 11v6"}),(0,b.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,b.jsx)("button",{onClick:()=>a.push(`/dashboard/patients/${c.id}`),className:"p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})]})})]},c.id)})})]})}),(0,b.jsx)("div",{className:"mobile-cards p-4",children:Y.map((c,d)=>{let e=o((N-1)*10+d);return(0,b.jsxs)("div",{className:"mobile-card",children:[(0,b.jsxs)("div",{className:"mobile-card-header",children:[(0,b.jsxs)("div",{className:"mobile-card-patient",children:[(0,b.jsxs)("div",{className:"mobile-card-avatar",children:[c.firstName[0],c.lastName[0]]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"mobile-card-name",children:c.fullName}),(0,b.jsxs)("div",{className:"mobile-card-location",children:[c.city,", ",c.district]})]})]}),(0,b.jsxs)("div",{className:"mobile-card-actions",children:[(0,b.jsx)("button",{onClick:()=>R(c),className:"hover:text-[#1457c0] hover:bg-[#eff6ff]",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,b.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),(0,b.jsx)("button",{onClick:()=>G(c.id),className:"hover:text-red-500 hover:bg-red-50",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,b.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,b.jsx)("path",{d:"M10 11v6"}),(0,b.jsx)("path",{d:"M14 11v6"}),(0,b.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,b.jsx)("button",{onClick:()=>a.push(`/dashboard/patients/${c.id}`),className:"hover:text-emerald-600 hover:bg-emerald-50",children:(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),(0,b.jsxs)("div",{className:"mobile-card-grid",children:[(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"DNI"}),(0,b.jsx)("div",{className:"mobile-card-field-value",children:c.dni})]}),(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"Sangre"}),(0,b.jsx)("div",{className:"mobile-card-field-value",children:(0,b.jsx)("span",{className:"inline-flex items-center px-2 py-0.5 rounded-md bg-red-50 text-red-600 text-xs font-semibold",children:m.find(a=>a.value===c.bloodType)?.label})})]}),(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"Email"}),(0,b.jsx)("div",{className:"mobile-card-field-value",style:{fontSize:12,wordBreak:"break-all"},children:c.email})]}),(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"Teléfono"}),(0,b.jsx)("div",{className:"mobile-card-field-value",children:c.phone})]}),(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"Registro"}),(0,b.jsx)("div",{className:"mobile-card-field-value",children:(0,b.jsxs)("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold ${c.isActive?"bg-emerald-50 text-emerald-600":"bg-slate-100 text-slate-500"}`,children:[(0,b.jsx)("span",{className:`w-1.5 h-1.5 rounded-full ${c.isActive?"bg-emerald-500":"bg-slate-400"}`}),c.isActive?"Activo":"Inactivo"]})})]}),(0,b.jsxs)("div",{className:"mobile-card-field",children:[(0,b.jsx)("div",{className:"mobile-card-field-label",children:"Estado"}),(0,b.jsx)("div",{className:"mobile-card-field-value",children:(0,b.jsx)("span",{className:`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${e.color}`,children:e.label})})]})]})]},c.id)})}),(0,b.jsxs)("div",{className:"pagination-wrap",children:[(0,b.jsxs)("div",{className:"pagination-info",children:["Mostrando ",Z,"-",$," de ",W.length," pacientes"]}),(0,b.jsxs)("div",{className:"pagination-buttons",children:[(0,b.jsx)("button",{className:"pagination-btn",disabled:1===N,onClick:()=>O(a=>a-1),children:(0,b.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("polyline",{points:"15 18 9 12 15 6"})})}),(()=>{let a=[];if(X<=7)for(let b=1;b<=X;b++)a.push(b);else{a.push(1),N>3&&a.push("...");for(let b=Math.max(2,N-1);b<=Math.min(X-1,N+1);b++)a.push(b);N<X-2&&a.push("..."),a.push(X)}return a})().map((a,c)=>"..."===a?(0,b.jsx)("div",{className:"pagination-ellipsis",children:"..."},`ellipsis-${c}`):(0,b.jsx)("button",{className:`pagination-btn ${N===a?"active":""}`,onClick:()=>O(a),children:a},a)),(0,b.jsx)("button",{className:"pagination-btn",disabled:N===X,onClick:()=>O(a=>a+1),children:(0,b.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("polyline",{points:"9 18 15 12 9 6"})})})]})]})]})}),t&&(0,b.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,b.jsxs)("div",{className:"bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white z-10 rounded-t-3xl",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-lg font-bold text-[#0a2e6e]",children:v?"Editar paciente":"Nuevo paciente"}),(0,b.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"Completa los datos del paciente"})]}),(0,b.jsx)("button",{onClick:()=>u(!1),className:"p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all",children:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,b.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,b.jsxs)("form",{onSubmit:T,className:"px-8 py-6 space-y-6 modal-form-content",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Datos personales"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,b.jsxs)("div",{className:"col-span-2",children:[(0,b.jsx)("label",{className:aa,children:"DNI *"}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("input",{required:!0,value:x.dni,onChange:V("dni"),placeholder:"77777777",maxLength:8,className:_}),(0,b.jsxs)("button",{type:"button",onClick:S,disabled:H||x.dni.length<6,className:"px-4 py-2.5 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shrink-0",children:[H?(0,b.jsxs)("svg",{className:"animate-spin w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[(0,b.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"4"}),(0,b.jsx)("path",{className:"opacity-75",fill:"white",d:"M4 12a8 8 0 018-8v8z"})]}):(0,b.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,b.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),"Buscar"]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Nombres *"}),(0,b.jsx)("input",{required:!0,value:x.firstName,onChange:V("firstName"),placeholder:"Nombres",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Apellidos *"}),(0,b.jsx)("input",{required:!0,value:x.lastName,onChange:V("lastName"),placeholder:"Apellidos",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Fecha de nacimiento *"}),(0,b.jsx)("input",{required:!0,type:"date",value:x.birthDate,onChange:V("birthDate"),className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Género *"}),(0,b.jsx)("select",{required:!0,value:x.gender,onChange:V("gender"),className:_,children:l.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Tipo de sangre *"}),(0,b.jsx)("select",{required:!0,value:x.bloodType,onChange:V("bloodType"),className:_,children:m.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Estado del paciente"}),(0,b.jsx)("select",{value:L,onChange:a=>M(a.target.value),className:_,children:n.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,b.jsxs)("div",{className:"col-span-2",children:[(0,b.jsx)("label",{className:aa,children:"Donación de órganos"}),(0,b.jsxs)("div",{className:"flex gap-3 mt-1",children:[(0,b.jsxs)("button",{type:"button",onClick:()=>K(!0),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${J?"bg-emerald-50 border-emerald-300 text-emerald-700":"bg-slate-50 border-slate-200 text-slate-400 hover:border-emerald-200 hover:text-emerald-600"}`,children:[(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:J?"#059669":"none",stroke:J?"#059669":"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),"Sí dona"]}),(0,b.jsxs)("button",{type:"button",onClick:()=>K(!1),className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${!J?"bg-red-50 border-red-200 text-red-600":"bg-slate-50 border-slate-200 text-slate-400 hover:border-red-200 hover:text-red-400"}`,children:[(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),(0,b.jsx)("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),"No dona"]})]})]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Contacto"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Email *"}),(0,b.jsx)("input",{required:!0,type:"email",value:x.email,onChange:V("email"),placeholder:"paciente@email.com",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Teléfono *"}),(0,b.jsx)("input",{required:!0,value:x.phone,onChange:V("phone"),placeholder:"987654321",className:_})]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Dirección"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,b.jsxs)("div",{className:"col-span-2",children:[(0,b.jsx)("label",{className:aa,children:"Dirección *"}),(0,b.jsx)("input",{required:!0,value:x.address,onChange:V("address"),placeholder:"Av. Lima 123",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Distrito *"}),(0,b.jsx)("input",{required:!0,value:x.district,onChange:V("district"),placeholder:"Miraflores",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Ciudad *"}),(0,b.jsx)("input",{required:!0,value:x.city,onChange:V("city"),placeholder:"Lima",className:_})]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Seguro médico"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4 modal-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Nombre del seguro"}),(0,b.jsx)("input",{value:x.insuranceName,onChange:V("insuranceName"),placeholder:"Rimac",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Código del seguro"}),(0,b.jsx)("input",{value:x.insuranceCode,onChange:V("insuranceCode"),placeholder:"RIM-001",className:_})]})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Info clínica"}),(0,b.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Alergias"}),(0,b.jsx)("input",{value:x.allergies,onChange:V("allergies"),placeholder:"Penicilina, Ibuprofeno...",className:_})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:aa,children:"Observaciones"}),(0,b.jsx)("textarea",{value:x.observations,onChange:V("observations"),placeholder:"Observaciones relevantes...",rows:3,className:_+" resize-none"})]})]})]}),(0,b.jsxs)("div",{className:"flex gap-3 pt-2 modal-actions",children:[(0,b.jsx)("button",{type:"button",onClick:()=>u(!1),className:"flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all",children:"Cancelar"}),(0,b.jsx)("button",{type:"submit",disabled:z,className:"flex-1 py-3 rounded-xl bg-[#1457c0] hover:bg-[#0a2e6e] text-white text-sm font-semibold transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-[#1457c0]/20",children:z?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("svg",{className:"animate-spin w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:[(0,b.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"4"}),(0,b.jsx)("path",{className:"opacity-75",fill:"white",d:"M4 12a8 8 0 018-8v8z"})]}),"Guardando..."]}):v?"Guardar cambios":"Crear paciente"})]})]})]})}),F&&(0,b.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:(0,b.jsxs)("div",{className:"bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center",children:[(0,b.jsx)("div",{className:"w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4",children:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ef4444",strokeWidth:"2",children:[(0,b.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,b.jsx)("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),(0,b.jsx)("path",{d:"M10 11v6"}),(0,b.jsx)("path",{d:"M14 11v6"}),(0,b.jsx)("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]})}),(0,b.jsx)("h3",{className:"text-lg font-bold text-slate-800 mb-2",children:"¿Eliminar paciente?"}),(0,b.jsx)("p",{className:"text-sm text-slate-500 mb-6",children:"Esta acción no se puede deshacer."}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsx)("button",{onClick:()=>G(null),className:"flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-all",children:"Cancelar"}),(0,b.jsx)("button",{onClick:U,className:"flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all",children:"Eliminar"})]})]})})]})]})}a.s(["default",()=>q],40126)}];

//# sourceMappingURL=app_dashboard_patients_page_tsx_e9f9289a._.js.map