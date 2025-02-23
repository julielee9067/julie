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
import {cnInternetArchitectureIntro} from "@/lib/blogPosts/computer-networks/001_internet-architecture-intro";
import {cnEncapsulationDeencapsulation} from "@/lib/blogPosts/computer-networks/002_encapsulation-deencapsulation";
import {cnInternetProtocolStack} from "@/lib/blogPosts/computer-networks/003_internet-protocol-stack-model";
import {cnHostsAndNetworks} from "@/lib/blogPosts/computer-networks/004_interconnecting-hosts-and-networks";
import {cnMultiplexingAndDemultiplexing} from "@/lib/blogPosts/computer-networks/005_multiplexing-and-demultiplexing";
import {cnTCP} from "@/lib/blogPosts/computer-networks/006_tcp";
import {csEventBrokerVsMessageBroker} from "@/lib/blogPosts/cs/003_event-broker-vs-message-broker";
import {cnIntradomainRouting} from "@/lib/blogPosts/computer-networks/007_intradomain-routing";

export const blogPosts: BlogPost[] = [
    csMultiprocessingAndMultiThreadingInPython,
    csGarbageCollectionInPython,
    systemDesignMessagingService,
    cnInternetArchitectureIntro,
    cnEncapsulationDeencapsulation,
    cnInternetProtocolStack,
    cnHostsAndNetworks,
    cnMultiplexingAndDemultiplexing,
    cnTCP,
    csEventBrokerVsMessageBroker,
    cnIntradomainRouting,
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
