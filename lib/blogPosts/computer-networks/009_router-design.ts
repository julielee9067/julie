import { BlogPost } from "@/lib/types";

export const cnRouterDesign: BlogPost = {
    slug: "computer-networks/router-design",
    categorySlug: "computer-networks",
    title: {
        ko: "라우터 디자인",
        en: "Router Design",
    },
    date: "2025-02-24 22:15",
    category: {
        ko: "컴퓨터 네트워크",
        en: "Computer Networks",
    },
    description: {
        ko: "라우터 디자인과 그 알고리즘에 대해 알아봅시다",
        en: "Router design and its algorithms",
    },
    content: `
## 라우터
라우터의 주요 임무는 **패킷을 올바른 출력 포트로 전달**하고, **라우팅 프로토콜을 실행하여 경로를 관리**하는 것입니다.
### 구성 요소
#### Forwarding Plane
Forwarding plane의 역할은 **패킷이 들어오는 인터페이스에서 적절한 output 인터페이스로 빠르게 전달**하는 것입니다.
이것은 일반적으로 몇 나노초 단위의 매우 짧은 시간에 **하드웨어**로 구현됩니다.

구성 요소는 다음과 같습니다.

1. **입력 포트**: 외부 링크의 신호를 받아들이고, 패킷의 캡슐화를 해제하고, 패킷의 목적지 IP를 확인한 후 포워딩 테이블(FIB)에서 어떤 출력 포트로 보낼지 결정합니다.
2. **Switching fabric**: 입력 포트로부터 받은 패킷을 출력 포트로 전달합니다. 메모리 기반, 버스 기반, 크로스바 방식 등이 있습니다.
3. **출력 포트**: switching fabric을 통해 전달된 패킷을 수신하고, 큐잉한 후 최종적으로 외부 링크로 전송합니다.

#### Control Plane
Control Plane은 **라우팅 프로토콜 (RIP, OSPF, BGP 등)을 실행하여 라우팅 테이블을 구성**하고 이 정보를 바탕으로 **포워딩 테이블(FIB)을 생성**하는 작업을 수행합니다.

주로 **소프트웨어로 동작**하며 라우팅 프로세서 내부에서 실행되거나 SDN 환경에서는 원격 컨트롤러가 이 역할을 대신할 수 있습니다.

### 동작 과정
패킷이 라우터에 도착하면 다음과 같은 순서로 처리됩니다.

1. **Lookup**
    
    패킷 도착 시 **입력 포트에서 목적지 IP 주소를 확인**합니다.
    
    **Longest Prefix Match** 알고리즘을 사용해 FIB에서 가장 적합한 경로를 찾습니다.
    
2. **Switching**

    Lookup 결과에 따라 패킷을 **입력 포트에서 선택된 출력 포트로 전달**합니다.
    빠른 스위칭을 위해 크로스바 스위치 등이 사용되며, 여러 입력 포트가 동일한 출력 포트로 보내려 할 경우 스케줄링 문제가 생길 수도 있습니다.
    
3. **Queueing**

    출력 포트에 전달한 패킷은 **링크 혼잡 시 임시로 대기열에 저장**됩니다.
    FIFO, WFQ 등 다양한 큐잉 방식이 사용되며 QoS를 지원합니다.
    
4. **부가 처리**
    
    IP 버전, TTL 감소, checksum 재계산 등을 수행하고 SNMP, ICMP, TCP/UDP 등의 프로토콜을 통해 관리 및 오류 보고 처리를 합니다.
    라우팅 프로토콜을 통해 업데이트된 정보를 기반으로 **FIB를 재구성**합니다.

### 스위칭 방식
라우터 내부에서 패킷을 전달하기 위한 스위칭 방식에는 여러 가지가 있습니다.
1. **메모리 기반 스위칭**

    입력 포트에서 패킷을 수신하면 interrupt를 발생시켜 **라우팅 프로세서 메모리로 패킷을 복사**합니다.
    이 때, 프로세서는 목적지 주소를 확인한 후 해당 패킷을 다시 출력 포트 버퍼로 복사합니다.
    
    프로세서 개입으로 인해 **처리 지연**이 생길 수 있습니다.

2. **버스 기반 스위칭**

    입력 포트가 패킷에 내부 헤더(출력 포트 지정 정보)를 추가한 후 공유 버스로 보냅니다.
    **모든 출력 포트가 버스의 패킷을 받지만 오직 지정된 포트만 이를 저장**합니다.
    
    버스의 대역폭 제한으로 **단일 패킷**만 전송 가능합니다.
    
3. **크로스바 스위칭**
    
    N개의 입력 포트와 N개의 출력 포트를 연결하는 2N개의 버스를 사용해서 **교차점에서 스위칭을 수행**합니다.
    서로 다른 입/출력 포트 간에 **동시에 여러 패킷을 전달**할 수 있습니다.
    
### Prefix Matching 및 Lookup 알고리즘
라우터는 패킷을 전달하기 전에 **FIB에서 목적지 주소에 맞는 경로를 찾아야** 하는데 이 때 prefix-match lookup 알고리즘이 사용됩니다.

인터넷이 커지면서 라우터에 명시적으로 모든 목적지를 저장하기 어려워지고, **IP 주소를 prefix 단위로 그룹화** 하게 되었습니다.
**CIDR(Classless Inter-Domain Routing)** 로 인해 **길이가 가변적인 prefix**들이 등장하면서 Longest prefix match 문제를 해결해야합니다.

#### 주요 기법
1. **Unibit Trie**
    
    각 노드가 **0또는 1의 두 가지 분기**를 가지며 루트에서 시작해 입력 IP의 비트를 따라 내려갑니다.
    마지막에 성공한 노드의 prefix가 longest prefix match 결과가 됩니다.

2. **Multibit Trie**

    한 노드에서 **여러 비트를 동시에 확인**하여 메모리 접근 횟수를 줄이는 방식입니다.
    
    **Fixed-Stride Trie**는 모든 노드에서 **동일한 비트 수**를 사용하여 분기하고, **Variable-Stride Trie**는 각 노드마다 최적의 분기 비트 수를 **동적으로 조절**하여 메모리 효율을 높입니다.
    
    Fixed-stride가 3인 Multibit trie를 예로 들어보겠습니다.
    
    데이터베이스에 저장된 prefix \`P1: 101 (3비트), P2: 11001 (5비트), P3: 111 (3비트)\`가 있을 때, P2의 길이가 5비트 이므로 3의 배수(6비트)로 맞추기 위해 **controlled prefix expansion**을 적용해야 합니다.
    
    \`\`\`
            [Root] (Level 0, 3비트)
              /      |         \\
        "101": P1   "110": Node B   "111": P3
                   (Level 1, 3비트)
                     /         \\
              "010": P2     "011": P2
    \`\`\`
    
    루트에서 3비트 단위로 분기할 때, 입력 주소가 \`101\`이면 \`P1\`, \`111\`이면 \`P3\`로 바로 매칭됩니다.
    
    입력 주소가 \`110\`으로 시작하면 하위 노드로 내려가서 다음 3비트를 확인합니다.
    
    따라서, 주소가 예를 들어 \`1100101010\`인 경우에는 루트에서 \`110\`분기를 따라 내려가고, 하위 노드에서 \`010\`분기를 선택해서 \`P2\`와 longest prefix matching이 이루어집니다.
3. **Prefix Expansion**
    
    **주어진 prefix를 선택한 stride 길이에 맞게 확장**하여 매칭 시 누락되는 경우를 방지합니다.
    이로 인해 데이터베이스 크기는 증가하지만, 룩업 속도는 향상됩니다.
    
    예를 들어, 원래 Prefix가 \`101\` (3비트) 이고, 선택한 stride 길이가 2비트라면 원래 Prefix 길이인 3은 2의 배수가 아니므로 가장 가까운 2의 배수인 4로 확장해야 합니다.
    
    \`101\`을 4비트로 확장하려면 마지막 비트를 0과 1 두 가지 경우로 채웁니다: \`1010\`, \`1011\`
    
    원래 prefix \`101\`은 확장 후 **두개의 접두사 \`1010\`과 \`1011\`로 대체**됩니다. 
    이렇게 확장된 prefix들은 고정 stride 방식의 multibit trie에서 룩업 시 누락없이 빠르게 처리될 수 있습니다.
### Concerns
인터넷 사용 기기의 증가와 트래픽 폭증으로 인해 처리 및 메모리 요구가 증가하고 있습니다.
또한, 고속 링크로 인한 높은 데이터 전송량 처리가 필요해졌습니다.

이 때, **빠른 룩업 속도**와 **메모리 효율** 사이의 균형이 필요하고 IP prefix의 가변 길이와 매우 큰 테이블 크기로 인해 효율적인 알고리즘 설계가 필수적입니다.

## Packet Classification
기존에는 패킷 포워딩이 주로 **목적지 IP 주소의 longest prefix match**에 의존했지만 인터넷 환경이 점점 복잡해짐에 따라 네트워크는 추가 요구사항들을 충족해야합니다.
1. **QoS (Quality of Service) 보장**
    
    실시간 영상, 음성 통화 같이 지연이나 패킷 손실에 민감한 애플리케이션의 경우, 특정 트래픽에 대해 low latency, consistent bandwidth, 낮은 변동성을 보장해야 합니다.
2. **보안 보장**

    방화벽을 통해 악의적인 트래픽을 차단하거나 특정 규칙에 따라 트래픽을 필터링하여 네트워크 보안을 강화해야 합니다.
3. **트래픽 유형 기반 라우팅**

    비디오 트래픽과 일반 데이터를 다른 경로로 전달하거나 트래픽을 분리하여 자원을 예약하는 등의 기능이 필요합니다.
    
따라서 단순히 목적지 IP 만으로 패킷을 처리하는 것으로는 부족하며, **TCP/UDP port, 출발지 IP, TCP Flag** 등 여러 필드를 기반으로 세밀한 분류가 필요합니다.

### 패킷 분류의 간단한 해결책
#### 선형 검색 (Linear Search)
Rule 데이터베이스에 있는 규칙들을 순차적으로 탐색하여 매칭되는 규칙을 찾는 방법입니다.

이 때 규칙의 수가 적을 때는 괜찮지만, 수천 개 이상의 규칙이 존재하면 매우 느려집니다.

#### 캐싱 (Caching)
최근에 매칭된 결과를 캐시에 저장하여 동일하거나 유사한 패킷이 도착할 때 빠르게 결과를 반환합니다.

하지만 캐시 적중률이 높더라도 캐시 미스가 발생할 경우 선형 검색을 수행해야 하므로 평균 탐색 시간이 늘어날 수 있습니다.

#### Passing Labels
MPLS나 DiffServ에서 사용되는 방법인데 **네트워크 엣지에서 패킷 분류를 수행**한 후, 패킷에 라벨을 부여하여 **중간 라우터에서는 라벨만 확인하고 포워딩**함으로써 복잡한 분류 과정을 피할 수 있습니다.

### 더 나아간 해결책
네트워크 환경에서 분류 규칙은 여러 종류로 구성되기 때문에 단순 선형 검색으로는 한계가 있습니다. 

#### Set-Pruning Trie
**목적지 prefix를 기반으로 Trie를 구성**한 뒤, **각 리프 노드에 해당하는 하위 트리(출발지 prefix를 포함하는)를 연결**합니다.

하지만 하나의 출발지 prefix가 여러 목적지 트리에 나타날 수 있어 **메모리 사용량이 급증**할 수 있습니다.

예를 들어, 다음과 같은 규칙이 있다고 가정해봅시다.
| **규칙** | **목적지 prefix** | **출발지 prefix**  | **설명**  |
|-----------|-------------|----------|----------|
| R1   | \`00*\`     | \`0*\`  | 목적지가 \`00\`으로 시작, 출발지가 \`0\`으로 시작하는 규칙 |
| R2   | \`00*\`     | \`10*\`  | 목적지가 \`00\`으로 시작, 출발지가 \`10\`으로 시작하는 규칙 |
| R3   | \`00*\`     | \`0*\`  | 목적지가 \`00\`으로 시작, 출발지가 \`0\`으로 시작하는 규칙 |
| R4   | \`01*\`     | \`11*\`  | 목적지가 \`01\`으로 시작, 출발지가 \`11\`으로 시작하는 규칙 |
| R5   | \`00*\`     | \`11*\`  | 목적지가 \`00\`으로 시작, 출발지가 \`11\`으로 시작하는 규칙 |

이 때, 먼저 목적지 접두사를 기준으로 trie를 구성하면 아래와 같은 형태가 될 수 있습니다.
\`\`\`
                 [Root]
                    │
         (첫 번째 비트 = '0')
                    │
                [노드: "0"]
                 /       \\
  (두 번째 비트 = '0')   (두 번째 비트 = '1')
           /                    \\
  [노드: "00"]            [노드: "01"]
\`\`\`
\`00\` 노드에 속한 규칙들의 출발지 prefix는 다음과 같습니다: \`R1, R3: 0*, R2: 10*, R5: 11\`

위 정보를 바탕으로 \`00\`노드에 해당하는 규칙들의 출발지 trie를 구성해보면 다음과 같습니다.
\`\`\`
           [Source Root]
              /      \\
         (0) /         \\ (1)
            /           \\
      [0-branch]      [1-branch]
            |          /       \\
         "0*"       "10*"      "11*"
\`\`\`

여기서 라우터는 먼저 패킷의 목적지 주소를 이용해 목적지 trie에서 longest prefix match를 진행합니다.
예를 들어, 패킷의 목적지 주소가 \`001...\` 이라면 \`0 -> 0\` 경로를 따라 \`00\` 노드에 매칭됩니다.

그 다음, 해당 \`00\`노드에 연결된 출발지 trie에서 패킷의 출발지 주소에 대해 longest prefix match를 수행합니다.
예를 들어, 패킷의 출발지 주소가 \`101...\`인 경우, 출발지 trie의 오른쪽 분기를 따라가며 \`10*\` 또는 \`11*\` 중 어느 것이 매칭되는지 확인하고 가장 적합한 규칙을 선택합니다.

#### Backtracking 활용 기법
각 목적지 prefix는 정확히 **해당하는 출발지 trie를 한 번만 저장**하고, 룩업 시에 목적지 trie에서 longest prefix를 찾은 후 그 **조상 노드들에 연결된 출발지 trie들을 backtracking** 합니다.

이 때 각 규칙이 한 번만 저장되므로 메모리 사용량이 줄어들지만 backtracking으로 인해 **룩업 시간이 증가**합니다.

#### Grid of Tries
사전에 **스위치 포인터(switch pointer)를 계산**하여 backtracking 시 불필요한 탐색을 건너뜁니다.

### Scheduling과 HOL(Head-of-Line) 블로킹
패킷 분류 외에도 라우터는 switching fabric을 통해 패킷을 전달할 때 패킷 스케줄링 문제에 직면합니다.

#### HOL Blocking
하나의 큐에서 가장 앞에 있는 패킷이 블로킹되면 뒤따르는 모든 패킷의 전송이 지연됩니다.

이 때, 각 **출력 포트에 별도의 큐를 구성(Output queuing)** 하여 한 출력에 문제가 생겨도 다른 출력에는 영향을 주지 않도록 한다던가, 
**단일 물리 큐를 여러 가상 큐로 나누어(Parallel Iterative Matching)** 동시에 여러 패킷을 처리할 수 있도록 만들 수 있습니다.

#### Scheduling 알고리즘
1. **Take-the-Ticket 알고리즘**
    
    각 입력은 원하는 출력에 대해 티켓을 요청하고, 출력은 요청 받은 순서대로 티켓을 부여합니다.
    
    이 때 **한 흐름이 계속 티켓을 선점**하면 다른 흐름들은 오랜 시간 대기하게 되어 **HOL Blocking이 발생**합니다.
    
2. **Deficit Round Robin (DRR)**

    **각 흐름의 고정의 할당량(quantum)과 누적 미사용량(deficit counter)을 부여**하여 할당량 내에서 패킷을 전송하고 남은 잔여량은 다음 라운드로 이월합니다.
    이렇게 하면 각 흐름에 대해 대역폭을 공정하게 분배할 수 있습니다.
    
### Traffic Scheduling: 토큰 버킷 및 누수 버킷
라우터는 **트래픽의 전송률을 제어**하여 과도한 버스트나 혼잡을 방지해야 하는데, 이를 위해 주로 사용하는 토큰 버킷과 누수 버킷 기법에 대해 알아보겠습니다.
#### 토큰 버킷 (Token Bucket)

일정 속도로 토큰이 버킷에 축적되며 패킷 전송 시 패킷 크기에 해당하는 토큰이 소모됩니다.
버킷 최대 크기가 있어 버킷이 가득 차면 추가 토큰은 버려집니다.

이로 인해 평균 전송률을 제한하면서도 **버킷에 축적된 토큰 만큼의 버스트 전송은 허용**될 수 있습니다.

#### 누수 버킷 (Leaky Bucket)
누수 버킷은 일정한 속도로 물(패킷)이 새어나가는 버킷과 유사하게 동작합니다.
버킷이 가득 차면 새로운 패킷은 버려집니다.

트래픽을 shaping 하거나, 과도한 트래픽을 걸러내어(policing) **네트워크에 일정한 전송률을 보장**합니다.
`,
};

