"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/LanguageProvider"
import cn from "classnames"

interface Solution {
  id: string
  approach: string
  code: string
  timeComplexity: string
  spaceComplexity: string
  explanation: {
    ko: string
    en: string
  }
}

interface SolutionModalProps {
  isOpen: boolean
  onClose: () => void
  problem: {
    number: number
    name: string
    difficulty: "Easy" | "Medium" | "Hard"
    solutions: Solution[]
  }
}

export function SolutionModal({ isOpen, onClose, problem }: SolutionModalProps) {
  const { language } = useLanguage()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <DialogTitle>
              {problem.number}. {problem.name}
            </DialogTitle>
            <Badge
              variant="outline"
              className={cn(
                "w-16 justify-center",
                problem.difficulty === "Easy" && "border-green-500 text-green-500",
                problem.difficulty === "Medium" && "border-yellow-500 text-yellow-500",
                problem.difficulty === "Hard" && "border-red-500 text-red-500",
              )}
            >
              {problem.difficulty}
            </Badge>
          </div>
        </DialogHeader>
        <div className="flex-1 h-full overflow-y-auto pr-4">
          <Tabs defaultValue={problem.solutions[0].id} className="w-full">
            <TabsList className="w-full justify-start">
              {problem.solutions.map((solution, index) => (
                <TabsTrigger key={solution.id} value={solution.id}>
                  {language === "ko" ? `풀이 ${index + 1}` : `Solution ${index + 1}`}
                </TabsTrigger>
              ))}
            </TabsList>
            {problem.solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">{language === "ko" ? "접근 방법" : "Approach"}</h3>
                  <p className="text-sm text-muted-foreground">{solution.approach}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{language === "ko" ? "시간 복잡도" : "Time Complexity"}</h3>
                  <p className="font-mono text-sm">{solution.timeComplexity}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{language === "ko" ? "공간 복잡도" : "Space Complexity"}</h3>
                  <p className="font-mono text-sm">{solution.spaceComplexity}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{language === "ko" ? "설명" : "Explanation"}</h3>
                  <p className="text-sm text-muted-foreground">{solution.explanation[language]}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">{language === "ko" ? "코드" : "Code"}</h3>
                  <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                    <code className="text-sm">{solution.code}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

