"use client"

import { useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"
import { blogPosts } from "@/lib/blogPosts"
import { BlogPostCard } from "@/components/blog/BlogPostCard"

export default function BlogIndex() {
  const { language } = useLanguage()

  const allLabel = language === "ko" ? "전체" : "All"
  const [selectedCategory, _] = useState(allLabel)
  const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
      <div className="min-h-screen flex">
        <main className="flex-1 p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">
              {language === "ko" ? "블로그" : "Blog"}
            </h1>

            <div className="grid gap-6">
              {sortedPosts.map((post) => (
                  <BlogPostCard
                      key={post.slug}
                      post={post}
                      language={language}
                  />
              ))}
            </div>
            {!sortedPosts.length && (
                <p className="text-muted-foreground">
                  {language === "ko" ? "이 카테고리에 대한 게시글이 없습니다." : "No posts in this category."}
                </p>
            )}
          </div>
        </main>
      </div>
  )
}
