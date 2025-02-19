// lib/blogPosts/index.ts
import {BlogPost, LeetCodeProblem} from "@/lib/types"
import { csProcessThread } from "./cs/processThread"
import {twoSum} from "@/lib/blogPosts/algorithms/two-sum";

export const blogPosts: BlogPost[] = [
    csProcessThread,
]

export const leetcodeProblems: LeetCodeProblem[] = [
    twoSum,
]
