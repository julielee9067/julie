// components/home/Blogs.tsx
"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blogPosts"
import { format } from "date-fns"
import { ko, enUS } from "date-fns/locale"
import { Button } from "@/components/ui/button"

interface LatestBlogPostsProps {
    language: "ko" | "en"
    t: (key: string) => string
}

function formatDate(dateStr: string, lang: "ko" | "en") {
    const normalizedDateStr = dateStr.includes(":") ? dateStr : `${dateStr} 00:00`;
    const date = new Date(normalizedDateStr.replace(" ", "T"));

    return format(new Date(date), "PP p", {
        locale: lang === "ko" ? ko : enUS,
    })
}

export function Blogs({ language, t }: LatestBlogPostsProps) {
    const latestBlogPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3)

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{t("sections.blog")}</h2>
                <Link href="/blog">
                    <Button variant="outline">{t("buttons.viewAll")}</Button>
                </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {latestBlogPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:bg-muted/50 p-3 rounded-md"
                    >
                        <div className="space-y-2">
                            <Badge variant="outline">{post.category[language]}</Badge>
                            <h4 className="font-medium text-lg">{post.title[language]}</h4>
                            <time className="block text-xs text-muted-foreground">
                                {formatDate(post.date, language)}
                            </time>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
