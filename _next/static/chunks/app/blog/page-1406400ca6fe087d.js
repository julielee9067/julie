(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{4973:function(e,t,n){Promise.resolve().then(n.bind(n,963))},963:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n(7437),a=n(4491),l=n(8563),c=n(4274);function r(){let{language:e}=(0,a.Z)(),t=[...l.n].map(e=>({...e,date:e.date.includes(":")?e.date:"".concat(e.date," 00:00")})).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());return(0,s.jsx)("div",{className:"min-h-screen flex",children:(0,s.jsx)("main",{className:"flex-1 p-4 md:p-8 lg:p-12",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto space-y-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"ko"===e?"블로그":"Blog"}),(0,s.jsx)("div",{className:"grid gap-6",children:t.map(t=>(0,s.jsx)(c.G,{post:t,language:e},t.slug))}),!t.length&&(0,s.jsx)("p",{className:"text-muted-foreground",children:"ko"===e?"이 카테고리에 대한 게시글이 없습니다.":"No posts in this category."})]})})})}},4274:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var s=n(7437),a=n(6070),l=n(5974),c=n(4925),r=n(2578),i=n(1598),d=n(7648);function o(e){let{post:t,language:n}=e;return(0,s.jsx)(d.default,{href:"/blog/".concat(t.slug),children:(0,s.jsxs)(a.Zb,{className:"transition hover:shadow-md hover:scale-[1.01]",children:[(0,s.jsxs)(a.Ol,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(l.C,{variant:"outline",children:t.category[n]}),(0,s.jsx)("time",{className:"text-sm text-muted-foreground",children:function(e){let t=new Date((e.includes(":")?e:"".concat(e," 00:00")).replace(" ","T"));return(0,c.WU)(new Date(t),"PP p",{locale:"ko"===n?r.ko:i._})}(t.date)})]}),(0,s.jsx)(a.ll,{className:"mt-2 text-lg",children:t.title[n]})]}),(0,s.jsx)(a.aY,{children:(0,s.jsx)("p",{className:"text-muted-foreground",children:t.description[n]})})]})},t.slug)}}},function(e){e.O(0,[137,648,269,112,971,117,744],function(){return e(e.s=4973)}),_N_E=e.O()}]);