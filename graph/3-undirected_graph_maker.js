// const edges = [
//     ['b', 'a'],
//     ['c', 'a'],
//     ['b', 'c'],
//     ['q', 'r'],
//     ['q', 's'],
//     ['q', 'u'],
//     ['q', 't'],
//   ];
  
//   const graph = {
//     b: [a],
//     a: [b]
//   }
  
//   loop => check if DOES NOT exist, then add key => push both nodes
  
//   Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.
  
//   After that you can find and node path etc.
//   Take care of cycle via visited technique.

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];

function createGraph(edges)  {
  let graph ={}
  for (let i = 0; i < edges.length; i++) {
     let [x,y] = edges[i]
     if(!(x in graph)){
      graph[x] = []
     }
     if(!(y in graph)){
      graph[y] = []
     }
     graph[x].push(y)
     graph[y].push(x)
  }
  return graph
}
console.log(createGraph(edges))