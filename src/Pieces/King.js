import 'phaser';
import Piece from './Piece';

export default class King extends Piece {
  constructor(scene, x, y, board, side, socket) {
    if(side){
      super(scene, x, y, 'whiteKing', 1, board, socket);
    }
    else{
      super(scene, x, y, 'blackKing', 1, board, socket);

    }
    this.side = side;
  }

  showCorrectCell(){
    var x = this.boardX;
    var y = this.boardY;

    var cells = [
      [x + 1, y + 1],
      [x + 1, y],
      [x + 1, y - 1],
      [x, y - 1],
      [x, y + 1],
      [x - 1, y + 1],
      [x - 1, y],
      [x - 1, y - 1],
    ]

    cells.forEach(el=>{
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