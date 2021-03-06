import 'phaser';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(scene, x, y, board, side, socket) {
    if (side) {
      super(scene, x, y, 'whitePawn', 1, board, socket);
    }
    else {
      super(scene, x, y, 'blackPawn', 1, board, socket);
    }
    this.side = side;
  }

  showCorrectCell() {
    var x = this.boardX;
    var y = this.boardY;
    var sideVert = -1;
    var startPos = 6;
    if (this.side) {
      sideVert = 1;
      startPos = 1;
    }

    if (!this.isPiece(x, y + 1 * sideVert)) {
      this.board[x][y + 1 * sideVert].setActiveColor();
      if (this.boardY == startPos) {
        this.board[x][y + 2 * sideVert].setActiveColor();
      }
    }

    if((x+1)<=7 && (y+1)<=7 && this.isPiece(x + 1, y + 1 * sideVert)){
      if(!this.isAlly(x+1,y+1)){
        this.board[x + 1][y + 1 * sideVert].setActiveColor();
      }
    }
    if((x-1)<=7 && (y+1)<=7 && this.isPiece(x - 1, y + 1 * sideVert)){
      if(!this.isAlly(x+1,y+1)){
        this.board[x - 1][y + 1 * sideVert].setActiveColor();
      }      
    }
  }
}