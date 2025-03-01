import { BlogPost } from "@/lib/types";

export const til20250228: BlogPost = {
    slug: "til/2025-02-28",
    categorySlug: "til",
    title: {
        ko: "2025-02-28",
        en: "2025-02-28",
    },
    date: "2025-02-28 18:56",
    category: {
        ko: "TIL",
        en: "TIL",
    },
    description: {
        ko: "MongoDB full-text search를 사용할 때의 임베디드 문서 관련 제한 사항",
        en: "Limitations of MongoDB full-text search on embedded documents",
    },
    content: `
회사에서 MongoDB의 full text search를 사용하면서 embedded document 관련 제약사항을 접하게 되었다.

우리가 사용하는 데이터의 일부는 이런식으로 저장되어 있는데
\`\`\`
{
  "A": [
    { "type": "a", "value": "something" },
    { "type": "a", "value": "something else" },
    { "type": "b", "value": "something" }
  ]
}
\`\`\`

단순히 \`"value": "something"\`을 검색(fuzzy search 등)을 수행할 때는 array index를 통해 처리할 수 있다.

근데 \`"type": "a"\`, \`"value": "something"\` 처럼 **구체적인 필드 조합**으로 검색하려면 **embedded document** index가 필요하다. ([**참조**](https://www.mongodb.com/docs/atlas/atlas-search/embedded-document/))

문제는 embedded document index를 생성하면 **array 안의 각 객체마다 하나의 문서가 인덱싱**된다는 점이었다.

Mongo Atlas에서는 샤드 하나당 최대 21억(2.1 billion) 개의 embedded 문서를 인덱싱할 수 있다.
그런데 우리는 이미 2억개 이상의 문서가 단일 샤드에 들어 있는 상황이었고, 각 문서의 여러 필드에는 많개는 수백개의 객체가 포함될 수 있으므로, 
이 배열을 전부 embedded doc으로 인덱싱하다 보면 금세 21억 개를 초과하는 상황이었다.

그래서 다음과 같은 세 가지 해결책을 고민해봤다.

1. **스키마 변경**

    배열 안에 있는 key-value 구조를 최상위로 옮겨서 embedded document index를 사용하지 않아도 되도록 재설계한다.
    
    예를 들어, 기존에 \`A: [{type: "...", value: "..."}]\` 형태로 저장하던 문서를 \`"a": ["something", "something else"]\` 요런식으로 분리해서 일반 문자열 필드나 배열 인덱스로 검색 가능하게 만든다.
    
2. **Full text search 대신 element search**
    
    type과 value를 따로 인덱싱하고, wildcard나 Regex 같은 방식을 사용해서 검색한다.
    
    근데 이 방법은 **데이터들이 매우 일관적(standardized)으로 저장되어 있어야 동작**한다는 단점이 있다. (전처리 로직이 필수)
    
    그리고 score 개념이 없어서 어떤 문서가 더 관련이 높은지 판별하기도 어렵다.
    
3. **샤딩**

    샤드 수를 늘려서 샤드마다 embedded 문서 개수가 21억을 넘지 않게 분산한다.
    
    이 방법이 처음엔 가장 간단해 보였으나.. 이미 있는 데이터를 옮겨야하고, 샤딩 키를 어떻게 설정할지 등 여러 가지를 면밀히 고려해야한다.
    
    또한, 검색에 샤드 키 조건이 포함되지 않은 쿼리들은 모든 샤드에 broadcast 되고, 각 샤드에서 병렬 검색 후 결과를 취합해야 한다. (최종 응답 도출 시간/오버헤드 증가)
    
    즉, 샤드 관리 비용도 포함해서 비용이 더 많이 든다. ([**참조**](https://www.mongodb.com/resources/products/capabilities/database-sharding-explained#:~:text=Sharding%20does%20come%20with%20several,operation%20to%20the%20appropriate%20shard.))

결국 여러 가지 제약 상황(시간, 비용, 인력 자원 등등)으로 인해 우리는 **첫 번째 방식(데이터 스키마 재설계)** 을 선택했다.

이 방법도 엄청난 단점이 있었는데, 이미 있는 데이터들을 새로운 스키마로 다 옮겨야 한다는 것이었다..

그리고 이미 원래 스키마에 맞게 설정된 기존 코드들을 새로운 스키마에 맞게 전부 다 고쳐야 한다. :)


`,

};

