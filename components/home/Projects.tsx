"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectModal } from "@/components/home/project/ProjectModal"
import { Project } from "@/lib/types"

const basePath = process.env.NODE_ENV === 'production' ? '/julie' : '';

const projects: Project[] = [
    {
        title: "Togather",
        description: {
            ko: "북미 대학생을 위한 익명 커뮤니티 어플리케이션",
            en: "Anonymous community application for North American college students",
        },
        images: [
            `${basePath}/assets/togather-5.png`,
            `${basePath}/assets/togather-1.png`,
            `${basePath}/assets/togather-2.png`,
            `${basePath}/assets/togather-3.png`,
            `${basePath}/assets/togather-4.png`
        ],
        timeline: {
            start: { ko: "2024년 1월", en: "January 2024" },
            end: { ko: "진행중", en: "Present" },
        },
        stacks: ["Go", "Gin", "PostgreSQL", "AWS S3", "Redis", "Next.js", "Docker"],
        details: {
            ko: [
                "백엔드 API, 서비스 및 전체 프로젝트 총괄",
                "데이터베이스 스키마 개발",
                "이메일 인증 파이프라인 구축",
            ],
            en: [
                "Led backend development and overall project management",
                "Developed database schema",
                "Built email verification pipeline",
            ],
        },
    },
    // {
    //     title: "ARAM.GG",
    //     description: {
    //         ko: "롤 칼바람 나락 게임의 유저 및 챔피언 평가",
    //         en: "Evaluation platform for users and champions in League of Legends ARAM game",
    //     },
    //     timeline: {
    //         start: { ko: "2020년 9월", en: "September 2020" },
    //         end: { ko: "2020년 12월", en: "December 2020" },
    //     },
    //     stacks: ["Python", "Django", "PostgreSQL"],
    //     details: {
    //         ko: [
    //             "백엔드 API 개발",
    //             "Riot Games API와 연동",
    //             "DB 스키마 설계",
    //         ],
    //         en: [
    //             "Developed backend API",
    //             "Integrated with Riot Games API",
    //             "Designed database schema",
    //         ],
    //     },
    //     github: "https://github.com/hintful/aramgg",
    //     images: [],
    // },
];

interface ProjectsSectionProps {
    language: "ko" | "en"
    t: (key: string) => string
}

export function Projects({ language, t }: ProjectsSectionProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-semibold">{t("sections.projects")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={
                                    project.images && project.images.length > 0
                                        ? project.images[0]
                                        : `${basePath}/assets/placeholder.svg`
                                }
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                {project.description[language]}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.stacks.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="gap-4">
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Button variant="outline" size="sm">
                                        <Github className="w-4 h-4 mr-2" />
                                        {t("buttons.source")}
                                    </Button>
                                </Link>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            )}
        </section>
    )
}
