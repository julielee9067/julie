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
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Elasticsearch",
    "RabbitMQ",
    "AWS",
    "GCP",
    "Flask",
    "Django",
    "FastAPI",
  ]

  const { language, t } = useLanguage()
  const basePath = process.env.NODE_ENV === 'production' ? '/julie' : '';

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
              {language === "ko" ? (
                  <>
                    경험이 풍부한 <strong>소프트웨어 엔지니어</strong>로서, <strong>데이터 처리</strong>, <strong>백엔드 시스템 개발</strong> 및 <strong>확장 가능한 아키텍처</strong>에 강점을 가지고 있습니다.
                    다양한 산업에서 <strong>고성능 데이터 파이프라인</strong>과 <strong>분산 시스템</strong>, <strong>백엔드 서비스</strong>를 설계하고 구축한 탄탄한 경험을 바탕으로,
                    안정적이고 효율적인 시스템을 만들어가는 데 집중하고 있습니다.
                  </>
              ) : (
                  <>
                    <strong>Experienced</strong> and results-oriented <strong>Software Engineer</strong> specializing in
                    <strong> data processing</strong>, <strong>backend system development</strong>, and
                    <strong> scalable architectures</strong>. Proven track record of designing and implementing
                    <strong> high-performance data pipelines</strong>, <strong>distributed systems</strong>,
                    and <strong>backend services</strong> across various industries.
                  </>
              )}
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/julielee9067" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2"/>
                  GitHub
                </Button>
              </Link>
              <Link href="mailto:julielee9067@gmail.com">
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2"/>
                  Email
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video">
            <Image src={`${basePath}/assets/user-photo.jpg`}
                   alt="Profile" fill className="object-cover rounded-lg" priority/>
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
        <Experiences language={language} t={t}/>
        <Projects language={language} t={t}/>
        <Educations language={language} t={t}/>
        <Blogs language={language} t={t}/>
      </div>
    </main>
  )
}

