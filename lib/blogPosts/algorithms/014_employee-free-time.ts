import { LeetCodeProblem } from "@/lib/types";

export const employeeFreeTime: LeetCodeProblem = {
    number: 14,
    date: "2025-02-23 21:35",
    name: "Employee Free Time",
    tags: ["Intervals", "Array"],
    approach: "Sort all intervals from all employees, merge overlapping intervals, and then find gaps between them as free time.",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/employee-free-time/description/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals, Array",
            code: `def employeeFreeTime(self, schedule: List[List[List[int]]]) -> List[List[int]]:
    flattened_schedule = []
    # 모든 직원의 스케줄을 하나의 리스트로 평탄화합니다.
    for employee in schedule:
        for e_schedule in employee:
            flattened_schedule.append(e_schedule)
    
    # 평탄화된 스케줄을 시작 시간 기준으로 정렬합니다.
    flattened_schedule.sort()
    
    # 첫 번째 구간을 기준으로 병합할 구간들을 저장할 리스트를 초기화합니다.
    merged = [flattened_schedule[0]]
    
    # 평탄화된 스케줄의 나머지 구간들을 순회하며 겹치는 구간들을 병합합니다.
    for interval in flattened_schedule[1:]:
    
        # 현재 구간의 시작 시간이 이전 병합된 구간의 종료 시간보다 크면, 겹치지 않으므로 그대로 추가합니다.
        if interval[0] > merged[-1][1]:
            merged.append(interval)
        else:
            # 겹치는 경우, 두 구간을 병합하여 시작은 더 작은 값, 종료는 더 큰 값으로 갱신합니다.
            last_interval = merged.pop()
            new_interval = [min(interval[0], last_interval[0]), max(interval[1], last_interval[1])]
            merged.append(new_interval)
    
    free_time = []
    # 첫 번째 병합 구간을 기준으로 설정합니다.
    last_interval = merged[0]
    
    # 병합된 구간의 다음 구간부터 순회하며 이전 구간의 종료와 현재 구간의 시작 사이의 간격을 자유 시간으로 저장합니다.
    for interval in merged[1:]:
        free_time.append(
            [last_interval[1], interval[0]]
        )
        last_interval = interval
    
    return free_time    
`,
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            explanation: "모든 직원의 스케줄을 하나의 리스트로 평탄화한 후, 시작 시간 기준으로 정렬하여 모든 구간을 순서대로 배치합니다. 이후 겹치는 구간들을 병합하여 직원 전체의 바쁜 시간대를 하나의 구간들로 통합하고, 병합된 구간들 사이의 빈틈을 찾아서 그것을 자유 시간으로 반환합니다."
        },
    ],
};
