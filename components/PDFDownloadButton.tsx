"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export function PDFDownloadButton() {
  const { language } = useLanguage()
  const basePath = process.env.NODE_ENV === 'production' ? '/julie' : '';

  const downloadPDF = () => {
    const fileName =
        language === "ko" ? `${basePath}/assets/lee_eunji_resume.pdf` : `${basePath}/assets/julie_lee_resume.pdf`

    const link = document.createElement("a")
    link.href = fileName
    link.download = fileName.split("/").pop() || "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
      <Button variant="outline" size="sm" onClick={downloadPDF}>
        <Download className="w-4 h-4 mr-2" />
        {language === "ko" ? "이력서 다운로드" : "Download Resume"}
      </Button>
  )
}
