(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{1125:function(e,n,t){Promise.resolve().then(t.bind(t,3410))},3410:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(7437),s=t(2265),a=t(4491),o=t(8765),i=t(6070),l=t(5974),u=t(4925),c=t(2578),d=t(1598),m=t(7648);function f(e){var n;let{post:t,language:s}=e;return(0,r.jsx)(m.default,{href:"/blog/".concat(t.slug),children:(0,r.jsxs)(i.Zb,{className:"transition hover:shadow-md hover:scale-[1.01]",children:[(0,r.jsxs)(i.Ol,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(l.C,{variant:"outline",children:t.category[s]}),(0,r.jsx)("time",{className:"text-sm text-muted-foreground",children:(n=t.date,(0,u.WU)(new Date(n),"PPP",{locale:"ko"===s?c.ko:d._}))})]}),(0,r.jsx)(i.ll,{className:"mt-2 text-lg",children:t.title[s]})]}),(0,r.jsx)(i.aY,{children:(0,r.jsx)("p",{className:"text-muted-foreground",children:t.description[s]})})]})},t.slug)}function p(){let{language:e}=(0,a.Z)(),n="ko"===e?"전체":"All",[t,i]=(0,s.useState)(n),l=[...o.n].sort((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime()),u=t===n?l:l.filter(e=>e.categorySlug===t);return(0,r.jsx)("div",{className:"min-h-screen flex",children:(0,r.jsx)("main",{className:"flex-1 p-4 md:p-8 lg:p-12",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto space-y-8",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"ko"===e?"블로그":"Blog"}),(0,r.jsx)("div",{className:"grid gap-6",children:u.map(n=>(0,r.jsx)(f,{post:n,language:e},n.slug))}),!u.length&&(0,r.jsx)("p",{className:"text-muted-foreground",children:"ko"===e?"이 카테고리에 대한 게시글이 없습니다.":"No posts in this category."})]})})})}},4491:function(e,n,t){"use strict";t.d(n,{LanguageProvider:function(){return i},Z:function(){return l}});var r=t(7437),s=t(2265);let a={ko:{name:"이은지",role:"소프트웨어 엔지니어",sections:{skills:"기술 스택",experience:"경력",education:"학력",projects:"프로젝트",blog:"블로그"},buttons:{viewAll:"모든 글 보기",viewProject:"프로젝트 보기",source:"소스 코드",downloadResume:"이력서 다운로드"},theme:{light:"라이트 모드",dark:"다크 모드",system:"시스템 설정"},gpa:"학점",period:"기간",current:"현재"},en:{name:"Julie Lee",role:"Software Engineer",sections:{skills:"Skills",experience:"Experience",education:"Education",projects:"Projects",blog:"Blog"},buttons:{viewAll:"View All",viewProject:"View Project",source:"Source Code",downloadResume:"Download Resume"},theme:{light:"Light Mode",dark:"Dark Mode",system:"System"},gpa:"GPA",period:"Period",current:"Present"}},o=s.createContext(void 0);function i(e){let{children:n}=e,[t,i]=s.useState("ko");s.useEffect(()=>{let e=localStorage.getItem("preferredLanguage");("ko"===e||"en"===e)&&i(e)},[]);let l=s.useCallback(e=>{i(e),localStorage.setItem("preferredLanguage",e)},[]),u=s.useCallback(e=>{let n=function(e,n){let t=e;for(let e of n){if(!t||"string"==typeof t)return;t=t[e]}return t}(a[t],e.split("."));return"string"==typeof n?n:e},[t]);return(0,r.jsx)(o.Provider,{value:{language:t,setLanguage:l,t:u},children:n})}function l(){let e=s.useContext(o);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},5974:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(7437);t(2265);var s=t(535),a=t(4508);let o=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:n,variant:t,...s}=e;return(0,r.jsx)("div",{className:(0,a.cn)(o({variant:t}),n),...s})}},6070:function(e,n,t){"use strict";t.d(n,{Ol:function(){return i},Zb:function(){return o},aY:function(){return u},eW:function(){return c},ll:function(){return l}});var r=t(7437),s=t(2265),a=t(4508);let o=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});o.displayName="Card";let i=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});i.displayName="CardHeader";let l=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});l.displayName="CardTitle",s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription";let u=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("p-6 pt-0",t),...s})});u.displayName="CardContent";let c=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:n,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});c.displayName="CardFooter"},8765:function(e,n,t){"use strict";t.d(n,{n:function(){return r},o:function(){return s}});let r=[{slug:"cs/process-thread",categorySlug:"cs",title:{ko:"프로세스와 스레드의 차이",en:"Process vs Thread"},date:"2024-02-19",category:{ko:"컴퓨터 공학",en:"Computer Science"},description:{ko:"프로세스와 스레드에 대한 차이점 및 개념 설명",en:"Differences between processes and threads."},content:'\n프로세스와 스레드는 운영체제에서 가장 기본적인 개념 중 하나입니다. 이 두 개념의 차이점을 자세히 알아보겠습니다.\n\n## 프로세스 (Process)\n\n프로세스는 실행 중인 프로그램의 인스턴스입니다. 각 프로세스는 다음과 같은 특징을 가집니다:\n\n- 독립된 메모리 공간 (Code, Data, Stack, Heap)\n- 운영체제로부터 할당받은 시스템 자원\n- 최소 1개의 스레드 (메인 스레드) 포함\n\n```c\n// 프로세스 생성 예제\n#include <unistd.h>\n\nint main() {\n    pid_t pid = fork();  // 새로운 프로세스 생성\n\n    if (pid == 0) {\n        // 자식 프로세스\n        printf("Child process\\n");\n    } else {\n        // 부모 프로세스\n        printf("Parent process\\n");\n    }\n    return 0;\n}\n```\n\n## 스레드 (Thread)\n\n스레드는 프로세스 내에서 실행되는 작업의 단위입니다:\n\n- 프로세스 내의 메모리 공간 공유\n- 독립적인 스택과 레지스터 보유\n- 빠른 컨텍스트 스위칭\n\n```java\n// 자바에서 스레드 생성 예제\npublic class ThreadExample extends Thread {\n    public void run() {\n        System.out.println("Thread is running");\n    }\n\n    public static void main(String[] args) {\n        ThreadExample thread = new ThreadExample();\n        thread.start();\n    }\n}\n```\n\n## 주요 차이점\n\n| 특징             | 프로세스  | 스레드       |\n|-----------------|---------|------------|\n| 메모리 공간       | 독립적    | 공유         |\n| 통신 비용        | 높음     | 낮음         |\n| 컨텍스트 스위칭    | 무거움    | 가벼움        |\n| 안정성           | 높음     | 상대적으로 낮음  |\n\n### 메모리 구조\n\n```plaintext\n프로세스 메모리 구조:\n+------------------+\n|       Stack      |  <- 각 스레드마다 독립적\n|        ↓         |\n|        ↑         |\n|       Heap       |  <- 공유\n|------------------|\n|       Data       |  <- 공유\n|------------------|\n|       Code       |  <- 공유\n+------------------+\n```\n\n## 실제 사용 사례\n\n1. **멀티 프로세스**\n   - 웹 브라우저의 탭\n   - 데이터베이스 서버\n   - 운영체제 서비스\n\n2. **멀티 스레드**\n   - 웹 서버의 요청 처리\n   - 게임의 렌더링과 물리 연산\n   - UI 응답성 유지\n  '}],s=[{number:1,name:"Two Sum",tags:["Array","Hash Table"],approach:"Use hash map to store complement values",difficulty:"Easy",url:"https://leetcode.com/problems/two-sum/",solutions:[{id:"brute-force",approach:"Brute Force",code:"def twoSum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n    return []",timeComplexity:"O(n\xb2)",spaceComplexity:"O(1)",explanation:{ko:"모든 가능한 쌍을 확인하는 방식으로, 이중 반복문을 사용합니다. 첫 번째 숫자와 두 번째 숫자의 합이 target과 같으면 해당 인덱스들을 반환합니다.",en:"Check all possible pairs using nested loops. Return the indices if the sum of two numbers equals the target."}},{id:"hash-map",approach:"Hash Map",code:"def twoSum(self, nums: List[int], target: int) -> List[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",timeComplexity:"O(n)",spaceComplexity:"O(n)",explanation:{ko:"해시맵을 사용하여 각 숫자의 보수(target - 현재 숫자)를 저장합니다. 현재 숫자의 보수가 이미 해시맵에 있다면, 현재 인덱스와 해시맵에 저장된 인덱스를 반환합니다.",en:"Use a hash map to store complements (target - current number). If the complement of the current number exists in the hash map, return the current index and the stored index."}}]}]},4508:function(e,n,t){"use strict";t.d(n,{cn:function(){return a}});var r=t(1994),s=t(3335);function a(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,s.m6)((0,r.W)(n))}}},function(e){e.O(0,[851,648,636,971,117,744],function(){return e(e.s=1125)}),_N_E=e.O()}]);