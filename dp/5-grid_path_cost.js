// minimum
const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
function gridPathCost(grid,r,c,memo={}){
    let pos = r + "," + c
    if(r >= grid.length || c >= grid[0].length) return Infinity
    if(r === grid.length-1 && c === grid[0].length-1) return grid[r][c]
    if(pos in memo) return memo[pos]

    let right = grid[r][c] + gridPathCost(grid,r,c+1,memo)
    let down = grid[r][c] + gridPathCost(grid,r+1,c,memo)

    memo[pos] = Math.min(right,down)
    return memo[pos]
}

console.log(gridPathCost(grid,0,0));