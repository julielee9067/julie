import { LeetCodeProblem } from "@/lib/types";

export const wordSearchII: LeetCodeProblem = {
    number: 5,
    date: "2025-02-20",
    name: "Word Search II",
    tags: ["Trie", "DFS", "Backtracking"],
    approach: "Store words in a Trie and use DFS with backtracking to find valid words on the board.",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/word-search-ii/",
    solutions: [
        {
            id: "trie",
            approach: "Trie, DFS",
            code: `class TrieNode:
    def __init__():
        self.children = dict()
        self.is_word = False
    
    def add_word(self, word):
        curr = self
        
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        
        curr.is_word = True
        
def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
    # Trie를 생성하고 단어들을 추가
    root = TrieNode()
    for w in words:
        root.add_word(w)
    
    num_rows, num_cols = len(board), len(board[0])
    res = set()  # 중복 방지를 위해 set 사용
    visit = set()  # 방문한 위치 추적
    
    def dfs(r, c, node, word):
        # 보드를 벗어나거나 이미 방문한 위치이거나, 현재 문자가 Trie에 없는 경우 종료
        if not 0 <= r < num_rows or not 0 <= c < num_cols or (r, c) in visit or board[r][c] not in node.children:
            return
        
        visit.add((r, c))
        
        node = node.children[board[r][c]]  # Trie에서 현재 문자에 해당하는 노드로 이동
        word += board[r][c]  # 단어에 문자 추가
        
        if node.is_word:  # Trie에 등록된 단어를 찾으면 결과에 추가
            res.add(word)
        
        # 상, 하, 좌, 우 방향으로 DFS 탐색 수행
        dfs(r - 1, c, node, word)
        dfs(r + 1, c, node, word)
        dfs(r, c - 1, node, word)
        dfs(r, c + 1, node, word)
        
        visit.remove((r, c))  # 백트래킹(이전 상태로 복귀)
        
    # 보드의 모든 위치에서 DFS 시작
    for r in range(num_rows):
        for c in range(num_cols):
            dfs(r, c, root, "")
    
    return list(res)
`,
            timeComplexity: "O(m * n * 4 * 3^(t-1) + s), where m is the number of rows, n is the number of columns, t is the maximum length of any word in words, and s is the sum of the lengths of all words.",
            spaceComplexity: "O(s), where s is the sum of the lengths of all words stored in the Trie.",
            explanation: "먼저 단어 목록을 Trie에 저장합니다. 그런 다음, board에서 가능한 모든 위치에서 DFS를 수행하여 단어를 찾습니다. " +
                "DFS 중에는 백트래킹을 사용하여 이미 방문한 위치를 추적하고, 경로를 따라 Trie에 없는 문자가 나오면 탐색을 중단합니다. " +
                "검색된 단어는 set에 저장하여 중복을 방지하고, 최종적으로 리스트로 변환하여 반환합니다."
        },
    ],
};
