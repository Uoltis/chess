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
  }
}