const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

function gridIslands(grid) {
  let rows = grid.length
  let col = grid[0].length
  let visited = new Set()
  let count = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < col; c++) {
       if(grid[r][c] === "L" && !visited.has(r + "," + c)){
          count++
          dfs(r,c)
       }
    }
  }
  return count;

  function dfs(r,c){
    let pos = r + "," + c
    if(r<0 || r>=rows || c<0 || c>=col || grid[r][c] ==="W" || visited.has(pos)) return
    visited.add(pos)
    dfs(r-1,c)
    dfs(r+1,c)
    dfs(r,c-1)
    dfs(r,c+1)
  }
} 

console.log(gridIslands(grid));