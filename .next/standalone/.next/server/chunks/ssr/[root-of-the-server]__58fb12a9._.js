module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70864,a=>{a.n(a.i(33290))},9014,a=>{a.n(a.i(70055))},79070,a=>{a.n(a.i(96918))},77303,a=>{a.n(a.i(77645))},80757,a=>{a.n(a.i(51548))},55289,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},94397,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},8899,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},22144,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},64303,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8035,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(94397);let d=a.r(8899),e=a.r(22144),f=a.r(64303),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},30826,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(48844);a.n(d("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/image-component.js <module evaluation>"))},85042,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(48844);a.n(d("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/image-component.js"))},21332,a=>{"use strict";a.i(30826);var b=a.i(85042);a.n(b)},30872,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},20230,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(30872),e=a.r(8899);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},38442,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(55289),g=a.r(8035),h=a.r(21332),i=f._(a.r(20230));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},99755,(a,b,c)=>{b.exports=a.r(38442)},97986,a=>{"use strict";var b=a.i(33256),c=a.i(99755);function d(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("div",{className:"sol-root",children:[(0,b.jsx)("section",{className:"sol-hero",children:(0,b.jsxs)("div",{className:"sol-hero-inner",children:[(0,b.jsx)("div",{className:"sol-badge",children:"Soluciones"}),(0,b.jsxs)("h1",{children:["Herramientas diseñadas",(0,b.jsx)("br",{}),"para ",(0,b.jsx)("em",{children:"cada rol"})," de la clínica"]}),(0,b.jsx)("p",{children:"SGIP ofrece módulos especializados para cada área de tu clínica, desde la recepción hasta la consulta médica."})]})}),(0,b.jsxs)("section",{className:"sol-modules",children:[(0,b.jsx)("p",{className:"section-label",children:"Módulos"}),(0,b.jsx)("h2",{className:"section-title",children:"Todo en una sola plataforma"}),(0,b.jsx)("p",{className:"section-sub",children:"Cada módulo está diseñado para resolver un problema específico del flujo clínico diario."}),(0,b.jsx)("div",{className:"modules-grid",children:[{icon:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,b.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,b.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"Gestión de Pacientes",desc:"Administra el perfil completo de cada paciente: datos personales, contactos de emergencia, antecedentes y documentos adjuntos.",tag:"Disponible",soon:!1},{icon:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,b.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,b.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),title:"Historial Clínico",desc:"Registro digital completo de diagnósticos, tratamientos, exámenes, alergias y evoluciones por paciente.",tag:"Disponible",soon:!1},{icon:(0,b.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),title:"Reportes y Estadísticas",desc:"Métricas en tiempo real sobre atenciones, diagnósticos frecuentes, evolución de pacientes y rendimiento del equipo médico.",tag:"Próximamente",soon:!0},{icon:(0,b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),title:"Agenda de Citas",desc:"Programación de citas vinculada directamente al perfil del paciente, con vista diaria, semanal y control de disponibilidad.",tag:"Próximamente",soon:!0}].map((a,c)=>(0,b.jsxs)("div",{className:"module-card",children:[(0,b.jsx)("div",{className:"module-icon",children:a.icon}),(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.desc}),(0,b.jsx)("span",{className:`module-tag${a.soon?" soon":""}`,children:a.tag})]},c))})]}),(0,b.jsxs)("section",{className:"sol-roles",children:[(0,b.jsx)("p",{className:"section-label",children:"Por tipo de usuario"}),(0,b.jsx)("h2",{className:"section-title",children:"Una experiencia para cada rol"}),(0,b.jsx)("p",{className:"section-sub",children:"Cada usuario accede solo a lo que necesita, con una interfaz adaptada a su función dentro de la clínica."}),(0,b.jsx)("div",{className:"roles-grid",children:[{cls:"admin",icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M12 20h9"}),(0,b.jsx)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),role:"Administrador",sub:"Control total del sistema",benefits:["Gestión completa de usuarios y roles","Acceso a todos los módulos y reportes","Configuración del sistema de la clínica","Supervisión de toda la operación"]},{cls:"doctor",icon:(0,b.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),role:"Médico",sub:"Gestión de consultas y pacientes",benefits:["Vista de sus pacientes asignados","Acceso y edición del historial clínico","Registro de diagnósticos y evoluciones","Seguimiento de tratamientos activos"]},{cls:"receptionist",icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),(0,b.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,b.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,b.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),role:"Recepcionista",sub:"Registro y gestión de pacientes",benefits:["Registro y actualización de pacientes","Consulta de datos y contactos","Gestión de llegadas y atenciones del día","Vista general de la agenda de la clínica"]}].map((a,c)=>(0,b.jsxs)("div",{className:`role-card ${a.cls}`,children:[(0,b.jsxs)("div",{className:"role-header",children:[(0,b.jsx)("div",{className:"role-avatar",children:a.icon}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:a.role}),(0,b.jsx)("p",{className:"role-sub",children:a.sub})]})]}),(0,b.jsx)("ul",{className:"role-benefits",children:a.benefits.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]},c))})]}),(0,b.jsxs)("footer",{className:"sol-footer",children:[(0,b.jsxs)("a",{href:"/home",className:"footer-logo",children:[(0,b.jsx)(c.default,{src:"/logoooo.png",alt:"SGIP",width:120,height:40,className:"h-8 w-auto object-contain",unoptimized:!0}),(0,b.jsx)("span",{children:"SGIP"})]}),(0,b.jsx)("p",{className:"footer-copy",children:"© 2026 DYA Solutions · Todos los derechos reservados"})]})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__58fb12a9._.js.map