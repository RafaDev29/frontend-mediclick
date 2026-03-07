module.exports=[75556,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored["react-ssr"].ReactDOM},40047,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored.contexts.HooksClientContext},97525,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored.contexts.ServerInsertedHtml},18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},22240,(a,b,c)=>{"use strict";b.exports=a.r(18622)},34076,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored["react-ssr"].ReactJsxRuntime},88972,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored["react-ssr"].React},59255,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored.contexts.AppRouterContext},71710,(a,b,c)=>{"use strict";b.exports=a.r(22240).vendored["react-ssr"].ReactServerDOMTurbopackClient},3988,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},16923,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},9862,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},35743,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"useMergedRef",{enumerable:!0,get:function(){return e}});let d=a.r(88972);function e(a,b){let c=(0,d.useRef)(null),e=(0,d.useRef)(null);return(0,d.useCallback)(d=>{if(null===d){let a=c.current;a&&(c.current=null,a());let b=e.current;b&&(e.current=null,b())}else a&&(c.current=f(a,d)),b&&(e.current=f(b,d))},[a,b])}function f(a,b){if("function"!=typeof a)return a.current=b,()=>{a.current=null};{let c=a(b);return"function"==typeof c?c:()=>a(null)}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},96273,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(63652),g=a.r(44156),h=a.r(96224),i=f._(a.r(67771));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},61751,(a,b,c)=>{b.exports=a.r(96273)},29828,a=>{"use strict";var b=a.i(34076),c=a.i(24321),d=a.i(61751),e=a.i(82840),f=a.i(88972);let g=[{label:"Inicio",path:"/home"},{label:"Soluciones",path:"/solutions"},{label:"Planes",path:"/plans"}];function h(){let a=(0,c.usePathname)(),[h,i]=(0,f.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        .public-nav {
          width: 100%;
          height: 64px;
          background: #0a2e6e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .nav-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .nav-logo-title {
          font-weight: 700;
          color: #fff;
          font-size: 18px;
          letter-spacing: -0.02em;
        }

        .nav-logo-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
          color: rgba(255,255,255,0.6);
          border: 1px solid transparent;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }

        .nav-link.active {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        /* CTA button */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .nav-cta:hover {
          background: #1a65d6;
        }

        /* Hamburger button */
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .nav-hamburger:hover {
          background: rgba(255,255,255,0.1);
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
          margin: 5px 0;
        }

        .nav-hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .nav-hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile menu */
        .nav-mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: #0a2e6e;
          padding: 16px 20px 24px;
          flex-direction: column;
          gap: 8px;
          z-index: 49;
          border-top: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-menu.open {
          display: flex;
        }

        .nav-mobile-link {
          display: block;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          transition: all 0.2s;
        }

        .nav-mobile-link:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .nav-mobile-link.active {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .nav-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          background: #1457c0;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 8px;
          transition: background 0.2s;
        }

        .nav-mobile-cta:hover {
          background: #1a65d6;
        }

        /* ========== TABLET (768px) ========== */
        @media (max-width: 768px) {
          .public-nav {
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .nav-hamburger {
            display: block;
          }

       
        }

        /* ========== MOBILE (480px) ========== */
        @media (max-width: 480px) {
          .public-nav {
            padding: 0 16px;
            height: 56px;
          }

          .nav-mobile-menu {
            top: 56px;
          }

          .nav-logo-img {
            height: 32px;
          }

          .nav-logo-title {
            font-size: 16px;
          }
        }
      `}),(0,b.jsxs)("nav",{className:"public-nav",children:[(0,b.jsxs)(e.default,{href:"/home",className:"nav-logo",children:[(0,b.jsx)(d.default,{src:"/logoooo.png",alt:"SGIP",width:300,height:80,className:"nav-logo-img",unoptimized:!0,priority:!0}),(0,b.jsxs)("div",{className:"nav-logo-text",children:[(0,b.jsx)("span",{className:"nav-logo-title",children:"SGIP"}),(0,b.jsx)("span",{className:"nav-logo-sub",children:"Sistema de Gestión Integral de Pacientes"})]})]}),(0,b.jsx)("div",{className:"nav-links",children:g.map(c=>(0,b.jsx)(e.default,{href:c.path,className:`nav-link ${a===c.path?"active":""}`,children:c.label},c.path))}),(0,b.jsxs)(e.default,{href:"/login",className:"nav-cta",children:["Iniciar sesión",(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,b.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,b.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]})]}),(0,b.jsxs)("button",{className:`nav-hamburger ${h?"open":""}`,onClick:()=>i(!h),"aria-label":"Menú",children:[(0,b.jsx)("span",{className:"hamburger-line"}),(0,b.jsx)("span",{className:"hamburger-line"}),(0,b.jsx)("span",{className:"hamburger-line"})]})]}),(0,b.jsxs)("div",{className:`nav-mobile-menu ${h?"open":""}`,children:[g.map(c=>(0,b.jsx)(e.default,{href:c.path,className:`nav-mobile-link ${a===c.path?"active":""}`,onClick:()=>i(!1),children:c.label},c.path)),(0,b.jsxs)(e.default,{href:"/login",className:"nav-mobile-cta",onClick:()=>i(!1),children:["Iniciar sesión",(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,b.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,b.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]})]})]})]})}function i(){let a=(0,c.usePathname)();return["/login","/dashboard"].some(b=>a.startsWith(b))?null:(0,b.jsx)(h,{})}a.s(["default",()=>i],29828)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__7fe92e19._.js.map