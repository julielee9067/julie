import { BlogPost } from "@/lib/types";

export const cnSDN: BlogPost = {
    slug: "computer-networks/sdn",
    categorySlug: "computer-networks",
    title: {
        ko: "SDN",
        en: "Software Defined Networking",
    },
    date: "2025-04-06 12:51",
    category: {
        ko: "컴퓨터 네트워크",
        en: "Computer Networks",
    },
    description: {
        ko: "소프트웨어 정의 네트워킹",
        en: "Software Defined Networking",
    },
    content: `## 1. Software Defined Networking 개요
- 등장 배경
    - 네트워크 장비(router, switch, middlebox, etc)의 다양성
    - 장비 소프트웨어의 독점(propriety) 구조
    - 네트워크 관리의 복잡성, 혁신 속도 저하, 비용 증가
- 핵심 아이디어
    - control plane과 data plane을 분리
    - 제어 기능은 software(controller)에서, 데이터 전송(forwarding) 기능은 장비(router/switch)에서 담당
    - 네트워크를 소프트웨어적으로 정의/제어

## 2. 역사
### 2.1 Active netwroks (mid 1990s - early 2000s)
1. 등장 배경
    - 인터넷 보급/확장 → 서비스 개선 위한 새로운 아이디어 요구 증가
    - IETF 표준화 과정 지연에 대한 연구자들의 불만
    - 네트워크 자원/노드에 대한 프로그래밍 인터페이스(network API) 개방 시도
2. 주요 특징
    - **Clean slate** 접근: 네트워크 코어를 적극적으로 재설계하려 함
    - 두 가지 프로그래밍 모델
        - **캡슐 모델**: 실행 코드를 패킷에 함께 싣고 다님 (in-band)
        - **프로그래머블 라우터/스위치 모델**: 코드 배포가 out-of-band 방식
    - **기술적 추진 요인 (technology push)**
        - 계산 비용 감소, 프로그래밍 언어 발전, 빠른 코드 컴파일, DARPA 등 자금 지원
    - **수요 견인 (use pull)**
        - 네트워크 서비스 개발/배포 속도 개선(provider needs), third-party companies의 세밀한 제어 욕구, 연구자들의 대규모 실험 니즈, 미들박스 통합 관리
    - 공헌점
        - 네트워크 내 **programmable 기능**으로 혁신 장벽 낮춤
        - **네트워크 가상화** 기반 (packet header 별 software demultiplexing)
        - **middlebox orchestration** 통합 아키텍처 비전 제시
3. 한계
    - 당시 현실과 동떨어진 급진적 아이디어 (end user가 Java code 작성)
    - 성능/보안 우려, 단기 실효성 부족 → 대규모 상용 배포 실패
    - 이후 control plane과 data plane 분리를 더욱 명확히 한 연구로 발전
    
### 2.2 Control plane과 data plane 분리 (2001 - 2007)
1. 배경
    - 인터넷 트래픽 증가, 안정성/성능/신뢰성 요구 상승
    - 네트워크 운영자: 트래픽 엔지니어링 등 고급 관리 기능 필요
    - 기존 router/switch: 제어와 데이터가 한 장비 안에 밀접 결합 → 유연성 부족
2. technology push
    - 백본 링크 속도 향상 → packet forwarding이 전용 하드웨어로 분리
    - ISP 규모/서비스 확대 → 더 나은 관리가 필요
    - 서버 성능 향상 → 한 서버가 ISP 전역 라우팅 상태를 저장/계산 가능
    - 오픈소스 라우팅 SW → 중앙 집중 라우팅 컨트롤러 구현 장벽을 낮춤
3. 혁신 요소
    - **Open interface** (control plane과 data plane 사이)
    - **논리적 중앙집중식 제어** (controller)
4. use pull
    - 트래픽 부하 기반 경로 선택, 라우팅 변경 시 장애 최소화
    - 공격 트래픽 차단/우회, 고객에게 세밀한 흐름 제어 제공, 부가가치 VPN 서비스 등
5. 결과
    - distributed state management 중요성 부각
    - 컨트롤러 장애 우려나 네트워크 상태 동기화 문제 제기 → 이후 프로젝트로 이어짐
    - **OpenFlow** 등장 전초기

### 2.3 OpenFlow와 네트워크 OS (2007 - 2010)
1. OpenFlow 탄생 배경
    - 대규모 네트워크 실험 수요
    - 완전한 프로그래밍 가능성 vs. 하드웨서 활용의 실용성 사이 균형
    - 기존 스위치 하드웨어를 크게 바꾸지 않고, 펌웨어 업그레이드로 지원 가능
2. OpenFlow switch 동작
    - 스위치: **패킷 처리 규칙 (Flow Entry) 테이블** 보유
    - 각 규칙: **패턴, 액션, 카운터, 우선순위**
    - 스위치가 패킷 수신 → **우선순위 가장 높은 규칙** 매칭 → 액션 수행 + 카운터 증가
3. technology push
    - switch 칩셋 제조사의 제한적 프로그래밍 허용
    - 하드웨어 의존도↓, 다양한 업체가 스위치 시장에 참여
    - OpenFlow는 **기존 스위치 기능을 재활용** → 배포 용이
4. use pull
    - 연구용 테스트베드에서 실험
    - 데이터센터 대규모 트래픽 관리
    - 독점적 스위치 대안으로 오픈형 컨트롤 + 범용 스위치 조합 선호
5. 영향
    - 네트워크 장치/기능의 일반화
    - **네트워크 운영체제 (network OS)** 개념 부각
    - 분산 상태 관리 기술 발전

## 3. 왜 Data plane과 Control plane을 분리하는가?
1. 전통적 구조: 라우터가 스스로 라우팅 알고리즘 실행 → 포워딩 테이블 생성 → 하드웨어로 패킷 전달
2. SDN 구조: **remote controller**가 전역 정보를 바탕으로 라우팅 결정 → 각 라우터(스위치)에 포워딩 테이블 배포 → 라우터(스위치)는 지시받은 규칙대로 패킷 전달만 수행
3. 장점
    - **독립적 진화**: 하드웨어(포워딩)와 소프트웨어(제어)가 각각 빠르게 발전 가능
    - **상위 레벨 소프트웨어 제어**: 고수준 프로그램으로 네트워크 정책/라우팅 정의 및 디버깅 용이
4. 활용 예시
    - 대형 데이터센터의 수천-수만 대 서버/VM 관리 자동화
    - 라우팅의 기존 BGP 한계 극복
    - enterprise 보안: DDoS 공격 트래픽을 네트워크 특정 지점에서 효과적으로 드롭
    - 연구 네트워크의 실험 트래픽과 프로덕션 트래픽 분리

## 4. Control plane과 Data plane 개념
- **Forwarding = Data plane**
    - 패킷을 어떤 출력 포트로 내보낼지 결정 (나노초 단위)
    - 하드웨어 기반, 개별 라우터의 로컬 동작
- **Routing = Control plane**
    - 출발지 → 목적지 까지 경로 결정 (초 단위)
    - 라우팅 알고리즘 사용, 네트워크 전역 고려, 일반적으로 소프트웨어 깁나

## 5. SDN 아키텍처
1. **SDN-controlled network elements (Infra layer)**
    - SDN control plane에서 전달한 규칙에 따라 실제 트래픽 포워딩 담당
2. **SDN controller**
    - 논리적으로 중앙집중된 entity
    - 네트워크 장비와 네트워크 제어 애플리케이션 사이를 중재
3. **네트워크 제어 애플리케이션**
    - 컨트롤러가 수집한 네트워크 상태 정보를 바탕으로 정책/규칙 결정, 장비 제어
    - ex) traffic engineering, security, automation, analysis, etc
4. SDN의 네 가지 특징
    1. **플로우 기반 포워딩**: IP 주소 뿐 아니라 여러 헤더 필드를 기준으로 규칙 설정
    2. **Data plane과 control plane 분리**: 스위치는 규칙 실행만, 컨트롤러는 규칙 계산
    3. **네트워크 제어 기능**: 컨트롤러가 네트워크 전체 상태를 저장/제공, 애플리케이션이 이를 활용
    4. **programmable network**: 애플리케이션이 원하는 로직을 쉽게 구현

## 6. SDN controller 아키텍처
1. **communication layer**
    - controller ↔ 네트워크 장비 간 통신 담당
    - southbound interface (e.g., OpenFlow)
2. **network-wide state-management layer**
    - 호스트/링크/스위치 등 네트워크 전체 상태 + 플로우 테이블 사본 보관
    - 애플리케이션이 네트워크 구성 시 참고
3. **network control application layer과의 인터페이스**
    - northbound interface (e.g., REST API)
    - 애플리케이션은 컨트롤러 상태 DB에 읽기/쓰기, 이벤트 수신 후 대응
4. **분산 컨트롤러 구현**
    - 대규모 트래픽, 장애 대응 위해 여러 서버에 컨트롤러 분산 실행
    - 동기화 이슈 있지만 OpenDayLight, ONOS 등에서 해결



 

`,
};

