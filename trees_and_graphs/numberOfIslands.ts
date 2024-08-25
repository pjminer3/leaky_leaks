/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * explore:
 * if n or m lengtsh === 0 => 0
 * can there be islands in lakes on islands => yes
 * 
 * brainstorm:
 * use seen set, iterate over islands, counting
 * 
 * plan:
 * define seen<string> set
 * numIslands = 0
 * define dfs[x, y]
 *  loop over neighbors
 *  if in seen => continue
 *  if out of bounds => continue
 *  add to seen("x,y")
 *  if land => dfs[neighbor]
 *   
 * loop over every node
 *  if node in seen, skip
 *  if water, skip
 *  if land
 *      numIslands++;
 *      dfs(x, y)
 * 
 */

function numIslands(grid: string[][]): number {
    const seen: Set<string> = new Set();
    let numIslands = 0;
    const dfs = (x: number, y: number): void => {
        const neighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];

        for (let [row, column] of neighbors) {
            if (row >= grid.length || row < 0) continue;
            if (column >= grid[0].length || column < 0) continue;
            let string = [row, column].join("");
            if (seen.has(string)) continue;

            seen.add(string);
            if (grid[row][column]) {
                dfs(row, column);
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            const string = [row, column].join("");
            if (seen.has(string)) continue;
            if (!grid[row][column]) continue;
            numIslands++;
            dfs(row, column);
        }
    }

    return numIslands;
};