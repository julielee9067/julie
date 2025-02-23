"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { enUS, ko } from "date-fns/locale"
import Link from "next/link"
import {BlogPost} from "@/lib/types";

interface BlogPostCardProps {
    post: BlogPost
    language: "ko" | "en"
}

export function BlogPostCard({ post, language }: BlogPostCardProps) {
    function formatDate(dateStr: string) {
        const normalizedDateStr = dateStr.includes(":") ? dateStr : `${dateStr} 00:00`;
        const date = new Date(normalizedDateStr.replace(" ", "T")); // ISO 8601 형식으로 변환

        return format(new Date(date), "PP p", {
            locale: language === "ko" ? ko : enUS,
        });
    }

    return (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="transition hover:shadow-md hover:scale-[1.01]">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <Badge variant="outline">
                            {post.category[language]}
                        </Badge>
                        <time className="text-sm text-muted-foreground">
                            {formatDate(post.date)}
                        </time>
                    </div>
                    <CardTitle className="mt-2 text-lg">
                        {post.title[language]}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        {post.description[language]}
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}
