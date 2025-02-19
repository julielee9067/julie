// components/blog/ClientBlogCategory.tsx
"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface PostType {
    slug: string;
    category: { [key: string]: string };
    title: { [key: string]: string };
    description: { [key: string]: string };
    // add any other post fields as needed
}

interface ClientBlogCategoryProps {
    category: string;
    filteredPosts: PostType[];
}

export default function ClientBlogCategory({ category, filteredPosts }: ClientBlogCategoryProps) {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex">
            <main className="flex-1 p-4 md:p-8 lg:p-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold">
                        {filteredPosts[0].category[language as "ko" | "en"] || category}
                    </h1>
                    <div className="grid gap-6">
                        {filteredPosts.map((post) => (
                            <div key={post.slug}>
                                <div className="border rounded-lg p-4 hover:shadow-md transition">
                                    <h2 className="text-xl font-semibold">
                                        {post.title[language as "ko" | "en"]}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        {post.description[language as "ko" | "en"]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredPosts.length === 0 && (
                        <p className="text-muted-foreground">
                            {language === "ko"
                                ? "이 카테고리에 대한 게시글이 없습니다."
                                : "No posts in this category."}
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}
