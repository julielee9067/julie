"use client"

import React, { useState, ReactNode } from "react"
import { Header } from "@/components/header"
import Link from "next/link"
import { useLanguage, LanguageProvider } from "@/components/LanguageProvider"

const SIDE_BAR_LINKS = [
    { href: "/blog", id: "all", labelKo: "전체", labelEn: "All" },
    { href: "/blog/algorithms", id: "algorithms", labelKo: "알고리즘", labelEn: "Algorithms" },
    { href: "/blog/cs", id: "cs", labelKo: "컴퓨터 공학", labelEn: "Computer Science" },
    { href: "/blog/system-design", id: "system-design", labelKo: "시스템 디자인", labelEn: "System Design" },
]

export default function BlogLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-black">
                {/* Header는 그대로 사용 */}
                <Header />

                {/* Header 높이(4rem)만큼 아래에 콘텐츠 영역 */}
                <div className="pt-16 flex flex-1">
                    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

                    <main className="flex-1 p-6 transition-all duration-300 ml-0 lg:ml-64">
                        {children}
                    </main>
                </div>

                {/* 왼쪽 중앙 토글 버튼 */}
                <button
                    onClick={toggleSidebar}
                    className={`
            fixed left-0 top-1/2 -translate-y-1/2 z-50 p-2 rounded-r-md shadow transition
            bg-white text-black hover:bg-gray-100
            dark:dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800
          `}
                >
                    {isSidebarOpen ? "<" : ">"}
                </button>

                {/* 좁은 화면(lg 미만)에서 사이드바가 열렸을 때 오버레이 */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    />
                )}
            </div>
        </LanguageProvider>
    )
}

type SidebarProps = {
    isOpen: boolean
    onClose: () => void
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { language } = useLanguage()

    return (
        <aside
            className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64
        bg-white dark:bg-neutral-900 text-black dark:text-white
        border-r border-gray-200 dark:border-gray-700 shadow-sm p-6 overflow-y-auto z-50
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
        >
            <h2 className="text-lg font-semibold mb-4">
                {language === "ko" ? "카테고리" : "Categories"}
            </h2>

            <ul className="space-y-2">
                {SIDE_BAR_LINKS.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            {language === "ko" ? item.labelKo : item.labelEn}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
