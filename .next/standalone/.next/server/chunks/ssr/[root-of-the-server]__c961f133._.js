module.exports=[24361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},14747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},34305,a=>{"use strict";let b;var c=a.i(88972);let d=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(!Object.is(e,b)){let a=b;b=(null!=d?d:"object"!=typeof e||null===e)?e:Object.assign({},b,e),c.forEach(c=>c(b,a))}},e=()=>b,f={setState:d,getState:e,getInitialState:()=>g,subscribe:a=>(c.add(a),()=>c.delete(a))},g=b=a(d,e,f);return f},e=a=>{let b=a?d(a):d,e=a=>(function(a,b=a=>a){let d=c.default.useSyncExternalStore(a.subscribe,c.default.useCallback(()=>b(a.getState()),[a,b]),c.default.useCallback(()=>b(a.getInitialState()),[a,b]));return c.default.useDebugValue(d),d})(b,a);return Object.assign(e,b),e},f=(b=a=>({user:null,accessToken:null,setAuth:(b,c,d)=>{localStorage.setItem("accessToken",c),localStorage.setItem("refreshToken",d),localStorage.setItem("user",JSON.stringify(b)),a({user:b,accessToken:c})},logout:()=>{localStorage.clear(),a({user:null,accessToken:null})},loadFromStorage:()=>{let b=localStorage.getItem("accessToken"),c=localStorage.getItem("user");b&&c&&a({accessToken:b,user:JSON.parse(c)})}}))?e(b):e;a.s(["useAuthStore",0,f],34305)},48819,a=>{"use strict";var b=a.i(34076),c=a.i(88972),d=a.i(24321),e=a.i(53250);let f=async a=>{let{data:b}=await e.default.post("/auth/login",a);return b};var g=a.i(34305),h=a.i(82840),i=a.i(61751);function j(){let[a,e]=(0,c.useState)(""),[j,k]=(0,c.useState)(""),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(!1),[p,q]=(0,c.useState)(""),[r,s]=(0,c.useState)(""),t=(0,d.useRouter)(),{setAuth:u}=(0,g.useAuthStore)(),v=async b=>{b.preventDefault(),m(!0),q(""),s("");try{let b=await f({email:a,password:j});b.success?(s(b.message),u(b.data.user,b.data.accessToken,b.data.refreshToken),setTimeout(()=>t.push("/dashboard"),800)):q(b.message)}catch(a){q(a?.response?.data?.message||"Error al conectar con el servidor")}finally{m(!1)}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
        }

        /* ===== LEFT PANEL ===== */
        .login-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 55%;
          padding: 56px;
          position: relative;
          overflow: hidden;
        }

        .login-left-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80');
          background-size: cover;
          background-position: center;
        }

        .login-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,46,110,0.9) 0%, rgba(20,87,192,0.8) 50%, rgba(30,111,219,0.7) 100%);
        }

        .login-left-circle1 {
          position: absolute;
          top: -80px; right: -80px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        .login-left-circle2 {
          position: absolute;
          bottom: -100px; left: -60px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        .login-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          position: relative;
          z-index: 10;
        }

        .login-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .login-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .login-logo-title {
          font-weight: 700;
          color: #fff;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .login-logo-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
        }

        .login-left-content {
          position: relative;
          z-index: 10;
        }

        .login-left-content h1 {
          color: #fff;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .login-left-content h1 span {
          color: #bfdbfe;
        }

        .login-left-content p {
          color: rgba(255,255,255,0.6);
          font-size: 18px;
          max-width: 380px;
          line-height: 1.6;
        }

        /* ===== RIGHT PANEL ===== */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f4fb;
          padding: 32px;
        }

        .login-form-container {
          width: 100%;
          max-width: 420px;
        }

        .login-form-container h2 {
          font-size: 30px;
          font-weight: 700;
          color: #0a2e6e;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .login-form-container .login-subtitle {
          color: #64748b;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .login-alert {
          margin-bottom: 20px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .login-alert.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
        }

        .login-alert.success {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669;
        }

        .login-field {
          margin-bottom: 20px;
        }

        .login-field label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          margin-bottom: 6px;
        }

        .login-input-wrap {
          position: relative;
        }

        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          display: flex;
        }

        .login-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e2e8f0;
          color: #1e293b;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }

        .login-input:focus {
          border-color: #1457c0;
          box-shadow: 0 0 0 3px rgba(20,87,192,0.1);
        }

        .login-input::placeholder {
          color: #94a3b8;
        }

        .login-input.has-toggle {
          padding-right: 44px;
        }

        .login-toggle-pw {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          display: flex;
          transition: color 0.2s;
        }

        .login-toggle-pw:hover {
          color: #475569;
        }

        .login-submit {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(20,87,192,0.3);
        }

        .login-submit:hover {
          background: #0a2e6e;
        }

        .login-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-copy {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin-top: 40px;
        }

        /* ===== MOBILE HERO (oculto en desktop) ===== */
        .login-mobile-hero {
          display: none;
        }

        /* ========== TABLET (1024px) ========== */
        @media (max-width: 1024px) {
          .login-left {
            width: 45%;
            padding: 40px;
          }
          .login-left-content h1 {
            font-size: 36px;
          }
          .login-left-content p {
            font-size: 16px;
          }
        }

        /* ========== MOBILE (768px) ========== */
        @media (max-width: 768px) {
          .login-wrapper {
            flex-direction: column;
          }

          /* Ocultar panel izquierdo desktop */
          .login-left {
            display: none;
          }

          /* Mostrar hero m\xf3vil */
          .login-mobile-hero {
            display: block;
            position: relative;
            padding: 48px 24px 40px;
            overflow: hidden;
          }

          .login-mobile-hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80');
            background-size: cover;
            background-position: center;
          }

          .login-mobile-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(10,46,110,0.88) 0%, rgba(20,87,192,0.8) 50%, rgba(30,111,219,0.72) 100%);
          }

          .login-mobile-hero-content {
            position: relative;
            z-index: 10;
          }

          .login-mobile-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            margin-bottom: 28px;
          }

          .login-mobile-logo-img {
            height: 36px;
            width: auto;
            object-fit: contain;
          }

          .login-mobile-logo-title {
            font-weight: 700;
            color: #fff;
            font-size: 17px;
          }

          .login-mobile-hero h1 {
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 12px;
          }

          .login-mobile-hero h1 span {
            color: #bfdbfe;
          }

          .login-mobile-hero p {
            color: rgba(255,255,255,0.6);
            font-size: 15px;
            line-height: 1.6;
          }

          .login-right {
            padding: 32px 24px 48px;
          }
        }

        /* ========== MOBILE SMALL (480px) ========== */
        @media (max-width: 480px) {
          .login-mobile-hero {
            padding: 36px 20px 32px;
          }

          .login-mobile-hero h1 {
            font-size: 24px;
          }

          .login-mobile-hero p {
            font-size: 14px;
          }

          .login-mobile-logo-img {
            height: 30px;
          }

          .login-right {
            padding: 28px 20px 40px;
          }

          .login-form-container h2 {
            font-size: 24px;
          }

          .login-submit {
            padding: 14px;
          }
        }
      `}),(0,b.jsxs)("div",{className:"login-wrapper",children:[(0,b.jsxs)("div",{className:"login-mobile-hero",children:[(0,b.jsx)("div",{className:"login-mobile-hero-bg"}),(0,b.jsx)("div",{className:"login-mobile-hero-overlay"}),(0,b.jsxs)("div",{className:"login-mobile-hero-content",children:[(0,b.jsxs)(h.default,{href:"/home",className:"login-mobile-logo",children:[(0,b.jsx)(i.default,{src:"/logoooo.png",alt:"SGIP",width:300,height:80,className:"login-mobile-logo-img",unoptimized:!0,priority:!0}),(0,b.jsx)("span",{className:"login-mobile-logo-title",children:"SGIP"})]}),(0,b.jsxs)("h1",{children:["Gestiona tus",(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:"pacientes"}),(0,b.jsx)("br",{}),"fácilmente"]}),(0,b.jsx)("p",{children:"Plataforma integral para Clínicas. Administra, controla y da seguimiento a cada paciente."})]})]}),(0,b.jsxs)("div",{className:"login-left",children:[(0,b.jsx)("div",{className:"login-left-bg"}),(0,b.jsx)("div",{className:"login-left-overlay"}),(0,b.jsx)("div",{className:"login-left-circle1"}),(0,b.jsx)("div",{className:"login-left-circle2"}),(0,b.jsxs)(h.default,{href:"/home",className:"login-logo",children:[(0,b.jsx)(i.default,{src:"/logoooo.png",alt:"SGIP",width:300,height:80,className:"login-logo-img",unoptimized:!0,priority:!0}),(0,b.jsxs)("div",{className:"login-logo-text",children:[(0,b.jsx)("span",{className:"login-logo-title",children:"SGIP"}),(0,b.jsx)("span",{className:"login-logo-sub",children:"Sistema de Gestión Integral de Pacientes"})]})]}),(0,b.jsxs)("div",{className:"login-left-content",children:[(0,b.jsxs)("h1",{children:["Gestiona tus",(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:"pacientes"}),(0,b.jsx)("br",{}),"fácilmente"]}),(0,b.jsx)("p",{children:"Plataforma integral para Clínicas. Administra, controla y da seguimiento a cada paciente."})]}),(0,b.jsx)("div",{})]}),(0,b.jsx)("div",{className:"login-right",children:(0,b.jsxs)("div",{className:"login-form-container",children:[(0,b.jsx)("h2",{children:"Bienvenido"}),(0,b.jsx)("p",{className:"login-subtitle",children:"Ingresa tus credenciales para continuar"}),p&&(0,b.jsxs)("div",{className:"login-alert error",children:[(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,b.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),p]}),r&&(0,b.jsxs)("div",{className:"login-alert success",children:[(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,b.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r]}),(0,b.jsxs)("form",{onSubmit:v,children:[(0,b.jsxs)("div",{className:"login-field",children:[(0,b.jsx)("label",{children:"Correo electrónico"}),(0,b.jsxs)("div",{className:"login-input-wrap",children:[(0,b.jsx)("div",{className:"login-input-icon",children:(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),(0,b.jsx)("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]})}),(0,b.jsx)("input",{type:"email",value:a,onChange:a=>e(a.target.value),placeholder:"doctor@hospital.com",required:!0,className:"login-input"})]})]}),(0,b.jsxs)("div",{className:"login-field",children:[(0,b.jsx)("label",{children:"Contraseña"}),(0,b.jsxs)("div",{className:"login-input-wrap",children:[(0,b.jsx)("div",{className:"login-input-icon",children:(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,b.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),(0,b.jsx)("input",{type:n?"text":"password",value:j,onChange:a=>k(a.target.value),placeholder:"••••••••",required:!0,className:"login-input has-toggle"}),(0,b.jsx)("button",{type:"button",onClick:()=>o(!n),className:"login-toggle-pw",children:n?(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20"})}):(0,b.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),(0,b.jsx)("button",{type:"submit",disabled:l,className:"login-submit",children:l?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("svg",{className:"animate-spin",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[(0,b.jsx)("circle",{opacity:"0.25",cx:"12",cy:"12",r:"10",stroke:"white",strokeWidth:"4"}),(0,b.jsx)("path",{opacity:"0.75",fill:"white",d:"M4 12a8 8 0 018-8v8z"})]}),"Ingresando..."]}):"Ingresar"})]}),(0,b.jsxs)("p",{className:"login-copy",children:["© ",new Date().getFullYear()," D&A Intelligent Solutions · Todos los derechos reservados"]})]})})]})]})}a.s(["default",()=>j],48819)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__c961f133._.js.map