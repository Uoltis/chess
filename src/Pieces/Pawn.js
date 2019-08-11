import 'phaser';
import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(scene, x, y) {
    super(scene, x, y, 'Pawn', 1);
  }

}