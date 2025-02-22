import { LeetCodeProblem } from "@/lib/types";

export const combinationSumII: LeetCodeProblem = {
    number: 8,
    date: "2025-02-21",
    name: "Combination Sum II",
    tags: ["DFS", "Backtracking"],
    approach: "Use DFS with backtracking and skip duplicates with a while loop.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/combination-sum-ii/",
    solutions: [
        {
            id: "backtracking",
            approach: "Backtracking, DFS",
            code: `def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
    res = []  # 결과 조합 저장
    subset = []  # 현재 조합 저장
    candidates.sort()  # 중복 제거를 위해 후보 숫자 정렬
    
    def dfs(i, curr_sum):
        if curr_sum == target:
            res.append(subset[:])
            return
        
        # 합이 타겟을 초과하거나 인덱스가 범위를 벗어나면 종료
        if curr_sum > target or i == len(candidates):
            return
        
        # 현재 후보 숫자를 포함시키고 다음 인덱스로 진행
        subset.append(candidates[i])
        dfs(i + 1, curr_sum + candidates[i])
        subset.pop()
        
        # 중복된 숫자는 한 번만 처리하기 위해 While loop를 통해 건너뜀
        while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
            i += 1
        
        dfs(i + 1, curr_sum)
    
    dfs(0, 0)
    return res
`,
            timeComplexity: "O(n*(2^n))",
            spaceComplexity: "O(n)",
            explanation: "후보 숫자들을 정렬하고 DFS와 백트래킹을 이용하여 목표 합을 만족하는 조합을 찾습니다. 중복된 숫자는 While loop을 통해 한 번만 처리하여 중복 결과를 방지하고, 재귀적으로 다음 인덱스로 이동하면서 가능한 모든 조합을 탐색합니다."
        },
    ],
};
