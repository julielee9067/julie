import { LeetCodeProblem } from "@/lib/types";

export const taskScheduler: LeetCodeProblem = {
    number: 2,
    date: "2025-02-19",
    name: "Task Scheduler",
    tags: ["Heap", "Queue"],
    approach: "Use a heap to manage task frequencies and a queue to track tasks in cooldown.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/task-scheduler/description/",
    solutions: [
        {
            id: "heap",
            approach: "Heap",
            code: `class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # 최대 힙을 사용하여 가장 빈도가 높은 작업을 먼저 처리
        max_heap = []
        task_counts = Counter(tasks)  # 각 작업의 빈도수 계산 (O(n))
        
        for count in task_counts.values():
            max_heap.append(-count)  # 최대 힙을 만들기 위해 음수 값을 저장
        
        heapq.heapify(max_heap)  # O(n) 복잡도로 힙 변환
        
        time_elapsed = 0
        cooldown_queue = deque()  # (남은 실행 횟수, 작업이 다시 실행 가능해지는 시간) 튜플 저장
        
        while max_heap or cooldown_queue:
            time_elapsed += 1
            
            if max_heap:
                remaining_executions = heapq.heappop(max_heap) + 1  # 작업 실행 (-1 증가)
                
                if remaining_executions < 0:  # 아직 실행해야 할 작업이 남아 있으면 큐에 추가
                    cooldown_queue.append((remaining_executions, time_elapsed + n))
            
            # 가장 먼저 추가된 작업이 다시 실행 가능하면 max_heap으로 복귀
            if cooldown_queue and cooldown_queue[0][1] == time_elapsed:
                heapq.heappush(max_heap, cooldown_queue.popleft()[0])
        
        return time_elapsed
`,
            timeComplexity: "O(n): O(n log(26)) -> O(n), 각 작업은 최대 한 번만 heappop(), heappush() 실행 가능",
            spaceComplexity: "O(1): O(26) -> O(1)",
            explanation: "최대 힙을 사용하여 가장 빈도가 높은 작업을 먼저 실행합니다. " +
                "실행된 작업은 쿨다운 큐에 넣어 일정 시간이 지나야 다시 실행할 수 있도록 합니다. " +
                "쿨다운이 끝난 작업은 다시 힙에 추가하여 최소 시간으로 모든 작업을 처리합니다."
        },
    ],
};
