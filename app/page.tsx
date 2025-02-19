"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import Link from "next/link"
import Image from "next/image"
import {Projects} from "@/components/home/Projects";
import {Experiences} from "@/components/home/Experiences";
import {Educations} from "@/components/home/Educations";
import {Blogs} from "@/components/home/Blogs";


export default function Home() {
  const skills = [
    "AWS RDS",
    "AWS S3",
    "AWS Lambda",
    "Django",
    "Docker",
    "Elasticsearch",
    "Flask",
    "Go",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "ReactJS",
    "Redis",
    "RabbitMQ",
    "Next.js",
    "GCP",
    "Apache Groovy",
    "AWS Lex",
    "BeautifulSoup",
    "InfluxDB",
    "Grails Framework",
    "Gin",
    "FastAPI",
  ]

  const { language, t } = useLanguage()

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {language === "ko" ? "이은지" : "Julie Lee"}
              <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2">{t("role")}</span>
            </h1>
            <p className="text-muted-foreground max-w-[600px]">
              {language === "ko"
                ? "데이터 프로세싱과 백엔드 시스템 개발에 전문성을 가진 소프트웨어 엔지니어입니다."
                : "A software engineer specialized in data processing and backend system development."}
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/julielee9067" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="mailto:julielee9067@gmail.com">
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video">
            <Image src="/assets/placeholder.svg" alt="Profile" fill className="object-cover rounded-lg" priority />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("sections.skills")}</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
        <Experiences language={language} t={t} />
        <Projects language={language} t={t} />
        <Educations language={language} t={t} />
        <Blogs language={language} t={t} />
      </div>
    </main>
  )
}

