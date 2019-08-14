import 'phaser';
import Piece from './Piece';

export default class Bishop extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whiteBishop', 1, board);
    }
    else{
      super(scene, x, y, 'blackBishop', 1, board);

    }
  }
}