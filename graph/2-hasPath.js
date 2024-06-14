// Given two nodes (start and dest) in a directed acylic graph (DAG), return true if there is a directed path from start to dest, otherwise return false

// Example 1
// Input: start = 1 , dest = 3
// Output: true

// Example 2
// Input: start = 1 , dest = 4
// Output: false

let graph = {
  1: [2],
  2: [3],
  3: [],
  4: [],
};

// iterative DFT
function iterativeDFT(graph, start, dest, visited = new Set()) {
  let stack = [start];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return false;
}

// console.log(iterativeDFT(graph,1,3))
// console.log(iterativeDFT(graph,1,4))

// BFT
function hasPathBFT(graph, start, dest, visited = new Set()) {
  let queue = [start];
  visited.add(start);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node === dest) return true;
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return false;
}
// console.log(hasPathBFT(graph,1,3))
// console.log(hasPathBFT(graph,1,4))

// recursive DFT
function recursiveHasPathDFT(graph, start, dest, visited = new Set()) {
  if (start === dest) return true;
  if (visited.has(start)) {
    return false;
  }
  visited.add(start);
  for (const neighbour of graph[start]) {
    if (recursiveHasPathDFT(graph, neighbour, dest) === true) {
      return true;
    }
  }
  return false;
}
console.log(recursiveHasPathDFT(graph,1,3))
console.log(recursiveHasPathDFT(graph,1,4))
