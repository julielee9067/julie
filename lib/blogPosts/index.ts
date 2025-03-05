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
import {systemDesignEventBrokerVsMessageBroker} from "@/lib/blogPosts/system-design/002_event-broker-vs-message-broker";
import {cnIntradomainRouting} from "@/lib/blogPosts/computer-networks/007_intradomain-routing";
import {meetingRooms} from "@/lib/blogPosts/algorithms/010_meeting-rooms";
import {insertInterval} from "@/lib/blogPosts/algorithms/011_insert-interval";
import {nonOverlappingIntervals} from "@/lib/blogPosts/algorithms/012_non-overlapping-intervals";
import {mergeIntervals} from "@/lib/blogPosts/algorithms/013_merge-intervals";
import {employeeFreeTime} from "@/lib/blogPosts/algorithms/014_employee-free-time";
import {meetingRoomsII} from "@/lib/blogPosts/algorithms/015_meeting-rooms-ii";
import {systemDesignElasticsearch} from "@/lib/blogPosts/system-design/003_elastic-search";
import {cnASandInterdomainRouting} from "@/lib/blogPosts/computer-networks/008_AS-and-interdomain-routing";
import {cnRouterDesign} from "@/lib/blogPosts/computer-networks/009_router-design";
import {til20250225} from "@/lib/blogPosts/til/001_20250225";
import {csCAPTheorem} from "@/lib/blogPosts/cs/003_cap-theorem";
import {til20250226} from "@/lib/blogPosts/til/002_20250226";
import {busRoutes} from "@/lib/blogPosts/algorithms/016_bus-routes";
import {systemDesignDBIndexing} from "@/lib/blogPosts/system-design/004_db-indexing";
import {systemDesignRealtimeUpdates} from "@/lib/blogPosts/system-design/005_realtime-updates";
import {til20250228} from "@/lib/blogPosts/til/003_20250228";
import {decodeWays} from "@/lib/blogPosts/algorithms/017_decode-ways";
import {systemDesignTimeSeriesDB} from "@/lib/blogPosts/system-design/006_time-series-db";
import {til20250304} from "@/lib/blogPosts/til/004_20250304";
import {csAsyncSyncBlockingNonblocking} from "@/lib/blogPosts/cs/004_async-vs-sync";

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
    systemDesignEventBrokerVsMessageBroker,
    cnIntradomainRouting,
    systemDesignElasticsearch,
    cnASandInterdomainRouting,
    cnRouterDesign,
    til20250225,
    csCAPTheorem,
    til20250226,
    systemDesignDBIndexing,
    systemDesignRealtimeUpdates,
    til20250228,
    systemDesignTimeSeriesDB,
    til20250304,
    csAsyncSyncBlockingNonblocking
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
    permutations,
    meetingRooms,
    insertInterval,
    nonOverlappingIntervals,
    mergeIntervals,
    employeeFreeTime,
    meetingRoomsII,
    busRoutes,
    decodeWays,
]
