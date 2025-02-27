(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3945:function(e,s,t){Promise.resolve().then(t.bind(t,5300))},5300:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return B}});var a=t(7437),n=t(2869),i=t(5974),r=t(5135),o=t(9345),l=t(4491),c=t(7648),d=t(3145),m=t(2265),p=t(6070),g=t(6110),u=t(2451),x=t(407);function h(e){let{images:s,currentImageIndex:t,onNext:i,onPrevious:r,title:o}=e;return(0,a.jsxs)("div",{className:"relative w-full aspect-video overflow-hidden rounded-lg bg-muted",children:[(0,a.jsx)(d.default,{src:s[t]||"".concat("/julie","/assets/placeholder.svg"),alt:"".concat(o," - Image ").concat(t+1),fill:!0,className:"object-contain"}),s.length>1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.z,{variant:"outline",size:"icon",className:"absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:r,children:(0,a.jsx)(u.Z,{className:"h-4 w-4"})}),(0,a.jsx)(n.z,{variant:"outline",size:"icon",className:"absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm",onClick:i,children:(0,a.jsx)(x.Z,{className:"h-4 w-4"})}),(0,a.jsxs)("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs",children:[t+1," / ",s.length]})]})]})}function f(e){let{details:s,language:t}=e;return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"프로젝트 기간":"Timeline"}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:[s.timeline.start[t]," - ",s.timeline.end[t]]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"사용 기술":"Technologies"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:s.stacks.map(e=>(0,a.jsx)(i.C,{variant:"secondary",children:e},e))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-medium mb-2",children:"ko"===t?"상세 내용":"Details"}),(0,a.jsx)("ul",{className:"list-disc list-inside space-y-2 text-sm text-muted-foreground",children:s.details[t].map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})]})}function j(e){let{isOpen:s,onClose:t,project:n}=e,{language:i}=(0,l.Z)(),[r,o]=(0,m.useState)(0);return(0,a.jsx)(g.Vq,{open:s,onOpenChange:t,children:(0,a.jsxs)(g.cZ,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[(0,a.jsxs)(g.fK,{children:[(0,a.jsx)(g.$N,{className:"text-2xl ml-4",children:n.title}),(0,a.jsx)(g.Be,{className:"text-base ml-4",children:n.description[i]})]}),(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[n.images&&n.images.length>0&&(0,a.jsx)(h,{images:n.images,currentImageIndex:r,onNext:()=>{if(!n.images||0===n.images.length)return;let e=n.images;o(s=>(s+1)%e.length)},onPrevious:()=>{if(!n.images||0===n.images.length)return;let e=n.images;o(s=>(s-1+e.length)%e.length)},title:n.title}),(0,a.jsx)(f,{details:{timeline:n.timeline,stacks:n.stacks,details:n.details},language:i})]})]})})}let b="/julie",v=[{title:"Togather",description:{ko:"북미 대학생을 위한 익명 커뮤니티 어플리케이션",en:"Anonymous community application for North American college students"},images:["".concat(b,"/assets/togather-5.png"),"".concat(b,"/assets/togather-1.png"),"".concat(b,"/assets/togather-2.png"),"".concat(b,"/assets/togather-3.png"),"".concat(b,"/assets/togather-4.png")],timeline:{start:{ko:"2024년 1월",en:"January 2024"},end:{ko:"진행중",en:"Present"}},stacks:["Go","Gin","PostgreSQL","AWS S3","Redis","Next.js","Docker"],details:{ko:["백엔드 API, 서비스 및 전체 프로젝트 총괄","데이터베이스 스키마 개발","이메일 인증 파이프라인 구축"],en:["Led backend development and overall project management","Developed database schema","Built email verification pipeline"]}}];function k(e){let{language:s,t}=e,[o,l]=(0,m.useState)(null);return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.projects")}),(0,a.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:v.map(e=>(0,a.jsxs)(p.Zb,{className:"overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]",onClick:()=>l(e),children:[(0,a.jsx)("div",{className:"relative aspect-video",children:(0,a.jsx)(d.default,{src:e.images&&e.images.length>0?e.images[0]:"".concat(b,"/assets/placeholder.svg"),alt:e.title,fill:!0,className:"object-cover"})}),(0,a.jsx)(p.Ol,{children:(0,a.jsx)(p.ll,{children:e.title})}),(0,a.jsxs)(p.aY,{children:[(0,a.jsx)("p",{className:"text-muted-foreground mb-4",children:e.description[s]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:e.stacks.map(e=>(0,a.jsx)(i.C,{variant:"outline",className:"text-xs",children:e},e))})]}),(0,a.jsx)(p.eW,{className:"gap-4",children:e.github&&(0,a.jsx)(c.default,{href:e.github,target:"_blank",onClick:e=>e.stopPropagation(),children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(r.Z,{className:"w-4 h-4 mr-2"}),t("buttons.source")]})})})]},e.title))}),o&&(0,a.jsx)(j,{isOpen:!!o,onClose:()=>l(null),project:o})]})}let y=[{company:"Tealbook",position:{ko:"소프트웨어 엔지니어",en:"Software Engineer"},period:{ko:"2022.04 - 현재",en:"Apr 2022 - Present"},stacks:["Python","Flask","FastAPI","GCP","MongoDB","PostgreSQL","RabbitMQ","InfluxDB","Elasticsearch","Redis","Docker"],projects:[{name:{ko:"데이터 프로세싱 및 서비스 관리",en:"Data Processing / Backend Service Management"},period:{ko:"2023.12 - 현재",en:"Dec 2023 - Present"},description:{ko:["다양한 데이터 소스에서 들어오는 데이터를 정제(TNV)하고 저장하는 시스템을 설계했습니다. 각 소스마다 데이터 구조가 달라 필드별 수정이 필요했으며, 이를 해결하기 위해 Config 기반의 데이터 변환 프로세스를 도입했습니다. 또한, 자동 수평 확장 기능을 적용하여 증가하는 데이터 처리량에도 유연하게 대응할 수 있도록 했습니다. 이를 통해 데이터 처리 속도가 향상되었으며, 장애율을 낮추는 데 기여했습니다."],en:["Processed and managed >300M data points from various sources","Defined and integrated TNV process tailored to each data source"]}},{name:{ko:"데이터 파이프라인 재설계",en:"Data Pipeline Redesign"},period:{ko:"2022.12 - 2023.12",en:"Dec 2022 - Dec 2023"},description:{ko:["기존 구조에서는 하나의 서비스가 너무 많은 기능을 담당하고 있어 유지보수가 어려웠지만, 서비스 도메인을 분리하고 독립적으로 운영할 수 있도록 개선했습니다. 특히, InfluxDB, Grafana, Telegraf를 활용한 모니터링 시스템을 구축하여 메시지 큐 병목 현상을 감지하고, 실시간으로 대응할 수 있도록 했습니다. 결과적으로 장애율이 감소하고, 데이터 처리 안정성이 대폭 향상되었습니다."],en:["Migrated the existing platform to a new MSA architecture using RabbitMQ message broker","Implemented services for data crawling, transformation, normalization, confidence calculation, database storage, and human-in-the-loop","Developed a detection client to prevent message queue bottlenecks using Keda, InfluxDB, Telegraf, Grafana, and Elasticsearch logs","Designed and implemented a master data scheduling system to reintroduce legacy data into the pipeline"]}},{name:{ko:"웹 어플리케이션 API 개발",en:"Web Application API Development"},period:{ko:"2022.04 - 2022.11",en:"Apr 2022 - Nov 2022"},description:{ko:["대용량 데이터를 다루는 B2B 솔루션의 백엔드 API를 개발하며, 데이터베이스 인덱싱 최적화 및 캐싱 전략을 적용해 성능을 개선했습니다."],en:["Implemented the backend for a B2B solution to analyze supplier diversity and recommend new suppliers","Developed and maintained REST APIs using Flask and FastAPI, and designed relational database schemas"]}}]},{company:"AllUser.NET",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},stacks:["Python","Django","BeautifulSoup","PostgreSQL"],projects:[{name:{ko:"데이터 크롤링 시스템 구축",en:"Data Crawling System Development"},period:{ko:"2021.05 - 2021.08",en:"May 2021 - Aug 2021"},description:{ko:["Beautiful Soup을 사용하여 웹 크롤러를 개발. 이를 통해 수집된 데이터를 분석하고, 최적화된 광고 솔루션을 제공하기 위한 기반을 마련","멀티프로세싱을 활용하여 대규모 데이터 처리 작업을 병렬로 수행, 데이터 수집 속도와 효율성 향상. 이를 통해 25개의 온라인 플랫폼에서 사용자 피드백 데이터를 빠르게 처리하여, 100개 이상의 기업에 솔루션을 제공","크롤링된 데이터를 정제하고 분석하기 위한 파이프라인을 설계, 데이터 품질을 높이고 분석의 정확성을 향상"],en:["Developed a web crawler using Beautiful Soup. Analyzed the collected data and established a foundation for providing optimized advertising solutions.","Leveraged multiprocessing to execute large-scale data processing tasks in parallel, enhancing data collection speed and efficiency. Processed user feedback data from 25 online platforms rapidly, delivering solutions to over 100 companies.","Designed a pipeline for cleansing and analyzing the crawled data, thereby enhancing data quality and improving analytical accuracy."]}}]},{company:"Nokia",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},stacks:["ReactJS","Django"],projects:[{name:{ko:"버전 충돌 해결 플랫폼 개발",en:"Platform Development for Version Conflict Resolution"},period:{ko:"2021.01 - 2021.04",en:"Jan 2021 - Apr 2021"},description:{ko:["Flask를 사용하여 버전 충돌 해결을 간소화하는 플랫폼을 설계하고 구현, 이를 통해 마이크로서비스 간의 신뢰성을 향상시키고, 개발자들이 문제를 신속하게 식별하고 해결할 수 있도록 지원"],en:["Designed and implemented a platform using Flask to simplify version conflict resolution, enhancing reliability between microservices and enabling developers to quickly identify and resolve issues."]}}]},{company:"POZALabs",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},stacks:["Python"],projects:[{name:{ko:"음원 분석 알고리즘 개발",en:"Audio Analysis Algorithm Development"},period:{ko:"2020.05 - 2020.08",en:"May 2020 - Aug 2020"},description:{ko:["커스텀 알고리즘을 개발해 코드 간 불협화음을 감지하는 시스템 구축, 음악의 조화로움을 유지하면서 저작권 문제 해결","Flask를 사용하여 웹사이트 백엔드를 설계 및 구현, 안정적이고 효율적인 데이터 처리와 사용자 인터페이스 제공","작곡가와 협업하여 AI 음악 생성 시스템의 품질과 사용자 경험을 향상, 음악 서비스의 전문성 강화"],en:["Developed a custom algorithm to build a system that detects disharmony between code segments, ensuring musical harmony while addressing copyright issues.","Designed and implemented the backend of a website using Flask, providing stable and efficient data processing and a seamless user interface.","Collaborated with composers to enhance the quality and user experience of an AI-powered music generation system, strengthening the professionalism of the music service."]}}]},{company:"Intellisoft development inc",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},stacks:["AWS Lex","AWS Lambda","Apache Groovy","Grails Framework","AWS RDS","PostgreSQL"],projects:[{name:{ko:"챗봇 및 커뮤니티 웹사이트 개발",en:"Chatbot and Community Website Development"},period:{ko:"2019.09 - 2019.12",en:"Sept 2019 - Dec 2019"},description:{ko:["George Brown College 웹사이트에서 연간 3000명 이상의 국제학생 지원을 위한 AWS Lex/Lambda 기반 챗봇 개발 및 배포","Groovy/Grails 기반 학부생 및 대학원생용 논문 게시 및 커뮤니티 웹사이트 개발"],en:["Developed and deployed an AWS Lex/Lambda-based chatbot to assist over 3000 international students annually on George Brown College's website","Built a research paper posting and community website for undergraduate and graduate students using Groovy/Grails"]}}]},{company:"Blackberry",position:{ko:"소프트웨어 엔지니어 인턴",en:"Software Engineering Intern"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},stacks:["Java"],projects:[{name:{ko:"기업용 스마트 스피커 프로토타입 개발",en:"Enterprise Smart Speaker Prototype Development"},period:{ko:"2019.01 - 2019.04",en:"Jan 2019 - Apr 2019"},description:{ko:["기업용 스마트 스피커 프로토타입 개발"],en:["Developed a prototype for an enterprise smart speaker"]}}]}];function N(e){let{language:s,t}=e;return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.experience")}),(0,a.jsx)("div",{className:"space-y-6",children:y.map(e=>(0,a.jsx)(w,{company:e.company,position:e.position[s],period:e.period[s],stacks:e.stacks,projects:e.projects,language:s},e.company))})]})}function w(e){let{company:s,position:t,period:n,stacks:i,projects:r,language:o}=e;return(0,a.jsxs)("div",{className:"relative pl-8 pb-8",children:[(0,a.jsx)("div",{className:"absolute left-0 top-0 h-full w-px bg-border",children:(0,a.jsx)("div",{className:"absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background"})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-lg",children:s}),(0,a.jsx)("p",{className:"text-muted-foreground",children:t}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-1",children:i.map((e,s)=>(0,a.jsx)("span",{className:"bg-gray-100 rounded px-2 py-1 text-xs text-gray-700",children:e},s))})]}),(0,a.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:n})]}),(0,a.jsx)("div",{className:"space-y-6",children:r.map(e=>(0,a.jsx)("div",{className:"relative pl-4 border-l border-border",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,a.jsx)("h4",{className:"font-medium",children:e.name[o]}),(0,a.jsx)("time",{className:"shrink-0 text-sm text-muted-foreground",children:e.period[o]})]}),(0,a.jsx)("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:e.description[o].map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})},e.name[o]))})]})]})}let D=[{school:{ko:"조지아 공과 대학교",en:"Georgia Institute of Technology"},degree:{ko:"컴퓨터 공학 석사",en:"M.S. in Computer Science"},period:{ko:"2024.09 - 현재",en:"Sept 2024 - Present"},gpa:"4.0/4.0"},{school:{ko:"워털루 대학교",en:"University of Waterloo"},degree:{ko:"메카트로닉스 공학 학사",en:"B.S. in Mechatronics Engineering"},period:{ko:"2017.09 - 2022.04",en:"Sep 2017 - Apr 2022"},gpa:"3.32/4.0"}];function A(e){let{language:s,t}=e;return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.education")}),(0,a.jsx)("div",{className:"grid md:grid-cols-2 gap-6",children:D.map(e=>(0,a.jsx)(p.Zb,{children:(0,a.jsx)(p.aY,{className:"pt-6",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h3",{className:"font-semibold text-lg",children:e.school[s]}),(0,a.jsx)("p",{className:"text-muted-foreground",children:e.degree[s]}),(0,a.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:e.period[s]}),(0,a.jsxs)("span",{children:[t("gpa"),": ",e.gpa]})]})]})})},e.school[s]))})]})}var S=t(8563),P=t(4925),z=t(2578),C=t(1598);function I(e){let{language:s,t}=e,r=[...S.n].sort((e,s)=>new Date(s.date).getTime()-new Date(e.date).getTime()).slice(0,3);return(0,a.jsxs)("section",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:t("sections.blog")}),(0,a.jsx)(c.default,{href:"/blog",children:(0,a.jsx)(n.z,{variant:"outline",children:t("buttons.viewAll")})})]}),(0,a.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 md:grid-cols-3",children:r.map(e=>(0,a.jsx)(c.default,{href:"/blog/".concat(e.slug),className:"transition-colors hover:bg-muted/50 p-3 rounded-md",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(i.C,{variant:"outline",children:e.category[s]}),(0,a.jsx)("h4",{className:"font-medium text-lg",children:e.title[s]}),(0,a.jsx)("time",{className:"block text-xs text-muted-foreground",children:function(e,s){let t=new Date((e.includes(":")?e:"".concat(e," 00:00")).replace(" ","T"));return(0,P.WU)(new Date(t),"PP p",{locale:"ko"===s?z.ko:C._})}(e.date,s)})]})},e.slug))})]})}function B(){let{language:e,t:s}=(0,l.Z)();return(0,a.jsx)("main",{className:"min-h-screen",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-16",children:[(0,a.jsxs)("section",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold tracking-tight",children:["ko"===e?"이은지":"Julie Lee",(0,a.jsx)("span",{className:"block text-lg md:text-xl font-normal text-muted-foreground mt-2",children:s("role")})]}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-[600px]",children:"ko"===e?(0,a.jsxs)(a.Fragment,{children:["경험이 풍부한 ",(0,a.jsx)("strong",{children:"소프트웨어 엔지니어"}),"로서, ",(0,a.jsx)("strong",{children:"데이터 처리"}),", ",(0,a.jsx)("strong",{children:"백엔드 시스템 개발"})," 및 ",(0,a.jsx)("strong",{children:"확장 가능한 아키텍처"}),"에 강점을 가지고 있습니다. 다양한 산업에서 ",(0,a.jsx)("strong",{children:"고성능 데이터 파이프라인"}),"과 ",(0,a.jsx)("strong",{children:"분산 시스템"}),", ",(0,a.jsx)("strong",{children:"백엔드 서비스"}),"를 설계하고 구축한 탄탄한 경험을 바탕으로, 안정적이고 효율적인 시스템을 만들어가는 데 집중하고 있습니다."]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("strong",{children:"Experienced"})," and results-oriented ",(0,a.jsx)("strong",{children:"Software Engineer"})," specializing in",(0,a.jsx)("strong",{children:" data processing"}),", ",(0,a.jsx)("strong",{children:"backend system development"}),", and",(0,a.jsx)("strong",{children:" scalable architectures"}),". Proven track record of designing and implementing",(0,a.jsx)("strong",{children:" high-performance data pipelines"}),", ",(0,a.jsx)("strong",{children:"distributed systems"}),", and ",(0,a.jsx)("strong",{children:"backend services"})," across various industries."]})}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)(c.default,{href:"https://github.com/julielee9067",target:"_blank",children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(r.Z,{className:"w-4 h-4 mr-2"}),"GitHub"]})}),(0,a.jsx)(c.default,{href:"mailto:julielee9067@gmail.com",children:(0,a.jsxs)(n.z,{variant:"outline",size:"sm",children:[(0,a.jsx)(o.Z,{className:"w-4 h-4 mr-2"}),"Email"]})})]})]}),(0,a.jsx)("div",{className:"relative aspect-square md:aspect-video",children:(0,a.jsx)(d.default,{src:"".concat("/julie","/assets/user-photo.jpg"),alt:"Profile",fill:!0,className:"object-cover rounded-lg",priority:!0})})]}),(0,a.jsxs)("section",{className:"space-y-4",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:s("sections.skills")}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:["Python","MongoDB","PostgreSQL","Docker","Elasticsearch","RabbitMQ","AWS","GCP","Flask","Django","FastAPI"].map(e=>(0,a.jsx)(i.C,{variant:"secondary",className:"text-sm",children:e},e))})]}),(0,a.jsx)(N,{language:e,t:s}),(0,a.jsx)(k,{language:e,t:s}),(0,a.jsx)(A,{language:e,t:s}),(0,a.jsx)(I,{language:e,t:s})]})})}},2869:function(e,s,t){"use strict";t.d(s,{z:function(){return c}});var a=t(7437),n=t(2265),i=t(7495),r=t(535),o=t(4508);let l=(0,r.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,s)=>{let{className:t,variant:n,size:r,asChild:c=!1,...d}=e,m=c?i.g7:"button";return(0,a.jsx)(m,{className:(0,o.cn)(l({variant:n,size:r,className:t})),ref:s,...d})});c.displayName="Button"},6110:function(e,s,t){"use strict";t.d(s,{$N:function(){return g},Be:function(){return u},Vq:function(){return l},cZ:function(){return m},fK:function(){return p}});var a=t(7437),n=t(2265),i=t(2841),r=t(2489),o=t(4508);let l=i.fC;i.xz;let c=i.h_;i.x8;let d=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(i.aV,{ref:s,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...n})});d.displayName=i.aV.displayName;let m=n.forwardRef((e,s)=>{let{className:t,children:n,...l}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{}),(0,a.jsxs)(i.VY,{ref:s,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...l,children:[n,(0,a.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(r.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=i.VY.displayName;let p=e=>{let{className:s,...t}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",s),...t})};p.displayName="DialogHeader";let g=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(i.Dx,{ref:s,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...n})});g.displayName=i.Dx.displayName;let u=n.forwardRef((e,s)=>{let{className:t,...n}=e;return(0,a.jsx)(i.dk,{ref:s,className:(0,o.cn)("text-sm text-muted-foreground",t),...n})});u.displayName=i.dk.displayName}},function(e){e.O(0,[137,648,269,696,445,112,971,117,744],function(){return e(e.s=3945)}),_N_E=e.O()}]);