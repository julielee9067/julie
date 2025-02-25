(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{4829:function(e,t,r){Promise.resolve().then(r.bind(r,6979))},6979:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),n=r(2265),i=r(6070),s=r(9205);let l=(0,s.Z)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),o=(0,s.Z)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);var c=r(4491);function d(){let[e]=(0,n.useState)([{id:1,title:"CAP Theorem"},{id:2,title:"Database Indexing"},{id:3,title:"SQL vs. NoSQL"},{id:4,title:"Time series DB"},{id:5,title:"Hierarchical Clustering"},{id:6,title:"Design Search System"},{id:7,title:"Design SNS Feed System"},{id:8,title:"Event Sourcing"},{id:9,title:"K8S Autoscaling: Keda"},{id:10,title:"Language Comparison: Python vs. Go"},{id:11,title:"Python Frameworks: Django, Flask, and FastAPI"},{id:12,title:"How to Handle Throttling in Data Pipeline"}]),{language:t}=(0,c.Z)();return(0,a.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black py-12 px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400",children:"ko"===t?"TO-DO 리스트":"TO-DO List"}),(0,a.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,a.jsx)(i.Zb,{className:"transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer",children:(0,a.jsxs)("div",{className:"p-4 flex items-center gap-4",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(l,{className:"w-6 h-6 text-gray-300 hover:text-primary transition-colors"})}),(0,a.jsx)("div",{className:"flex-grow",children:(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-800 dark:text-gray-200",children:e.title})})]})},e.id))}),(0,a.jsx)("div",{className:"mt-12 text-center animate-pulse",children:(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 text-gray-500 dark:text-gray-400",children:[(0,a.jsx)(o,{className:"w-5 h-5"}),(0,a.jsx)("span",{className:"text-sm font-medium italic",children:"ko"===t?"곧 새로운 포스트를 올릴 예정입니다 :)":"More posts coming soon..."}),(0,a.jsx)(o,{className:"w-5 h-5"})]})})]})})}},4491:function(e,t,r){"use strict";r.d(t,{LanguageProvider:function(){return l},Z:function(){return o}});var a=r(7437),n=r(2265);let i={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},s=n.createContext(void 0);function l(e){let{children:t}=e,[r,l]=n.useState("ko");n.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&l(e)},[]);let o=n.useCallback(e=>{l(e),localStorage.setItem("preferredLanguage",e)},[]),c=n.useCallback(e=>{let t=function(e,t){let r=e;for(let e of t){if(!r||"string"==typeof r)return;r=r[e]}return r}(i[r],e.split("."));return"string"==typeof t?t:e},[r]);return(0,a.jsx)(s.Provider,{value:{language:r,setLanguage:o,t:c},children:t})}function o(){let e=n.useContext(s);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},6070:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},Zb:function(){return s},aY:function(){return c},eW:function(){return d},ll:function(){return o}});var a=r(7437),n=r(2265),i=r(4508);let s=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});s.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...n})}).displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...n})});d.displayName="CardFooter"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var a=r(1994),n=r(3335);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:u,...m}=e;return(0,a.createElement)("svg",{ref:t,...s,width:n,height:n,stroke:r,strokeWidth:o?24*Number(l)/Number(n):l,className:i("lucide",c),...m},[...u.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let r=(0,a.forwardRef)((r,s)=>{let{className:o,...c}=r;return(0,a.createElement)(l,{ref:s,iconNode:t,className:i("lucide-".concat(n(e)),o),...c})});return r.displayName="".concat(e),r}}},function(e){e.O(0,[137,971,117,744],function(){return e(e.s=4829)}),_N_E=e.O()}]);