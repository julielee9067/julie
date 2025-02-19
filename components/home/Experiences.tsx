// components/home/Experiences.tsx
"use client"

import {Experience} from "@/lib/types";

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
        projects: [
            {
                name: {
                    ko: "데이터 파이프라인 재설계",
                    en: "Data Pipeline Redesign",
                },
                period: {
                    ko: "2023.12 - 2025.01",
                    en: "Dec 2023 - Jan 2025",
                },
                description: {
                    ko: [
                        "여러 데이터 소스에서 오는 >3억개의 데이터 프로세싱 및 저장, 관리",
                        "TNV (transformation, normalization, validation) process 를 각 데이터의 소스에 맞게 정의 및 시스템에 통합",
                    ],
                    en: [
                        "Processed and managed >300M data points from various sources",
                        "Defined and integrated TNV process for each data source",
                    ],
                },
            },
            {
                name: {
                    ko: "마이크로서비스 아키텍처 전환",
                    en: "Microservice Architecture Migration",
                },
                period: {
                    ko: "2022.12 - 2023.12",
                    en: "Dec 2022 - Dec 2023",
                },
                description: {
                    ko: [
                        "기존 플랫폼을 새로운 아키텍처(MSA)로 이전, RabbitMQ 메시지 브로커 사용",
                        "데이터 크롤링, 변환 및 정규화, 신뢰도 계산, 데이터베이스 저장, 휴먼 인 더 루프를 포함한 여러 서비스의 도메인 이해 및 구현",
                    ],
                    en: [
                        "Migrated existing platform to MSA using RabbitMQ message broker",
                        "Implemented various services including data crawling, transformation, normalization, confidence calculation, and human-in-the-loop",
                    ],
                },
            },
        ],
    },
]

interface ExperiencesSectionProps {
    language: "ko" | "en"
    t: (key: string) => string
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
                        projects={exp.projects}
                        language={language}
                    />
                ))}
            </div>
        </section>
    )
}

function TimelineItem({
                          company,
                          position,
                          period,
                          projects,
                          language,
                      }: {
    company: string
    position: string
    period: string
    projects: Experience["projects"]
    language: "ko" | "en"
}) {
    return (
        <div className="relative pl-8 pb-8">
            {/* ...the same code you had before... */}
            <div className="absolute left-0 top-0 h-full w-px bg-border">
                <div className="absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background" />
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h3 className="font-semibold text-lg">{company}</h3>
                        <p className="text-muted-foreground">{position}</p>
                    </div>
                    <time className="shrink-0 text-sm text-muted-foreground">{period}</time>
                </div>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div key={project.name[language]} className="relative pl-4 border-l border-border">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <h4 className="font-medium">{project.name[language]}</h4>
                                    <time className="shrink-0 text-sm text-muted-foreground">{project.period[language]}</time>
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
    )
}
