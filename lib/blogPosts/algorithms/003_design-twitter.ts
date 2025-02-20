import { LeetCodeProblem } from "@/lib/types";

export const designTwitter: LeetCodeProblem = {
    number: 3,
    date: "2025-02-19",
    name: "Design Twitter",
    tags: ["Heap"],
    approach: "Use a heap to manage task frequencies and a queue to track tasks in cooldown.",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/design-twitter/",
    solutions: [
        {
            id: "heap",
            approach: "Heap",
            code: `class Twitter:
    def __init__(self):
        self.tweets = defaultdict(list)  # 사용자 ID별 트윗 리스트 저장
        self.follows = defaultdict(set)  # 사용자 ID별 팔로우하는 사용자 목록 저장
        self.counter = 0  # 트윗 정렬을 위한 시간 카운터 (최근 트윗이 가장 작은 값)

    def postTweet(self, userId: int, tweetId: int) -> None:
        """사용자가 새로운 트윗을 게시한다."""
        self.counter -= 1  # 최신 트윗이 가장 먼저 나오도록 음수값 사용
        self.tweets[userId].append((self.counter, tweetId))  # 트윗 저장

    def getNewsFeed(self, userId: int) -> List[int]:
        """사용자와 팔로우한 사람들의 최신 10개 트윗을 반환한다."""
        followees = self.follows[userId]  # 사용자가 팔로우한 사람들 가져오기
        followees.add(userId)  # 자신의 트윗도 포함

        heap = []  # 최소 힙을 사용하여 최신 트윗 10개 유지

        # 각 팔로우한 사용자의 가장 최신 트윗을 힙에 추가
        for followee in followees:
            if followee in self.tweets:
                idx = len(self.tweets[followee]) - 1  # 최신 트윗의 인덱스
                count, tweet_id = self.tweets[followee][idx]
                heapq.heappush(heap, (count, tweet_id, followee, idx - 1))  # 최신 트윗 삽입

        res = []
        while heap and len(res) < 10:  # 최대 10개의 트윗을 가져옴
            count, tweet_id, followee, idx = heapq.heappop(heap)  # 가장 최신 트윗 꺼내기
            res.append(tweet_id)

            if idx >= 0:  # 해당 사용자의 이전 트윗이 존재하면 힙에 추가
                count, tweet_id = self.tweets[followee][idx]
                heapq.heappush(heap, (count, tweet_id, followee, idx - 1))

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        """followerId 사용자가 followeeId 사용자를 팔로우한다."""
        self.follows[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        """followerId 사용자가 followeeId 사용자를 언팔로우한다."""
        if followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
`,
            timeComplexity: "O(n log n) (for getNewsFeed), O(1) (for other methods)",
            spaceComplexity: "O(N * m + N * M + n): O(N * m)(모든 사용자의 트윗 저장, N: 전체 사용자 수, m: 사용자당 최대 트윗 수), O(N * M)(팔로우 관계 저장, M: 사용자당 최대 팔로우 수), O(n)(getNewsFeed() 실행 시 힙 사용, n: userId에 연결된 총 팔로우 수)",
            explanation: "최대 힙을 사용하여 가장 최신 트윗을 가져옵니다. " +
                "각 사용자의 최신 트윗을 힙에 넣고, 가장 최신 트윗을 가져온 후 해당 사용자의 이전 트윗을 추가하여 최신순으로 유지합니다. " +
                "최대 10개의 트윗만 유지하여 뉴스 피드를 반환합니다. " +
                "팔로우 관계는 별도의 해시맵에 저장하여 관리합니다."
        },
    ],
};
