import { BlogPost } from "@/lib/types";

export const cnIntradomainRouting: BlogPost = {
    slug: "computer-networks/intradomain-routing-algorithm",
    categorySlug: "computer-networks",
    title: {
        ko: "인트라도메인 라우팅 알고리즘",
        en: "Intradomain Routing Algorithm",
    },
    date: "2025-02-23 14:21",
    category: {
        ko: "컴퓨터 네트워크",
        en: "Computer Networks",
    },
    description: {
        ko: "인트라도메인 라우팅에 대해 자세히 알아봅시다",
        en: "Deep dive into Intradomain Routing Algorithm",
    },
    content: `
## 개요
네트워크의 근본적인 목표는 **두 호스트 간의 데이터 전송을 가능하게 하는 것**입니다.
이를 위해 데이터를 출발지에서 목적지까지 효율적으로 전달하는 **최적의 경로**를 찾는 것이 중요합니다.

이번 글에서는 단일 관리 도메인 내 라우터들 간 최적의 경로를 결정하는 **인트라도메인 라우팅 알고리즘**에 대해 알아보도록 하겠습니다.

## 라우팅 알고리즘

TCP 또는 UDP를 이용해 연결이 설정된 두 호스트를 예로 들어보겠습니다.

각 호스트는 **기본 라우터 (default router)** 를 알고 있으며, 패킷을 전송할 때 먼저 이 기본 라우터로 보냅니다.
하지만 **기본 라우터를 지난 후에는 어떤 일이 일어날까요?**

패킷이 출발지에서 목적지로 이동하는 동안, 각 **중간 라우터는 패킷을 적절한 다음 라우터로 전달하는 역할**을 합니다.

패킷이 라우터에 도착하면 라우터는 **포워딩 테이블 (Forwarding table)** 을 참조하여 해당 패킷을 어느 인터페이스를 통해 전송할지 결정합니다.
여기서 **포워딩**은 **라우터 내에서 패킷을 들어오는 링크에서 나가는 링크로 전달하는 과정**을 의미합니다.

반면 **라우팅**은 라우터들이 **라우팅 프로토콜을 사용하여 최적의 경로를 설정하는 과정**을 의미합니다.
만약 동일한 관리 도메인에 속한 라우터들 간의 경로를 설정하는 경우, 이를 **인트라도메인 라우팅** 또는 **Interior Gateway Protocol(IGP)** 라고 합니다.
서로 다른 관리 도메인에 속한 라우터들이 협력하여 경로를 결정하는 경우, 이건 **인터도메인(interdomain) 라우팅**이라고 합니다.

이번 글에서는 **인트라도메인 라우팅 알고리즘**을 중심으로 살펴볼텐데, 보다 쉽게 이해하기 위해서 네트워크를 그래프로 모델링할 수 있습니다.

이 때 **라우터는 노드(node)** 로 표현 되고, **라우터간의 연결(link)는 엣지(edge)** 로 표현할 수 있습니다.
그리고 각 엣지에는 특정한 **비용(cost)** 이 할당됩니다.

## Link-state Routing Algorithm
링크 상태 알고리즘에서는 **다익스트라 알고리즘**을 기반으로 합니다. 
여기서는 **네트워크 내 모든 노드가 전체 네트워크 토폴로지와 링크 비용**을 알고 있습니다.
일반적으로 이 정보는 **브로드캐스트**를 통해 모든 노드에게 전달됩니다.

#### 기본 용어
     u: 출발지 노드(기준 노드)
     v: 네트워크 내의 모든 다른 노드
     D(v): 출발지 노드 u에서 v까지 현재 알려진 최소 비용 경로
     p(v): 출발지 노드 u에서 v까지 현재 최소 비용 경로에서 v 바로 직전의 노드
     c(u, v): 출발지 노드 u에서 직접 연결된 이웃 v까지의 비용
     N': 출발지 노드 u에서 현재까지 확정된 최소 비용 경로에 포함된 노드의 집합
#### 알고리즘
1. **초기화**

    **다익스트라 알고리즘(Dijkstra's algorithm)** 은 먼저 **출발지 노드 \`u\`의 직접 연결된 이웃들에 대한 비용을 설정**하는 단계로 시작됩니다.
    출발지 \`u\`와 직접 연결된 노드는 링크 비용을 그대로 사용하고, 연결되지 않은 노드들은 무한대 값으로 설정됩니다.
    
    또한, \`N'\`은 처음에 출발지 노드 u만 포함하도록 설정됩니다.

2. **반복 연산**
    
    초기화 이후에는 반복문을 통해 **모든 목적지 노드 \`v\`에 대해 경로를 찾는 과정**을 거칩니다.
    
    먼저 아직 \`N'\`에 포함되지 않은 노드 중에서 현재까지의 최소 비용을 가진 노드 \`w\`를 선택하고, 그 노드를 \`N'\` 집합에 추가합니다.
    
    그리고 \`w\`의 모든 이웃 노드 \`v\`에 대해 \`D(v)\`를 업데이트 합니다.
    
    \`D(v)\`의 값은 기존 \`D(v)\` 값과, 현재까지의 최소 비용 경로 \`D(w)\`에 대해 \`w\`에서 \`v\`까지의 비용을 더한 값 중 작은 값으로 갱신됩니다.

    \`D(v) = min(D(v), D(w) + c(w,v))\`
    
    위 과정을 네트워크의 모든 노드가 \`N'\`에 포함될 때까지 반복합니다.

다익스트라 알고리즘의 결과는 **\`u\`에서 모든 목적지까지의 최단경로 트리(Shortest Path Tree, SPT)** 가 됩니다.

#### 복잡도 계산
이 알고리즘에서 최단 경로를 찾기위해 수행해야 하는 주요 연산은 **최소 비용을 가지는 노드를 찾는 것**과 **해당 노드를 기준으로 다른 노드들의 경로 비용을 업데이트하는 것**으로 나눌 수 있습니다.

1. 첫 번째 iteration에서는 전체 n개의 노드 중에서 최소 비용을 가지는 노드를 찾아야 합니다.
2. 두 번째 iteration에서는 남아있는 n-1 개의 노드 중에서 최소 비용 노드를 찾습니다.
3. 세 번째 iteration에서는 n-2개를 탐색하고, 이런 식으로 마지막에는 1개의 노드만 남습니다.

따라서 전체적으로 탐색해야 하는 노드 개수는 다음과 같습니다:

**\`n + (n - 1) + (n - 2) + ... + 1 = n(n+1)/2\`**

따라서 최악의 경우 O(n^2)의 시간 복잡도를 가지는데, 이 복잡도를 개선하기 위해 priority queue를 사용하면 최소 비용 노드를 찾는 연산을 O(log n)으로 줄일 수 있습니다.

하지만 **기본적인 다익스트라 알고리즘에서는 O(n^2) 이므로, 일반적인 링크 상태 라우팅의 시간 복잡도도 같다**고 할 수 있습니다.

## Distance-Vector Routing Algorithm
거리 벡터 라우팅 알고리즘은 **반복적, 비동기적, 분산적** 방식으로 동작하는 알고리즘입니다.

이 알고리즘은 **Bellman-Ford 알고리즘**을 기반으로 하는데, 각 라우터는 자신이 목적지까지 도달하는 비용 정보를 담은 거리 벡터를 유지하고
이 정보를 정기적으로 이웃 노드들과 교환하면서 네트워크의 최적 경로를 계산합니다.

#### 알고리즘
먼저, 각 노드는 **자신이 직접 연결된 이웃 노드들과의 링크 비용을 기반으로 초기 거리 벡터를 설정**합니다.
이웃하지 않은 노드에 대해서는 비용을 무한대로 설정합니다.

그 후, 각 노드는 **주기적으로** 또는 **링크 상태 변경이 감지**될 때 자신의 거리 벡터를 이웃 노드들에게 보냅니다.

이웃 노드들은 수신한 거리 벡터를 기반으로 자신의 거리 벡터를 업데이트합니다.
업데이트는 Bellman-Ford 방정식을 사용하여 이루어지며 그 식은 다음과 같습니다:
**\`Dx(y) = min{c(x,v) + Dv(y)}\`**

즉, 노드 \`x\`가 목적지 \`y\`에 도달하는 최소 비용을 구하기 위해 **이웃 노드 \`v\`를 거쳐 가는 최소 경로**들을 고려합니다.

각 경로에 대해 **\`x\`에서 \`v\`까지의 비용 \`c(x,v)\`에 \`v\`에서 \`y\`까지 가는 최소 비용 \`Dv(y)\`를 더한 값**을 구하고, 그 중 최소 값을 선택하여 자신의 거리 벡터를 업데이트 합니다.

위 과정은 네트워크 내 모든 노드가 더 이상 업데이트할 정보가 없을 때까지 반복되고, 네트워크 전체가 수렴할 때 까지 지속됩니다.

거리 벡터 라우팅 알고리즘은 **구현이 간단하고 오버헤드가 적다**는 장점이 있지만
네트워크 변경이 있을 경우 안정화 하는데 **시간이 오래 걸릴 수** 있는 단점이 있습니다.

반면에 링크 상태 라우팅 알고리즘은 네트워크 전체의 토폴로지를 공유하여 **더 빠르고 안정적인 경로 설정**이 가능합니다.

### Count-to-Infinity 문제
거리 벡터 라우팅 알고리즘에서는 각 라우터가 주기적으로 자신의 거리 벡터를 이웃 라우터들에게 공유하고, 이를 기반으로 최적 경로를 갱신합니다.

하지만 **링크 비용이 증가할 경우**, 잘못된 경로 정보가 업데이트되면서 무한 루프에 빠지는 문제가 발생할 수 있습니다.

이를 해결하기 위해 Split Horizon이나 Poison Reverse 방법을 사용할 수 있습니다.
`,
};

