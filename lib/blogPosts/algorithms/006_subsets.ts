import { LeetCodeProblem } from "@/lib/types";

export const subsets: LeetCodeProblem = {
    number: 6,
    date: "2025-02-21",
    name: "Subsets",
    tags: ["DFS", "Backtracking"],
    approach: "Use DFS with backtracking to explore both including and excluding each element.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/subsets",
    solutions: [
        {
            id: "backtracking",
            approach: "Backtracking, DFS",
            code: `def subsets(self, nums: List[int]) -> List[List[int]]:
    res = []  # 모든 부분집합을 저장할 리스트
    subset = []  # 현재까지 선택된 원소들을 저장할 리스트
    
    def dfs(i):
        # i가 nums의 길이와 같으면, 모든 원소에 대해 선택 여부를 결정한 것이므로 결과에 추가
        if i == len(nums):
            res.append(subset[:])  # 현재 subset의 복사본을 추가
            return
        
        # 현재 원소를 부분 집합에 포함시키는 경우
        subset.append(nums[i])
        dfs(i + 1)
        
        # 백트래킹: 이전 선택을 취소하고 원소를 포함시키지 않는 경우
        subset.pop()
        dfs(i + 1)
    
    dfs(0)
    return res
`,
            timeComplexity: "최악의 경우 모든 원소에 대해 선택 또는 비선택의 두 가지 경우를 고려하므로, 시간 복잡도는 O(2ⁿ)입니다. 또한, 각 부분집합을 복사하는 데 O(n)의 시간이 소요되므로, 전체 시간 복잡도는 O(n * 2ⁿ)입니다.",
            spaceComplexity: "O(n)",
            explanation: "각 단계에서 현재 인덱스의 원소를 선택하거나 선택하지 않고 재귀 호출을 진행합니다. 인덱스가 리스트의 길이에 도달하면, 현재까지 구성된 부분집합의 복사본을 결과에 추가합니다. 이 과정에서 백트래킹을 통해 이전 선택을 취소하여 다른 경우의 수도 탐색할 수 있습니다."
        },
    ],
};
