(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{2732:function(e,t,a){Promise.resolve().then(a.bind(a,1613))},1613:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var s=a(7437),r=a(2265),l=a(1594),n=a(4525),o=a(4508);let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",a),...r})})});i.displayName="Table";let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",a),...r})});d.displayName="TableHeader";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",a),...r})});c.displayName="TableBody",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...r})}).displayName="TableFooter";let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r})});u.displayName="TableRow";let m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...r})});m.displayName="TableHead";let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...r})});f.displayName="TableCell",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",a),...r})}).displayName="TableCaption";var x=a(2869);let g=r.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});g.displayName="Input";var p=a(6362),h=a(5224),b=a(2451),v=a(407),N=a(2264),j=a(5974),y=a(7648),w=a(6110),k=a(2449);let C=k.fC,R=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(k.aV,{ref:t,className:(0,o.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...r})});R.displayName=k.aV.displayName;let z=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(k.xz,{ref:t,className:(0,o.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...r})});z.displayName=k.xz.displayName;let V=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(k.VY,{ref:t,className:(0,o.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...r})});V.displayName=k.VY.displayName;var P=a(4491),_=a(6760),S=a.n(_);function Z(e){let{isOpen:t,onClose:a,problem:r}=e,{language:l}=(0,P.Z)();return(0,s.jsx)(w.Vq,{open:t,onOpenChange:a,children:(0,s.jsxs)(w.cZ,{className:"max-w-4xl h-[90vh] flex flex-col",children:[(0,s.jsx)(w.fK,{children:(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)(w.$N,{children:[r.number,". ",r.name]}),(0,s.jsx)(j.C,{variant:"outline",className:S()("w-16 justify-center","Easy"===r.difficulty&&"border-green-500 text-green-500","Medium"===r.difficulty&&"border-yellow-500 text-yellow-500","Hard"===r.difficulty&&"border-red-500 text-red-500"),children:r.difficulty})]})}),(0,s.jsx)("div",{className:"flex-1 h-full overflow-y-auto pr-4",children:(0,s.jsxs)(C,{defaultValue:r.solutions[0].id,className:"w-full",children:[(0,s.jsx)(R,{className:"w-full justify-start",children:r.solutions.map((e,t)=>(0,s.jsx)(z,{value:e.id,children:"ko"===l?"풀이 ".concat(t+1):"Solution ".concat(t+1)},e.id))}),r.solutions.map(e=>(0,s.jsxs)(V,{value:e.id,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-medium",children:"ko"===l?"접근 방법":"Approach"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:e.approach})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-medium",children:"ko"===l?"시간 복잡도":"Time Complexity"}),(0,s.jsx)("p",{className:"font-mono text-sm",children:e.timeComplexity})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-medium",children:"ko"===l?"공간 복잡도":"Space Complexity"}),(0,s.jsx)("p",{className:"font-mono text-sm",children:e.spaceComplexity})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-medium",children:"ko"===l?"설명":"Explanation"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:e.explanation})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-medium",children:"ko"===l?"코드":"Code"}),(0,s.jsx)("pre",{className:"rounded-lg bg-muted p-4 overflow-x-auto",children:(0,s.jsx)("code",{className:"text-sm",children:e.code})})]})]},e.id))]})})]})})}function T(e){var t,a,w;let{data:k}=e,{language:C}=(0,P.Z)(),[R,z]=(0,r.useState)([]),[V,_]=(0,r.useState)([]),[S,T]=(0,r.useState)(null),K=[{accessorKey:"number",header:"ko"===C?"번호":"Number",cell:e=>{let{row:t}=e;return(0,s.jsx)("div",{className:"w-16",children:t.getValue("number")})}},{accessorKey:"name",header:"ko"===C?"문제":"Problem"},{accessorKey:"difficulty",header:"ko"===C?"난이도":"Difficulty",cell:e=>{let{row:t}=e,a=t.getValue("difficulty");return(0,s.jsx)(j.C,{variant:"outline",className:(0,o.cn)("w-16 justify-center","Easy"===a&&"border-green-500 text-green-500","Medium"===a&&"border-yellow-500 text-yellow-500","Hard"===a&&"border-red-500 text-red-500"),children:a})}},{accessorKey:"tags",header:"ko"===C?"태그":"Tags",cell:e=>{let{row:t}=e,a=t.getValue("tags");return(0,s.jsx)("div",{className:"flex flex-wrap gap-1",children:a.map(e=>(0,s.jsx)(j.C,{variant:"secondary",className:"text-xs",children:e},e))})}},{accessorKey:"approach",header:"ko"===C?"접근 방법":"Approach"},{accessorKey:"date",header:"ko"===C?"날짜":"Solved at"},{accessorKey:"url",header:"LeetCode",cell:e=>{let{row:t}=e,a=t.getValue("url");return(0,s.jsx)(y.default,{href:a,target:"_blank",onClick:e=>e.stopPropagation(),className:"inline-flex items-center hover:text-primary",children:(0,s.jsx)(p.Z,{className:"h-4 w-4"})})}}],M=(0,l.b7)({data:k,columns:K,getCoreRowModel:(0,n.sC)(),onSortingChange:z,getSortedRowModel:(0,n.tj)(),onColumnFiltersChange:_,getFilteredRowModel:(0,n.vL)(),getPaginationRowModel:(0,n.G_)(),state:{sorting:R,columnFilters:V}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex items-center py-4",children:(0,s.jsx)(g,{placeholder:"ko"===C?"문제 이름으로 검색...":"Search by problem name...",value:null!==(w=null===(t=M.getColumn("name"))||void 0===t?void 0:t.getFilterValue())&&void 0!==w?w:"",onChange:e=>{var t;return null===(t=M.getColumn("name"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"})}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(i,{children:[(0,s.jsx)(d,{children:M.getHeaderGroups().map(e=>(0,s.jsx)(u,{children:e.headers.map(e=>(0,s.jsx)(m,{children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(c,{children:(null===(a=M.getRowModel().rows)||void 0===a?void 0:a.length)?M.getRowModel().rows.map(e=>(0,s.jsx)(u,{"data-state":e.getIsSelected()&&"selected",className:"cursor-pointer hover:bg-muted/50",onClick:()=>T(e.original),children:e.getVisibleCells().map(e=>(0,s.jsx)(f,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(u,{children:(0,s.jsx)(f,{colSpan:K.length,className:"h-24 text-center",children:"ko"===C?"결과가 없습니다.":"No results."})})})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-end space-x-2 py-4",children:[(0,s.jsx)(x.z,{variant:"outline",size:"sm",onClick:()=>M.setPageIndex(0),disabled:!M.getCanPreviousPage(),children:(0,s.jsx)(h.Z,{className:"h-4 w-4"})}),(0,s.jsx)(x.z,{variant:"outline",size:"sm",onClick:()=>M.previousPage(),disabled:!M.getCanPreviousPage(),children:(0,s.jsx)(b.Z,{className:"h-4 w-4"})}),(0,s.jsx)(x.z,{variant:"outline",size:"sm",onClick:()=>M.nextPage(),disabled:!M.getCanNextPage(),children:(0,s.jsx)(v.Z,{className:"h-4 w-4"})}),(0,s.jsx)(x.z,{variant:"outline",size:"sm",onClick:()=>M.setPageIndex(M.getPageCount()-1),disabled:!M.getCanNextPage(),children:(0,s.jsx)(N.Z,{className:"h-4 w-4"})})]}),S&&(0,s.jsx)(Z,{isOpen:!!S,onClose:()=>T(null),problem:S})]})}var K=a(8169);function M(){let{language:e}=(0,P.Z)();return(0,s.jsx)("div",{className:"min-h-screen flex",children:(0,s.jsx)("main",{className:"flex-1 p-4 md:p-8 lg:p-12",children:(0,s.jsxs)("div",{className:"max-w-4xl mx-auto space-y-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"ko"===e?"알고리즘 문제":"Algorithm Problems"}),(0,s.jsx)(T,{data:K.o})]})})})}},2869:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(7437),r=a(2265),l=a(7495),n=a(535),o=a(4508);let i=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(i({variant:r,size:n,className:a})),ref:t,...c})});d.displayName="Button"},6110:function(e,t,a){"use strict";a.d(t,{$N:function(){return f},Be:function(){return x},Vq:function(){return i},cZ:function(){return u},fK:function(){return m}});var s=a(7437),r=a(2265),l=a(2841),n=a(2489),o=a(4508);let i=l.fC;l.xz;let d=l.h_;l.x8;let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});c.displayName=l.aV.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{}),(0,s.jsxs)(l.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...i,children:[r,(0,s.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(n.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=l.VY.displayName;let m=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};m.displayName="DialogHeader";let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});f.displayName=l.Dx.displayName;let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})});x.displayName=l.dk.displayName}},function(e){e.O(0,[851,648,696,762,209,971,117,744],function(){return e(e.s=2732)}),_N_E=e.O()}]);