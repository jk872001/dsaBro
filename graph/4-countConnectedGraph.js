const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
  };

function countIsland(graph) {
   let visited = new Set()
   let count = 0

   for (const node in graph) {
      if(!visited.has(node)){
        dfs(node)
        count++
      }
   }
   return count;

   function dfs(node){
      if(!visited.has(node)){
        visited.add(node)
        for (const neighbour of graph[node]) {
            dfs(neighbour)
        }
      }
   }


} 

console.log(countIsland(graph));


// a
// / \
// b---c
// \ / \
//  d   e---f