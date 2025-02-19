(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{8051:function(e,t,r){Promise.resolve().then(r.bind(r,3124)),Promise.resolve().then(r.bind(r,1523)),Promise.resolve().then(r.bind(r,49))},4491:function(e,t,r){"use strict";r.d(t,{LanguageProvider:function(){return a},Z:function(){return c}});var n=r(7437),s=r(2265);let l={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},o=s.createContext(void 0);function a(e){let{children:t}=e,[r,a]=s.useState("ko");s.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&a(e)},[]);let c=s.useCallback(e=>{a(e),localStorage.setItem("preferredLanguage",e)},[]),i=s.useCallback(e=>{let t=function(e,t){let r=e;for(let e of t){if(!r||"string"==typeof r)return;r=r[e]}return r}(l[r],e.split("."));return"string"==typeof t?t:e},[r]);return(0,n.jsx)(o.Provider,{value:{language:r,setLanguage:c,t:i},children:t})}function c(){let e=s.useContext(o);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},3124:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(7437),s=r(2265),l=r(4491),o=r(9376),a=r(2451),c=r(2852),i=r(8691),u=r(4508);let d={h1:e=>{let{className:t,...r}=e;return(0,n.jsx)("h1",{className:(0,u.cn)("mt-8 mb-4 text-4xl font-bold tracking-tight",t),...r})},h2:e=>{let{className:t,...r}=e;return(0,n.jsx)("h2",{className:(0,u.cn)("mt-8 mb-4 text-3xl font-bold tracking-tight",t),...r})},h3:e=>{let{className:t,...r}=e;return(0,n.jsx)("h3",{className:(0,u.cn)("mt-8 mb-4 text-2xl font-bold tracking-tight",t),...r})},h4:e=>{let{className:t,...r}=e;return(0,n.jsx)("h4",{className:(0,u.cn)("mt-8 mb-4 text-xl font-bold tracking-tight",t),...r})},p:e=>{let{className:t,...r}=e;return(0,n.jsx)("p",{className:(0,u.cn)("leading-7 [&:not(:first-child)]:mt-6",t),...r})},ul:e=>{let{className:t,...r}=e;return(0,n.jsx)("ul",{className:(0,u.cn)("my-6 ml-6 list-disc",t),...r})},ol:e=>{let{className:t,...r}=e;return(0,n.jsx)("ol",{className:(0,u.cn)("my-6 ml-6 list-decimal",t),...r})},li:e=>{let{className:t,...r}=e;return(0,n.jsx)("li",{className:(0,u.cn)("mt-2",t),...r})},blockquote:e=>{let{className:t,...r}=e;return(0,n.jsx)("blockquote",{className:(0,u.cn)("mt-6 border-l-2 pl-6 italic",t),...r})},img:e=>{let{className:t,alt:r,...s}=e;return(0,n.jsx)("img",{className:(0,u.cn)("rounded-md border",t),alt:r,...s})},hr:e=>{let{...t}=e;return(0,n.jsx)("hr",{className:"my-4 md:my-8",...t})},table:e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:"my-6 w-full overflow-y-auto",children:(0,n.jsx)("table",{className:(0,u.cn)("w-full",t),...r})})},tr:e=>{let{className:t,...r}=e;return(0,n.jsx)("tr",{className:(0,u.cn)("m-0 border-t p-0 even:bg-muted",t),...r})},th:e=>{let{className:t,...r}=e;return(0,n.jsx)("th",{className:(0,u.cn)("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",t),...r})},td:e=>{let{className:t,...r}=e;return(0,n.jsx)("td",{className:(0,u.cn)("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",t),...r})},pre:e=>{let{className:t,...r}=e;return(0,n.jsx)("pre",{className:(0,u.cn)("mb-4 mt-6 overflow-x-auto rounded-lg py-4",t),...r})},code:e=>{let{className:t,...r}=e;return(0,n.jsx)("code",{className:(0,u.cn)("relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",t),...r})}};var m=r(5974),x=r(4925),f=r(2578),g=r(1598);function b(e){var t;let{post:r}=e,{language:u}=(0,l.Z)(),b=(0,o.useRouter)(),[h,p]=(0,s.useState)();return(0,s.useEffect)(()=>{let e=document.referrer;e&&e.includes("/blog")&&p(e)},[]),(0,n.jsxs)("article",{className:"max-w-4xl mx-auto p-4 md:p-8 space-y-8",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("button",{onClick:function(){h?b.back():b.push("/blog")},className:"bg-transparent border-none",children:(0,n.jsx)(a.Z,{className:"h-5 w-5"})}),(0,n.jsx)(m.C,{variant:"outline",children:r.category[u]})]}),(0,n.jsx)("h1",{className:"text-4xl font-bold",children:r.title[u]}),(0,n.jsx)("time",{className:"block text-sm text-muted-foreground",children:(t=r.date,(0,x.WU)(new Date(t),"PPP",{locale:"ko"===u?f.ko:g._}))}),(0,n.jsx)("div",{className:"prose dark:prose-invert max-w-none",children:(0,n.jsx)(c.U,{remarkPlugins:[i.Z],components:d,children:r.content})})]})}},5974:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var n=r(7437);r(2265);var s=r(535),l=r(4508);let o=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function a(e){let{className:t,variant:r,...s}=e;return(0,n.jsx)("div",{className:(0,l.cn)(o({variant:r}),t),...s})}},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(1994),s=r(3335);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[851,636,614,971,117,744],function(){return e(e.s=8051)}),_N_E=e.O()}]);