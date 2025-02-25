"use client"

import Link from "next/link"
import { PDFDownloadButton } from "@/components/PDFDownloadButton"
import { LanguageToggle } from "@/components/LanguageToggle"
import { ModeToggle } from "@/components/ModeToggle"
import type React from "react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg">
                    JULIE
                </Link>
                <div className="flex items-center gap-4">
                    <a href="https://hits.seeyoufarm.com">
                        <img
                            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjulielee9067.github.io%2Fjulie%2F&count_bg=%23B397D3&title_bg=%23DDBCD8&icon=awesomelists.svg&icon_color=%23E7E7E7&title=-++&edge_flat=false"/>
                    </a>
                    <PDFDownloadButton/>
                    <LanguageToggle/>
                    <ModeToggle/>
                </div>
            </div>
        </header>
    )
}
