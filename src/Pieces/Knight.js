import 'phaser';
import Piece from './Piece';

export default class Knight extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whiteKnight', 1, board);
    }
    else{
      super(scene, x, y, 'blackKnight', 1, board);

    }
    this.side = side;
  }
}