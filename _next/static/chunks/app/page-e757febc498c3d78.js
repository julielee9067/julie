(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3945:function(e,s,t){Promise.resolve().then(t.bind(t,5300))},5300:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return R}});var a=t(7437),n=t(2869),r=t(5974),i=t(5135),o=t(9345),l=t(4491),c=t(7648),d=t(3145),m=t(2265),p=t(6070),u=t(6110),g=t(2451),x=t(407);function f(e){let{images:s,currentImageIndex:t,onNext:r,onPrevious:i,title:o}=e;return(0,a.jsxs)("div",{className:"relative w-full aspect-video overflow-hidden rounded-lg bg-muted",children:[(0,a.jsx)(d.default,{src:s[t]||"".concat("/julie","/assets/placeholder.svg"),alt:"".concat(o," - Image ").concat(t+1),fill:!0,className:"object-contain"}),s.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.z,{variant:"outline",size:"icon",className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:i,children:(0,a.jsx)(g.Z,{className:"h-4 w-4"})}),(0,a.jsx)(n.z,{variant:"outline",size:"icon",className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:r,children:(0,a.jsx)(x.Z,{className:"h-4 w-4"})}),(0,a.jsxs)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[t+1," / ",s.length]})]})]})}function h(e){let{details:s,language:t}=e;return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"프로젝트 기간":"Timeline"}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:[s.timeline.start[t]," - ",s.timeline.end[t]]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"사용 기술":"Technologies"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:s.stacks.map(e=>(0,a.jsx)(r.C,{variant:"secondary",children:e},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"상세 내용":"Details"}),(0,a.jsx)("ul",{className:"list-disc list-inside space-y-2 text-sm text-muted-foreground",children:s.details[t].map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})]})}function j(e){let{isOpen:s,onClose:t,project:n}=e,{language:r}=(0,l.Z)(),[i,o]=(0,m.useState)(0);return(0,a.jsx)(u.Vq,{open:s,onOpenChange:t,children:(0,a.jsxs)(u.cZ,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[(0,a.jsxs)(u.fK,{children:[(0,a.jsx)(u.$N,{className:"text-2xl ml-4",children:n.title}),(0,a.jsx)(u.Be,{className:"text-base ml-4",children:n.description[r]})]}),(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[n.images&&n.images.length>0&&(0,a.jsx)(f,{images:n.images,currentImageIndex:i,onNext:()=>{if(!n.images||0===n.images.length)return;let e=n.images;o(s=>(s+1)%e.length)},onPrevious:()=>{if(!n.images||0===n.images.length)return;let e=n.images;o(s=>(s-1+e.length)%e.length)},title:n.title}),(0,a.jsx)(h,{details:{timeline:n.timeline,stacks:n.stacks,details:n.details},language:r})]})]})})}let v="/julie",b=[{title:"Togather",description:{ko:"북미 대학생을 위한 익명 커뮤니티 어플리케이션",en:"Anonymous community application for North American college students"},images:["".concat(v,"/assets/togather-5.png"),"".concat(v,"/assets/togather-1.png"),"".concat(v,"/assets/togather-2.png"),"".concat(v,"/assets/togather-3.png"),"".concat(v,"/assets/togather-4.png")],timeline:{start:{ko:"2024년 1월",en:"January 2024"},end:{ko:"진행중",en:"Present"}},stacks:["Go","Gin","PostgreSQL","AWS S3","Redis","Next.js","Docker"],details:{ko:["백엔드 API, 서비스 및 전체 프로젝트 총괄","데이터베이스 스키마 개발","이메일 인증 파이프라인 구축"],en:["Led backend development and overall project management","Developed database schema","Built email verification pipeline"]}}];function N(e){let{language:s,t}=e,[o,l]=(0,m.useState)(null);return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.projects")}),(0,a.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:b.map(e=>(0,a.jsxs)(p.Zb,{className:"overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]",onClick:()=>l(e),children:[(0,a.jsx)("div",{className:"relative aspect-video",children:(0,a.jsx)(d.default,{src:e.images&&e.images.length>0?e.images[0]:"".concat(v,"/assets/placeholder.svg"),alt:e.title,fill:!0,className:"object-cover"})}),(0,a.jsx)(p.Ol,{children:(0,a.jsx)(p.ll,{children:e.title})}),(0,a.jsxs)(p.aY,{children:[(0,a.jsx)("p",{className:"text-muted-foreground mb-4",children:e.description[s]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:e.stacks.map(e=>(0,a.jsx)(r.C,{variant:"outline",className:"text-xs",children:e},e))})]}),(0,a.jsx)(p.eW,{className:"gap-4",children:e.github&&(0,a.jsx)(c.default,{href:e.github,target:"_blank",onClick:e=>e.stopPropagation(),children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),t("buttons.source")]})})})]},e.title))}),o&&(0,a.jsx)(j,{isOpen:!!o,onClose:()=>l(null),project:o})]})}let k=[{company:"Tealbook",position:{ko:"소프트웨어 엔지니어",en:"Software Engineer"},period:{ko:"2022.04 - 현재",en:"Apr 2022 - Present"},stacks:["Python","Flask","FastAPI","GCP","MongoDB","PostgreSQL","RabbitMQ","InfluxDB","Elasticsearch","Redis","Docker"],projects:[{name:{ko:"데이터 프로세싱 및 서비스 관리",en:"Data Processing / Backend Service Management"},period:{ko:"2023.12 - 현재",en:"Dec 2023 - Present"},description:{ko:["여러 데이터 소스에서 오는 >3억개의 데이터 프로세싱 및 저장, 관리","TNV (transformation, normalization, validation) 프로세스를 각 데이터 소스에 맞게 정의 및 시스템에 통합"],en:["Processed and managed >300M data points from various sources","Defined and integrated TNV process tailored to each data source"]}},{name:{ko:"데이터 파이프라인 재설계",en:"Data Pipeline Redesign"},period:{ko:"2022.12 - 2023.12",en:"Dec 2022 - Dec 2023"},description:{ko:["기존 플랫폼을 브로커 패턴을 사용한 새로운 아키텍처(MSA)로 이전","데이터 크롤링, 변환 및 정규화, 신뢰도 계산, 데이터베이스 저장, 휴먼 인 더 루프를 포함한 서비스 도메인 구현","Keda, InfluxDB, Telegraf, Grafana, Elasticsearch 로그를 활용해 메시지 큐 병목 현상 방지 및 감지 클라이언트 개발","기존 데이터를 파이프라인에 재투입하는 master data 스케쥴링 시스템 설계 및 구현"],en:["Migrated the existing platform to a new MSA architecture using RabbitMQ message broker","Implemented services for data crawling, transformation, normalization, confidence calculation, database storage, and human-in-the-loop","Developed a detection client to prevent message queue bottlenecks using Keda, InfluxDB, Telegraf, Grafana, and Elasticsearch logs","Designed and implemented a master data scheduling system to reintroduce legacy data into the pipeline"]}},{name:{ko:"웹 어플리케이션 API 개발",en:"Web Application API Development"},period:{ko:"2022.04 - 2022.11",en:"Apr 2022 - Nov 2022"},description:{ko:["비즈니스의 공급자 다변성( Supplier diversity) 분석 및 새로운 공급자 추천을 도와주는 B2B 솔루션 백엔드 구현","Flask, FastAPI 기반 REST API 개발 및 유지보수, 관계형 데이터베이스 테이블 설계"],en:["Implemented the backend for a B2B solution to analyze supplier diversity and recommend new suppliers","Developed and maintained REST APIs using Flask and FastAPI, and designed relational database schemas"]}}]},{company:"AllUser.NET",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},stacks:["Python","Django","BeautifulSoup","PostgreSQL"],projects:[{name:{ko:"데이터 크롤링 시스템 구축",en:"Data Crawling System Development"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},description:{ko:["25개 이상의 웹사이트에서 주어진 키워드로 데이터 크롤링 시스템 구축","수집된 데이터를 머신러닝 모델 입력용으로 변환, 정규화 및 검증"],en:["Built a data crawling system for over 25 websites to measure and optimize business advertising effectiveness","Transformed, normalized, and validated collected data for machine learning model input"]}}]},{company:"Nokia",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},stacks:["ReactJS","Django"],projects:[{name:{ko:"버전 충돌 해결 플랫폼 개발",en:"Platform Development for Version Conflict Resolution"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},description:{ko:["인터널 서비스 간의 버전 충돌을 해결하기 위한 플랫폼 개발","각 서비스의 버전 호환 기능 구현"],en:["Developed a platform to resolve version conflicts among internal services","Implemented functionality to store and retrieve services compatible with various versions"]}}]},{company:"POZALabs",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},stacks:["Python"],projects:[{name:{ko:"음원 분석 알고리즘 개발",en:"Audio Analysis Algorithm Development"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},description:{ko:["음원 간 불협화음 감지 및 코드 진행 유사도 분석 알고리즘 개발"],en:["Developed an algorithm for detecting dissonance between audio tracks and analyzing chord progression similarity"]}}]},{company:"Intellisoft development inc",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},stacks:["AWS Lex","AWS Lambda","Apache Groovy","Grails Framework","AWS RDS","PostgreSQL"],projects:[{name:{ko:"챗봇 및 커뮤니티 웹사이트 개발",en:"Chatbot and Community Website Development"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},description:{ko:["George Brown College 웹사이트에서 연간 3000명 이상의 국제학생 지원을 위한 AWS Lex/Lambda 기반 챗봇 개발 및 배포","Groovy/Grails 기반 학부생 및 대학원생용 논문 게시 및 커뮤니티 웹사이트 개발"],en:["Developed and deployed an AWS Lex/Lambda-based chatbot to assist over 3000 international students annually on George Brown College's website","Built a research paper posting and community website for undergraduate and graduate students using Groovy/Grails"]}}]},{company:"Blackberry",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},stacks:["Java"],projects:[{name:{ko:"기업용 스마트 스피커 프로토타입 개발",en:"Enterprise Smart Speaker Prototype Development"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},description:{ko:["기업용 스마트 스피커 프로토타입 개발"],en:["Developed a prototype for an enterprise smart speaker"]}}]}];function y(e){let{language:s,t}=e;return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.experience")}),(0,a.jsx)("div",{className:"space-y-6",children:k.map(e=>(0,a.jsx)(w,{company:e.company,position:e.position[s],period:e.period[s],stacks:e.stacks,projects:e.projects,language:s},e.company))})]})}function w(e){let{company:s,position:t,period:n,stacks:r,projects:i,language:o}=e;return(0,a.jsxs)("div",{className:"relative pl-8 pb-8",children:[(0,a.jsx)("div",{className:"absolute left-0 top-0 h-full w-px bg-border",children:(0,a.jsx)("div",{className:"absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background"})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-lg",children:s}),(0,a.jsx)("p",{className:"text-muted-foreground",children:t}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-1",children:r.map((e,s)=>(0,a.jsx)("span",{className:"bg-gray-100 rounded px-2 py-1 text-xs text-gray-700",children:e},s))})]}),(0,a.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:n})]}),(0,a.jsx)("div",{className:"space-y-6",children:i.map(e=>(0,a.jsx)("div",{className:"relative pl-4 border-l border-border",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,a.jsx)("h4",{className:"font-medium",children:e.name[o]}),(0,a.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:e.period[o]})]}),(0,a.jsx)("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:e.description[o].map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})},e.name[o]))})]})]})}let D=[{school:{ko:"조지아 공과 대학교",en:"Georgia Institute of Technology"},degree:{ko:"컴퓨터 공학 석사",en:"M.S. in Computer Science"},period:{ko:"2024.09 - 현재",en:"Sept 2024 - Present"},gpa:"4.0/4.0"},{school:{ko:"워털루 대학교",en:"University of Waterloo"},degree:{ko:"메카트로닉스 공학 학사",en:"B.S. in Mechatronics Engineering"},period:{ko:"2017.09 - 2022.04",en:"Sep 2017 - Apr 2022"},gpa:"3.32/4.0"}];function A(e){let{language:s,t}=e;return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.education")}),(0,a.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:D.map(e=>(0,a.jsx)(p.Zb,{children:(0,a.jsx)(p.aY,{className:"pt-6",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h3",{className:"font-semibold text-lg",children:e.school[s]}),(0,a.jsx)("p",{className:"text-muted-foreground",children:e.degree[s]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:e.period[s]}),(0,a.jsxs)("span",{children:[t("gpa"),": ",e.gpa]})]})]})})},e.school[s]))})]})}var S=t(8643),P=t(4925),C=t(2578),z=t(1598);function I(e){let{language:s,t}=e,i=[...S.n].sort((e,s)=>new Date(s.date).getTime()-new Date(e.date).getTime()).slice(0,3);return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.blog")}),(0,a.jsx)(c.default,{href:"/blog",children:(0,a.jsx)(n.z,{variant:"outline",children:t("buttons.viewAll")})})]}),(0,a.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 md:grid-cols-3",children:i.map(e=>{var t;return(0,a.jsx)(c.default,{href:"/blog/".concat(e.slug),className:"transition-colors hover:bg-muted/50 p-3 rounded-md",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(r.C,{variant:"outline",children:e.category[s]}),(0,a.jsx)("h4",{className:"font-medium text-lg",children:e.title[s]}),(0,a.jsx)("time",{className:"block text-xs text-muted-foreground",children:(t=e.date,(0,P.WU)(new Date(t),"PPP",{locale:"ko"===s?C.ko:z._}))})]})},e.slug)})})]})}function R(){let{language:e,t:s}=(0,l.Z)();return(0,a.jsx)("main",{className:"min-h-screen",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-16",children:[(0,a.jsxs)("section",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold tracking-tight",children:["ko"===e?"이은지":"Julie Lee",(0,a.jsx)("span",{className:"block text-lg md:text-xl font-normal text-muted-foreground mt-2",children:s("role")})]}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-[600px]",children:"ko"===e?"데이터 프로세싱과 백엔드 시스템 개발에 전문성을 가진 소프트웨어 엔지니어입니다.":"A software engineer specialized in data processing and backend system development."}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(c.default,{href:"https://github.com/julielee9067",target:"_blank",children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),"GitHub"]})}),(0,a.jsx)(c.default,{href:"mailto:julielee9067@gmail.com",children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"Email"]})})]})]}),(0,a.jsx)("div",{className:"relative aspect-square md:aspect-video",children:(0,a.jsx)(d.default,{src:"".concat("/julie","/assets/user-photo.jpg"),alt:"Profile",fill:!0,className:"object-cover rounded-lg",priority:!0})})]}),(0,a.jsxs)("section",{className:"space-y-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:s("sections.skills")}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:["Python","MongoDB","PostgreSQL","Docker","Elasticsearch","RabbitMQ","AWS","GCP","Flask","Django","FastAPI"].map(e=>(0,a.jsx)(r.C,{variant:"secondary",className:"text-sm",children:e},e))})]}),(0,a.jsx)(y,{language:e,t:s}),(0,a.jsx)(N,{language:e,t:s}),(0,a.jsx)(A,{language:e,t:s}),(0,a.jsx)(I,{language:e,t:s})]})})}},2869:function(e,s,t){"use strict";t.d(s,{z:function(){return c}});var a=t(7437),n=t(2265),r=t(7495),i=t(535),o=t(4508);let l=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,s)=>{let{className:t,variant:n,size:i,asChild:c=!1,...d}=e,m=c?r.g7:"button";return(0,a.jsx)(m,{className:(0,o.cn)(l({variant:n,size:i,className:t})),ref:s,...d})});c.displayName="Button"},6070:function(e,s,t){"use strict";t.d(s,{Ol:function(){return o},Zb:function(){return i},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var a=t(7437),n=t(2265),r=t(4508);let i=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});i.displayName="Card";let o=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",t),...n})});o.displayName="CardHeader";let l=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});l.displayName="CardTitle",n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("text-sm text-muted-foreground",t),...n})}).displayName="CardDescription";let c=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let d=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:s,className:(0,r.cn)("flex items-center p-6 pt-0",t),...n})});d.displayName="CardFooter"},6110:function(e,s,t){"use strict";t.d(s,{$N:function(){return u},Be:function(){return g},Vq:function(){return l},cZ:function(){return m},fK:function(){return p}});var a=t(7437),n=t(2265),r=t(2841),i=t(2489),o=t(4508);let l=r.fC;r.xz;let c=r.h_;r.x8;let d=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(r.aV,{ref:s,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...n})});d.displayName=r.aV.displayName;let m=n.forwardRef((e,s)=>{let{className:t,children:n,...l}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{}),(0,a.jsxs)(r.VY,{ref:s,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...l,children:[n,(0,a.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName;let p=e=>{let{className:s,...t}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",s),...t})};p.displayName="DialogHeader";let u=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(r.Dx,{ref:s,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...n})});u.displayName=r.Dx.displayName;let g=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(r.dk,{ref:s,className:(0,o.cn)("text-sm text-muted-foreground",t),...n})});g.displayName=r.dk.displayName}},function(e){e.O(0,[851,648,636,696,445,69,971,117,744],function(){return e(e.s=3945)}),_N_E=e.O()}]);