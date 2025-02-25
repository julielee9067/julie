"use client"

import { useLanguage } from "@/components/LanguageProvider"
import { leetcodeProblems } from "@/lib/blogPosts"
import { useState } from "react"
import type { LeetCodeProblem } from "@/lib/types"
import {ProblemRoulette} from "@/components/blog/algorithms/ProblemRoulette";
import {ProblemsTable} from "@/components/blog/algorithms/ProblemsTable";

export default function AlgorithmsPage() {
    const { language } = useLanguage()
    const [selectedProblem, setSelectedProblem] = useState<LeetCodeProblem | null>(null)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <main className="p-4 md:p-8 lg:p-12">
                <div className="max-w-6xl mx-auto space-y-4">
                    {" "}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
                        {" "}
                        <h1 className="text-3xl font-bold">{language === "ko" ? "알고리즘 문제" : "Algorithm Problems"}</h1>
                        <ProblemRoulette problems={leetcodeProblems} language={language} onProblemSelect={setSelectedProblem} />
                    </div>
                    <ProblemsTable data={leetcodeProblems} />
                </div>
            </main>
        </div>
    )
}

