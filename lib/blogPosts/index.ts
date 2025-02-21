// lib/blogPosts/index.ts
import {BlogPost, LeetCodeProblem} from "@/lib/types"
import { csProcessThread } from "./cs/processThread"
import {systemDesignMessagingService} from "@/lib/blogPosts/system-design/001_chat-system";
import {twoSum} from "@/lib/blogPosts/algorithms/001_two-sum";
import {taskScheduler} from "@/lib/blogPosts/algorithms/002_task-scheduler";
import {designTwitter} from "@/lib/blogPosts/algorithms/003_design-twitter";
import {designAddSearchWordDataStructure} from "@/lib/blogPosts/algorithms/004_design-add-search-word-data-structure";
import {wordSearchII} from "@/lib/blogPosts/algorithms/005_word-search-ii";

export const blogPosts: BlogPost[] = [
    csProcessThread,
    systemDesignMessagingService
]

export const leetcodeProblems: LeetCodeProblem[] = [
    twoSum,
    taskScheduler,
    designTwitter,
    designAddSearchWordDataStructure,
    wordSearchII,
]
