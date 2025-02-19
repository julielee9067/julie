"use client"

import type { ReactNode } from "react"
import { useLanguage, LanguageProvider } from "@/components/LanguageProvider"
import { Header } from "@/components/header"
import Link from "next/link"

const SIDE_BAR_LINKS = [
    { href: "/blog", id: "all", labelKo: "전체", labelEn: "All" },
    { href: "/blog/algorithms", id: "algorithms", labelKo: "알고리즘", labelEn: "Algorithms" },
    { href: "/blog/cs", id: "cs", labelKo: "컴퓨터 공학", labelEn: "Computer Science" },
    { href: "/blog/system-design", id: "system-design", labelKo: "시스템 디자인", labelEn: "System Design" },
]

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex flex-1">
                    <Sidebar />
                    <main className="ml-64 mt-16 p-6 flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </LanguageProvider>
    )
}

function Sidebar() {
    const { language } = useLanguage()

    return (
        <aside
            className="
                w-64
                fixed
                left-0
                top-16
                h-[calc(100vh-4rem)]
                border-r
                bg-background
                p-6
                overflow-y-auto
            "
        >
            <h2 className="text-lg font-semibold mb-4">
                {language === "ko" ? "카테고리" : "Categories"}
            </h2>

            <ul className="space-y-2">
                {SIDE_BAR_LINKS.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="block px-3 py-2 rounded-md hover:bg-muted transition"
                        >
                            {language === "ko" ? item.labelKo : item.labelEn}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
