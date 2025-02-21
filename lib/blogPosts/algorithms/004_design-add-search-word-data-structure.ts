import { LeetCodeProblem } from "@/lib/types";

export const designAddSearchWordDataStructure: LeetCodeProblem = {
    number: 4,
    date: "2025-02-20",
    name: "Design Add and Search Word Data Structure",
    tags: ["Trie", "DFS"],
    approach: "Use a Trie to store and search words, and utilize DFS with backtracking to handle wildcard '.' searches.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/design-add-and-search-words-data-structure",
    solutions: [
        {
            id: "trie",
            approach: "Trie, DFS",
            code: `class TrieNode:
    def __init__(self):
        self.children: = dict()  # 문자 -> TrieNode 매핑
        self.word = False  # 현재 노드가 단어의 끝인지 여부

class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        
        for c in word:
            if c not in curr.children:  # 해당 문자가 Trie에 없으면 새 노드 추가
                curr.children[c] = TrieNode()
            curr = curr.children[c]  # 다음 노드로 이동
        
        curr.word = True  # 단어 끝을 표시
        
    def search(self, word: str) -> bool:        
        def dfs(j, root):
            curr = root
            for i in range(j, len(word)):
                c = word[i]
                
                if c == ".":  # '.'은 어떤 문자와도 매칭 가능
                    for child in cur.children.values():  # 현재 노드의 모든 자식 노드를 탐색
                        if dfs(i + 1, child):  # 다음 문자를 재귀적으로 탐색
                            return True
                            
                    return False  # 매칭되는 단어가 없음
                else:
                    if c not in curr.children:
                        return False
                        
                    curr = curr.children[c]
                    
            return cur.word  # 단어 끝 여부 반환
        
        return dfs(0, self.root)
`,
            timeComplexity: "O(n) for addWord(), O(n) for search()",
            spaceComplexity: "O(t + n), where t is the total number of stored characters in Trie and n is the depth of recursive calls in search()",
            explanation: "Trie를 사용하여 단어를 추가하고 검색합니다. " +
                "addWord()는 단어 길이 n에 비례하는 O(n) 시간에 수행됩니다. " +
                "search() 또한 일반적인 경우 O(n)이지만, '.'이 포함되면 백트래킹이 발생할 수 있습니다. " +
                "공간 복잡도는 Trie에 저장된 총 문자 개수 t와 DFS 호출 깊이 n에 의해 결정됩니다."
        },
    ],
};
