// blog/algorithms/page.tsx
"use client"

import { ProblemsTable } from "@/components/blog/algorithms/ProblemsTable"
import { useLanguage } from "@/components/LanguageProvider"
import {leetcodeProblems} from "@/lib/blogPosts";

export default function AlgorithmsPage() {
  const { language } = useLanguage()

  return (
      <div className="min-h-screen flex">
        <main className="flex-1 p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">
              {language === "ko" ? "알고리즘 문제" : "Algorithm Problems"}
            </h1>
            <ProblemsTable data={leetcodeProblems} />
          </div>
        </main>
      </div>
  )
}
