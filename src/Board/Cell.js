import 'phaser'

export default class Cell extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    this.setScale(0.3);
  }
}