(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{996:function(e,r,t){Promise.resolve().then(t.bind(t,3422))},4491:function(e,r,t){"use strict";t.d(r,{LanguageProvider:function(){return i},Z:function(){return l}});var n=t(7437),s=t(2265);let a={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},o=s.createContext(void 0);function i(e){let{children:r}=e,[t,i]=s.useState("ko");s.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&i(e)},[]);let l=s.useCallback(e=>{i(e),localStorage.setItem("preferredLanguage",e)},[]),c=s.useCallback(e=>{let r=function(e,r){let t=e;for(let e of r){if(!t||"string"==typeof t)return;t=t[e]}return t}(a[t],e.split("."));return"string"==typeof r?r:e},[t]);return(0,n.jsx)(o.Provider,{value:{language:t,setLanguage:l,t:c},children:r})}function l(){let e=s.useContext(o);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},4274:function(e,r,t){"use strict";t.d(r,{G:function(){return u}});var n=t(7437),s=t(6070),a=t(5974),o=t(4925),i=t(2578),l=t(1598),c=t(7648);function u(e){var r;let{post:t,language:u}=e;return(0,n.jsx)(c.default,{href:"/blog/".concat(t.slug),children:(0,n.jsxs)(s.Zb,{className:"transition hover:shadow-md hover:scale-[1.01]",children:[(0,n.jsxs)(s.Ol,{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(a.C,{variant:"outline",children:t.category[u]}),(0,n.jsx)("time",{className:"text-sm text-muted-foreground",children:(r=t.date,(0,o.WU)(new Date(r),"PPP",{locale:"ko"===u?i.ko:l._}))})]}),(0,n.jsx)(s.ll,{className:"mt-2 text-lg",children:t.title[u]})]}),(0,n.jsx)(s.aY,{children:(0,n.jsx)("p",{className:"text-muted-foreground",children:t.description[u]})})]})},t.slug)}},3422:function(e,r,t){"use strict";t.d(r,{default:function(){return o}});var n=t(7437);t(2265);var s=t(4491),a=t(4274);function o(e){let{category:r,filteredPosts:t}=e,{language:o}=(0,s.Z)();return(0,n.jsx)("div",{className:"min-h-screen flex",children:(0,n.jsx)("main",{className:"flex-1 p-4 md:p-8 lg:p-12",children:(0,n.jsxs)("div",{className:"max-w-4xl mx-auto space-y-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold",children:t[0].category[o]||r}),(0,n.jsx)("div",{className:"grid gap-6",children:t.map(e=>(0,n.jsx)(a.G,{post:e,language:o},e.slug))}),!t.length&&(0,n.jsx)("p",{className:"text-muted-foreground",children:"ko"===o?"이 카테고리에 대한 게시글이 없습니다.":"No posts in this category."})]})})})}},5974:function(e,r,t){"use strict";t.d(r,{C:function(){return i}});var n=t(7437);t(2265);var s=t(535),a=t(4508);let o=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:r,variant:t,...s}=e;return(0,n.jsx)("div",{className:(0,a.cn)(o({variant:t}),r),...s})}},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},Zb:function(){return o},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=t(7437),s=t(2265),a=t(4508);let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});o.displayName="Card";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});i.displayName="CardHeader";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});l.displayName="CardTitle",s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",t),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});u.displayName="CardFooter"},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(1994),s=t(3335);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}}},function(e){e.O(0,[851,648,636,971,117,744],function(){return e(e.s=996)}),_N_E=e.O()}]);