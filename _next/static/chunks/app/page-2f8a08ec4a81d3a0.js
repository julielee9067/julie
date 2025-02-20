(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3945:function(e,t,n){Promise.resolve().then(n.bind(n,5300))},5300:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var s=n(7437),a=n(2869),r=n(5974),i=n(5135),o=n(9345),l=n(4491),c=n(7648),d=n(3145),m=n(2265),u=n(6070),p=n(6110),g=n(2451),f=n(407);function x(e){let{images:t,currentImageIndex:n,onNext:r,onPrevious:i,title:o}=e;return(0,s.jsxs)("div",{className:"relative w-full aspect-video overflow-hidden rounded-lg bg-muted",children:[(0,s.jsx)(d.default,{src:t[n]||"".concat("/julie","/assets/placeholder.svg"),alt:"".concat(o," - Image ").concat(n+1),fill:!0,className:"object-contain"}),t.length>1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.z,{variant:"outline",size:"icon",className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:i,children:(0,s.jsx)(g.Z,{className:"h-4 w-4"})}),(0,s.jsx)(a.z,{variant:"outline",size:"icon",className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:r,children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})}),(0,s.jsxs)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[n+1," / ",t.length]})]})]})}function h(e){let{details:t,language:n}=e;return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium mb-2",children:"ko"===n?"프로젝트 기간":"Timeline"}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:[t.timeline.start[n]," - ",t.timeline.end[n]]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium mb-2",children:"ko"===n?"사용 기술":"Technologies"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:t.stacks.map(e=>(0,s.jsx)(r.C,{variant:"secondary",children:e},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-medium mb-2",children:"ko"===n?"상세 내용":"Details"}),(0,s.jsx)("ul",{className:"list-disc list-inside space-y-2 text-sm text-muted-foreground",children:t.details[n].map((e,t)=>(0,s.jsx)("li",{children:e},t))})]})]})}function v(e){let{isOpen:t,onClose:n,project:a}=e,{language:r}=(0,l.Z)(),[i,o]=(0,m.useState)(0);return(0,s.jsx)(p.Vq,{open:t,onOpenChange:n,children:(0,s.jsxs)(p.cZ,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[(0,s.jsxs)(p.fK,{children:[(0,s.jsx)(p.$N,{className:"text-2xl ml-4",children:a.title}),(0,s.jsx)(p.Be,{className:"text-base ml-4",children:a.description[r]})]}),(0,s.jsxs)("div",{className:"p-4 space-y-4",children:[a.images&&a.images.length>0&&(0,s.jsx)(x,{images:a.images,currentImageIndex:i,onNext:()=>{if(!a.images||0===a.images.length)return;let e=a.images;o(t=>(t+1)%e.length)},onPrevious:()=>{if(!a.images||0===a.images.length)return;let e=a.images;o(t=>(t-1+e.length)%e.length)},title:a.title}),(0,s.jsx)(h,{details:{timeline:a.timeline,stacks:a.stacks,details:a.details},language:r})]})]})})}let j="/julie",b=[{title:"Togather",description:{ko:"북미 대학생을 위한 익명 커뮤니티 어플리케이션",en:"Anonymous community application for North American college students"},images:["".concat(j,"/assets/togather-5.png"),"".concat(j,"/assets/togather-1.png"),"".concat(j,"/assets/togather-2.png"),"".concat(j,"/assets/togather-3.png"),"".concat(j,"/assets/togather-4.png")],timeline:{start:{ko:"2024년 1월",en:"January 2024"},end:{ko:"진행중",en:"Present"}},stacks:["Go","Gin","PostgreSQL","AWS S3","Redis","Next.js","Docker"],details:{ko:["백엔드 API, 서비스 및 전체 프로젝트 총괄","데이터베이스 스키마 개발","이메일 인증 파이프라인 구축"],en:["Led backend development and overall project management","Developed database schema","Built email verification pipeline"]}},{title:"ARAM.GG",description:{ko:"롤 칼바람 나락 게임의 유저 및 챔피언 평가",en:"Evaluation platform for users and champions in League of Legends ARAM game"},timeline:{start:{ko:"2020년 9월",en:"September 2020"},end:{ko:"2020년 12월",en:"December 2020"}},stacks:["Python","Django","PostgreSQL"],details:{ko:["백엔드 API 개발","Riot Games API와 연동","DB 스키마 설계"],en:["Developed backend API","Integrated with Riot Games API","Designed database schema"]},github:"https://github.com/hintful/aramgg",images:[]}];function k(e){let{language:t,t:n}=e,[o,l]=(0,m.useState)(null);return(0,s.jsxs)("section",{className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:n("sections.projects")}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:b.map(e=>(0,s.jsxs)(u.Zb,{className:"overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]",onClick:()=>l(e),children:[(0,s.jsx)("div",{className:"relative aspect-video",children:(0,s.jsx)(d.default,{src:e.images&&e.images.length>0?e.images[0]:"".concat(j,"/assets/placeholder.svg"),alt:e.title,fill:!0,className:"object-cover"})}),(0,s.jsx)(u.Ol,{children:(0,s.jsx)(u.ll,{children:e.title})}),(0,s.jsxs)(u.aY,{children:[(0,s.jsx)("p",{className:"text-muted-foreground mb-4",children:e.description[t]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:e.stacks.map(e=>(0,s.jsx)(r.C,{variant:"outline",className:"text-xs",children:e},e))})]}),(0,s.jsx)(u.eW,{className:"gap-4",children:e.github&&(0,s.jsx)(c.default,{href:e.github,target:"_blank",onClick:e=>e.stopPropagation(),children:(0,s.jsxs)(a.z,{variant:"outline",size:"sm",children:[(0,s.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),n("buttons.source")]})})})]},e.title))}),o&&(0,s.jsx)(v,{isOpen:!!o,onClose:()=>l(null),project:o})]})}let y=[{company:"Tealbook",position:{ko:"소프트웨어 엔지니어",en:"Software Engineer"},period:{ko:"2022.04 - 현재",en:"Apr 2022 - Present"},stacks:["Python","Flask","FastAPI","GCP","MongoDB","PostgreSQL","RabbitMQ","InfluxDB","Elasticsearch","Redis","Docker"],projects:[{name:{ko:"데이터 프로세싱 및 서비스 관리",en:"Data Processing / Backend Service Management"},period:{ko:"2023.12 - 현재",en:"Dec 2023 - Present"},description:{ko:["여러 데이터 소스에서 오는 >3억개의 데이터 프로세싱 및 저장, 관리","TNV (transformation, normalization, validation) 프로세스를 각 데이터 소스에 맞게 정의 및 시스템에 통합"],en:["Processed and managed >300M data points from various sources","Defined and integrated TNV process tailored to each data source"]}},{name:{ko:"데이터 파이프라인 재설계",en:"Data Pipeline Redesign"},period:{ko:"2022.12 - 2023.12",en:"Dec 2022 - Dec 2023"},description:{ko:["기존 플랫폼을 브로커 패턴을 사용한 새로운 아키텍처(MSA)로 이전","데이터 크롤링, 변환 및 정규화, 신뢰도 계산, 데이터베이스 저장, 휴먼 인 더 루프를 포함한 서비스 도메인 구현","Keda, InfluxDB, Telegraf, Grafana, Elasticsearch 로그를 활용해 메시지 큐 병목 현상 방지 및 감지 클라이언트 개발","기존 데이터를 파이프라인에 재투입하는 master data 스케쥴링 시스템 설계 및 구현"],en:["Migrated the existing platform to a new MSA architecture using RabbitMQ message broker","Implemented services for data crawling, transformation, normalization, confidence calculation, database storage, and human-in-the-loop","Developed a detection client to prevent message queue bottlenecks using Keda, InfluxDB, Telegraf, Grafana, and Elasticsearch logs","Designed and implemented a master data scheduling system to reintroduce legacy data into the pipeline"]}},{name:{ko:"웹 어플리케이션 API 개발",en:"Web Application API Development"},period:{ko:"2022.04 - 2022.11",en:"Apr 2022 - Nov 2022"},description:{ko:["비즈니스의 공급자 다변성( Supplier diversity) 분석 및 새로운 공급자 추천을 도와주는 B2B 솔루션 백엔드 구현","Flask, FastAPI 기반 REST API 개발 및 유지보수, 관계형 데이터베이스 테이블 설계"],en:["Implemented the backend for a B2B solution to analyze supplier diversity and recommend new suppliers","Developed and maintained REST APIs using Flask and FastAPI, and designed relational database schemas"]}}]},{company:"AllUser.NET",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},stacks:["Python","Django","BeautifulSoup","PostgreSQL"],projects:[{name:{ko:"데이터 크롤링 시스템 구축",en:"Data Crawling System Development"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},description:{ko:["25개 이상의 웹사이트에서 주어진 키워드로 데이터 크롤링 시스템 구축","수집된 데이터를 머신러닝 모델 입력용으로 변환, 정규화 및 검증"],en:["Built a data crawling system for over 25 websites to measure and optimize business advertising effectiveness","Transformed, normalized, and validated collected data for machine learning model input"]}}]},{company:"Nokia",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},stacks:["ReactJS","Django"],projects:[{name:{ko:"버전 충돌 해결 플랫폼 개발",en:"Platform Development for Version Conflict Resolution"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},description:{ko:["인터널 서비스 간의 버전 충돌을 해결하기 위한 플랫폼 개발","각 서비스의 버전 호환 기능 구현"],en:["Developed a platform to resolve version conflicts among internal services","Implemented functionality to store and retrieve services compatible with various versions"]}}]},{company:"POZALabs",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},stacks:["Python"],projects:[{name:{ko:"음원 분석 알고리즘 개발",en:"Audio Analysis Algorithm Development"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},description:{ko:["음원 간 불협화음 감지 및 코드 진행 유사도 분석 알고리즘 개발"],en:["Developed an algorithm for detecting dissonance between audio tracks and analyzing chord progression similarity"]}}]},{company:"Intellisoft development inc",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},stacks:["AWS Lex","AWS Lambda","Apache Groovy","Grails Framework","AWS RDS","PostgreSQL"],projects:[{name:{ko:"챗봇 및 커뮤니티 웹사이트 개발",en:"Chatbot and Community Website Development"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},description:{ko:["George Brown College 웹사이트에서 연간 3000명 이상의 국제학생 지원을 위한 AWS Lex/Lambda 기반 챗봇 개발 및 배포","Groovy/Grails 기반 학부생 및 대학원생용 논문 게시 및 커뮤니티 웹사이트 개발"],en:["Developed and deployed an AWS Lex/Lambda-based chatbot to assist over 3000 international students annually on George Brown College's website","Built a research paper posting and community website for undergraduate and graduate students using Groovy/Grails"]}}]},{company:"Blackberry",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},stacks:["Java"],projects:[{name:{ko:"기업용 스마트 스피커 프로토타입 개발",en:"Enterprise Smart Speaker Prototype Development"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},description:{ko:["기업용 스마트 스피커 프로토타입 개발"],en:["Developed a prototype for an enterprise smart speaker"]}}]}];function N(e){let{language:t,t:n}=e;return(0,s.jsxs)("section",{className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:n("sections.experience")}),(0,s.jsx)("div",{className:"space-y-6",children:y.map(e=>(0,s.jsx)(w,{company:e.company,position:e.position[t],period:e.period[t],stacks:e.stacks,projects:e.projects,language:t},e.company))})]})}function w(e){let{company:t,position:n,period:a,stacks:r,projects:i,language:o}=e;return(0,s.jsxs)("div",{className:"relative pl-8 pb-8",children:[(0,s.jsx)("div",{className:"absolute left-0 top-0 h-full w-px bg-border",children:(0,s.jsx)("div",{className:"absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background"})}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold text-lg",children:t}),(0,s.jsx)("p",{className:"text-muted-foreground",children:n}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mt-1",children:r.map((e,t)=>(0,s.jsx)("span",{className:"bg-gray-100 rounded px-2 py-1 text-xs text-gray-700",children:e},t))})]}),(0,s.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:a})]}),(0,s.jsx)("div",{className:"space-y-6",children:i.map(e=>(0,s.jsx)("div",{className:"relative pl-4 border-l border-border",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,s.jsx)("h4",{className:"font-medium",children:e.name[o]}),(0,s.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:e.period[o]})]}),(0,s.jsx)("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:e.description[o].map((e,t)=>(0,s.jsx)("li",{children:e},t))})]})},e.name[o]))})]})]})}let S=[{school:{ko:"조지아 공과 대학교",en:"Georgia Institute of Technology"},degree:{ko:"컴퓨터 공학 석사",en:"M.S. in Computer Science"},period:{ko:"2024.09 - 현재",en:"Sept 2024 - Present"},gpa:"4.0/4.0"},{school:{ko:"워털루 대학교",en:"University of Waterloo"},degree:{ko:"메카트로닉스 공학 학사",en:"B.S. in Mechatronics Engineering"},period:{ko:"2017.09 - 2022.04",en:"Sep 2017 - Apr 2022"},gpa:"3.32/4.0"}];function P(e){let{language:t,t:n}=e;return(0,s.jsxs)("section",{className:"space-y-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:n("sections.education")}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:S.map(e=>(0,s.jsx)(u.Zb,{children:(0,s.jsx)(u.aY,{className:"pt-6",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h3",{className:"font-semibold text-lg",children:e.school[t]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:e.degree[t]}),(0,s.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,s.jsx)("span",{className:"text-muted-foreground",children:e.period[t]}),(0,s.jsxs)("span",{children:[n("gpa"),": ",e.gpa]})]})]})})},e.school[t]))})]})}var A=n(9377),D=n(4925),C=n(2578),I=n(1598);function R(e){let{language:t,t:n}=e,i=[...A.n].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()).slice(0,3);return(0,s.jsxs)("section",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:n("sections.blog")}),(0,s.jsx)(c.default,{href:"/blog",children:(0,s.jsx)(a.z,{variant:"outline",children:n("buttons.viewAll")})})]}),(0,s.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 md:grid-cols-3",children:i.map(e=>{var n;return(0,s.jsx)(c.default,{href:"/blog/".concat(e.slug),className:"transition-colors hover:bg-muted/50 p-3 rounded-md",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(r.C,{variant:"outline",children:e.category[t]}),(0,s.jsx)("h4",{className:"font-medium text-lg",children:e.title[t]}),(0,s.jsx)("time",{className:"block text-xs text-muted-foreground",children:(n=e.date,(0,D.WU)(new Date(n),"PPP",{locale:"ko"===t?C.ko:I._}))})]})},e.slug)})})]})}function z(){let{language:e,t}=(0,l.Z)();return(0,s.jsx)("main",{className:"min-h-screen",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-16",children:[(0,s.jsxs)("section",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold tracking-tight",children:["ko"===e?"이은지":"Julie Lee",(0,s.jsx)("span",{className:"block text-lg md:text-xl font-normal text-muted-foreground mt-2",children:t("role")})]}),(0,s.jsx)("p",{className:"text-muted-foreground max-w-[600px]",children:"ko"===e?"데이터 프로세싱과 백엔드 시스템 개발에 전문성을 가진 소프트웨어 엔지니어입니다.":"A software engineer specialized in data processing and backend system development."}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(c.default,{href:"https://github.com/julielee9067",target:"_blank",children:(0,s.jsxs)(a.z,{variant:"outline",size:"sm",children:[(0,s.jsx)(i.Z,{className:"w-4 h-4 mr-2"}),"GitHub"]})}),(0,s.jsx)(c.default,{href:"mailto:julielee9067@gmail.com",children:(0,s.jsxs)(a.z,{variant:"outline",size:"sm",children:[(0,s.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"Email"]})})]})]}),(0,s.jsx)("div",{className:"relative aspect-square md:aspect-video",children:(0,s.jsx)(d.default,{src:"".concat("/julie","/assets/user-photo.jpg"),alt:"Profile",fill:!0,className:"object-cover rounded-lg",priority:!0})})]}),(0,s.jsxs)("section",{className:"space-y-4",children:[(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.skills")}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:["Python","MongoDB","PostgreSQL","Docker","Elasticsearch","RabbitMQ","AWS","GCP","Flask","Django","FastAPI"].map(e=>(0,s.jsx)(r.C,{variant:"secondary",className:"text-sm",children:e},e))})]}),(0,s.jsx)(N,{language:e,t:t}),(0,s.jsx)(k,{language:e,t:t}),(0,s.jsx)(P,{language:e,t:t}),(0,s.jsx)(R,{language:e,t:t})]})})}},4491:function(e,t,n){"use strict";n.d(t,{LanguageProvider:function(){return o},Z:function(){return l}});var s=n(7437),a=n(2265);let r={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},i=a.createContext(void 0);function o(e){let{children:t}=e,[n,o]=a.useState("ko");a.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&o(e)},[]);let l=a.useCallback(e=>{o(e),localStorage.setItem("preferredLanguage",e)},[]),c=a.useCallback(e=>{let t=function(e,t){let n=e;for(let e of t){if(!n||"string"==typeof n)return;n=n[e]}return n}(r[n],e.split("."));return"string"==typeof t?t:e},[n]);return(0,s.jsx)(i.Provider,{value:{language:n,setLanguage:l,t:c},children:t})}function l(){let e=a.useContext(i);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},5974:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var s=n(7437);n(2265);var a=n(535),r=n(4508);let i=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:n,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)(i({variant:n}),t),...a})}},2869:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var s=n(7437),a=n(2265),r=n(7495),i=n(535),o=n(4508);let l=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:n,variant:a,size:i,asChild:c=!1,...d}=e,m=c?r.g7:"button";return(0,s.jsx)(m,{className:(0,o.cn)(l({variant:a,size:i,className:n})),ref:t,...d})});c.displayName="Button"},6070:function(e,t,n){"use strict";n.d(t,{Ol:function(){return o},Zb:function(){return i},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var s=n(7437),a=n(2265),r=n(4508);let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",n),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});l.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",n),...a})}).displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",n),...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",n),...a})});d.displayName="CardFooter"},6110:function(e,t,n){"use strict";n.d(t,{$N:function(){return p},Be:function(){return g},Vq:function(){return l},cZ:function(){return m},fK:function(){return u}});var s=n(7437),a=n(2265),r=n(2841),i=n(2489),o=n(4508);let l=r.fC;r.xz;let c=r.h_;r.x8;let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})});d.displayName=r.aV.displayName;let m=a.forwardRef((e,t)=>{let{className:n,children:a,...l}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(d,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...l,children:[a,(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=r.VY.displayName;let u=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};u.displayName="DialogHeader";let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",n),...a})});p.displayName=r.Dx.displayName;let g=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",n),...a})});g.displayName=r.dk.displayName},9377:function(e,t,n){"use strict";n.d(t,{n:function(){return s},o:function(){return a}});let s=[{slug:"cs/process-thread",categorySlug:"cs",title:{ko:"프로세스와 스레드의 차이",en:"Process vs Thread"},date:"2024-02-19",category:{ko:"컴퓨터 공학",en:"Computer Science"},description:{ko:"프로세스와 스레드에 대한 차이점 및 개념 설명",en:"Differences between processes and threads."},content:'\n프로세스와 스레드는 운영체제에서 가장 기본적인 개념 중 하나입니다. 이 두 개념의 차이점을 자세히 알아보겠습니다.\n\n## 프로세스 (Process)\n\n프로세스는 실행 중인 프로그램의 인스턴스입니다. 각 프로세스는 다음과 같은 특징을 가집니다:\n\n- 독립된 메모리 공간 (Code, Data, Stack, Heap)\n- 운영체제로부터 할당받은 시스템 자원\n- 최소 1개의 스레드 (메인 스레드) 포함\n\n```c\n// 프로세스 생성 예제\n#include <unistd.h>\n\nint main() {\n    pid_t pid = fork();  // 새로운 프로세스 생성\n\n    if (pid == 0) {\n        // 자식 프로세스\n        printf("Child process\\n");\n    } else {\n        // 부모 프로세스\n        printf("Parent process\\n");\n    }\n    return 0;\n}\n```\n\n## 스레드 (Thread)\n\n스레드는 프로세스 내에서 실행되는 작업의 단위입니다:\n\n- 프로세스 내의 메모리 공간 공유\n- 독립적인 스택과 레지스터 보유\n- 빠른 컨텍스트 스위칭\n\n```java\n// 자바에서 스레드 생성 예제\npublic class ThreadExample extends Thread {\n    public void run() {\n        System.out.println("Thread is running");\n    }\n\n    public static void main(String[] args) {\n        ThreadExample thread = new ThreadExample();\n        thread.start();\n    }\n}\n```\n\n## 주요 차이점\n\n| 특징             | 프로세스  | 스레드       |\n|-----------------|---------|------------|\n| 메모리 공간       | 독립적    | 공유         |\n| 통신 비용        | 높음     | 낮음         |\n| 컨텍스트 스위칭    | 무거움    | 가벼움        |\n| 안정성           | 높음     | 상대적으로 낮음  |\n\n### 메모리 구조\n\n```plaintext\n프로세스 메모리 구조:\n+------------------+\n|       Stack      |  <- 각 스레드마다 독립적\n|        ↓         |\n|        ↑         |\n|       Heap       |  <- 공유\n|------------------|\n|       Data       |  <- 공유\n|------------------|\n|       Code       |  <- 공유\n+------------------+\n```\n\n## 실제 사용 사례\n\n1. **멀티 프로세스**\n   - 웹 브라우저의 탭\n   - 데이터베이스 서버\n   - 운영체제 서비스\n\n2. **멀티 스레드**\n   - 웹 서버의 요청 처리\n   - 게임의 렌더링과 물리 연산\n   - UI 응답성 유지\n  '},{slug:"system-design/random-file",categorySlug:"system-design",title:{ko:"프로세스와 스레드의 차이",en:"Process vs Thread"},date:"2024-02-19",category:{ko:"시스템 디자인",en:"System Design"},description:{ko:"렌더링 확인용 테스트 파일입니다",en:"Test file for system design."},content:"\n        렌더링 확인용 테스트 파일입니다\n  "}],a=[{number:1,name:"Two Sum",tags:["Array","Hash Table"],approach:"Use hash map to store complement values",difficulty:"Easy",url:"https://leetcode.com/problems/two-sum/",solutions:[{id:"brute-force",approach:"Brute Force",code:"def twoSum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n    return []",timeComplexity:"O(n\xb2)",spaceComplexity:"O(1)",explanation:{ko:"모든 가능한 쌍을 확인하는 방식으로, 이중 반복문을 사용합니다. 첫 번째 숫자와 두 번째 숫자의 합이 target과 같으면 해당 인덱스들을 반환합니다.",en:"Check all possible pairs using nested loops. Return the indices if the sum of two numbers equals the target."}},{id:"hash-map",approach:"Hash Map",code:"def twoSum(self, nums: List[int], target: int) -> List[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",timeComplexity:"O(n)",spaceComplexity:"O(n)",explanation:{ko:"해시맵을 사용하여 각 숫자의 보수(target - 현재 숫자)를 저장합니다. 현재 숫자의 보수가 이미 해시맵에 있다면, 현재 인덱스와 해시맵에 저장된 인덱스를 반환합니다.",en:"Use a hash map to store complements (target - current number). If the complement of the current number exists in the hash map, return the current index and the stored index."}}]}]},4508:function(e,t,n){"use strict";n.d(t,{cn:function(){return r}});var s=n(1994),a=n(3335);function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,s.W)(t))}}},function(e){e.O(0,[851,648,636,696,445,971,117,744],function(){return e(e.s=3945)}),_N_E=e.O()}]);