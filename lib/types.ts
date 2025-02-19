export interface BlogPost {
    slug: string
    categorySlug: string
    title: {
        ko?: string
        en?: string
    }
    description: {
        ko?: string
        en?: string
    }
    date: string
    category: {
        ko?: string
        en?: string
    }
    content: string
}

export interface Experience {
    company: string
    position: {
        ko: string
        en: string
    }
    period: {
        ko: string
        en: string
    }
    projects: {
        name: {
            ko: string
            en: string
        }
        period: {
            ko: string
            en: string
        }
        description: {
            ko: string[]
            en: string[]
        }
    }[]
}

export interface Education {
    school: { ko: string; en: string }
    degree: { ko: string; en: string }
    period: { ko: string; en: string }
    gpa: string
}

export interface Project {
    title: string
    description: {
        ko: string
        en: string
    }
    images?: string[]
    timeline: { start: { ko: string; en: string }; end: { ko: string; en: string } }
    technologies: string[]
    details: { ko: string[]; en: string[] }
    github?: string
}

export interface Solution {
    id: string
    approach: string
    code: string
    timeComplexity: string
    spaceComplexity: string
    explanation: {
        ko: string
        en: string
    }
}

export interface LeetCodeProblem {
    number: number
    name: string
    tags: string[]
    approach: string
    difficulty: "Easy" | "Medium" | "Hard"
    solutions: Solution[]
    url: string
}