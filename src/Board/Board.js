import Cell from './Cell'

export default class Board extends Array {
  constructor(n, scene) {
    super(n);
    var step = 0;
    var margin = 190;
    var cellSize = 60;
    for (var i = 0; i < n; i++) {
      this[i] = new Array(n);
      for (var j = 0; j < n; j++) {
        if((i+j)%2){
          this[i][j] = new Cell(scene, margin + cellSize * i, margin + cellSize * j, "blackCell", 1);
        }
        else{
          this[i][j] = new Cell(scene, margin + cellSize * i + step, margin + cellSize * j + step, "whiteCell", 1);
        }
      }
    }
  }
}