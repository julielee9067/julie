"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dices } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { LeetCodeProblem } from "@/lib/types"
import Link from "next/link"

export function ProblemRoulette({
                                    problems,
                                    language,
                                    onProblemSelect,
                                }: {
    problems: LeetCodeProblem[]
    language: string
    onProblemSelect: (problem: LeetCodeProblem) => void
}) {
    const [isSpinning, setIsSpinning] = useState(false)
    const [selectedProblem, setSelectedProblem] = useState<LeetCodeProblem | null>(null)

    const spinRoulette = () => {
        setIsSpinning(true)

        let spins = 0
        const maxSpins = 45
        const interval = setInterval(
            () => {
                const randomProblem = problems[Math.floor(Math.random() * problems.length)]
                setSelectedProblem(randomProblem)
                spins++

                if (spins >= maxSpins) {
                    clearInterval(interval)
                    setIsSpinning(false)
                    onProblemSelect(randomProblem)
                }
            },
            Math.min(30 + Math.floor(spins / 2), 100),
        )
    }

    return (
        <Card className="w-[280px] p-6 bg-white dark:bg-gray-950 shadow-md">
            <div className="space-y-3">
                <div className="h-[64px]">
                    {" "}
                    <AnimatePresence mode="wait">
                        {selectedProblem && (
                            <motion.div
                                key={selectedProblem.number}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.15 }} // 트랜지션 시간 단축
                            >
                                <Link href={selectedProblem.url} target="_blank" className="block hover:opacity-80 transition-opacity">
                                    <p className="font-medium line-clamp-2 leading-tight mb-1">
                                        #{selectedProblem.number}. {selectedProblem.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{selectedProblem.difficulty}</p>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Button
                    onClick={spinRoulette}
                    disabled={isSpinning}
                    variant="secondary"
                    className="w-full bg-violet-100 hover:bg-violet-200 text-violet-700"
                >
                    <Dices className="mr-2 h-4 w-4" />
                    {language === "ko" ? "랜덤 문제" : "Random Problem"}
                </Button>
            </div>
        </Card>
    )
}

