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
  isCorrectCell(x, y){
    if(super.isCorrectCell(x, y)){
      var {normalX, normalY} = this.transformWorldCoordToBoard(x, y)
      
    }
  }
}