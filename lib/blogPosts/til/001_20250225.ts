import { BlogPost } from "@/lib/types";

export const til20250225: BlogPost = {
    slug: "til/2025-02-25",
    categorySlug: "til",
    title: {
        ko: "2025-02-25",
        en: "2025-02-25",
    },
    date: "2025-02-25 16:57",
    category: {
        ko: "TIL",
        en: "TIL",
    },
    description: {
        ko: "Mongo Atlas full-text search에서 search node가 여러 개일 때 발생하는 문제",
        en: "How Multiprocessing and Multithreading Work in Python",
    },
    content: `
Mongo Atlas Search에서 full-text search를 사용할 때 여러 search node로 쿼리를 분산시킬 수 있다.
그런데 쿼리를 실행할 때마다 **어느 search node를 사용하냐에 따라 결과가 달라진다**는 사실을 발견했다.

특히 search score가 낮은 document들만 꾸준히 드랍되는 것을 목격할 수 있었다.
구체적으로, query를 돌릴 때 각 search node가 몇 개의 문서를 훑어보고 결과를 도출하는지 확인할 수 있는데, 그 숫자가 검색할 때마다 달라지는 현상이 있었다. (따라서 검색 결과도 달라졌다.)


Mongo support 팀에 문의한 결과 이런 경우가 가끔 발생한다고 응답이 왔고, 아직 정확한 원인을 파악하지 못했다고 한다.

대신, search node(\`mongot\`)를 전용 노드에서 따로 실행하는 대신 **데이터베이스 자체(\`mongod\`)와 같은 노드에서 실행**하면 일관성있는 결과를 얻을 수 있을 것이라는 답변을 받았다.

하지만 서포트 팀에서 얘기한 솔루션은 [공식 문서](https://www.mongodb.com/docs/atlas/atlas-search/about/deployment-options/#fts-deployment-options)에 따르면 Testing/Prototyping 환경에 적합한 것으로, 이 사용 사례는 우리가 처한 상황과는 맞지 않다. 
우리가 인덱스 해야하는 총 문서는 2억 건 이상이고, 데이터 양도 당연히 10GB는 훨씬 넘기 때문이다.

그리고 \`mongot\`와 \`mongod\`가 같은 노드에서 실행되면 두 프로세스 간 리소스 contention이 발생할 수 있어 이상적인 환경은 아닌 것 같다.

Elasticsearch처럼 \`mongot\`도 Apache Lucene을 기반으로 만들어져있는데, [공식 문서](https://www.mongodb.com/docs/atlas/atlas-search/atlas-search-overview/#fts-architecture)에 따르면 세 가지 일을 담당한다.

1. Atlas search 인덱스 생성
2. 문서 상태 및 인덱스 변경 사항 모니터링
3. 검색 쿼리 처리: 여기서 문서 ID와 검색 점수를 산출하고, 이 내용을 바탕으로 \`mongod\`에서 최종 결과를 가져온다

처음엔 2번 과정에서 동기화 문제가 있어서 그런건가 싶었는데, 데이터베이스에 아무 변화가 없고 인덱스 rebuilding도 모두 완료된 상태에서도 검색 결과가 계속 달라지는 현상이 나타났다.
(eventual consistency와는 관련이 없는 상황)

그래서 지금 생각으로는 뭔가 인덱스에 있는 fuzzy search 때문에 Mongo 백그라운드에서 특정 document들을 제거 하는게 아닌가 싶긴 하지만, Mongo search 팀에서 일하는 사람이 원인을 모른다고 하니까 조금 답답하다.
(하지만 우리보다 훨씬 복잡한 인덱스를 쓰는 사람들도 별 문제가 없는 사람들도 많았다고 하니 확실하진 않다.)

우선 Mongo support에서 제시한 솔루션대로 내일 진행해보고, 쿼리 성능이나 결과를 좀 더 면밀히 분석한 후 추가로 글을 업데이트할 예정이다.
`,
};

