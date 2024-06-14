const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
  };

function biggestIsland(graph)  {
    let visited = new Set()
    let largest = 0

    for (const node in graph) {
       if(!visited.has(node)){
        let componentSize = dfs(node)
        if(componentSize > largest){
            largest = componentSize
        }
       }
    }
    return largest;

    function dfs(node){
        if(visited.has(node)){
            return 0
        }
        visited.add(node)
        let size = 1
        for (const neighbour of graph[node]) {
            size += dfs(neighbour)
        }
        return size
    }
}

console.log(biggestIsland(graph));