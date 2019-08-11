import 'phaser';

export default class Piece extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);

    this.setScale(1.2);
    
    this.setInteractive();
    scene.input.setDraggable(this);

    scene.input.on('drag', this.Drag)
    scene.input.on('dragstart', this.DragStart)
    scene.input.on('dragend', this.DragEnd)

  }

  DragStart(pointer, gameObject){
    console.log("start")
  }

  DragEnd(pointer, gameObject, dropped){
    console.log("end")
  }

  Drag(pointer, gameObject, dragX, dragY){
    gameObject.x = dragX
    gameObject.y = dragY
  }
}