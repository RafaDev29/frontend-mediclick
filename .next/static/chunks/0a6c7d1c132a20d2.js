(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,62465,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:i}){let a=r?40*r:e,l=n?40*n:t,s=a&&l?`viewBox='0 0 ${a} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7970,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return a}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},84330,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}}),e.r(91947);let n=e.r(88774),o=e.r(62465),i=e.r(7970),a=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:c=!1,loading:d,className:f,quality:p,width:g,height:h,fill:m=!1,style:b,overrideSrc:y,onLoad:v,onLoadingComplete:x,placeholder:_="empty",blurDataURL:j,fetchPriority:P,decoding:w="async",layout:O,objectFit:E,objectPosition:S,lazyBoundary:C,lazyRoot:k,...R},M){var I;let N,z,T,{imgConf:$,showAltText:A,blurComplete:D,defaultLoader:L}=M,U=$||i.imageConfigDefault;if("allSizes"in U)N=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=U.qualities?.sort((e,t)=>e-t);N={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=R.loader||L;delete R.loader,delete R.srcSet;let B="__next_img_default"in F;if(B){if("custom"===N.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[O];r&&!t&&(t=r)}let W="",q=s(g),G=s(h);if((I=e)&&"object"==typeof I&&(l(I)||void 0!==I.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(z=t.blurWidth,T=t.blurHeight,j=j||t.blurDataURL,W=t.src,!m)if(q||G){if(q&&!G){let e=q/t.width;G=Math.round(t.height*e)}else if(!q&&G){let e=G/t.height;q=Math.round(t.width*e)}}else q=t.width,G=t.height}let K=!u&&!c&&("lazy"===d||void 0===d);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,K=!1),N.unoptimized&&(r=!0),B&&!N.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let X=s(p),V=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:S}:{},A?{}:{color:"transparent"},b),H=D||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:z,blurHeight:T,blurDataURL:j||"",objectFit:V.objectFit})}")`:`url("${_}")`,Q=a.includes(V.objectFit)?"fill"===V.objectFit?"100% 100%":"cover":V.objectFit,J=H?{backgroundSize:Q,backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function({config:e,src:t,unoptimized:r,width:o,quality:i,sizes:a,loader:l}){if(r){let e=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:u}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(n);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((r,n)=>`${l({config:e,src:t,quality:i,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),src:l({config:e,src:t,quality:i,width:s[c]})}}({config:N,src:e,unoptimized:r,width:q,quality:X,sizes:t,loader:F}),Z=K?"lazy":d;return{props:{...R,loading:Z,fetchPriority:P,width:q,height:G,decoding:w,className:f,style:{...V,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:y||Y.src},meta:{unoptimized:r,preload:c||u,placeholder:_,fill:m}}}},36432,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(75201),o="u"<typeof window,i=o?()=>{}:n.useLayoutEffect,a=o?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),l()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return h},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(81258),a=e.r(44066),l=e.r(98134),s=a._(e.r(75201)),u=i._(e.r(36432)),c=e.r(44934);function d(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(91947);let p=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!a)&&n.has(t)?i=!1:(n.add(t),o[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,l.jsx)(u.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},56362,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=e.r(81258)._(e.r(75201)),o=e.r(7970),i=n.default.createContext(o.imageConfigDefault)},59719,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(81258)._(e.r(75201)).default.createContext(null)},77466,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},21223,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let n=e.r(77466),o=e.r(88774);function i({config:e,src:t,width:r,quality:i}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let a=(0,n.findClosestQuality)(i,e),l=(0,o.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}i.__next_img_default=!0;let a=i},1793,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return x}});let n=e.r(81258),o=e.r(44066),i=e.r(98134),a=o._(e.r(75201)),l=n._(e.r(29080)),s=n._(e.r(2581)),u=e.r(84330),c=e.r(7970),d=e.r(56362);e.r(91947);let f=e.r(59719),p=n._(e.r(21223)),g=e.r(51754),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,o,i,a){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:o,decoding:l,className:s,style:u,fetchPriority:c,placeholder:d,loading:f,unoptimized:p,fill:h,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:P,onError:w,...O},E)=>{let S=(0,a.useCallback)(e=>{e&&(w&&(e.src=e.src),e.complete&&m(e,d,y,v,x,p,j))},[e,d,y,v,x,w,p,j]),C=(0,g.useMergedRef)(E,S);return(0,i.jsx)("img",{...O,...b(c),loading:f,width:o,height:n,decoding:l,"data-nimg":h?"fill":"1",className:s,style:u,sizes:r,srcSet:t,src:e,ref:C,onLoad:e=>{m(e.currentTarget,d,y,v,x,p,j)},onError:e=>{_(!0),"empty"!==d&&x(!0),w&&w(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(d.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let[b,x]=(0,a.useState)(!1),[_,j]=(0,a.useState)(!1),{props:P,meta:w}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:b,showAltText:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...P,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:x,setShowAltText:j,sizesInput:e.sizes,ref:t}),w.preload?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},91947,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},51754,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(75201);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},30280,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},7240,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(44066)._(e.r(30280)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},99335,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return x},NormalizeError:function(){return y},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return m},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,m=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},82385,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(99335),o=e.r(38933);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},43063,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},99352,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(44066),a=e.r(98134),l=i._(e.r(75201)),s=e.r(7240),u=e.r(16872),c=e.r(51754),d=e.r(99335),f=e.r(14857);e.r(91947);let p=e.r(98283),g=e.r(82385),h=e.r(52413);function m(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function b(t){var r;let n,o,i,[s,b]=(0,l.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:x,as:_,children:j,prefetch:P=null,passHref:w,replace:O,shallow:E,scroll:S,onClick:C,onMouseEnter:k,onTouchStart:R,legacyBehavior:M=!1,onNavigate:I,ref:N,unstable_dynamicOnHover:z,...T}=t;n=j,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let $=l.default.useContext(u.AppRouterContext),A=!1!==P,D=!1!==P?null===(r=P)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:L,as:U}=l.default.useMemo(()=>{let e=m(x);return{href:e,as:_?m(_):e}},[x,_]);if(M){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(n)}let F=M?o&&"object"==typeof o&&o.ref:N,B=l.default.useCallback(e=>(null!==$&&(v.current=(0,p.mountLinkInstance)(e,L,$,D,A,b)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[A,L,$,D,b]),W={ref:(0,c.useMergedRef)(B,F),onClick(t){M||"function"!=typeof C||C(t),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!$||t.defaultPrevented||function(t,r,n,o,i,a,s){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(84395);l.default.startTransition(()=>{d(n||r,i?"replace":"push",a??!0,o.current)})}}(t,L,U,v,O,S,I)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),$&&A&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){M||"function"!=typeof R||R(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),$&&A&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,d.isAbsoluteUrl)(U)?W.href=U:M&&!w&&("a"!==o.type||"href"in o.props)||(W.href=(0,f.addBasePath)(U)),i=M?l.default.cloneElement(o,W):(0,a.jsx)("a",{...T,...W,children:n}),(0,a.jsx)(y.Provider,{value:s,children:i})}e.r(43063);let y=(0,l.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,l.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},24601,(e,t,r)=>{t.exports=e.r(28995)},11872,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(81258),a=e.r(84330),l=e.r(1793),s=i._(e.r(21223));function u(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=l.Image},87106,(e,t,r)=>{t.exports=e.r(11872)},77630,e=>{"use strict";var t=e.i(98134),r=e.i(24601),n=e.i(87106),o=e.i(99352),i=e.i(75201);let a=[{label:"Inicio",path:"/home"},{label:"Soluciones",path:"/solutions"},{label:"Planes",path:"/plans"}];function l(){let e=(0,r.usePathname)(),[l,s]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("nav",{className:"public-nav",children:[(0,t.jsxs)(o.default,{href:"/home",className:"nav-logo",children:[(0,t.jsx)(n.default,{src:"/logoooo.png",alt:"SGIP",width:300,height:80,className:"nav-logo-img",unoptimized:!0,priority:!0}),(0,t.jsxs)("div",{className:"nav-logo-text",children:[(0,t.jsx)("span",{className:"nav-logo-title",children:"SGIP"}),(0,t.jsx)("span",{className:"nav-logo-sub",children:"Sistema de Gestión Integral de Pacientes"})]})]}),(0,t.jsx)("div",{className:"nav-links",children:a.map(r=>(0,t.jsx)(o.default,{href:r.path,className:`nav-link ${e===r.path?"active":""}`,children:r.label},r.path))}),(0,t.jsxs)(o.default,{href:"/login",className:"nav-cta",children:["Iniciar sesión",(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,t.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,t.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]})]}),(0,t.jsxs)("button",{className:`nav-hamburger ${l?"open":""}`,onClick:()=>s(!l),"aria-label":"Menú",children:[(0,t.jsx)("span",{className:"hamburger-line"}),(0,t.jsx)("span",{className:"hamburger-line"}),(0,t.jsx)("span",{className:"hamburger-line"})]})]}),(0,t.jsxs)("div",{className:`nav-mobile-menu ${l?"open":""}`,children:[a.map(r=>(0,t.jsx)(o.default,{href:r.path,className:`nav-mobile-link ${e===r.path?"active":""}`,onClick:()=>s(!1),children:r.label},r.path)),(0,t.jsxs)(o.default,{href:"/login",className:"nav-mobile-cta",onClick:()=>s(!1),children:["Iniciar sesión",(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,t.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,t.jsx)("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]})]})]})]})}function s(){let e=(0,r.usePathname)();return["/login","/dashboard"].some(t=>e.startsWith(t))?null:(0,t.jsx)(l,{})}e.s(["default",()=>s],77630)}]);