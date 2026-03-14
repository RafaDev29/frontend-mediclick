module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70864,a=>{a.n(a.i(33290))},9014,a=>{a.n(a.i(70055))},79070,a=>{a.n(a.i(96918))},77303,a=>{a.n(a.i(77645))},80757,a=>{a.n(a.i(51548))},55289,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},94397,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},8899,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},22144,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},64303,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8035,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(94397);let d=a.r(8899),e=a.r(22144),f=a.r(64303),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},30826,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(48844);a.n(d("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/image-component.js <module evaluation>"))},85042,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(48844);a.n(d("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/image-component.js"))},21332,a=>{"use strict";a.i(30826);var b=a.i(85042);a.n(b)},30872,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},20230,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(30872),e=a.r(8899);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},38442,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(55289),g=a.r(8035),h=a.r(21332),i=f._(a.r(20230));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},99755,(a,b,c)=>{b.exports=a.r(38442)},20811,a=>{"use strict";var b=a.i(33256),c=a.i(99755);function d(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("div",{className:"home-root",children:[(0,b.jsxs)("section",{className:"hero",children:[(0,b.jsx)("div",{className:"hero-bg"}),(0,b.jsx)("div",{className:"hero-overlay"}),(0,b.jsxs)("div",{className:"hero-content",children:[(0,b.jsxs)("div",{className:"hero-badge",children:[(0,b.jsx)("span",{}),"Plataforma clínica digital"]}),(0,b.jsxs)("h1",{children:["Gestión de pacientes",(0,b.jsx)("br",{}),(0,b.jsx)("em",{children:"completa y segura"}),(0,b.jsx)("br",{}),"en tu clínica"]}),(0,b.jsx)("p",{children:"SGIP centraliza el historial clínico, datos y atenciones de cada paciente. Todo tu equipo médico conectado en un solo lugar."}),(0,b.jsxs)("a",{href:"/login",className:"hero-cta",children:["Comenzar ahora",(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),(0,b.jsxs)("section",{className:"features",children:[(0,b.jsx)("p",{className:"section-label",children:"¿Por qué SGIP?"}),(0,b.jsxs)("h2",{className:"section-title",children:["Todo lo que necesita",(0,b.jsx)("br",{}),"tu clínica"]}),(0,b.jsx)("p",{className:"section-sub",children:"Una plataforma diseñada para simplificar la gestión de pacientes, desde el historial clínico hasta el seguimiento de cada atención."}),(0,b.jsx)("div",{className:"features-grid",children:[{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,b.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,b.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),(0,b.jsx)("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),title:"Historial clínico completo",desc:"Registra y accede al historial médico de cada paciente: diagnósticos, tratamientos, exámenes, alergias y evoluciones en un solo lugar."},{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,b.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,b.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"Gestión de pacientes",desc:"Administra el perfil completo de cada paciente: datos personales, contactos de emergencia, antecedentes familiares y documentos adjuntos."},{icon:(0,b.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:(0,b.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),title:"Seguimiento de atenciones",desc:"Monitorea el estado clínico de cada paciente con actualizaciones en tiempo real para médicos, enfermeras y recepcionistas."},{icon:(0,b.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1457c0",strokeWidth:"2",children:[(0,b.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),(0,b.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),title:"Acceso por roles",desc:"Control de acceso seguro para administradores, médicos y recepcionistas de la clínica, cada uno con su vista personalizada."}].map((a,c)=>(0,b.jsxs)("div",{className:"feature-card",children:[(0,b.jsx)("div",{className:"feature-icon",children:a.icon}),(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.desc})]},c))})]}),(0,b.jsx)("section",{className:"stats",children:[{value:"99.9%",label:"Disponibilidad garantizada"},{value:"< 1s",label:"Tiempo de respuesta"},{value:"256bit",label:"Encriptación de datos"},{value:"24/7",label:"Soporte disponible"}].map((a,c)=>(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"stat-value",children:a.value}),(0,b.jsx)("div",{className:"stat-label",children:a.label})]},c))}),(0,b.jsxs)("footer",{className:"footer",children:[(0,b.jsxs)("a",{href:"/home",className:"footer-logo",children:[(0,b.jsx)(c.default,{src:"/logoooo.png",alt:"SGIP",width:120,height:40,className:"h-8 w-auto object-contain",unoptimized:!0}),(0,b.jsx)("span",{children:"SGIP"})]}),(0,b.jsx)("p",{className:"footer-copy",children:"© 2026 DYA Solutions · Todos los derechos reservados"})]})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__f46df055._.js.map