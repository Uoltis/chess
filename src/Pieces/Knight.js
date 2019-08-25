import 'phaser';
import Piece from './Piece';

export default class Knight extends Piece {
  constructor(scene, x, y, board, side) {
    if (side) {
      super(scene, x, y, 'whiteKnight', 1, board);
    }
    else {
      super(scene, x, y, 'blackKnight', 1, board);

    }
    this.side = side;
  }
  showCorrectCell() {
    var x = this.boardX;
    var y = this.boardY;

    var cells = [
      [x + 1, y - 2],
      [x + 2, y - 1],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x - 1, y + 2],
      [x - 2, y + 1],
    ]
    // // up right
    // if (x + 1 <= 7 && y - 2 >= 0) {
    //   this.board[x + 1][y - 2].setActiveColor();
    // }
    // // up right
    // if (x + 2 <= 7 && y - 1 >= 0) {
    //   this.board[x + 2][y - 1].setActiveColor();
    // }

    // // up left
    // if (x - 1 >= 0 && y - 2 >= 0) {
    //   this.board[x - 1][y - 2].setActiveColor();
    // }
    // // up left    
    // if (x - 2 >= 0 && y - 1 >= 0) {
    //   this.board[x - 2][y - 1].setActiveColor();
    // }

    // // down right
    // if (x + 1 <= 7 && y + 2 <= 7) {
    //   this.board[x + 1][y + 2].setActiveColor();
    // }
    // // down right
    // if (x + 2 <= 7 && y + 1 <= 7) {
    //   this.board[x + 2][y + 1].setActiveColor();
    // }

    // // down left
    // if (x - 1 >= 0 && y + 2 <= 7) {
    //   this.board[x - 1][y + 2].setActiveColor();
    // }
    // // down left
    // if (x - 2 >= 0 && y + 1 <= 7) {
    //   this.board[x - 2][y + 1].setActiveColor();
    // }
    cells.forEach(el => {
      if (el[0] >= 0 && el[0] <= 7 && el[1] >= 0 && el[1] <= 7) {
        if(this.isPiece(el[0], el[1])){
          if(!this.isAlly(el[0], el[1])){
            this.board[el[0]][el[1]].setActiveColor();
          }
        }else{
          this.board[el[0]][el[1]].setActiveColor();
        }
      }
    })
  }
}
