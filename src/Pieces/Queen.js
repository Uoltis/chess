import 'phaser';
import Piece from './Piece';

export default class Queen extends Piece {
  constructor(scene, x, y) {
    super(scene, x, y, 'Queen', 1);
  }

}