"use client"

import * as React from "react"
import { type Language, translations } from "@/lib/translations"

type NestedTranslations = {
    [key: string]: string | NestedTranslations
}

function getNestedValue(
    obj: NestedTranslations,
    pathSegments: string[]
): string | NestedTranslations | undefined {
    let current: string | NestedTranslations | undefined = obj

    for (const segment of pathSegments) {
        if (!current || typeof current === "string") {
            return undefined
        }
        current = current[segment]
    }

    return current
}

type LanguageContextType = {
    language: Language
    setLanguage: (language: Language) => void
    t: (key: string) => string
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
    undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = React.useState<Language>("ko")

    React.useEffect(() => {
        const savedLang = localStorage.getItem("preferredLanguage")
        if (savedLang === "ko" || savedLang === "en") {
            setLanguage(savedLang)
        }
    }, [])

    const handleSetLanguage = React.useCallback((newLang: Language) => {
        setLanguage(newLang)
        localStorage.setItem("preferredLanguage", newLang)
    }, [])

    const t = React.useCallback(
        (key: string) => {
            const result = getNestedValue(
                translations[language] as NestedTranslations,
                key.split(".")
            )
            return typeof result === "string" ? result : key
        },
        [language]
    )

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: handleSetLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = React.useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
