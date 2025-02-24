import { LeetCodeProblem } from "@/lib/types";

export const mergeIntervals: LeetCodeProblem = {
    number: 13,
    date: "2025-02-23 21:21",
    name: "Merge Intervals",
    tags: ["Intervals", "Array"],
    approach: "Sort intervals by start time and merge overlapping intervals by extending the last interval when necessary.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/merge-intervals/description/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals, Array",
            code: `def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    # intervals를 시작 시간 기준으로 정렬합니다.
    intervals.sort()
    res = [intervals[0]]
    
    for interval in intervals[1:]:
        # 현재 구간의 시작이 결과 리스트의 마지막 구간의 종료보다 크다면, 겹치지 않으므로 그대로 결과에 추가합니다.
        if interval[0] > res[-1][1]:
            res.append(interval)
        else:
            # 겹치는 경우, 두 구간을 병합하여 시작은 더 작은 값, 종료는 더 큰 값으로 업데이트합니다.
            last_interval = res.pop()
            res.append(
                [min(interval[0], last_interval[0]), max(interval[1], last_interval[1])]
            )
    
    return res
`,
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(1)",
            explanation: "주어진 구간들을 시작 시간 기준으로 정렬한 후, 첫 번째 구간을 기준으로 하여 인접한 구간들과 비교합니다. 만약 현재 구간이 이전 구간과 겹치지 않으면 그대로 결과 리스트에 추가하고, 겹치는 경우에는 두 구간의 시작은 더 작은 값, 종료는 더 큰 값으로 병합하여 결과 리스트의 마지막 구간을 업데이트합니다. 이 과정을 통해 모든 구간들을 한 번씩만 순회하면서 겹치는 부분을 통합하여 최종 병합된 구간 리스트를 반환합니다."
        },
    ],
};
