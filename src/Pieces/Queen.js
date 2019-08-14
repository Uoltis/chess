import 'phaser';
import Piece from './Piece';

export default class Queen extends Piece {
  constructor(scene, x, y, board) {
    super(scene, x, y, 'Queen', 1, board);
  }

}