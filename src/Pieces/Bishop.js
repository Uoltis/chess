import 'phaser';
import Piece from './Piece';

export default class Bishop extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'Bishop', 1, board);
  }

}