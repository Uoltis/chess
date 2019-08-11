import 'phaser';
import Piece from './Piece';

export default class Bishop extends Piece {
  constructor(scene, x, y) {
    super(scene, x, y, 'Bishop', 1);
  }

}