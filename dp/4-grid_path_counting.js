const grid = [
    [0, 0, 0],
    [0, "W", 0],
    [0, 0, 0]
];

function countPath(grid, r, c, memo = {}) {
  let pos = r + "," + c;
  if (r >= grid.length || c >= grid[0].length || grid[r][c] === "W") {
    return 0;
  }
  if (r === grid.length - 1 && c === grid[0].length-1) return 1;
  if (pos in memo) return memo[pos];
  memo[pos] = countPath(grid, r + 1, c, memo) + countPath(grid, r, c + 1, memo);
  return memo[pos];
}

console.log(countPath(grid,0,0))