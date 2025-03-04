import { LeetCodeProblem } from "@/lib/types";

export const decodeWays: LeetCodeProblem = {
    number: 17,
    date: "2025-02-28 21:16",
    name: "Decode Ways",
    tags: ["DP", "DFS"],
    approach: "Use DP with memoization for optimization and bottom-up DP.",
    difficulty: "Medium",
    url: "https://neetcode.io/problems/decode-ways",
    solutions: [
        {
            id: "DFS",
            approach: "DFS, Recursion",
            code: `def numDecodings(self, s: str) -> int:
    def dfs(i):
        if i == len(s):
            return 1
        
        if s[i] == "0":
            return 0
        
        res = dfs(i + 1)
        
        if i + 1 < len(s) and (s[i] == "1" or (s[i] == "2" and s[i + 1] in "0123456")):
            res += dfs(i + 2)
        
        return res
        
    return dfs(0)
`,
            timeComplexity: "O(2^n)",
            spaceComplexity: "O(n)",
            explanation: "DFS를 활용하여 가능한 모든 해석 방법을 탐색합니다. 각 자리에서 1자리 숫자 해석과 2자리 숫자 해석이 가능할 때 각각의 경로를 탐색하여 경우의 수를 계산합니다."
        },
        {
            id: "DP (Top-Down)",
            approach: "DP, Memoization",
            code: `def numDecodings(self, s: str) -> int:
    memo = {}
    memo[len(s)] = 1
    
    def dfs(i):
        if i in memo:
            return memo[i]
        
        if s[i] == "0":
            return 0
        
        res = dfs(i + 1)
        if i + 1 < len(s) and (s[i] == "1" or (s[i] == "2" and s[i + 1] in "0123456")):
            res += dfs(i + 2)
        
        memo[i] = res
        return res
    
    return dfs(0)
`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            explanation: "DFS 방식의 중복 연산을 줄이기 위해 메모이제이션을 적용하여 이미 계산된 부분 문제의 결과를 저장합니다. " +
                "이렇게 하면 같은 인덱스를 여러 번 방문하지 않고 빠르게 정답을 찾을 수 있습니다."
        },
        {
            id: "DP (Bottom-Up)",
            approach: "DP, Bottom-Up",
            code: `def numDecodings(self, s: str) -> int:
    dp = {len(s): 1}
    
    for i in range(len(s) - 1, -1, -1):
        if s[i] == "0":
            dp[i] = 0
        else:
            dp[i] = dp[i + 1]
        
        if i + 1 < len(s) and (s[i] == "1" or (s[i] == "2" and s[i + 1] in "0123456")):
            dp[i] += dp[i + 2]
    
    return dp[0]
`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            explanation: "문자열을 끝에서부터 탐색하며, `dp[i]`에 해당 인덱스부터 끝까지 가능한 해석 개수를 저장합니다. " +
                "이전 상태(`dp[i+1]` 및 `dp[i+2]`)를 참조하여 해석 방법을 결정하며, Bottom-Up 방식이므로 메모리 재사용이 가능합니다."
        },
    ],
};
