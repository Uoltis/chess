import 'phaser';
import Piece from './Piece';

export default class Knight extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'Knight', 1, board);
  }

}