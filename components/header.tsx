"use client"

import Link from "next/link"
import { PDFDownloadButton } from "@/components/PDFDownloadButton"
import { LanguageToggle } from "@/components/LanguageToggle"
import { ModeToggle } from "@/components/ModeToggle"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg">
                    JULIE
                </Link>
                <div className="flex items-center gap-4">
                    <PDFDownloadButton />
                    <LanguageToggle />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
