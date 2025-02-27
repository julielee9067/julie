import { LeetCodeProblem } from "@/lib/types";

export const busRoutes: LeetCodeProblem = {
    number: 16,
    date: "2025-02-27 00:13",
    name: "Bus Routes",
    tags: ["Adjacency List", "BFS"],
    approach: "Build a mapping from stops to bus routes, then perform BFS on bus routes to determine the minimum number of buses needed.",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/bus-routes/description/",
    solutions: [
        {
            id: "BFS",
            approach: "Adjacency List, BFS",
            code: `def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
    bus_stops = defaultdict(list)
    
    # 만약 출발지와 도착지가 같다면, 버스를 탈 필요가 없으므로 0을 반환합니다.
    if source == target:
        return 0

    # 각 정류장(stop)을 key로 하고, 해당 정류장을 경유하는 버스 노선의 인덱스 리스트를 값으로 하는 딕셔너리를 생성합니다.
    for i, route in enumerate(routes):
        for stop in route:
            bus_stops[stop].append(i)
    
    # BFS를 위한 큐와 방문한 버스 노선을 추적하기 위한 집합을 초기화합니다.
    q = deque()
    visited = set()

    # 출발 정류장을 경유하는 모든 버스 노선을 큐에 추가하고, 방문 처리합니다.
    for bus in bus_stops[source]:
        q.append((bus, 1))
        visited.add(bus)
    
    while q:
        size = len(q)

        for _ in range(size):
            # 큐에서 현재 버스 노선과 이용한 버스 수를 가져옵니다.
            curr_bus, num_bus = q.popleft()
            
            # 현재 버스 노선에 속한 모든 정류장을 순회합니다.
            for stop in routes[curr_bus]:
            
                # 만약 목표 정류장에 도착했다면, 지금까지 이용한 버스 수를 반환합니다.
                if stop == target:
                    return num_bus
                
                # 현재 정류장을 경유하는 다른 버스 노선들을 확인합니다.
                for connected_bus in bus_stops[stop]:
                
                    # 아직 방문하지 않은 버스 노선이면 큐에 추가하고 방문 처리합니다.
                    if connected_bus not in visited:
                        q.append((connected_bus, num_bus + 1))
                        visited.add(connected_bus)
    
    # 모든 가능한 경로를 탐색했음에도 목표 정류장에 도달할 수 없다면 -1을 반환합니다.
    return -1
`,
            timeComplexity: "O(N+M)",
            spaceComplexity: "O(N+M)",
            explanation: "각 정류장마다 해당 정류장을 경유하는 버스 노선들을 딕셔너리로 매핑한 후, BFS를 사용하여 출발 정류장에서 출발하는 모든 버스 노선을 탐색합니다. BFS 과정에서 각 버스 노선에 속한 정류장들을 확인하며, 만약 목표 정류장에 도달하면 그때까지 이용한 버스 수를 반환합니다. 아직 방문하지 않은 연결된 버스 노선은 큐에 추가하여 계속 탐색하며, 모든 경로를 확인한 후에도 도착할 수 없으면 -1을 반환합니다."
        },
    ],
};
