const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

//   itterative approach
function iterativeDFT(graph, start, visited = new Set()) {
  let stack = [start];
  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return visited;
}

console.log(iterativeDFT(graph, "a"));

// recursive approach

function recursiveDFT(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighbour of graph[start]) {
      recursiveDFT(graph, neighbour, visited);
    }
  }

  return visited;
}

console.log(recursiveDFT(graph, "a"));
