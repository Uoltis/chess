import 'phaser';
import Piece from './Piece';

export default class Queen extends Piece {
  constructor(scene, x, y, board, side, socket) {
    if(side){
      super(scene, x, y, 'whiteQueen', 1, board, socket);
    }
    else{
      super(scene, x, y, 'blackQueen', 1, board, socket);

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

     // right
     for(var i = x+1; i<=7; i++){
      if(this.isPiece(i, y)){
        if(!this.isAlly(i, y)){
          this.board[i][y].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][y].setActiveColor();
    }
    // left
    for(var i = x-1; i>=0; i--){
      if(this.isPiece(i, y)){
        if(!this.isAlly(i, y)){
          this.board[i][y].setActiveColor();
          break;
        }
        break;
      }
      this.board[i][y].setActiveColor();
    }

    // down
    for(var i = y+1; i<=7; i++){
      if(this.isPiece(x, i)){
        if(!this.isAlly(x, i)){
          this.board[x][i].setActiveColor();
          break;
        }
        break;
      }
      this.board[x][i].setActiveColor();
    }

    // up
    for(var i = y-1; i>=0; i--){
      if(this.isPiece(x, i)){
        if(!this.isAlly(x, i)){
          this.board[x][i].setActiveColor();
          break;
        }
        break;
      }
      this.board[x][i].setActiveColor();
    }
  }
}