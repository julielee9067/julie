// lib/blogPosts/index.ts
import {BlogPost, LeetCodeProblem} from "@/lib/types"
import {systemDesignMessagingService} from "@/lib/blogPosts/system-design/001_chat-system";
import {twoSum} from "@/lib/blogPosts/algorithms/001_two-sum";
import {taskScheduler} from "@/lib/blogPosts/algorithms/002_task-scheduler";
import {designTwitter} from "@/lib/blogPosts/algorithms/003_design-twitter";
import {designAddSearchWordDataStructure} from "@/lib/blogPosts/algorithms/004_design-add-search-word-data-structure";
import {wordSearchII} from "@/lib/blogPosts/algorithms/005_word-search-ii";
import {
    csMultiprocessingAndMultiThreadingInPython
} from "@/lib/blogPosts/cs/001_multiprocessing-multithreading-in-python";
import {csGarbageCollectionInPython} from "@/lib/blogPosts/cs/002_garbage-collection-in-python";
import {subsets} from "@/lib/blogPosts/algorithms/006_subsets";
import {combinationSum} from "@/lib/blogPosts/algorithms/007_combination-sum";
import {combinationSumII} from "@/lib/blogPosts/algorithms/008_combination-sum-ii";
import {permutations} from "@/lib/blogPosts/algorithms/009_permutations";

export const blogPosts: BlogPost[] = [
    csMultiprocessingAndMultiThreadingInPython,
    csGarbageCollectionInPython,
    systemDesignMessagingService
]

export const leetcodeProblems: LeetCodeProblem[] = [
    twoSum,
    taskScheduler,
    designTwitter,
    designAddSearchWordDataStructure,
    wordSearchII,
    subsets,
    combinationSum,
    combinationSumII,
    permutations
]
