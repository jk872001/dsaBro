const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "E"],
  ["D", "E"],
  ["D", "F"],
  ["E", "F"],
];

function createGraph(edges) {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [x, y] = edges[i];
    if (!(x in graph)) {
      graph[x] = [];
    }
    if (!(y in graph)) {
      graph[y] = [];
    }

    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
}
function shortestPath(edges, start, dest) {
  let graph = createGraph(edges);
  let visited = new Set([start]);
  let queue = [[start, 0]];

  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (node === dest) return distance;
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1;
}

console.log(shortestPath(edges,"A","F"))
