"use client"

import React from "react"
import { cn } from "@/lib/utils"

function removeAllLeadingWhitespace(text: string) {
  return text
      .split("\n")
      .map(line => line.trimStart()) // 각 줄의 왼쪽 공백을 모두 제거
      .join("\n")
      .trim();
}

export const MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className={cn("mt-8 mb-4 text-4xl font-bold tracking-tight", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className={cn("mt-8 mb-4 text-3xl font-bold tracking-tight", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className={cn("mt-8 mb-4 text-2xl font-bold tracking-tight", className)} {...props} />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4 className={cn("mt-8 mb-4 text-xl font-bold tracking-tight", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
          className={cn(
              "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
              className,
          )}
          {...props}
      />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
          className={cn("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)}
          {...props}
      />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-lg py-4", className)} {...props} />
  ),
  code: ({
           className,
           children,
           ...props
         }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) => {
    const text = React.Children.toArray(children)
        .map(child => (typeof child === "string" ? child : ""))
        .join("")
    const cleaned = removeAllLeadingWhitespace(text)
    return (
        <code
            className={cn("relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
            {...props}
        >
          {cleaned}
        </code>
    )
  },
}
