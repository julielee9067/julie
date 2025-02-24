import { LeetCodeProblem } from "@/lib/types";

export const insertInterval: LeetCodeProblem = {
    number: 11,
    date: "2025-02-23 20:14",
    name: "Insert Interval",
    tags: ["Intervals", "Array"],
    approach: "Sort intervals by start time, then merge overlapping intervals with the new interval.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/insert-interval/description/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals",
            code: `def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    merged = []
    i = 0
    n = len(intervals)
    
    # newInterval의 시작 전에 끝나는 구간들은 그대로 결과에 추가합니다.
    while i < n and intervals[i][1] < newInterval[0]:
        merged.append(intervals[i])
        i += 1
    
    # newInterval과 겹치는 구간들을 모두 병합합니다.
    # 여기서 조건은 현재 구간의 시작이 newInterval의 종료보다 작거나 같은 경우입니다.
    while i < n and intervals[i][0] <= intervals[1]:
        start = min(newInterval[0], intervals[i][0])
        end = max(newInterval[1], intervals[i][1])
        newInterval = [start, end]
        i += 1
    merged.append(newInterval)
    
    # 나머지 구간들은 newInterval과 겹치지 않으므로 그대로 결과에 추가합니다.
    while i < n:
        merged.append(intervals[i])
        i += 1
    
    return merged
`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            explanation: "주어진 구간(intervals)들을 정렬된 상태로 가정하고, 새로운 구간(newInterval)을 기존 구간들과 병합하는 방식으로 동작합니다. 먼저 newInterval의 시작보다 빨리 끝나는 구간들은 병합 대상이 아니므로 그대로 결과 리스트에 추가합니다. 그 후, newInterval과 겹치는 모든 구간들을 찾아 시작은 둘 중 작은 값, 종료는 둘 중 큰 값으로 갱신하며 병합을 수행합니다. 마지막으로, newInterval과 겹치지 않는 나머지 구간들을 결과 리스트에 추가하여 최종 병합된 구간 리스트를 반환합니다."
        },
    ],
};
