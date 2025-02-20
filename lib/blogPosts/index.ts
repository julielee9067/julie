// lib/blogPosts/index.ts
import {BlogPost, LeetCodeProblem} from "@/lib/types"
import { csProcessThread } from "./cs/processThread"
import {twoSum} from "@/lib/blogPosts/algorithms/two-sum";
import {systemDesignRandom} from "@/lib/blogPosts/system-design/randomFile";

export const blogPosts: BlogPost[] = [
    csProcessThread,
    systemDesignRandom
]

export const leetcodeProblems: LeetCodeProblem[] = [
    twoSum,
]
