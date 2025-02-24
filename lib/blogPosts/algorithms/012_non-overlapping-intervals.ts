import { LeetCodeProblem } from "@/lib/types";

export const nonOverlappingIntervals: LeetCodeProblem = {
    number: 11,
    date: "2025-02-23 20:32",
    name: "Non-Overlapping Intervals",
    tags: ["Intervals", "Array"],
    approach: "Sort intervals by start time and remove overlapping intervals by choosing the interval with the earliest end time.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/non-overlapping-intervals/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals, Array",
            code: `def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
    intervals.sort()  # 구간들을 시작 시간 기준으로 정렬합니다.
    res = 0
    last_end = intervals[0][1]  # 첫 구간의 종료 시간을 기준으로 설정합니다.
    
    for start, end in intervals[1:]:
        # 만약 현재 구간의 시작 시간이 이전 구간의 종료 시간보다 크거나 같다면, 겹치지 않으므로 기준 구간을 갱신합니다.
        if last_end <= start:
            last_end = end
            continue
        else:
            # 현재 구간이 겹치는 경우, 제거 횟수를 증가시키고
            # 최소한의 제거를 위해 이전 구간의 종료 시간과 현재 구간의 종료 시간 중 더 작은 값을 기준으로 갱신합니다.
            last_end = min(last_end, end)
            res += 1
    
    return res
`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            explanation: "구간들이 서로 겹치지 않도록 하기 위해 최소한의 구간을 제거하는 문제를 해결합니다. 먼저 주어진 구간들을 시작 시간 기준으로 정렬한 후, 첫 번째 구간의 종료 시간을 기준으로 이후 구간들을 순회하며 비교합니다. 만약 현재 구간의 시작 시간이 이전 구간의 종료 시간보다 크거나 같다면 두 구간이 겹치지 않으므로 기준 구간의 종료 시간을 갱신합니다. 반면, 겹치는 경우에는 두 구간 중 종료 시간이 더 이른 구간을 기준으로 설정하여 겹치는 구간을 제거하고, 제거 횟수를 증가시킵니다. 이와 같이 반복하여 모든 구간을 검사한 후 제거한 구간의 총 수를 반환합니다."
        },
    ],
};
