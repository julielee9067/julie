"use client"

import { Badge } from "@/components/ui/badge"

interface Timeline {
    start: { ko: string; en: string }
    end: { ko: string; en: string }
}

interface ProjectDetails {
    timeline: Timeline
    technologies: string[]
    details: {
        ko: string[]
        en: string[]
    }
}

interface ProjectDetailsSectionProps {
    details: ProjectDetails
    language: "ko" | "en"
}

export function ProjectDetailsSection({
                                          details,
                                          language,
                                      }: ProjectDetailsSectionProps) {
    return (
        <div className="space-y-4">
            <div>
                <h3 className="font-medium mb-2">
                    {language === "ko" ? "프로젝트 기간" : "Timeline"}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {details.timeline.start[language]} - {details.timeline.end[language]}
                </p>
            </div>
            <div>
                <h3 className="font-medium mb-2">
                    {language === "ko" ? "사용 기술" : "Technologies"}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-medium mb-2">
                    {language === "ko" ? "상세 내용" : "Details"}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {details.details[language].map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
