// lib/blogPosts/index.ts
import {BlogPost, LeetCodeProblem} from "@/lib/types"
import { csProcessThread } from "./cs/processThread"
import {systemDesignRandom} from "@/lib/blogPosts/system-design/randomFile";
import {twoSum} from "@/lib/blogPosts/algorithms/001_two-sum";
import {taskScheduler} from "@/lib/blogPosts/algorithms/002_task-scheduler";
import {designTwitter} from "@/lib/blogPosts/algorithms/003_design-twitter";

export const blogPosts: BlogPost[] = [
    csProcessThread,
    systemDesignRandom
]

export const leetcodeProblems: LeetCodeProblem[] = [
    twoSum,
    taskScheduler,
    designTwitter
]
