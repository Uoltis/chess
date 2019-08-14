import 'phaser';
import Piece from './Piece';

export default class King extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'King', 1, board);
  }

}