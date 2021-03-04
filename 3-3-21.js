// You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// For example, given the following board:

// [[f, f, f, f],
// [t, t, f, t],
// [f, f, f, f],
// [f, f, f, f]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.


const findPath = (matrix, start, end) => {
  let shortest = matrix.length * matrix[0].length - 1; //Max distance if no walls
  const travel = (matrix, [a, b], count) => {
    if (a === end[0] && b === end[1]) {
      count < shortest ? shortest = count : null;
      return;
    }
    if (a + 1 < matrix.length && !matrix[a + 1][b]) {
      matrix[a + 1][b] = true;
      travel(matrix, [a + 1, b], count + 1);
      matrix[a + 1][b] = false;
    }
    if (a - 1 >= 0 && !matrix[a - 1][b]) {
      matrix[a - 1][b] = true;
      travel(matrix, [a - 1, b], count + 1);
      matrix[a - 1][b] = false;
    }
    if (b + 1 < matrix[0].length && !matrix[a][b + 1]) {
      matrix[a][b + 1] = true;
      travel(matrix, [a, b + 1], count + 1);
      matrix[a][b + 1] = false;
    }
    if (b - 1 >= 0 && !matrix[a][b - 1]) {
      matrix[a][b - 1] = true;
      travel(matrix, [a, b - 1], count + 1);
      matrix[a][b - 1] = false;
    }
  }
  travel(matrix, start, 0)
  return shortest;
}