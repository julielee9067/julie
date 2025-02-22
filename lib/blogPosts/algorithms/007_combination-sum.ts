import { LeetCodeProblem } from "@/lib/types";

export const combinationSum: LeetCodeProblem = {
    number: 7,
    date: "2025-02-21",
    name: "Combination Sum",
    tags: ["DFS", "Backtracking"],
    approach: "Use DFS with backtracking to build candidate combinations that sum to the target.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/combination-sum/",
    solutions: [
        {
            id: "backtracking",
            approach: "Backtracking, DFS",
            code: `def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
    res = []  # 결과로 반환할 조합
    subset = []  # 현재까지 선택된 숫자 조합
    
    def dfs(i, curr_sum):
        # 현재 합이 target과 같으면, 현재 조합의 복사본을 추가
        if curr_sum == target:
            res.append(subset[:])
            return
        
        # 인덱스가 끝에 도달했거나 현재 합이 target을 초과하면 종료        
        if i == len(candidates) or curr_sum > target:
            return
        
        # 현재 후보 숫자를 조합에 포함시키고 재귀적으로 같은 인덱스에서 탐색 (같은 숫자 재사용이 가능하기 때문)
        subset.append(candidates[i])
        dfs(i, curr_sum + candidates[i])
        
        # 백트래킹: 마지막에 추가한 숫자를 제거하고 다음 후보로 넘어감
        subset.pop()
        dfs(i + 1, curr_sum)
    
    dfs(0, 0)
    return res
`,
            timeComplexity: "O(2^(t/m)) 최악의 경우 모든 가능한 조합을 탐색해야 함",
            spaceComplexity: "O(n)",
            explanation: "DFS와 백트래킹을 활용하여 후보 숫자들의 조합을 탐색하며, 현재 인덱스의 숫자를 포함시켜 합계를 갱신하고 재귀적으로 탐색을 진행합니다. 만약 현재 합이 목표값(target)과 같다면 해당 조합을 결과 리스트에 추가하며, 인덱스가 배열의 끝에 도달하거나 합이 목표를 초과하면 탐색을 중단합니다. 포함한 후에는 백트래킹을 통해 마지막으로 추가한 숫자를 제거하고 다음 후보로 넘어가며 모든 가능한 조합을 탐색합니다."
        },
    ],
};
