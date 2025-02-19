"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageProvider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="outline" size="sm" onClick={() => setLanguage(language === "ko" ? "en" : "ko")} className="w-16">
      {language.toUpperCase()}
    </Button>
  )
}

