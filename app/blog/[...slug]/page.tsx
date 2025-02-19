// app/blog/[...slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
    return blogPosts.map((post) => {
        const slugArray = post.slug.split("/");
        return { slug: slugArray };
    });
}

interface Props {
    params: {
        slug: string[];
    };
}

const BlogPostClient = dynamic(() => import("@/components/blog/ClientBlogPost"), { ssr: false });

export default function BlogPostPage({ params }: Props) {
    const slugString = params.slug.join("/");
    const post = blogPosts.find((p) => p.slug === slugString);
    if (!post) {
        notFound();
    }
    return <BlogPostClient post={post} />;
}
