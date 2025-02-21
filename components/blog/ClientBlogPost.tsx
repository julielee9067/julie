// components/BlogPostClient.tsx
"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "@/components/MDXComponents";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ko, enUS } from "date-fns/locale";
import { BlogPost } from "@/lib/types";

interface BlogPostClientProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    const { language } = useLanguage();
    const router = useRouter();
    const [prevPage, setPrevPage] = useState<string | undefined>();

    useEffect(() => {
        const referrer = document.referrer;
        if (referrer && referrer.includes("/blog")) {
            setPrevPage(referrer);
        }
    }, []);

    function handleBack() {
        if (prevPage) {
            router.back();
        } else {
            router.push("/blog");
        }
    }

    function formatDate(dateStr: string) {
        return format(new Date(dateStr), "PPP", {
            locale: language === "ko" ? ko : enUS,
        });
    }

    return (
        <article className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
            <div className="flex items-center gap-2">
                <button onClick={handleBack} className="bg-transparent border-none">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <Badge variant="outline">{post.category[language as "ko" | "en"]}</Badge>
            </div>
            <h1 className="text-4xl font-bold">{post.title[language as "ko" | "en"]}</h1>
            <time className="block text-sm text-muted-foreground">
                {formatDate(post.date)}
            </time>
            <div className="prose dark:prose-invert max-w-full break-words overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={MDXComponents}>
                    {post.content}
                </ReactMarkdown>
            </div>
        </article>
    );
}
