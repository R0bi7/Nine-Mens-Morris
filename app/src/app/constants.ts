export const STONES_PER_PLAYER = 9;
export const BOARD_NODES_SIZE = 24;
export const NODE_CIRCLE_RADIUS = 30;
export const BOARD_WIDTH = 800;
export const BOARD_HEIGHT = 800;

export const boardNeighbors: Array<Array<number>> = [
  [1, 3],
  [0, 2, 9],
  [1, 4],
  [0, 5, 11],
  [2, 7, 12],
  [3, 6],
  [5, 7, 14],
  [4, 6],
  [9, 11],
  [1, 8, 10, 17],
  [9, 12],
  [3, 8, 13, 19],
  [4, 10, 15, 20],
  [11, 14],
  [6, 13, 15, 22],
  [12, 14],
  [17, 19],
  [9, 16, 18],
  [17, 20],
  [11, 16, 21],
  [12, 18, 23],
  [19, 22],
  [21, 23, 14],
  [20, 22]
] as Array<Array<number>>;

export const  possibleMillPerPosition: Array<Array<Array<number>>> = [
  [[1, 2], [3, 5]],
  [[0, 2], [9, 17]],
  [[0, 1], [4, 7]],
  [[0, 5], [11, 19]],
  [[2, 7], [12, 20]],
  [[0, 3], [6, 7]],
  [[5, 7], [14, 22]],
  [[2, 4], [5, 6]],
  [[9, 10], [11, 13]],
  [[8, 10], [1, 17]],
  [[8, 9], [12, 15]],
  [[3, 19], [8, 13]],
  [[20, 4], [10, 15]],
  [[8, 11], [14, 15]],
  [[13, 15], [6, 22]],
  [[13, 14], [10, 12]],
  [[17, 18], [19, 21]],
  [[1, 9], [16, 18]],
  [[16, 17], [20, 23]],
  [[16, 21], [3, 11]],
  [[12, 4], [18, 23]],
  [[16, 19], [22, 23]],
  [[6, 14], [21, 23]],
  [[18, 20], [21, 22]],
]
