import { BlogPost } from "@/lib/types";

export const cnHostsAndNetworks: BlogPost = {
    slug: "computer-networks/hosts-and-networks",
    categorySlug: "computer-networks",
    title: {
        ko: "계층별 장치와 스패닝 트리 알고리즘",
        en: "Layer Devices and Spanning Tree Algorithm",
    },
    date: "2025-02-23",
    category: {
        ko: "컴퓨터 네트워크",
        en: "Computer Networks",
    },
    description: {
        ko: "물리, 데이터링크, 네트워크 계층의 장치들과 네트워크 간 연결 방법",
        en: "L1, L2, L3 devices and interconnecting hosts",
    },
    content: `
컴퓨터 네트워크에는 호스트 간 연결을 제공하거나 서로 다른 네트워크를 연결하는 다양한 장치들이 존재합니다.
이러한 장치들은 서로 다른 계층에서 동작하며, 각각 고유한 기능과 한계를 가지고 있습니다.

## 계층별 장치
### 물리 계층 (L1) 장치: 리피터(Repeater)와 허브(Hub)
리피터와 허브는 **물리 계층**에서 동작하는 장치로, **디지털 신호를 수신하고 그대로 재전송하여 ethernet 세그먼트 간 연결을 제공**합니다.

**리피터**는 신호가 약해지는 것을 방지하기 위해 신호를 증폭하여 전달하는 역할을 합니다.

**허브**는 여러 호스트를 물리적으로 연결하는 장치로, 수신된 데이터를 네트워크에 연결된 모든 장치로 전달합니다.

이런 장치들은 대부분 **단순하고 저렴하며, 계층적으로 구성할 수 있다는 장점**이 있습니다. 
하지만, **연결된 모든 호스트가 동일한 충돌 도메인(Collision domain)에 족하게 되어 하나의 링크를 공유하는 방식으로 데이터 충돌이 발생할 가능성이 높습니다.**

### 데이터 링크 계층 (L2) 장치: 브릿지(Bridge)와 L2 스위치(L2 Switch)
브릿지와 스위치는 **데이터링크 계층**에서 동작하며, **MAC 주소를 기반으로 패킷을 전달**하는 역할을 합니다.

**브릿지**는 두 개의 네트워크 세그먼트를 연결하며 수신한 패킷의 MAC 주소를 확인하여 적절한 포트로 전달합니다.

**L2 스위치**는 여러 개의 포트를 가지고 있으며, 각 포트마다 MAC 주소를 학습하여 목적지 MAC 주소에 따라 패킷을 전송합니다.

이 장치들은 **직접 연결되지 않은 호스트 간의 통신을 가능**하게 하며, 네트워크 충돌을 줄이는 역할을 합니다.
하지만 출력 포트의 대역폭이 제한되어 있어 **트래픽 도착 속도가 출력 용량을 초과하면 버퍼링이 필요**하며, **버퍼가 가득 차면 패킷 손실이 발생**할 수 있습니다.

#### 학습 브릿지 (Learning Bridge)
브릿지는 여러 개의 입출력을 가지고 있는데, 모든 프레임을 무조건 전송하는 것이 아니라 학습 과정을 통해 목적지에 따라 프레임을 선택적으로 전달할 수 있습니다.

이를 위해 **포워딩 테이블**을 유지하며 프레임이 불필요한 포트로 전달되는 것을 방지합니다.\n

**브릿지의 프레임 전달 방식**
1. 브릿지는 처음에 모든 포트를 통해 프레임을 전달합니다. (Unknown unicast)
2. 수신된 프레임의 출발지 주소를 확인해서 **해당 호스트가 어느 포트에 위치하는지 학습**합니다.
3. 포워딩 테이블을 구축해서 이후엔 필요한 포트로만 프레임을 전달합니다.
4. 동일한 포트에 있는 호스트 간의 통신은 해당 포트 내에서만 처리하여 네트워크 트래픽을 최적화합니다.

#### 스패닝 트리 알고리즘과 루프 방지
브릿지를 사용하여 LAN을 확장하는 경우 **네트워크 내에 루프가 발생하면 패킷이 무한히 순환하는 문제가 발생**할 수 있습니다.
이는 브릿지가 들어오는 프레임을 여러 개의 포트로 중복 전송하면서 발생하는 현상입니다.

이 문제를 해결하기 위해 **스패닝 트리 알고리즘**을 사용할 수 있습니다. 
이 알고리즘은 **네트워크 토폴로지를 트리 형태로 변환**하여 루프를 제거하는 역할을 합니다.

스패닝 트리 알고리즘은 아래와 같이 동작합니다.
1. 모든 브릿지가 초기에는 자신을 루트로 간주하고 메시지를 보냅니다.
2. 네트워크 내에서 가장 작은 ID를 가진 브릿지가 루트 브릿지로 선택됩니다.
3. 각 브릿지는 루트까지의 최단 경로를 찾고, 그 정보를 업데이트하여 공유합니다.
4. 루프를 방지하기 위해 일부 링크(포트)가 비활성화 됩니다.
5. 결과적으로 트리 구조가 형성되며 패킷 루프 문제가 해결됩니다.

### 네트워크 계층 (L3) 장치: 라우터(Router)와 L3 스위치 (L3 Switch)
라우터와 L3 스위치는 **IP 주소를 기반으로 서로 다른 네트워크 간의 데이터 전달을 수행**합니다.
이 장치들은 네트워크를 여러 개의 서브넷으로 분할하여 트래픽을 효율적으로 관리할 수 있도록 도와주고, **라우팅 프로토콜을 사용하여 패킷을 최적의 경로로 전달**합니다.

**라우터**는 IP 주소를 확인하여 최적의 경로를 선택하고, 패킷을 전달하는 기능을 수행합니다.

**L3 스위치**는 라우팅 기능이 포함된 스위치로, 일반적인 L2 스위치보다 더 빠른 속도로 IP 패킷을 전달할 수 있습니다.

`,

};

