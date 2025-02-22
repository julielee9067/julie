import { LeetCodeProblem } from "@/lib/types";

export const permutations: LeetCodeProblem = {
    number: 9,
    date: "2025-02-21",
    name: "Permutations",
    tags: ["DFS", "Backtracking"],
    approach: "Use DFS with backtracking and skip already existing num in for loop.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/permutations/",
    solutions: [
        {
            id: "backtracking",
            approach: "Backtracking, DFS",
            code: `
                def permute(self, nums: List[int]) -> List[List[int]]:
    sol = []
    res = []

    def dfs():
        if len(sol) == len(nums):
            res.append(sol[:])
            return

        # 입력 리스트 nums의 모든 숫자에 대해 반복합니다.
        # 이미 현재 순열(sol)에 포함된 숫자는 건너뛰어 중복 사용을 방지합니다.
        for num in nums:
            if num not in sol:
                sol.append(num)
                dfs()
                sol.pop()

    dfs()
    return res
`,
            timeComplexity: "O(n * n!)",
            spaceComplexity: "O(n)",
            explanation: "DFS와 백트래킹을 이용하여 주어진 리스트의 모든 순열을 생성합니다. 현재 순열(sol)에 포함되지 않은 숫자만 선택하여 순열을 확장하며, 입력 리스트의 길이만큼 숫자가 모두 포함되면 완성된 순열의 복사본을 결과 리스트에 추가합니다. 재귀 호출 후에는 백트래킹을 통해 마지막에 추가한 숫자를 제거함으로써 다른 조합도 탐색할 수 있도록 합니다."
        },
    ],
};
