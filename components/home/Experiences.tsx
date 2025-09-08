// components/home/Experiences.tsx
"use client"

import { Experience } from "@/lib/types";

const experiences = [
    {
        company: "NAVER",
        position: {
            ko: "소프트웨어 엔지니어",
            en: "Software Engineer",
        },
        period: {
            ko: "2025.05 - 현재",
            en: "May 2025 - Present",
        },
        stacks: [
            "Golang",
            "Python",
            "Vue.js",
            "PostgreSQL"
        ],
        projects: []
    },
    {
        company: "Tealbook",
        position: {
            ko: "소프트웨어 엔지니어",
            en: "Software Engineer",
        },
        period: {
            ko: "2022.04 - 2025.04",
            en: "Apr 2022 - Apr 2025",
        },
        stacks: [
            "Python",
            "Flask",
            "FastAPI",
            "GCP",
            "MongoDB",
            "PostgreSQL",
            "RabbitMQ",
            "InfluxDB",
            "Elasticsearch",
            "Redis",
            "Docker",
        ],
        projects: [
            {
                name: {
                    ko: "데이터 프로세싱 및 서비스 관리",
                    en: "Data Processing / Backend Service Management",
                },
                period: {
                    ko: "2023.12 - 2025.04",
                    en: "Dec 2023 - Apr 2025",
                },
                description: {
                    ko: [
                        "다양한 데이터 소스 유입 데이터를 정제(TNV)·저장하는 시스템 설계, 운영 표준 수립",
                        "소스별 상이한 스키마를 Config 기반 변환 프로세스로 표준화, 필드 단위 변경 비용 최소화",
                        "자동 수평 확장 적용으로 처리량 급증에도 안정적 운영, 전체 처리 속도 향상과 장애율 감소 기여",
                    ],
                    en: [
                        "Processed and managed >300M data points from various sources",
                        "Defined and integrated TNV process tailored to each data source",
                    ],
                },
            },
            {
                name: {
                    ko: "데이터 파이프라인 재설계",
                    en: "Data Pipeline Redesign",
                },
                period: {
                    ko: "2022.12 - 2023.12",
                    en: "Dec 2022 - Dec 2023",
                },
                description: {
                    ko: [
                        "과도한 기능을 담당하던 단일 서비스를 도메인별로 분리, 독립 배포·운영 가능한 구조로 전환",
                        "InfluxDB·Grafana·Telegraf 기반 모니터링 구축, 메시지 큐 병목 실시간 감지 및 대응 체계 마련",
                        "장애율 감소와 데이터 처리 안정성 대폭 향상 달성",
                    ],
                    en: [
                        "Migrated the existing platform to a new MSA architecture using RabbitMQ message broker",
                        "Implemented services for data crawling, transformation, normalization, confidence calculation, database storage, and human-in-the-loop",
                        "Developed a detection client to prevent message queue bottlenecks using Keda, InfluxDB, Telegraf, Grafana, and Elasticsearch logs",
                        "Designed and implemented a master data scheduling system to reintroduce legacy data into the pipeline",
                    ],
                },
            },
            {
                name: {
                    ko: "웹 어플리케이션 API 개발",
                    en: "Web Application API Development",
                },
                period: {
                    ko: "2022.04 - 2022.11",
                    en: "Apr 2022 - Nov 2022",
                },
                description: {
                    ko: [
                        "대용량 데이터를 다루는 B2B 솔루션 백엔드 API 구현",
                        "데이터베이스 인덱싱 최적화와 캐싱 전략 적용으로 조회·응답 성능 개선",
                    ],
                    en: [
                        "Implemented the backend for a B2B solution to analyze supplier diversity and recommend new suppliers",
                        "Developed and maintained REST APIs using Flask and FastAPI, and designed relational database schemas",
                    ],
                },
            },
        ],
    },
    {
        company: "AllUser.NET",
        position: {
            ko: "소프트웨어 엔지니어 인턴",
            en: "Software Engineering Intern",
        },
        period: {
            ko: "2021.05 - 2021.08",
            en: "May 2021 - Aug 2021",
        },
        stacks: [
            "Python",
            "Django",
            "BeautifulSoup",
            "PostgreSQL",
        ],
        projects: [
            {
                name: {
                    ko: "데이터 크롤링 시스템 구축",
                    en: "Data Crawling System Development",
                },
                period: {
                    ko: "2021.05 - 2021.08",
                    en: "May 2021 - Aug 2021",
                },
                description: {
                    ko: [
                        "Beautiful Soup을 사용하여 웹 크롤러를 개발. 이를 통해 수집된 데이터를 분석하고, 최적화된 광고 솔루션을 제공하기 위한 기반을 마련",
                        "멀티프로세싱을 활용하여 대규모 데이터 처리 작업을 병렬로 수행, 데이터 수집 속도와 효율성 향상. 이를 통해 25개의 온라인 플랫폼에서 사용자 피드백 데이터를 빠르게 처리하여, 100개 이상의 기업에 솔루션을 제공",
                        "크롤링된 데이터를 정제하고 분석하기 위한 파이프라인을 설계, 데이터 품질을 높이고 분석의 정확성을 향상"
                    ],
                    en: [
                        "Developed a web crawler using Beautiful Soup. Analyzed the collected data and established a foundation for providing optimized advertising solutions.",
                        "Leveraged multiprocessing to execute large-scale data processing tasks in parallel, enhancing data collection speed and efficiency. Processed user feedback data from 25 online platforms rapidly, delivering solutions to over 100 companies.",
                        "Designed a pipeline for cleansing and analyzing the crawled data, thereby enhancing data quality and improving analytical accuracy."
                    ],
                },
            },
        ],
    },
    {
        company: "Nokia",
        position: {
            ko: "소프트웨어 엔지니어 인턴",
            en: "Software Engineering Intern",
        },
        period: {
            ko: "2021.01 - 2021.04",
            en: "Jan 2021 - Apr 2021",
        },
        stacks: [
            "ReactJS",
            "Django",
        ],
        projects: [
            {
                name: {
                    ko: "버전 충돌 해결 플랫폼 개발",
                    en: "Platform Development for Version Conflict Resolution",
                },
                period: {
                    ko: "2021.01 - 2021.04",
                    en: "Jan 2021 - Apr 2021",
                },
                description: {
                    ko: [
                        "Flask를 사용하여 버전 충돌 해결을 간소화하는 플랫폼을 설계하고 구현, 이를 통해 마이크로서비스 간의 신뢰성을 향상시키고, 개발자들이 문제를 신속하게 식별하고 해결할 수 있도록 지원",
                    ],
                    en: [
                        "Designed and implemented a platform using Flask to simplify version conflict resolution, enhancing reliability between microservices and enabling developers to quickly identify and resolve issues.",
                    ],
                },
            },
        ],
    },
    {
        company: "POZALabs",
        position: {
            ko: "소프트웨어 엔지니어 인턴",
            en: "Software Engineering Intern",
        },
        period: {
            ko: "2020.05 - 2020.08",
            en: "May 2020 - Aug 2020",
        },
        stacks: [
            "Python",
        ],
        projects: [
            {
                name: {
                    ko: "음원 분석 알고리즘 개발",
                    en: "Audio Analysis Algorithm Development",
                },
                period: {
                    ko: "2020.05 - 2020.08",
                    en: "May 2020 - Aug 2020",
                },
                description: {
                    ko: [
                        "커스텀 알고리즘을 개발해 코드 간 불협화음을 감지하는 시스템 구축, 음악의 조화로움을 유지하면서 저작권 문제 해결",
                        "Flask를 사용하여 웹사이트 백엔드를 설계 및 구현, 안정적이고 효율적인 데이터 처리와 사용자 인터페이스 제공",
                        "작곡가와 협업하여 AI 음악 생성 시스템의 품질과 사용자 경험을 향상, 음악 서비스의 전문성 강화"
                    ],
                    en: [
                        "Developed a custom algorithm to build a system that detects disharmony between code segments, ensuring musical harmony while addressing copyright issues.",
                        "Designed and implemented the backend of a website using Flask, providing stable and efficient data processing and a seamless user interface.",
                        "Collaborated with composers to enhance the quality and user experience of an AI-powered music generation system, strengthening the professionalism of the music service."
                    ],
                },
            },
        ],
    },
    {
        company: "Intellisoft development inc",
        position: {
            ko: "소프트웨어 엔지니어 인턴",
            en: "Software Engineering Intern",
        },
        period: {
            ko: "2019.09 - 2019.12",
            en: "Sept 2019 - Dec 2019",
        },
        stacks: [
            "AWS Lex",
            "AWS Lambda",
            "Apache Groovy",
            "Grails Framework",
            "AWS RDS",
            "PostgreSQL",
        ],
        projects: [
            {
                name: {
                    ko: "챗봇 및 커뮤니티 웹사이트 개발",
                    en: "Chatbot and Community Website Development",
                },
                period: {
                    ko: "2019.09 - 2019.12",
                    en: "Sept 2019 - Dec 2019",
                },
                description: {
                    ko: [
                        "George Brown College 웹사이트에서 연간 3000명 이상의 국제학생 지원을 위한 AWS Lex/Lambda 기반 챗봇 개발 및 배포",
                        "Groovy/Grails 기반 학부생 및 대학원생용 논문 게시 및 커뮤니티 웹사이트 개발",
                    ],
                    en: [
                        "Developed and deployed an AWS Lex/Lambda-based chatbot to assist over 3000 international students annually on George Brown College's website",
                        "Built a research paper posting and community website for undergraduate and graduate students using Groovy/Grails",
                    ],
                },
            },
        ],
    },
    {
        company: "Blackberry",
        position: {
            ko: "소프트웨어 엔지니어 인턴",
            en: "Software Engineering Intern",
        },
        period: {
            ko: "2019.01 - 2019.04",
            en: "Jan 2019 - Apr 2019",
        },
        stacks: [
            "Java",
        ],
        projects: [
            {
                name: {
                    ko: "기업용 스마트 스피커 프로토타입 개발",
                    en: "Enterprise Smart Speaker Prototype Development",
                },
                period: {
                    ko: "2019.01 - 2019.04",
                    en: "Jan 2019 - Apr 2019",
                },
                description: {
                    ko: [
                        "기업용 스마트 스피커 프로토타입 개발",
                    ],
                    en: [
                        "Developed a prototype for an enterprise smart speaker",
                    ],
                },
            },
        ],
    },
];

interface ExperiencesSectionProps {
    language: "ko" | "en";
    t: (key: string) => string;
}

export function Experiences({ language, t }: ExperiencesSectionProps) {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">{t("sections.experience")}</h2>
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <TimelineItem
                        key={exp.company}
                        company={exp.company}
                        position={exp.position[language]}
                        period={exp.period[language]}
                        stacks={exp.stacks}
                        projects={exp.projects}
                        language={language}
                    />
                ))}
            </div>
        </section>
    );
}

function TimelineItem({
                          company,
                          position,
                          period,
                          stacks,
                          projects,
                          language,
                      }: {
    company: string;
    position: string;
    period: string;
    stacks: string[];
    projects: Experience["projects"];
    language: "ko" | "en";
}) {
    return (
        <div className="relative pl-8 pb-8">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background" />
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h3 className="font-semibold text-lg">{company}</h3>
                        <p className="text-muted-foreground">{position}</p>
                        {/* Stacks */}
                        <div className="flex flex-wrap gap-2 mt-1">
                            {stacks.map((stack, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-700"
                                >
                  {stack}
                </span>
                            ))}
                        </div>
                    </div>
                    <time className="shrink-0 text-sm text-muted-foreground">{period}</time>
                </div>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div key={project.name[language]} className="relative pl-4 border-l border-border">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <h4 className="font-medium">{project.name[language]}</h4>
                                    <time className="shrink-0 text-sm text-muted-foreground">
                                        {project.period[language]}
                                    </time>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {project.description[language].map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
