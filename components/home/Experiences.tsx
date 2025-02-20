// components/home/Experiences.tsx
"use client"

import { Experience } from "@/lib/types";

const experiences = [
    {
        company: "Tealbook",
        position: {
            ko: "소프트웨어 엔지니어",
            en: "Software Engineer",
        },
        period: {
            ko: "2022.04 - 현재",
            en: "Apr 2022 - Present",
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
                    ko: "2023.12 - 현재",
                    en: "Dec 2023 - Present",
                },
                description: {
                    ko: [
                        "여러 데이터 소스에서 오는 >3억개의 데이터 프로세싱 및 저장, 관리",
                        "TNV (transformation, normalization, validation) 프로세스를 각 데이터 소스에 맞게 정의 및 시스템에 통합",
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
                        "기존 플랫폼을 브로커 패턴을 사용한 새로운 아키텍처(MSA)로 이전",
                        "데이터 크롤링, 변환 및 정규화, 신뢰도 계산, 데이터베이스 저장, 휴먼 인 더 루프를 포함한 서비스 도메인 구현",
                        "Keda, InfluxDB, Telegraf, Grafana, Elasticsearch 로그를 활용해 메시지 큐 병목 현상 방지 및 감지 클라이언트 개발",
                        "기존 데이터를 파이프라인에 재투입하는 master data 스케쥴링 시스템 설계 및 구현",
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
                        "비즈니스의 공급자 다변성( Supplier diversity) 분석 및 새로운 공급자 추천을 도와주는 B2B 솔루션 백엔드 구현",
                        "Flask, FastAPI 기반 REST API 개발 및 유지보수, 관계형 데이터베이스 테이블 설계",
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
                        "25개 이상의 웹사이트에서 주어진 키워드로 데이터 크롤링 시스템 구축",
                        "수집된 데이터를 머신러닝 모델 입력용으로 변환, 정규화 및 검증",
                    ],
                    en: [
                        "Built a data crawling system for over 25 websites to measure and optimize business advertising effectiveness",
                        "Transformed, normalized, and validated collected data for machine learning model input",
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
                        "인터널 서비스 간의 버전 충돌을 해결하기 위한 플랫폼 개발",
                        "각 서비스의 버전 호환 기능 구현",
                    ],
                    en: [
                        "Developed a platform to resolve version conflicts among internal services",
                        "Implemented functionality to store and retrieve services compatible with various versions",
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
                        "음원 간 불협화음 감지 및 코드 진행 유사도 분석 알고리즘 개발",
                    ],
                    en: [
                        "Developed an algorithm for detecting dissonance between audio tracks and analyzing chord progression similarity",
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
