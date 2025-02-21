(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4782:function(e,t,r){Promise.resolve().then(r.t.bind(r,7960,23)),Promise.resolve().then(r.bind(r,1890)),Promise.resolve().then(r.bind(r,4491)),Promise.resolve().then(r.bind(r,5495)),Promise.resolve().then(r.t.bind(r,7489,23))},4491:function(e,t,r){"use strict";r.d(t,{LanguageProvider:function(){return a},Z:function(){return l}});var n=r(7437),o=r(2265);let i={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},s=o.createContext(void 0);function a(e){let{children:t}=e,[r,a]=o.useState("ko");o.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&a(e)},[]);let l=o.useCallback(e=>{a(e),localStorage.setItem("preferredLanguage",e)},[]),c=o.useCallback(e=>{let t=function(e,t){let r=e;for(let e of t){if(!r||"string"==typeof r)return;r=r[e]}return r}(i[r],e.split("."));return"string"==typeof t?t:e},[r]);return(0,n.jsx)(s.Provider,{value:{language:r,setLanguage:l,t:c},children:t})}function l(){let e=o.useContext(s);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},5495:function(e,t,r){"use strict";r.d(t,{ThemeProvider:function(){return i}});var n=r(7437),o=r(5922);function i(e){let{children:t,...r}=e;return(0,n.jsx)(o.f,{...r,children:t})}},1890:function(e,t,r){"use strict";r.d(t,{Header:function(){return p}});var n=r(7437),o=r(7648),i=r(2869),s=r(9205);let a=(0,s.Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var l=r(4491);function c(){let{language:e}=(0,l.Z)(),t="/julie";return(0,n.jsxs)(i.z,{variant:"outline",size:"sm",onClick:()=>{let r="ko"===e?"".concat(t,"/assets/lee_eunji_resume.pdf"):"".concat(t,"/assets/julie_lee_resume.pdf"),n=document.createElement("a");n.href=r,n.download=r.split("/").pop()||"resume.pdf",document.body.appendChild(n),n.click(),document.body.removeChild(n)},children:[(0,n.jsx)(a,{className:"w-4 h-4 mr-2"}),"ko"===e?"이력서":"Resume"]})}function u(){let{language:e,setLanguage:t}=(0,l.Z)();return(0,n.jsx)(i.z,{variant:"outline",size:"sm",onClick:()=>t("ko"===e?"en":"ko"),className:"w-16",children:e.toUpperCase()})}let d=(0,s.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),m=(0,s.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var f=r(5922);function h(){let{theme:e,setTheme:t}=(0,f.F)();return(0,n.jsxs)(i.z,{variant:"outline",size:"icon",onClick:()=>{t("dark"===e?"light":"dark")},children:[(0,n.jsx)(d,{className:"h-[1.2rem] w-[1.2rem] transition-all dark:hidden"}),(0,n.jsx)(m,{className:"h-[1.2rem] w-[1.2rem] hidden transition-all dark:block"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function p(){return(0,n.jsx)("header",{className:"fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b",children:(0,n.jsxs)("div",{className:"max-w-6xl mx-auto px-4 h-16 flex items-center justify-between",children:[(0,n.jsx)(o.default,{href:"/",className:"font-bold text-lg",children:"JULIE"}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)(c,{}),(0,n.jsx)(u,{}),(0,n.jsx)(h,{})]})]})})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(7437),o=r(2265),i=r(7495),s=r(535),a=r(4508);let l=(0,s.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:r,variant:o,size:s,asChild:c=!1,...u}=e,d=c?i.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(l({variant:o,size:s,className:r})),ref:t,...u})});c.displayName="Button"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(1994),o=r(3335);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:d,...m}=e;return(0,n.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:r,strokeWidth:l?24*Number(a)/Number(o):a,className:i("lucide",c),...m},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),l=(e,t)=>{let r=(0,n.forwardRef)((r,s)=>{let{className:l,...c}=r;return(0,n.createElement)(a,{ref:s,iconNode:t,className:i("lucide-".concat(o(e)),l),...c})});return r.displayName="".concat(e),r}},7960:function(){},7489:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_29e2ff', '__Noto_Sans_KR_Fallback_29e2ff'",fontStyle:"normal"},className:"__className_29e2ff"}},8575:function(e,t,r){"use strict";r.d(t,{F:function(){return i},e:function(){return s}});var n=r(2265);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let r=!1,n=e.map(e=>{let n=o(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():o(e[t],null)}}}}function s(...e){return n.useCallback(i(...e),e)}},7495:function(e,t,r){"use strict";r.d(t,{g7:function(){return s}});var n=r(2265),o=r(8575),i=r(7437),s=n.forwardRef((e,t)=>{let{children:r,...o}=e,s=n.Children.toArray(r),l=s.find(c);if(l){let e=l.props.children,r=s.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(a,{...o,ref:t,children:r})});s.displayName="Slot";var a=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e,s;let a=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref,l=function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props);return r.type!==n.Fragment&&(l.ref=t?(0,o.F)(t,a):a),n.cloneElement(r,l)}return n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===l}},5922:function(e,t,r){"use strict";r.d(t,{F:function(){return u},f:function(){return d}});var n=r(2265),o=(e,t,r,n,o,i,s,a)=>{let l=document.documentElement,c=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&i?o.map(e=>i[e]||e):o;r?(l.classList.remove(...n),l.classList.add(t)):l.setAttribute(e,t)}),a&&c.includes(t)&&(l.style.colorScheme=t)}if(n)u(n);else try{let e=localStorage.getItem(t)||r,n=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(n)}catch(e){}},i=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,l=n.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=n.useContext(l))?e:c},d=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(f,{...e}),m=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:a=!0,storageKey:c="theme",themes:u=m,defaultTheme:d=o?"system":"light",attribute:f="data-theme",value:v,children:b,nonce:k,scriptProps:w}=e,[x,j]=n.useState(()=>p(c,d)),[C,E]=n.useState(()=>p(c)),S=v?Object.values(v):u,_=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=y());let n=v?v[t]:t,s=r?g(k):null,l=document.documentElement,c=e=>{"class"===e?(l.classList.remove(...S),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(f)?f.forEach(c):c(f),a){let e=i.includes(d)?d:null,r=i.includes(t)?t:e;l.style.colorScheme=r}null==s||s()},[k]),N=n.useCallback(e=>{let t="function"==typeof e?e(x):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[x]),P=n.useCallback(e=>{E(y(e)),"system"===x&&o&&!t&&_("system")},[x,t]);n.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?j(e.newValue):N(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),n.useEffect(()=>{_(null!=t?t:x)},[t,x]);let L=n.useMemo(()=>({theme:x,setTheme:N,forcedTheme:t,resolvedTheme:"system"===x?C:x,themes:o?[...u,"system"]:u,systemTheme:o?C:void 0}),[x,N,t,C,o,u]);return n.createElement(l.Provider,{value:L},n.createElement(h,{forcedTheme:t,storageKey:c,attribute:f,enableSystem:o,enableColorScheme:a,defaultTheme:d,value:v,themes:u,nonce:k,scriptProps:w}),b)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:i,enableSystem:s,enableColorScheme:a,defaultTheme:l,value:c,themes:u,nonce:d,scriptProps:m}=e,f=JSON.stringify([i,r,l,t,u,c,s,a]).slice(1,-1);return n.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(f,")")}})}),p=(e,t)=>{let r;if(!a){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}},function(e){e.O(0,[587,916,851,648,971,117,744],function(){return e(e.s=4782)}),_N_E=e.O()}]);