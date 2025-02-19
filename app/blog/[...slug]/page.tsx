"use client"

import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blogPosts"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { ko, enUS } from "date-fns/locale"
import { useLanguage } from "@/components/LanguageProvider"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MDXComponents } from "@/components/MDXComponents"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface Props {
    params: {
        slug: string[]
    }
}

export default function BlogPostPage({ params }: Props) {
    const slugString = params.slug.join("/")
    const post = blogPosts.find((p) => p.slug === slugString)
    if (!post) {
        notFound()
    }

    const router = useRouter()
    const { language } = useLanguage()

    const[prevPage, setPrevPage] = useState<string | null>()
    useEffect(() => {
        // Store the referrer URL if it came from within the blog section
        const referrer = document.referrer
        if (referrer && referrer.includes("/blog")) {
            setPrevPage(referrer)
        }
    }, [])

    function handleBack() {
        if (prevPage) {
            router.back()
        } else {
            router.push("/blog")
        }
    }

    function formatDate(dateStr: string) {
        return format(new Date(dateStr), "PPP", {
            locale: language === "ko" ? ko : enUS,
        })
    }

    return (
        <article className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handleBack}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Badge variant="outline">{post!.category[language]}</Badge>
            </div>

            <h1 className="text-4xl font-bold">{post!.title[language]}</h1>
            <time className="block text-sm text-muted-foreground">
                {formatDate(post!.date)}
            </time>

            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={MDXComponents}>
                    {post!.content}
                </ReactMarkdown>
            </div>
        </article>
    )
}
