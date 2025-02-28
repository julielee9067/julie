import { BlogPost } from "@/lib/types";

export const systemDesignDataWarehouse: BlogPost = {
    slug: "system-design/data-warehouse",
    categorySlug: "system-design",
    title: {
        ko: "데이터 웨어하우스: GCP BigQuery",
        en: "Data Warehouse: GCP BigQuery",
    },
    date: "2025-02-27 19:14",
    category: {
        ko: "시스템 디자인",
        en: "System Design",
    },
    description: {
        ko: "데이터 웨어하우스의 정의와 GCP BigQuery",
        en: "Definition of data warehouse and GCP BQ",
    },
    content: `
## 개요
데이터 파이프라인을 운영하다 보면 거대한 양의 데이터를 계속 쌓아두게 됩니다.

예를 들어, 웹사이트를 크롤링 하는 작업을 하면 수백만개 이상의 웹사이트에서 데이터를 가져와야 할 때가 있는데, 그 때 원본 웹사이트의 데이터를 잃지 않고자 스냅샷을 찍어 저장하는 경우가 있습니다.

이런 데이터들을 어떻게 효율적으로 저장하고, 어떻게 빠르고 간편하게 분석하느냐가 떠오르고 있습니다.

여기서 자주 등장하는 두 가지 핵심 개념이 **데이터 웨어하우스(Data Warehouse)** 와 **데이터 레이크(Data Lake)** 입니다.

## Data Warehouse
**데이터 웨어하우스**는 회사 전반에서 발생하는 다양한 데이터를 **분석하기 좋은 형태**로 한 곳에 모아 놓은 중앙 저장소를 말합니다.

일반적으로 정해진 스키마로 데이터를 깔끔하게 저장하고, 사용자가 안심하고 쿼리할 수 있는 **Single source of truth** 데이터 소스 역할을 수행합니다.

### 동작 원리
보통 데이터 웨어하우스는 **ETL** 구조로 동작합니다.
1. Extract
 
    여러 소스(main DB, web, ERP 등)에서 데이터를 가져옵니다.

2. Transform
    
    가져온 데이터를 분석하기 좋은 형태로 변환/정제합니다. 
    불필요한 필드를 삭제하거나, 날짜 형식을 통일하거나, 오류 데이터 수정 등이 이에 포함됩니다.
    
3. Load
    
    정제된 데이터를 데이터 웨어하우스에 저장합니다.

데이터 웨어하우스에는 여러 개의 데이터베이스가 포함될 수 있고, 각 데이터베이스 내에서 데이
#### ETL vs. ELT
- ETL: Extract -> Transform -> Load
    
    원천 데이터베이스에서 뽑은 데이터를 먼저 변환한 뒤 웨어하우스에 저장

- ELT: Extract -> Load -> Transform

    큰 용량을 웨어하우스에 한 번에 넣은 후 유연하게 변환
    
### 사용 예시
그럼, 이 **데이터 웨어하우스는 언제 쓰는게** 좋을까요?

`
};
