"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {CheckCircle, Sparkles} from "lucide-react"
import {useLanguage} from "@/components/LanguageProvider";

export default function TodoPosts() {
    const [todos] = useState([
        { id: 1, title: "CAP Theorem" },
        { id: 2, title: "Database Indexing" },
        { id: 3, title: "SQL vs. NoSQL" },
        { id: 4, title: "Time series DB" },
        { id: 5, title: "Hierarchical Clustering" },
        { id: 6, title: "Design Search System" },
        { id: 7, title: "Design SNS Feed System" },
        { id: 8, title: "Event Sourcing" },
        { id: 9, title: "K8S Autoscaling: Keda" },
        { id: 10, title: "Language Comparison: Python vs. Go" },
        { id: 11, title: "Python Frameworks: Django, Flask, and FastAPI" },
        { id: 12, title: "How to Handle Throttling in Data Pipeline" },
    ])
    const { language } = useLanguage()

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black py-12 px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
                    {language === "ko" ? "TO-DO 리스트" : "TO-DO List"}
                </h1>

                <div className="space-y-4">
                    {todos.map((todo) => (
                        <Card
                            key={todo.id}
                            className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                        >
                            <div className="p-4 flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle
                                        className="w-6 h-6 text-gray-300 hover:text-primary transition-colors"/>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{todo.title}</h3>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center animate-pulse">
                    <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Sparkles className="w-5 h-5"/>
                        <span className="text-sm font-medium italic">
                            {language === "ko" ? "곧 새로운 포스트를 올릴 예정입니다 :)" : "More posts coming soon..."}
                        </span>
                        <Sparkles className="w-5 h-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

