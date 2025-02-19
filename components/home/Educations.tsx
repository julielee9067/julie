// components/home/Educations.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"

interface EducationSectionProps {
  language: "ko" | "en"
  t: (key: string) => string
}

const education = [
    {
        school: {
            ko: "조지아 공과 대학교",
            en: "Georgia Institute of Technology",
        },
        degree: {
            ko: "컴퓨터공학 석사",
            en: "M.S. in Computer Science",
        },
        period: {
            ko: "2024.08 - 현재",
            en: "Aug 2024 - Present",
        },
        gpa: "4.0/4.0",
    },
    {
        school: {
            ko: "워털루 대학교",
            en: "University of Waterloo",
        },
        degree: {
            ko: "메카트로닉스 공학 학사",
            en: "B.S. in Mechatronics Engineering",
        },
        period: {
            ko: "2017.09 - 2022.04",
            en: "Sep 2017 - Apr 2022",
        },
        gpa: "3.32/4.0",
    },
]

export function Educations({ language, t }: EducationSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{t("sections.education")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <Card key={edu.school[language]}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{edu.school[language]}</h3>
                <p className="text-muted-foreground">{edu.degree[language]}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{edu.period[language]}</span>
                  <span>
                    {t("gpa")}: {edu.gpa}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
