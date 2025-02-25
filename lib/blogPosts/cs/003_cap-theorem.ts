import { BlogPost } from "@/lib/types";

export const csCAPTheorem: BlogPost = {
    slug: "cs/cap-theorem",
    categorySlug: "cs",
    title: {
        ko: "CAP Theorem",
        en: "CAP Theorem",
    },
    date: "2025-02-25 17:14",
    category: {
        ko: "컴퓨터 공학",
        en: "Computer Science",
    },
    description: {
        ko: "CAP 이론",
        en: "Definition of CAP Theorem",
    },
    content: `
CAP Theorem은 분산 시스템이 **동시에 만족시킬 수 없는** 세 가지 특성입니다.

### 1. Consistency
Consistency는 분산 시스템에 있는 **모든 노드가 같은 시점에 동일한 데이터**를 갖도록 보장하는 특성입니다.

쉽게 말하면, 한 은행 지점에서 입금을 하고, 다른 지점에 방문했을 때도 즉시 동일한 잔액을 확인할 수 있어야 하는 상황을 의미합니다.
만약 A에서 입금을 했는데 B 지점에서는 반영되지 않아 잔액이 다르다면, 이는 일관성(consistency)이 보장되지 않는 상태입니다.

### 2. Availability
Availability는 **시스템이 항상 응답을 제공할 수 있는 능력**을 뜻합니다.

만약 시스템 일부에 장애가 발생하더라도 여전히 서비스가 지속되어 요청에 대해 항상 응답을 제공해야 합니다.

예를 들어 카페에 방문했을 때, 한 손님이 커피를 주문했는데 어떤 이유로 카페에서 커피를 제공하지 못한다면 그 카페는 가용성이 낮다고 볼 수 있습니다.

다르게 말해, 어떤 이유로 커피가 늦어지더라도 나중에라도 커피를 제공하는 것처럼 반드시 응답(정상적인 응답 혹은 오류메시지라도) 받아야 한다는 점이 있습니다.

### 3. Partition Tolerence
Partition Tolerence는 **시스템 네트워크의 일부 구간이 끊기는 일이 발생하더라도 시스템이 정상적으로 작동하는 능력**을 의미합니다.

예를 들어, 한 도시의 도로에 공사가 진행되어 통행이 불가능한 상태일때도 다른 우회도로를 통해 조금 오래 걸리더라도 차량 간 이동이 가능한 상황을 생각해 보시면 됩니다.

분산 시스템에서는 복제 노드를 만들어서 사용자에게 응답할 수 있도록 처리할 수 있습니다.

### 정리
CAP Theorem은 위 세 가지 특성 중에서 두 가지만을 동시에 완벽하게 만족시킬 수 있다는 이론입니다.

보통 네트워크 장애(Partition)를 완전히 배제하는 건 불가능하기 때문에 보통 Consistency와 Availability 사이에서 하나를 희생해야만 합니다.

MongoDB는 **CP(Consistency + Partition Tolerence)** 를 따르는데, 만약 primary node에 문제가 생겼다면 secondary(복제된) 노드 중 하나가 primary로 promote 되어야 합니다.
이 때, 새로운 primary 노드가 생기는 동안 **모든 쓰기 작업은 사용 불가능한 (NOT available) 상태**가 되므로 MongoDB는 CP system이라고 볼 수 있습니다.
`
};
