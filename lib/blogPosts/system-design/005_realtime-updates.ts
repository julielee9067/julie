import { BlogPost } from "@/lib/types";

export const systemDesignRealtimeUpdates: BlogPost = {
    slug: "system-design/realtime-updates",
    categorySlug: "system-design",
    title: {
        ko: "실시간 업데이트",
        en: "Realtime Updates",
    },
    date: "2025-02-28 17:24",
    category: {
        ko: "시스템 디자인",
        en: "System Design",
    },
    description: {
        ko: "실시간 업데이트 처리 시 사용 기술",
        en: "Technologies for realtime updates",
    },
    content: `
## 개요
실무에서 어떤 이벤트가 일어났을 때 이를 사용자에게 **실시간**으로 알려주는 기능은 매우 유용합니다.

예를 들어 채팅 앱에서 메시지를 바로바로 전달하거나, 대시보드에서 현재 상황을 실시간으로 보는 경우가 그렇습니다.
특히 최근 사용자들은 **"무슨 일이 발생하자마자"** 알림을 받는 것에 이미 익숙해져 있습니다.

이 실시간 업데이트를 위해서는 크게 두 구간을 고려해야 합니다.

1. **서버와 클라이언트 간의 연결**  
   (업데이트를 어떻게 클라이언트로 보낼 것인가)

2. **서버가 데이터나 이벤트가 생겼음을 어떻게 감지하고 받아오는가**  
   (업데이트의 소스에서 서버로 어떻게 전달되는가)


이 글에서는 실시간 업데이트를 지원하기 위해 필요한 시스템 디자인의 기술에 대해 조금 얘기해보려고 합니다.

틀린 부분이 있을 수 있으나,, 발견하신다면 이메일 부탁드립니다. :)

---

## 네트워크
기술에 대해 얘기하기 전, 네트워크 배경에 대해 조금 얘기하고 넘어가보도록 하겠습니다.
결국 **실시간성** 문제는 근본적으로 네트워킹 문제이기도 합니다.

먼저 OSI 모델 중 **3계층(네트워크 계층)에는 IP 프로토콜**이 있어서, 데이터를 패킷 형태로 쪼개 네트워크를 통해 전달하고, 지정된 목적지 주소로 보내는 역할을 합니다.
하지만 이 과정에서 패킷이 유실되거나 중복되거나 순서가 뒤바뀔 수 있습니다.

**4계층(전송 계층)에는 TCP/UDP**가 있습니다.

- **TCP**는 연결형 프로토콜로 연결을 맺은 뒤 데이터가 순서대로 안전하게 도착하는 것을 보장합니다.
이 연결을 맺는 과정 자체가 시간이 걸리고, 연결 상태를 서버와 클라이언트가 모두 유지해야 하므로 자원이 필요합니다.

- **UDP**는 비연결형 프로토콜이라 단순히 목적지 주소로 데이터를 뿌리는 방식입니다. 따라서 신뢰성 보장이 없지만 빠르고 가볍습니다.

**7계층(애플리케이션 계층)에서는 DNS, HTTP, WebSockets, WebRTC** 같은 프로토콜이 동작합니다.
이 프로토콜들은 주로 TCP 위에서 돌아가고, 우리가 웹 애플리케이션에서 실시간 업데이트를 고민할 때 직접적으로 다루게 되는 프로토콜입니다.

이 계층 구조가 실제로 동작하는 모습을 예로 들면, 웹 브라우저에서 특정 URL을 입력했을 때 **DNS resolution -> TCP handshake -> HTTP request/response -> TCP 연결 해제** 등 여러 단계가 순차적으로 진행됩니다.

여기서 중요한 점은:

1. 연결을 맺고 끊을 때마다 **추가 지연(latency)** 이 발생하고,  
2. 연결 자체가 **state**(상태)로서 서버와 클라이언트 양쪽에 부담이 된다는 것입니다.

## 로드밸런서
그럼 이제 로드밸런서에 대해 얘기해보겠습니다.

대규모 서비스를 운영할 때는 **로드밸런서** 뒤에 여러 대의 서버를 배치해 트래픽을 분산시키는 것이 일반적입니다.

로드밸런서는 크게 두 가지 유형으로 나뉩니다.

1. **4계층 로드밸런서**  
    
    **TCP/UDP 계층**에서 동작합니다.
    **IP와 포트 번호**만 보고 어디로 트래픽을 보낼지 결정하고, 패킷 내용을 깊이 들여다보지 않습니다.
    
    클라이언트가 TCP 연결을 맺으면 이 로드밸런서가 백엔드 서버 중 하나를 골라 연결을 넘겨줍니다.
    
    이 때 클라이언트 입장에서는 마치 특정 서버와 직접 TCP 연결을 맺은 것처럼 보이므로, WebSocket 같은 장기 연결을 다루기 수월해집니다.

2. **7계층 로드밸런서**
    
    **HTTP와 같은 애플리케이션 레벨의 정보**를 보고 라우팅을 결정합니다.

    예를 들어 **URL 경로, 헤더, 쿠키 정보**를 활용해 "이 요청은 API 서버로 보내자, 저 요청은 static file 서버로 보내자" 와 같은 세밀한 분류가 가능합니다.
    
    그러나 7계층 로드 밸런서는 들어온 연결을 직접 terminate 하고 백엔드 서버와 새로 연결을 맺어야 하므로 WebSocket 같이 **하나의 TCP 연결을 길게 유지** 해야 하는 경우에는 조금 더 복잡해집니다.

실시간 서비스를 설계할 때, **장기 연결(websocket 등)이 많다면 4계층**이, **HTTP 기반 로직(long polling 등)이 다양하다면 7계층**이 편리할 수 있습니다.

---

## 클라이언트에서 업데이트 받는 방법
서버가 클라이언트에게 **(근)실시간으로** 정보를 전달하려면 어떤 기법을 쓸 수 있을까요?  

예를 들어 채팅 앱에서 새 메시지를 빠르게 전달하는 상황을 생각해 봅시다.

### Simple Polling
가장 간단한 방식인 **폴링(polling)** 입니다.

이 방법은 일정 간격으로 클라이언트가 서버에게 **"새 메시지가 왔는지"** 물어보는 것입니다.
이건 엄밀히 말해 **실시간**은 아니지만, 개념이 간단하고 구현하기도 쉽습니다.

1. 클라이언트는 **주기적으로** HTTP 요청을 보내 새 데이터가 있는지 확인합니다.
2. 서버는 해당 요청을 받을 때마다 DB에서 **아직 읽지 않은 메시지**를 조회해 응답합니다.

구현이 쉽고, 특별한 인프라 없이도 가능하며, 서버 입장에서 상태 관리를 할 필요가 거의 없다는 장점이 있습니다.

하지만 폴링 주기가 길면 업데이트가 늦게 도착하고, 짧으면 서버와 DB의 부하가 커집니다.
그리고 업데이트가 아주 빨리 이루어져야 하는 경우엔 원하는 만큼 실시간에 가깝게 처리하기 어렵습니다.

> 폴링 시에는 \`HTTP Keep-Alive\`를 사용해 매번 연결을 새로 만드는 오버헤드를 줄일 수 있습니다.

### Long Polling
**롱 폴링(Long Polling)** 은 폴링보다 **실시간성이 더 높은** 접근법입니다. 그래도 HTTP 프로토콜을 그대로 사용하므로 브라우저나 방화벽과 잘 호환됩니다.

1. 클라이언트가 서버에 요청을 보내면 서버는 새 데이터가 생길 때까지 응답을 지연합니다.
(마치 서버가 요청을 **오래 처리하고 있는 것처럼** 보이게 합니다.)

2. 데이터가 생기면 서버가 응답을 보내고, 클라이언트는 **즉시 다시 새로운 롱 폴링 요청**을 보냅니다.

3. 데이터가 없으면 일정 시간 후에 빈 응답을 보내고, 클라이언트가 다시 요청을 보내도록 유도합니다.

채팅 앱이라고 생각해보면, **새 메시지가 생길 때까지 대기했다가, 생기면 응답을 보내고 연결을 끊은 후 다시 연결한다** 라고 할 수 있습니다.

이 방법은 폴링보다 **지연 시간은 훨씬 줄어든다**는 장점이 있지만, 이벤트가 잦을 경우 메시지가 연달아 들어오는 사이에 **첫 번째 응답 -> 연결 끊기 -> 다음 연결 맺기** 과정이 누적되어 latency가 더 커질 수 있습니다.

또한, 브라우저에서 도메인별로 **열 수 있는 연결 수가 제한**되어 있기 때문에, 많은 롱 폴링 연결을 동시에 유지하기는 까다로운 편입니다.

### SSE (Server-Sent Events)
**SSE**는 하나의 **스트림(연속된 응답)** 을 통해 여러 이벤트를 지속적으로 전송할 수 있도록 한 HTTP 확장 기능입니다.

일반적인 HTTP 응답에는 \`Content-Length\` 헤더가 있어 응답 크기를 미리 알려주지만, 
SSE에는 \`Transfer-Encoding: chunked\`를 이용해 응답을 여러 덩어리로 나눠 전송합니다.

클라이언트는 **언제 끝날지 모르는 응답**을 계속 수신할 수 있고, 서버는 이벤트가 생길 때마다 새 데이터만 던져줄 수 있습니다.

**단방향 통신 (서버 -> 클라이언트)** 에 주로 사용되며, 브라우저에서 \`EventSource\` 객체를 사용해 간단히 구현 가능합니다.

또한 HTTP를 사용해 방화벽 우회가 쉽고, **재연결 로직이 포함**되어 있어 비교적 안정적이라는 장점이 있습니다.

하지만 일부 구형 브라우저나 네트워크 환경에서 스트리밍을 지원하지 않아 문제가 될 수도 있습니다. 
많은 프록시나 로드밸런서는 이런 스트리밍 response를 지원하지 않는데, 중간에 proxy가 SSE를 지원하지 않아서 **응답을 버퍼링하는 경우 (응답이 다 도착할 때까지 프록시가 기다림)** 가 생길 수도 있습니다.

또한 브라우저 도메인 별 연결 제한이 있다는 점도 롱 폴링과 마찬가지입니다.

> **AI 챗봇**에서 서버가 생성한 텍스트를 실시간으로 조금씩 출력할 때, SSE를 많이 활용합니다.

### WebSocket
**WebSocket**은 **양방향, 전이중** 통신을 할 수 있는 프로토콜입니다.

클라이언트와 서버가 서로 데이터를 주고받을 수 있고, 둘 다 능동적으로 메시지를 보낼 수 있습니다.
채팅처럼 **빈번한 양방향 통신이 필요**한 경우에는 사실상 웹소켓이 정석에 가깝습니다. (채팅 서비스 디자인 포스트 참고)

웹소켓은 HTTP 위에서 \`Upgrade\` 헤더로 프로토콜을 전환한 뒤, **하나의 TCP 연결**을 계속 유지합니다.
덕분에 HTTP 쿠키 등을 재사용해 인증 정보를 전달하기도 쉽습니다. 

연결을 맺으면 클라이언트와 서버 모두 자유롭게 메시지를 보낼 수 있고, 메시지는 텍스트나 바이너리 형태로 전송할 수 있어 JSON이나 protobuf 등 원하는 자료형식으로 보내면 됩니다.

단, 웹소켓 연결을 중간에서 지원하지 않는 로드밸런서나 프록시가 있으면 문제가 생길 수 있습니다.

그리고 웹소켓은 장기 연결을 유지하기 때문에 **서버 단에서 이 연결을 어떻게 관리하고 로드 밸런싱은 어떻게 할 것이냐**가 과제가 됩니다.

**서버를 재배포하거나 scale out 할 때**도 **기존 연결이 끊기는 상황**을 어떻게 처리할지 고민해야 합니다.
또, 연결이 끊어지면 **재연결 로직**도 구현해두어야 합니다.

고빈도 양방향 통신이 필요하다면 웹소켓이 최적입니다.

> 너무 자주 쓰이지 않는 간단한 “알림” 수준(**수신만 빠르면 되고 요청은 가끔만 보내면 되는**) 이면 SSE나 롱 폴링 + HTTP POST를 병행해도 충분할 수 있습니다.

### WebRTC
**WebRTC**는 브라우저 간 **직접(P2P) 통신**을 가능케 하는 프로토콜입니다.

화상/음성 통화나, 일부 P2P 데이터 교환을 위해 주로 쓰입니다.

단순 서버 -> 클라이언트 방식이 아니라 서로 다른 **클라이언트들이 직접 연결**을 맺게 해주므로 미디어 스트리밍에 유용합니다.

하지만 대부분 **NAT, 방화벽** 등으로 인해 외부에서 직접 브라우저로 연결이 들어오는 것을 막고 있으므로 WebRTC는 STUN/TURN이라는 방식을 사용합니다.

**STUN**은 NAT을 뚫고 **공개적으로 접근 가능한 주소/포트를 찾아내는 기법**이고, **TURN**은 **중간에 릴레이 서버를 세워서 직접 통신이 불가능할 때 우회**할 수 있게 해줍니다.

또, **시그널링 서버**라는 것이 필요한데 이건 P2P 연결을 맺을 두 브라우저가 서로를 찾고 연결 정보를 주고받을 수 있게 **중개**해주는 역할입니다.

WebRTC는 구현이 꽤 복잡하지만 대규모 화상회의나 각 클라이언트가 서로 데이터를 주고받아야하는 특별한 상황이면 WebRTC가 유일한 대안이 됩니다.

### 요약
- **지연이 크게 중요치 않을 경우**: 단순 폴링  
- **더 빠른 실시간**: 롱 폴링, SSE  
- **양방향 통신**이 필요할 때: WebSocket  
- **화상/음성 통화, P2P 구조**가 필요할 때: WebRTC

---

## 서버에서 업데이트 받는 방법
앞서 클라이언트에게 어떻게 실시간 업데이트를 보낼지 설명했습니다.  

그런데 그 이벤트는 **어디서 발생하며**, **서버는 어떻게 그걸 감지해서 받았을까**요?

#### Pull vs Push vs Pub/Sub
1. **Pull**: 서버가 **주기적으로** 데이터 소스(DB 등)을 폴링해 “새로운 데이터가 있습니까?”를 묻는 방식  
2. **Push**: 데이터가 생기면 소스가 **서버에게 직접** 알려주는 방식  
3. **Pub/Sub**: 중앙에 브로커(예: Redis Pub/Sub, Kafka)를 두고, **발행-구독** 형태로 업데이트를 전달

### Simple Polling
클라이언트와 비슷하게, 가장 간단한 방법은 서버가 일정 간격으로 DB나 다른 시스템을 조회해 **새로운 데이터가 있니?** 하고 물어보는 것입니다.

이 경우 실시간성이 떨어지고 필요 없는 조회가 많아질 수 있지만, 구현이 쉽다는 장점이 있습니다.
DB만 있으면 누구든지 쓸 수 있고, 특정 메시지 브로커나 복잡한 consumer 로직 없어도 동작합니다.

예를 들어 채팅 메시지가 다른 서비스에서 들어온다면 서버가 1초마다 DB를 조회해 새 메시지가 있으면 클라이언트에게 메시지를 보낼 수 있습니다.

엄청나게 빠른 반응이 필요없다면 이 방법도 괜찮은 방식이지만, 폴링 주기를 짧게 잡으면 DB 부하가 커지고 길게 잡으면 실시간성이 떨어진다는 단점이 있습니다.

### Consistent Hashing
서버가 직접 클라이언트로 푸시하려면, **어떤 클라이언트가 어느 서버에 연결되어 있는지**를 알아야 합니다.

> 예: 사용자 \`julie\`가 연결된 서버를 찾아야, 그 서버에 \`julie\`에게 보낼 메시지를 전달할 수 있습니다.

단순하게 \`user_id % 서버개수\` 같은 방식으로 해시를 해서 특정 서버에 연결시키는 방법이 있지만, 서버를 스케일링할 때, N이 바뀌면 \`ID % N\`의 계산 결과가 전부 달라진다는 단점이 있습니다.
이러면 유저 대부분이 다른 서버로 옮겨가야 하고, 혼란이 커질 수 있습니다. 

그래서 이를 보완하는 것이 **Consistent Hashing**입니다.

해시 링을 만들어 서버와 유저를 모두 링 위에 매핑한 뒤, 어떤 서버가 추가되거나 빠져도 링에서 가까운 구간만 영향을 받도록 하는 형식입니다.

Consistent hashing을 사용하면 서버를 한 대 더 추가해도 특정 구간의 유저만 새 서버로 옮기면 되므로 전체 유저가 다 재접속할 필요가 없다는 장점이 있습니다.

다만 구현이 까다롭고, 중간에 zookeeper같은 **조율 시스템이 필요**합니다.
서버마다 **어떤 유저를 담당하는지** 정보를 공유해 줘야 하고, 서버가 죽으면 그 몫을 다른 서버가 가져가야 하는 등의 작업을 관리해야 합니다.

하지만 연결 하나하나를 담당하는 서버가 명확해지므로 그 연결 상태를 한 서버가 유지하면서 일처리하기가 편합니다.
단점은 **서버가 다운되면 담당하던 연결이 한꺼번에 끊기고, 이를 다시 분산 처리**해야 한다는 점입니다.

### Pub/Sub
**Pub/Sub** 모델을 쓰면, 굳이 “어느 서버가 어느 유저를 담당하나?”를 크게 신경 쓰지 않아도 됩니다.

중앙에 **Redis pub/sub**이나 **Kafka**를 두고, 이벤트가 발생하면 특정 topic에 메시지를 **publish** 하면, 이 토픽을 **subscribe** 하는 서버들이 그 메시지를 받아서 처리하는 구조입니다.

그냥 클라이언트가 A서버에 붙든 B 서버에 붙든, **"나 유저 C 토픽 구독할래"** 라고 말해두면 관련 메시지가 도착했을 때 그 서버가 받아서 연결된 클라이언트에게 전달합니다.

이런 구조의 장점은 서버 확장이 비교적 쉽고, 연결에 대한 상태를 가볍게 유지할 수 있고, 브로드캐스트 형태처럼 다수 구독자에게 동시에 이벤트를 보내기도 용이하다는 점입니다.

단점은 pub/sub 시스템 자체가 병목이 되거나 장애가 났을 시 전체 알림 전송에 문제가 생길 수 있다는 것입니다.
또한 서버가 많아질수록 pub/sub 노드와 서버들이 맺는 연결이 많아질 수 있습니다.

> 구글 문서 편집처럼 대규모로 메시지를 뿌려야 할 때 사용하는 것도 괜찮습니다.

## 마무리
실시간 업데이트를 어떻게 구현할지 고민할 때, **엄청난 실시간성이 꼭 필요하지 않다면** 우선 **간단한 폴링**부터 시도하는 게 좋습니다.
불필요하게 복잡한 솔루션을 도입하면 다른 중요한 문제를 놓칠 가능성이 있습니다.

**서버 -> 클라이언트 통신**은 롱 폴링, SSE, WebSocket 등이 흔히 쓰이고, 상황에 따라 WebRTC가 필요하기도 합니다.

**서버 측 이벤트 감지는 Pub/Sub**을 많이 쓰며, 연결 상태가 방대하면 Consistent Hashing 같은 방법도 고려할 수 있습니다.

다음엔 **빅데이터**에 대한 글을 써보도록 하겠습니다. 감사합니다!
`
};
