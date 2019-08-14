import 'phaser';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'Pawn', 1, board);
  }

}