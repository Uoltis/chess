import 'phaser';

export default class Piece extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, board) {
    super(scene, board[x][y].x, board[x][y].y, texture, frame);
    scene.add.existing(this);

    this.setScale(1.2);
    
    this.setInteractive();
    scene.input.setDraggable(this);

    scene.input.on('drag', this.Drag)
    scene.input.on('dragstart', this.DragStart)
    scene.input.on('dragend', this.DragEnd)
    this.lastX = board[x][y].x;
    this.lastY = board[x][y].y;

  }

  DragStart(pointer, gameObject){
    console.log("start")
  }

  DragEnd(pointer, gameObject, dropped){
    if(gameObject.isCorrectCell()){

    }else{
      gameObject.x = gameObject.lastX;
      gameObject.y = gameObject.lastY;
    }
  }

  Drag(pointer, gameObject, dragX, dragY){
    gameObject.x = dragX
    gameObject.y = dragY
  }

  isCorrectCell(){
    return false;
  }
}