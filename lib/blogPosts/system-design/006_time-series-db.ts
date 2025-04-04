import { BlogPost } from "@/lib/types";

export const systemDesignTimeSeriesDB: BlogPost = {
    slug: "system-design/time-series-db",
    categorySlug: "system-design",
    title: {
        ko: "시계열 데이터베이스와 TICK Stack",
        en: "Time series DB and TICK Stack",
    },
    date: "2025-03-04 20:12",
    category: {
        ko: "시스템 디자인",
        en: "System Design",
    },
    description: {
        ko: "시계열 데이터베이스의 종류와 TICK stack",
        en: "types of time series DB and TICK Stack",
    },
    content: `
## 개요
현재 저는 TICK stack 중 Telegraf와 InfluxDB를 사용하고 있는데 (+Grafana), 오늘은 TICK stack이 뭔지, 그리고 대안에는 어떤 것들이 있는지 알아보도록 하겠습니다.

## Logs vs. Metrics
먼저 **로그**와 **메트릭**을 구분해 봅시다.

**모니터링**은 결국 **시스템에서 어떤 일이 일어나고 있는지 파악**한 뒤, **문제를 발견**하고 **근본 원인을 찾아 해결**하는 것이 최종 목표입니다.

**로그**는 어플리케이션이나 시스템에서 발생한 **이벤트의 상세 내역**을 남겨둔 기록입니다.
예를 들면, 어떤 사용자가 언제, 무슨 요청을 했고, 응답 시간과 응답 코드는 어땠는지 확인하려면 로그가 필요합니다.

**메트릭**은 **숫자로 된 지표를 수집**하고, 시계열(시간 순서)에 따라 어떻게 변하는지 분석하기 위해 사용합니다.
예를 들어 메트릭을 사용해 \`CPU 사용률이 5% -> 10% -> 90%로 증가\`, 또는 \`초당 요청 수가 100에서 500으로 급등\` 이렇게 분석할 수 있습니다.

이 둘은 **상호 보완적**으로, 둘 다 함께 분석해야 제대로 된 모니터링 시스템을 구축할 수 있습니다.
**메트릭은 문제 상황을 발견**하는데 탁월하고, **로그는 문제의 원인**을 자세히 파악하는 데 필수적입니다.

## TICK Stack
TICK Stack은 **시계열 데이터 파이프라인**을 **수집 → 저장 → 시각화 → 처리**까지 한 번에 구성할 수 있는 통합 솔루션입니다.

**Telegraf(수집), InfluxDB(저장), Chronograf(시각화), Kapacitor(처리 및 알림)** 이렇게 네 가지 요소로 구성되며, 각각의 앞 글자를 따서 TICK이라고 부릅니다.

### 1. Telegraf
**Telegraf**는 시스템, DB, IoT 센서 등 **여러 소스에서 메트릭을 수집**하여 **InfluxDB에 Push**하는 에이전트입니다.

- 장점
    - **매우 다양한 input/output plugin** 지원 (CPU/memory, Docker/k8s, MySQL, Redis, etc)
    - Config file만 잘 구성하면 바로 사용 가능
    - **Push 방식**이라 클라이언트가 스스로 데이터를 보냄
- 단점
    - 모니터링 대상 서버마다 에이전트 필요
    - Prometheus처럼 Pull 기반 모니터링 스택과 혼합 시 고려 필요

아래와 같이 Telegraf → InfluxDB 연결을 설정할 수 있습니다.
\`\`\`
# /etc/telegraf/telegraf.conf
[agent]
  interval = "10s"     # 10초 간격으로 수집
  round_interval = true

[[outputs.influxdb]]
  urls = ["http://localhost:8086"]
  database = "metrics_db"

[[inputs.cpu]]
  # CPU 사용량 측정 플러그인
  percpu = true
  totalcpu = true
\`\`\`

위 설정대로라면 Telegraf가 10초마다 CPU 사용량 메트릭을 InfluxDB \`metrics_db\` 데이터베이스에 기록하게 됩니다.

### 2. InfluxDB
InfluxDB는 시계열 데이터에 최적화된 오픈 소스 DBMS로, 고속 쓰기 성능과 시계열 쿼리에 특화된 구조를 갖추고 있습니다.
TICK Stack의 중심에 있으며, 보통 단일 실행 파일로 쉽게 구동할 수 있습니다.

- 장점
    - 쓰기 성능이 매우 빠름
    - 구성이 간단 (단일 바이너리를 실행하면 바로 서버가 뜨고, 브라우저에서 확인 가능)
    - TICK Stack과의 확장성이 뛰어남
    - Flux(InfluxQL)은 SQL과 비슷해서 쿼리 작성이 간편
- 단점
    - **tag cardinality** 고려 필수 (주로 1 Million 이하가 이상적)
    - 복잡한 join 이나 관계형 쿼리에 취약

> 아래에서 설명하겠지만 다양한 TSDB가 존재합니다. 저희는 빠르게 프로토타입을 구성해야 했고, 다른 stack과의 연동성 부분에서 InfluxDB를 선택했는데 
지금은 규모가 커지는 중이라 Prometheus로의 migration을 고려 중입니다.

#### 아키텍쳐
![influxdb architecture](https://images.ctfassets.net/o7xu9whrs0u9/50Gb9y9OuHd42InqbcfWRl/defa279fd370649385e718eefde61f2d/Figure_1_InfluxDB_3-0_Architecture.png)

InfluxDB는 네 가지 주요 컴포넌트와 두 가지 주요 스토리지로 구성되어 있습니다.

**컴포넌트**
1. **데이터 적재: Ingest** - 파란색
    
    사용자가 데이터를 Ingest router에 기록하면, 이 라우터가 데이터를 여러 ingester 중 하나로 분산시켜 전달합니다.
    ingester는 데이터를 받아 테이블을 자동으로 생성하며, 타입 검증과 중복 제거 작업을 수행한 후 Parquet 파일로 영구 저장합니다.
    
2. **데이터 쿼리: Query** - 초록색
    
    사용자가 Flux 쿼리를 Query router에 보내면, 라우터가 이를 Querier로 전달합니다. 
    Querier는 필요한 데이터를 읽고 쿼리 플랜을 작성하여 결과를 반환합니다. 
    새 데이터가 있을 경우 ingester와 통신하여 데이터를 최신 상태로 유지합니다.
    
3. **데이터 압축: Compaction** - 빨간색

    ingester가 생성한 작은 파일들을 더 큰 파일로 압축하여 쿼리 성능을 개선합니다. 
    이 과정에서 기존 파일은 **soft delete 처리**를 거친 후, 나중에 Garbage Collector에 의해 완전히 삭제됩니다.

4. **가비지 컬렉션: Garbage collection** - 분홍색
    
    사용자가 설정한 **보존 기간**에 따라, 오래된 데이터 파일을 soft-delete 처리하고 이후에 실제 삭제하여 저장 공간을 확보합니다.
        
**스토리지**
1. **Catalog**: 데이터베이스, 테이블, 컬럼, 파일 정보와 같은 메타데이터를 저장합니다.
2. **Object Storage**: 실제 데이터(Parquet 파일)를 저장합니다.
    
### 3. Chronograf
Chronograf는 InfluxDB **데이터를 대시보드 형태로 시각화**하고 Kapacitor를 연계해 **알람을 설정**할 수 있는 웹 UI 입니다. 

쉽게 말해 InfluxDB 전용 그래프 및 알람 설정 툴이라고 볼 수 있습니다.

- 장점
    - 대시보드 템플릿이나 탐색 기능을 통해 빠르게 데이터 확인 가능
    - InfluxDB와의 연동성 극대화
    - Kapacitor와 직관적으로 연결 가능
- 단점
    - Prometheus, elasticsearch 등 **다른 데이터 소스는 지원이 한정**됨
    - Grafana만큼 플러그인이 많지 않음
    - 규모가 큰 환경에서는 성능이 떨어질 수 있음

#### Chronograf vs. Grafana
저는 **Grafana**를 사용하고 있는데, **Chronograf는 다른 데이터 소스를 지원하지 않는다는 점**이 이걸 선택하지 않은 가장 큰 이유였습니다.

GCP BigQuery, MongoDB, 심지어 RabbitMQ metric까지 다양한 데이터 소스에서 데이터를 가져와 비교하고 시각화하는 것이 대시보드를 활용하는 가장 중요한 목적 중 하나였기 때문입니다.

아래는 어떤 스택을 사용할까 고민했을 당시 Grafana와 chronograf를 실제로 비교분석했던 테이블입니다.
| 항목 | Chronograf | Grafana |
|------|-----------|---------|
| **필터 (사용자 입력값 제공 가능 여부)** | 확실하지 않음 | 가능 |
| **개발 친화성** | 비교적 어려움 | 쉬움 |
| **제공되는 시각화 종류** | 11개 | 26개 |
| **커스텀 시각화 가능 여부** | 가능 (Plotly.js 사용) | 가능 (D3.js 사용) |
| **관련 튜토리얼** | [Data Visualizations With InfluxDB and Plotly.js](https://www.influxdata.com/blog/data-visualizations-with-influxdb-integrating-plotly-js/) | [Grafana Plugin Tools](https://grafana.com/developers/plugin-tools/tutorials/) |
| **사용되는 쿼리 언어** | Flux | Flux |
| **지원 데이터 소스** | Influx, Telegraf | 다양한 데이터 소스 지원 (Postgres, Elasticsearch 포함) |
| **대시보드에서 여러 데이터 소스 사용 가능 여부** | 불가능 | 가능 (ES, Postgres, InfluxDB 데이터를 한 대시보드에서 조회 가능) |
| **커뮤니티 활성도** | 비교적 덜 활성화 | 활성화됨 |

### 4. Kapacitor
**Kapacitor**는 실시간 스트림 처리 및 알림 엔진으로, InfluxDB에서 들어오는 데이터를 분석해 특정 조건이 만족되면 슬랙/이메일 등에 알림을 보낼 수 있습니다.

- 장점
    - **유연한 로직 설정 가능 (CPU 사용률 > 90% 이 2분 이상 지속되면 알림 등등)**
- 단점
    - 너무 복잡하거나 대규모 스트림 처리에는 운영 부담 증가
    - Prometheus alertmanager에 비해 작은 커뮤니티

## Time-series Databases (other than InfluxDB)
### Prometheus
**Prometheus**는 SoundCloud에서 개발한 오픈소스 시스템 모니터링 및 알림 도구 입니다.
**Pull 방식**으로 메트릭을 수집하고, **Kubernetes 같은 클라우드 네이티브 환경에서 사실상 모니터링 표준**으로 자리잡았습니다.

Time-series 모니터링 개념을 바탕으로 구축되었는데, 자세한 내용은 "[Google SRE 북: 실용적인 경고(Practical Alerting)](https://sre.google/sre-book/practical-alerting/)"에서 확인할 수 있습니다.

만약 **Kubernetes나 MSA 환경**에서 시스템 모니터링을 주 목적으로 하거나, 모니터링과 알림을 원스톱으로 해결하고 싶을 때 Prometheus가 적합합니다.

### Graphite
**Graphite**는 초기 오픈소스 시계열 DB 및 그래프 도구로, StatsD와 함께 1세대 서버 모니터링 솔루션으로 널리 사용되었습니다.

설치 및 개념이 비교적 단순하고, 작은 규모 환경에서 간단히 서버 모니터링을 세팅하기엔 여전히 쓸만 하다는 장점이 있습니다.

하지만, 확장이 어렵고 대규모 환경에는 부적합합니다. (고빈도 수집 시 서버 부하가 증가합니다.)

따라서 **레거시 환경**에서 이미 Graphite을 쓰고 있거나, 모니터링 대상이 적을 때 쓰는게 적합합니다.

`
};
