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
    return <ClientBlogCategory category={category} filteredPosts={filteredPosts} />;
}
