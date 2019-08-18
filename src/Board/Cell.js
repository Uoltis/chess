import 'phaser'

export default class Cell extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y, texture, frame, boardX, boardY) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    this.setScale(0.3);
    this.boardX = boardX
    this.boardY = boardY
    this.piece = null;
    this.active = false;
  }
  setActiveColor(){
    this.tint = 0x008000;
    this.active = true;
  }
  clearColor(){
    this.tint = 0xFFFFFF;
    this.active = false;

  }
  isActive(){
    if(this.active){
      return true;
    }
    else{
      return false;
    }
  }
}