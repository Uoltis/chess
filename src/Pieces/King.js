import 'phaser';
import Piece from './Piece';

export default class King extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whiteKing', 1, board);
    }
    else{
      super(scene, x, y, 'blackKing', 1, board);

    }
    this.side = side;
  }

  showCorrectCell(){
    
  }
}