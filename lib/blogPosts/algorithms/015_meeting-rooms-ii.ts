import { LeetCodeProblem } from "@/lib/types";

export const meetingRoomsII: LeetCodeProblem = {
    number: 15,
    date: "2025-02-23 21:54",
    name: "Meeting Rooms II",
    tags: ["Intervals", "Array"],
    approach: "Sort start and end times separately, then use two pointers to count overlapping meetings.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/meeting-rooms-ii/description/",
    solutions: [
        {
            id: "intervals",
            approach: "Intervals, Array",
            code: `def minMeetingRooms(self, intervals: List[Interval]) -> int:
    # 각 회의의 시작 시간과 종료 시간을 따로 저장할 리스트입니다.
    starts = []
    ends = []
    for interval in intervals:
        starts.append(interval.start)
        ends.append(interval.end)
    
    # 시작 시간과 종료 시간을 각각 오름차순으로 정렬합니다.
    starts.sort()
    ends.sort()
    
    count = 0  # 현재 동시에 진행 중인 회의의 수를 저장합니다.
    res = 0  # 필요한 최소 회의실 수를 저장할 변수입니다.
    
    s = 0
    e = 0
    
    # 모든 회의의 시작 시간을 기준으로 반복합니다.
    while s < len(starts):
        start = starts[s]
        end = ends[e]
        
        # 만약 현재 회의의 시작 시간이 가장 빨리 끝나는 회의의 종료 시간보다 작다면,
        # 새로운 회의가 시작된 것이므로 동시에 진행되는 회의 수를 증가시킵니다.
        if start < end:
            s += 1
            count += 1
        else:
            # 그렇지 않다면, 하나의 회의가 종료된 것이므로 동시에 진행 중인 회의 수를 감소시키고,
            # 다음 종료 시간으로 이동합니다.
            e += 1
            count -= 1
        
        res = max(res, count)
    
    return res
`,
            timeComplexity: "O(n log n)",
            spaceComplexity: "O(n)",
            explanation: "각 회의의 시작 시간과 종료 시간을 따로 정렬한 후, 두 개의 포인터를 사용하여 동시에 진행되는 회의의 수를 계산합니다. 시작 시간 포인터가 현재 가장 빠른 종료 시간보다 앞서면 새로운 회의가 시작된 것으로 판단하여 회의 수를 증가시키고, 그때마다 최대 회의 수를 갱신합니다. 반대로, 시작 시간이 종료 시간과 같거나 늦으면 회의가 종료된 것으로 처리하여 회의 수를 감소시키고 다음 종료 시간으로 넘어갑니다. 최종적으로 동시에 진행되는 최대 회의 수가 필요한 최소 회의실 수가 됩니다."
        },
    ],
};
