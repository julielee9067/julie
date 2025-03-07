import { BlogPost } from "@/lib/types";

export const til20250226: BlogPost = {
    slug: "til/2025-02-26",
    categorySlug: "til",
    title: {
        ko: "2025-02-26",
        en: "2025-02-26",
    },
    date: "2025-02-26 16:22",
    category: {
        ko: "TIL",
        en: "TIL",
    },
    description: {
        ko: "RabbitMQ Temporary queue 사용법",
        en: "How and when to use rabbitMQ temporary queues",
    },
    content: `
데이터 파이프라인에서는 여러 서비스가 각각 다른 역할을 수행하는데, 때때로 **전체 흐름을 거치지 않고 특정 서비스의 결과만 확인**하고 싶을 때가 있다.

예를 들어, A 서비스에서 데이터를 변형하고 B 서비스가 그 데이터를 데이터베이스에 넣는다고 가정해보자. 이때 B 서비스에서 데이터베이스 저장 과정을 생략하고 A 서비스의 결과값을 확인하는 방법은 여러 가지가 있다.

두 서비스가 어떻게 연결되어 있느냐에 따라 방법이 달라질 수 있지만, 만일 RabbitMQ로 연결되어 있다면 크게 이런 방법들이 떠오른다:

 1. **메시지 자체에 flag를 추가**하고 로그에서 결과값을 확인한다. 
    
    메시지에 특정 flag가 있으면 다른 서비스들에서는 해당 메시지를 무시하도록 설정하는 방식이다.
    하지만 이 방법은 다른 서비스들이 메시지를 실제로 읽어야 하므로 메시지 전송량이 증가하고, 결과값을 확인하려면 로그에서 해당 서비스에 대한 메시지를 뒤져야 한다는 단점이 있다.
  
 2. RabbitMQ의 **temporary queue**를 사용한다. 
 
    클라이언트가 연결되어있는 동안만 유지되는 임시 큐를 활용한다.
    API 요청이 들어올 때마다 새로운 임시 큐를 생성하고, A 서비는 해당 큐에 결과값을 보낸다. 
    클라이언트는 이 큐에서 데이터를 읽은 후, 임시 큐를 삭제해서 불필요한 데이터가 쌓이는 걸 막을 수 있다.
 
 
오늘은 2번 방법에 대해 간단히 얘기를 해보겠다.

이 방법을 쓰면 API 요청으로 A 서비스 결과값을 즉시 확인하기가 훨씬 수월해진다.

RabbitMQ에서 temporary queue를 만들 때는 **\`exclusive=True\`나 \`auto_delete=True\`** 같은 옵션을 사용할 수 있는데

\`exclusive=True\`는 **한 connection에서만 접근 가능한 큐**가 되고, 그 connection(혹은 consumer)이 끊어지면 큐가 자동으로 제거된다.

\`auto_delete=True\`는 구독중인 소비자 수가 0이 되면 큐가 제거되는데 여러 consumer가 연결해도 문제가 없다.

그리고 아래 코드에서 콜백 함수가 한 개의 \`Future\`만 사용하기 때문에 동시에 하나의 응답만 받을 수 있다.
그래서 동시에 여러 응답을 처리해야 하는 상황이면, **publish 시점에 메세지마다 correlation_id를 지정**해 주고, \`on_response\` 콜백 함수에서 \`msg.properties.correlation_id\` 값을 확인해 **각 \`Future\`에 매핑**해줘야 한다.
(미리 dictionary를 만들어서 \`key: correlation_id, value: Future\` 식으로 관리)

또한, A 서비스가 제대로 동작하지 않거나, 이미 다루고 있는 메시지 양이 많아 늦을 경우를 대비해 Timeout을 설정해두었다.

아래 코드에서는 요청마다 새로운 큐를 생성하는 구조라서 동시에 많은 요청이 들어오면 큐가 너무 많이 생길 수 있다.
나는 한 번에 많은 양의 요청을 고려하지 않아도 되었었는데, 만약 요청량이 많은 상황이라면 **큐 풀(pool)** 을 구성하거나 하나의 큐를 공유하면서 메세지마다 \`correlation id\`로 구분하면 될 것 같다.

특히 대규모 트래픽에서는:

1. API 요청을 비동기로 처리해 DB에 저장 후 요청 ID를 반환하고, 처리 완료 시 결과를 DB나 캐시에 저장해 별도의 endpoint로 조회
2. 동시에 생성될 수 있는 최대 큐 개수를 제한하고, 요청들을 큐에 분산시켜 처리한다.

이렇게 처리할 수 있지 않을까.. 하는 생각을 했다.

\`\`\`python
# 1. temporary queue 선언: queue=""와 exclusive=True를 지정하면
#    서버가 고유한 큐 이름을 자동으로 생성해주고,
#    연결이 끊기면 해당 큐가 사라진다.
reply_queue = await rabbit.queue_declare(queue="", exclusive=True)
reply_queue_name = reply_queue.queue or ""

# 2. 응답을 비동기로 기다리기 위한 Future 생성
#    (아직 완료되지 않은 작업 결과를 담아둘 그릇이라고 보면 됨)
loop = asyncio.get_running_loop()
response_future = loop.create_future()

# 3. on_response 콜백 함수: 임시 큐에서 메시지를 받으면 처리
async def on_response(msg: aiormq.abc.DeliveredMessage):
    if not response_future.done():
        response_body = msg.body.decode()
        res_data = json.loads(response_body)
        response_future.set_result(res_data)

    await rabbit.basic_ack(msg.delivery.delivery_tag)

# 4. 임시 큐 구독 시작: on_response로 메시지를 처리하도록 설정
consume_ok = await rabbit.basic_consume(reply_queue_name, on_response, no_ack=False)
consumer_tag = consume_ok.consumer_tag

# 5. 메시지 발행: reply_to에 임시 큐 이름을 넣어둬야
#    응답 메시지가 이 큐로 돌아온다.
await rabbit.basic_publish(
    message_body,
    routing_key=routing_key,
    exchange=exchange,
    properties=aiormq.spec.Basic.Properties(
        reply_to=reply_queue_name,
        content_type="application/json",
    ),
)

# 6. 응답을 최대 N초간 기다림
try:
    response_data = await asyncio.wait_for(response_future, timeout=N)
except asyncio.TimeoutError:
    response_data = {"error": "Timed out waiting for response."}

# 7. 소비자 취소 및 임시 큐 삭제
await rabbit.basic_cancel(consumer_tag)
await rabbit.queue_delete(reply_queue_name)
\`\`\`
`,
};

