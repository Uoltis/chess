import 'phaser';
import Piece from './Piece';

export default class Rook extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whiteRook', 1, board);
    }
    else{
      super(scene, x, y, 'blackRook', 1, board);

    }
    this.side = side;
  }
  showCorrectCell(){
    var x = this.boardX;
    var y = this.boardY;
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
debugger
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