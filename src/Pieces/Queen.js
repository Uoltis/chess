import 'phaser';
import Piece from './Piece';

export default class Queen extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whiteQueen', 1, board);
    }
    else{
      super(scene, x, y, 'blackQueen', 1, board);

    }
    this.side = side;
  }
}