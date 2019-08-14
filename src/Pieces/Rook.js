import 'phaser';
import Piece from './Piece';

export default class Rook extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'Rook', 1, board);
  }

}