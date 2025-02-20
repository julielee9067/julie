import { LeetCodeProblem } from "@/lib/types";

export const twoSum: LeetCodeProblem = {
    number: 1,
    date: "2025-02-19",
    name: "Two Sum",
    tags: ["Array", "Hash Table"],
    approach: "Use hash map to store complement values",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/two-sum/",
    solutions: [
        {
            id: "brute-force",
            approach: "Brute Force",
            code: `def twoSum(self, nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
            timeComplexity: "O(n²)",
            spaceComplexity: "O(1)",
            explanation: "모든 가능한 쌍을 확인하는 방식으로, 이중 반복문을 사용합니다. 첫 번째 숫자와 두 번째 숫자의 합이 target과 같으면 해당 인덱스들을 반환합니다.",
        },
        {
            id: "hash-map",
            approach: "Hash Map",
            code: `def twoSum(self, nums: List[int], target: int) -> List[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(n)",
            explanation: "해시맵을 사용하여 각 숫자의 보수(target - 현재 숫자)를 저장합니다. 현재 숫자의 보수가 이미 해시맵에 있다면, 현재 인덱스와 해시맵에 저장된 인덱스를 반환합니다.",
        },
    ],
};
