import 'phaser';
import Piece from './Piece';

export default class Rook extends Piece {
  constructor(scene, x, y) {
    super(scene, x, y, 'Rook', 1);
  }

}