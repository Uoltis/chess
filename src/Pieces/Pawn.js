import 'phaser';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(scene, x, y, board, side) {
    if (side) {
      super(scene, x, y, 'whitePawn', 1, board);
    }
    else {
      super(scene, x, y, 'blackPawn', 1, board);
    }
    this.side = side;
  }

  showCorrectCell() {
    var x = this.boardX - 1;
    var y = this.boardY - 1;
    if (this.side) {
      if (!this.isPiece(x, y + 1)) {
        this.board[x][y + 1].setActiveColor();
        if (this.boardY == 2) {
          this.board[x][y + 2].setActiveColor();
        }
      }
    }
    else {
      this.board[x][y - 1].setActiveColor();
      if (this.boardY == 7) {
        this.board[x][y - 2].setActiveColor();
      }
    }
  }
}