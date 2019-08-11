import 'phaser';
import Piece from './Piece';

export default class Knight extends Piece {
  constructor(scene, x, y) {
    super(scene, x, y, 'Knight', 1);
  }

}