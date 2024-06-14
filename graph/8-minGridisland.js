const grid = [
    ['W', 'L', 'W', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

function minGridIsland(grid) {
  let rows = grid.length
  let col = grid[0].length
  let visited = new Set()
  let smallest = Infinity

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < col; c++) {
       if(grid[r][c] === "L" && !visited.has(r + "," + c)){
          let size = dfs(r,c)
          if(size < smallest){
            smallest = size
          }
       }
    }
  }
  return smallest;

  function dfs(r,c){
    let pos = r + "," + c
    if(r<0 || r>=rows || c<0 || c>=col || grid[r][c] ==="W" || visited.has(pos)) return 0
    visited.add(pos)
    let size = 1
    size += dfs(r-1,c)
    size += dfs(r+1,c)
    size += dfs(r,c-1)
    size += dfs(r,c+1)

    return size
  }
} 

console.log(minGridIsland(grid));