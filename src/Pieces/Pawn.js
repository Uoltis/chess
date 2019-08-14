import 'phaser';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(scene, x, y, board, side) {
    if(side){
      super(scene, x, y, 'whitePawn', 1, board);
    }
    else{
      super(scene, x, y, 'blackPawn', 1, board);

    }
  }
}