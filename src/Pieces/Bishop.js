import 'phaser';
import Piece from './Piece';

export default class Bishop extends Piece {
  constructor(scene, x, y, board, side) {
    if (side) {
      super(scene, x, y, 'whiteBishop', 1, board);
    }
    else {
      super(scene, x, y, 'blackBishop', 1, board);

    }
    this.side = side;
  }


  showCorrectCell() {

    var x = this.boardX;
    var y = this.boardY;

    // up left
    var j = y - 1;
    for (var i = x - 1; i >= 0; i--) {
      if (j > 7 || j < 0) {
        break;
      }
      if (this.isPiece(i, j)) {
        if (!this.isAlly(i, j)) {
          this.board[i][j].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][j].setActiveColor();
      j--;
    }

    // up right
    j = y - 1;
    for (var i = x + 1; i <= 7; i++) {
      if (j > 7 || j < 0) {
        break;
      }
      if (this.isPiece(i, j)) {
        if (!this.isAlly(i, j)) {
          this.board[i][j].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][j].setActiveColor();
      j--;
    }

    // down left
    j = y + 1;
    for (var i = x - 1; i >= 0; i--) {
      if (j > 7 || j < 0) {
        break;
      }
      if (this.isPiece(i, j)) {
        if (!this.isAlly(i, j)) {
          this.board[i][j].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][j].setActiveColor();
      j++;
    }

    // down right
    j = y + 1;
    for (var i = x + 1; i <= 7; i++) {
      if (j > 7 || j < 0) {
        break;
      }
      if (this.isPiece(i, j)) {
        if (!this.isAlly(i, j)) {
          this.board[i][j].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][j].setActiveColor();
      j++;
    }
  }
}