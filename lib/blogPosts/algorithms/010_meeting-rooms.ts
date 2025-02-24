import { LeetCodeProblem } from "@/lib/types";

export const meetingRooms: LeetCodeProblem = {
    number: 10,
    date: "2025-02-23 19:48",
    name: "Meeting Rooms",
    tags: ["Intervals", "Array"],
    approach: "Sort intervals by start time and check for overlapping meetings.",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/meeting-rooms/description/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals",
            code: `def canAttendMeetings(self, intervals: List[Interval]) -> bool:
    # 회의 일정이 없으면 겹칠 수 없으므로 True 반환
    if not intervals: return True

    # 회의 시작 시간 기준으로 intervals를 정렬
    intervals.sort(key=lambda i: i.start)
    
    # 첫 번째 회의를 기준으로 마지막으로 확인한 회의 시간 설정
    last = intervals[0]

    # 정렬된 회의 리스트의 두 번째 회의부터 순회하며 이전 회의와 겹치는지 확인
    for interval in intervals[1:]:
        
        # 현재 회의의 시작 시간이 이전 회의의 종료 시간보다 크거나 같으면 겹치치 않으므로 기준 회의를 갱신
        if interval.start >= last.end:
            last = interval
            continue
        
        else:
            return False
    
    # 모든 회의가 겹치지 않으면 True 반환
    return True
`,
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(1)",
            explanation: "회의 일정들이 겹치는지 여부를 확인하기 위해 먼저 회의들의 시작 시간을 기준으로 정렬합니다. 정렬 후, 첫 번째 회의를 기준으로 설정하고, 나머지 회의들에 대해 현재 회의의 시작 시간이 마지막으로 확인한 회의의 종료 시간보다 크거나 같은지 검사합니다. 만약 그렇지 않다면 회의들이 겹치게 되어 참석이 불가능하므로 False를 반환하고, 모든 회의가 겹치지 않는다면 True를 반환합니다."
        },
    ],
};
