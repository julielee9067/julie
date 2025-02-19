import { BlogPost } from "@/lib/types";

export const csProcessThread: BlogPost = {
    slug: "cs/process-thread",
    categorySlug: "cs",
    title: {
        ko: "프로세스와 스레드의 차이",
        en: "Process vs Thread",
    },
    date: "2024-02-19",
    category: {
        ko: "컴퓨터 공학",
        en: "Computer Science",
    },
    description: {
        ko: "프로세스와 스레드에 대한 차이점 및 개념 설명",
        en: "Differences between processes and threads.",
    },
    content: `
프로세스와 스레드는 운영체제에서 가장 기본적인 개념 중 하나입니다. 이 두 개념의 차이점을 자세히 알아보겠습니다.

## 프로세스 (Process)

프로세스는 실행 중인 프로그램의 인스턴스입니다. 각 프로세스는 다음과 같은 특징을 가집니다:

- 독립된 메모리 공간 (Code, Data, Stack, Heap)
- 운영체제로부터 할당받은 시스템 자원
- 최소 1개의 스레드 (메인 스레드) 포함

\`\`\`c
// 프로세스 생성 예제
#include <unistd.h>

int main() {
    pid_t pid = fork();  // 새로운 프로세스 생성

    if (pid == 0) {
        // 자식 프로세스
        printf("Child process\\n");
    } else {
        // 부모 프로세스
        printf("Parent process\\n");
    }
    return 0;
}
\`\`\`

## 스레드 (Thread)

스레드는 프로세스 내에서 실행되는 작업의 단위입니다:

- 프로세스 내의 메모리 공간 공유
- 독립적인 스택과 레지스터 보유
- 빠른 컨텍스트 스위칭

\`\`\`java
// 자바에서 스레드 생성 예제
public class ThreadExample extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        ThreadExample thread = new ThreadExample();
        thread.start();
    }
}
\`\`\`

## 주요 차이점

| 특징             | 프로세스  | 스레드       |
|-----------------|---------|------------|
| 메모리 공간       | 독립적    | 공유         |
| 통신 비용        | 높음     | 낮음         |
| 컨텍스트 스위칭    | 무거움    | 가벼움        |
| 안정성           | 높음     | 상대적으로 낮음  |

### 메모리 구조

\`\`\`plaintext
프로세스 메모리 구조:
+------------------+
|       Stack      |  <- 각 스레드마다 독립적
|        ↓         |
|        ↑         |
|       Heap       |  <- 공유
|------------------|
|       Data       |  <- 공유
|------------------|
|       Code       |  <- 공유
+------------------+
\`\`\`

## 실제 사용 사례

1. **멀티 프로세스**
   - 웹 브라우저의 탭
   - 데이터베이스 서버
   - 운영체제 서비스

2. **멀티 스레드**
   - 웹 서버의 요청 처리
   - 게임의 렌더링과 물리 연산
   - UI 응답성 유지
  `,
};

