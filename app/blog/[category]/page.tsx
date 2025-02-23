// app/blog/[category]/page.tsx
import { blogPosts } from "@/lib/blogPosts";
import { notFound } from "next/navigation";
import ClientBlogCategory from "@/components/blog/ClientBlogCategory";

export async function generateStaticParams() {
    const categories = Array.from(new Set(blogPosts.map((post) => post.categorySlug)));
    return categories.map((category) => ({ category }));
}

interface Props {
    params: {
        category: string;
    };
}

export default function BlogCategoryPage({ params }: Props) {
    const { category } = params;
    const filteredPosts = blogPosts.filter((post) => post.categorySlug === category);
    if (filteredPosts.length === 0) {
        notFound();
    }
    const sortedPosts = [...filteredPosts].map(post => {
        return {
            ...post,
            date: post.date.includes(":") ? post.date : `${post.date} 00:00`
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return <ClientBlogCategory category={category} filteredPosts={sortedPosts} />;
}
