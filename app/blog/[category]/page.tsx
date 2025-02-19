// app/blog/[category]/page.tsx
"use client"

import { useLanguage } from "@/components/LanguageProvider"
import { blogPosts } from "@/lib/blogPosts"
import {BlogPostCard} from "@/components/blog/BlogPostCard";

interface Props {
    params: {
        category: string
    }
}

export default function BlogCategoryPage({ params }: Props) {
    const { language } = useLanguage()
    const { category } = params
    const filteredPosts = blogPosts.filter((post) => post.categorySlug === category)

    return (
        <div className="min-h-screen flex">
            <main className="flex-1 p-4 md:p-8 lg:p-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold">
                        {filteredPosts.length
                            ? filteredPosts[0].category[language]
                            : category}
                    </h1>
                    <div className="grid gap-6">
                        {filteredPosts.map((post) => (
                            <BlogPostCard
                                key={post.slug}
                                post={post}
                                language={language}
                            />
                        ))}
                    </div>
                    {!filteredPosts.length && (
                        <p className="text-muted-foreground">
                            {language === "ko" ? "이 카테고리에 대한 게시글이 없습니다." : "No posts in this category."}
                        </p>
                    )}
                </div>
            </main>
        </div>
        )
    }
