import { BlogPost } from "@/lib/types";

export const csAsyncSyncBlockingNonblocking: BlogPost = {
    slug: "cs/async-vs-sync",
    categorySlug: "cs",
    title: {
        ko: "동기 vs 비동기",
        en: "Sync vs. Async",
    },
    date: "2025-03-04 21:14",
    category: {
        ko: "컴퓨터 공학",
        en: "Computer Science",
    },
    description: {
        ko: "동기 비동기 프로그래밍 차이 + 블락킹 논블락킹",
        en: "Differences between sync vs. async programming + blocking vs. non-blocking",
    },
    content: `
저는 지금까지 주로 Python을 이용해 개발해왔고, Django와 Flask 등 여러 프레임워크를 사용했지만, 최근엔 FastAPI를 사용해 엔드포인트를 만드는 일이 많아졌습니다.

FastAPI의 가장 큰 차별점 중 하나는 **비동기 엔드포인트**를 기본적으로 지원한다는 점인데, 
오늘은 과연 **비동기**와 **동기**의 차이가 뭔지, 그리고 그와 더불어 **blocking**과 **non-blocking**의 차이가 무엇인지 알아보도록 하겠습니다.

## 1. 동기 (Synchronous) vs. 비동기 (Asynchronous)
### 동기 (Synchronous)
**작업을 하나씩 순차적으로 처리**하는 것입니다.
한 작업이 끝나야지만 다음 작업을 처리할 수 있습니다.

이는 요리를 할 때 한 요리가 완성될 때 까지 다음 요리를 시작하지 않는 것과 비슷합니다.

\`\`\`python
import time

  def boil_water():
      print("물 끓이는 중...")
      time.sleep(3)  # 3초 동안 물을 끓입니다.
      print("물 끓음!")

  def make_tea():
      print("차 우려내는 중...")
      time.sleep(2)  # 2초 동안 차를 우려냅니다.
      print("차 완성!")

  def main():
      # 순차적으로 실행: 물을 끓이고 그 후 차를 만듭니다.
      boil_water()
      make_tea()

  main()
\`\`\`
이 방식에서는 물 끓이기가 끝나야 차 만들기를 시작할 수 있으므로, 전체 시간이 5초(3초 + 2초) 걸립니다.

### 비동기 (Asynchronous)
**작업을 동시에 처리**할 수 있고, 특정 작업을 진행하는 동안 다른 작업도 병행할 수 있습니다.

요리할 때, 물이 끓는 동안 다른 반찬을 준비하는 것과 같습니다.

\`\`\`
import asyncio

async def boil_water():
    print("물 끓이는 중...")
    await asyncio.sleep(3)  # 3초 동안 기다리지만, 이 시간에 다른 작업을 수행할 수 있습니다.
    print("물 끓음!")

async def make_tea():
    print("차 우려내는 중...")
    await asyncio.sleep(2)  # 2초 동안 기다리지만, 동시에 다른 작업이 가능합니다.
    print("차 완성!")

async def main():
    # 두 작업을 동시에 실행합니다.
    await asyncio.gather(boil_water(), make_tea())

asyncio.run(main())
\`\`\`
이 경우, 두 작업이 동시에 진행되므로 전체 실행 시간은 가장 긴 작업인 3초 정도로 줄어듭니다.

## 2. Blocking vs. Non-Blocking
### Blocking
어떤 **작업이 완료될 때까지 프로그램의 진행이 멈추고**, 다른 작업을 수행하지 못하는 상태입니다.

우체국에서 한 사람씩 창구에서 업무를 처리하는 것처럼, 한 사람이 업무를 마칠 때까지 다음 사람이 대기하는 상황과 비슷합니다.

\`\`\`
import time

print("처리 시작")
time.sleep(2)  # 이 동안 프로그램은 아무 작업도 못합니다.
print("처리 완료")
\`\`\`

### Non-Blocking
작업 요청 후, 그 **결과를 기다리지 않고 바로 다른 작업을 진행**할 수 있는 방식입니다.

자동 발권 기계처럼, 티켓을 구매하는 동안에도 다른 일을 할 수 있는 상황과 비슷합니다.

\`\`\`
import asyncio

async def non_blocking_example():
    print("처리 시작")
    await asyncio.sleep(2)  # 이 시간 동안 이벤트 루프가 다른 작업들을 처리할 수 있습니다.
    print("처리 완료")

asyncio.run(non_blocking_example())
\`\`\`
여기서는 2초의 대기 시간이 있지만, 그 동안 다른 비동기 작업을 동시에 실행할 수 있으므로 프로그램 전체가 멈추지 않습니다.

#### 이벤트 루프
이벤트 루프는 비동기 작업들을 관리하고, 예약된 작업들을 순서대로 실행하는 **중앙 관리 시스템**입니다.

요리로 비유해보면 주방장의 역할과 같습니다. 주방장은 각 요리의 상태를 확인하고, 준비가 완료되면 즉시 다음 작업을 실행하게 합니다.

## 마무리
아마 동기와 blocking의 차이, 비동기와 non-blocking의 차이에 대해 헷갈릴 수 있을 것 같습니다.

실제로 동기 방식의 코드에는 보통 blocking 호출이 함께 사용되기 때문에 두 개념이 같이 나타나지만, 쉽게 말하면 **동기**는 **작업의 처리 순서**에 관한 개념이고, **blocking**은 **실행이 중단되는 상황**을 설명합니다.

- 동기: 먼저 A 작업을 수행한 후, 그 다음에 B 작업을 수행
- Blocking: 특정 작업이 완료될 때까지 다음 작업이 실행되지 않는 상태

비동기와 non-blocking을 잘 활용하면 I/O 작업 중에도 다른 작업을 수행할 수 있어 자원을 효율적으로 사용할 수 있으며, 여러 요청을 동시에 처리할 수 있기 때문에 동시 접속자가 많을 때 성능이 향상됩니다.
`
};
