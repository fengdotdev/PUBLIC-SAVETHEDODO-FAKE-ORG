(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8577)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,l=n(2648).Z,o=n(1598).Z,i=n(7273).Z,a=o(n(7294)),s=l(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=l(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,l,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&i(!0),null==l?void 0:l.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;l.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:l,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:p,loading:m,srcString:v,config:x,unoptimized:b,loader:y,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:S,onLoad:C,onError:E}=e,k=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,n,{width:o,height:l,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:m,style:r({},u,d),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,v,p,j,w,_,b))},[v,p,j,w,_,E,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,j,w,_,b)},onError:e=>{S(!0),"blur"===p&&_(!0),E&&E(e)}})))}),x=a.forwardRef((e,t)=>{let n,l;var o,{src:g,sizes:x,unoptimized:b=!1,priority:y=!1,loading:j,className:w,quality:_,width:S,height:C,fill:E,style:k,onLoad:O,onLoadingComplete:N,placeholder:P="empty",blurDataURL:M,layout:R,objectFit:I,objectPosition:T,lazyBoundary:D,lazyRoot:L}=e,z=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=a.useContext(d.ImageConfigContext),B=a.useMemo(()=>{let e=h||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[A]),F=z,U=F.loader||f.default;delete F.loader;let W="__next_img_default"in U;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:n}=t,r=i(t,["config"]);return e(r)}}if(R){"fill"===R&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(k=r({},k,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!x&&(x=t)}let G="",H=m(S),Z=m(C);if("object"==typeof(o=g)&&(p(o)||void 0!==o.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,l=e.blurHeight,M=M||e.blurDataURL,G=e.src,!E){if(H||Z){if(H&&!Z){let t=H/e.width;Z=Math.round(e.height*t)}else if(!H&&Z){let t=Z/e.height;H=Math.round(e.width*t)}}else H=e.width,Z=e.height}}let q=!y&&("lazy"===j||void 0===j);((g="string"==typeof g?g:G).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,q=!1),B.unoptimized&&(b=!0),W&&g.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[J,K]=a.useState(!1),[V,X]=a.useState(!1),Q=m(_),Y=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:T}:{},V?{}:{color:"transparent"},k),$="blur"===P&&M&&!J?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:Z,blurWidth:n,blurHeight:l,blurDataURL:M}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:l,quality:o,sizes:i,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:l}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:o,kind:"x"}}(t,l,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,r)=>"".concat(a({config:t,src:n,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:n,quality:o,width:s[u]})}}({config:B,src:g,unoptimized:b,width:H,quality:Q,sizes:x,loader:U}),et=g,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},er=a.useRef(O);a.useEffect(()=>{er.current=O},[O]);let el=a.useRef(N);a.useEffect(()=>{el.current=N},[N]);let eo=r({isLazy:q,imgAttributes:ee,heightInt:Z,widthInt:H,qualityInt:Q,className:w,imgStyle:Y,blurStyle:$,loading:j,config:B,fill:E,unoptimized:b,placeholder:P,loader:U,srcString:et,onLoadRef:er,onLoadingCompleteRef:el,setBlurComplete:K,setShowAltText:X},F);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},eo,{ref:t})),y?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,l=n(7273).Z,o=r(n(7294)),i=n(1003),a=n(7795),s=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),h=n(3468);let p=new Set;function m(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let l=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+l;if(p.has(o))return;p.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:a.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:p,children:v,prefetch:x,passHref:b,replace:y,shallow:j,scroll:w,locale:_,onClick:S,onMouseEnter:C,onTouchStart:E,legacyBehavior:k=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,k&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let N=!1!==x,P=o.default.useContext(c.RouterContext),M=o.default.useContext(u.AppRouterContext),R=null!=P?P:M,I=!P,{href:T,as:D}=o.default.useMemo(()=>{if(!P){let e=g(a);return{href:e,as:p?g(p):e}}let[e,t]=i.resolveHref(P,a,!0);return{href:e,as:p?i.resolveHref(P,p):t||e}},[P,a,p]),L=o.default.useRef(T),z=o.default.useRef(D);k&&(r=o.default.Children.only(n));let A=k?r&&"object"==typeof r&&r.ref:t,[B,F,U]=d.useIntersection({rootMargin:"200px"}),W=o.default.useCallback(e=>{(z.current!==D||L.current!==T)&&(U(),z.current=D,L.current=T),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[D,A,T,U,B]);o.default.useEffect(()=>{R&&F&&N&&m(R,T,D,{locale:_})},[D,T,F,_,N,null==P?void 0:P.locale,R]);let G={ref:W,onClick(e){k||"function"!=typeof S||S(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,l,a,s,c,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(p):p()}(e,R,T,D,y,j,w,_,I,N)},onMouseEnter(e){k||"function"!=typeof C||C(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(N||!I)&&m(R,T,D,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(N||!I)&&m(R,T,D,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||b||"a"===r.type&&!("href"in r.props)){let e=void 0!==_?_:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&f.getDomainLocale(D,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);G.href=t||h.addBasePath(s.addLocale(D,e,null==P?void 0:P.defaultLocale))}return k?o.default.cloneElement(r,G):o.default.createElement("a",Object.assign({},O,G),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,d]=r.useState(!1),[f,h]=r.useState(null);r.useEffect(()=>{if(o){if(!c&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:l},a.push(n),i.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let e=l.requestIdleCallback(()=>d(!0));return()=>l.cancelIdleCallback(e)}},[f,c,n,t,u]);let p=r.useCallback(()=>{d(!1)},[]);return[h,u,p]};var r=n(7294),l=n(4686);let o="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:l,blurDataURL:o}=e,i=r||t,a=l||n,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&l?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:l}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},8577:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),l=n(1664),o=n.n(l);let i=[{title:"Discover",url:"/some"},{title:"Get Involve",url:"/some"},{title:"About Us",url:"/about"}],a=[{title:"Discover",content:[{title:"The Island",url:"/the_island"},{title:"Ragnarok",url:"/ragnarok"},{title:"More On Our Work",url:"/our_work"},{title:"About Save The Dodo",url:"/about"}]},{title:"Act",content:[{title:"Donate to Save The Dodo",url:"/donate"},{title:"Take Action",url:"/take_action"},{title:"Partner with Save The Dodo",url:"/partner_with"}]},{title:"Latest",content:[{title:"Latest Updates",url:"/latest_updates"},{title:"Press Centre",url:"/press_centre"},{title:"Success Stories",url:"/success_stories"}]}],s=[{title:"about the fundation",content:[{title:"FAQ",url:"/contact"},{title:"Jobs",url:"/jobs"},{title:"Save The Dodo Consultant",url:"/consultant"},{title:"Contact On The Island",url:"/contact_ragnarok"},{title:"Contact On Ragnarok",url:"/contact_island"}]},{title:"about the site",content:[{title:"Using & Sharing Site Content",url:"/sharing"},{title:"Privacy",url:"/privacy"},{title:"Terms & Conditions ",url:"/terms"}]},{title:"site",content:[{title:"Site Map",url:"/site_map"}]}];function c(){let e=a.map(e=>(0,r.jsxs)("div",{className:"flex flex-col px-3 ",children:[(0,r.jsx)("p",{className:"font-bold",children:e.title}),(0,r.jsx)("ul",{children:e.content.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:e.url,children:e.title})},e.title+e.url))})]},e.title));return(0,r.jsx)("div",{className:"py-4 flex flex-row justify-around space-x-5",children:e})}function u(){let e=s.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("ul",{className:"mx-2 flex flex-row flex-wrap justify-center space-x-6",children:e.content.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:e.url,children:e.title})},e.title+e.url))})}));return(0,r.jsx)("div",{className:"flex flex-col justify-center space-x-8 pb-5 text-light text-bold",children:e})}function d(){return(0,r.jsxs)("footer",{className:"mb-auto bg-primary py-6 text-center",children:[(0,r.jsx)(u,{}),(0,r.jsx)("hr",{className:" h-1 mx-auto mb-2 w-1/3 border-light "}),(0,r.jsx)("h1",{className:"text-light ",children:"SAVE THE DODO IS A FAKE ORG ONLY FOR WEBDEV PORTAFOLIO SHOWCASE"})]})}var f=n(9008),h=n.n(f);function p(){return(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"Save the Dodo"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"./favicon.ico"})]})}var m=n(7294),g=n(5675),v=n.n(g);function x(){return(0,r.jsxs)(o(),{href:"./",children:[" ",(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)(v(),{className:"pt-0",src:"./img/Dossier_Dodo_Character.png",width:"40",height:"40",alt:"Picture of the author"}),(0,r.jsx)("h1",{className:"text-light font-bold",children:"Save The Dodo"})]})]})}function b(){let[e,t]=(0,m.useState)(!1),n=i.map(e=>(0,r.jsx)("li",{className:"text-light",children:(0,r.jsx)(o(),{href:e.url,children:e.title})},e.title+e.url));return(0,r.jsxs)("nav",{className:"p-3 bg-dark justify-between items-center ",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(x,{})}),(0,r.jsx)("ul",{className:"hidden md:flex flex-row space-x-8",children:n}),(0,r.jsx)("a",{className:"hidden p-3 px-6 pt-2 text-light rounded-full baseline md:block bg-primary hover:bg-light hover:text-primary",href:"",children:"Join!"}),(0,r.jsx)("button",{id:"menu-btn",onClick:()=>t(!e),className:" p-3 px-6 pt-2 rounded-full baseline bg-transparent text-light focus:outline-none md:hidden",children:e?"x":(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"})})})]}),(0,r.jsxs)("ul",{className:"".concat(e?"block":"hidden"," md:hidden flex flex-col items-center space-y-1 w-auto text-primary bg-light rounded-lg m-1 p-2"),children:[n,(0,r.jsx)("li",{className:"p-2",children:(0,r.jsx)(o(),{className:" my-2 p-3 px-6 pt-2 text-light rounded-lg baseline w-full bg-primary hover:bg-light hover:text-primary text-center",href:"/join",children:"Join!"})})]})]})}function y(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(b,{}),(0,r.jsx)("main",{className:"h-5/6 ",children:t}),(0,r.jsx)(c,{}),(0,r.jsx)(d,{})]})}function j(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(y,{children:(0,r.jsx)(t,{...n})})}n(7599)},7599:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);