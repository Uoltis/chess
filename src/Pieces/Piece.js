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
    this.board = board;
  }

  DragStart(pointer, gameObject) {
    console.log("start")
  }

  DragEnd(pointer, gameObject, dropped) {
    //console.log(pointer)
    if (gameObject.isCorrectCell(pointer.upX, pointer.upY)) {

    } else {
      gameObject.x = gameObject.lastX;
      gameObject.y = gameObject.lastY;
    }
  }

  Drag(pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX
    gameObject.y = dragY
  }

  isCorrectCell(x, y) {
    var { normalX, normalY } = this.transformWorldCoordToBoard(x, y)
    if (normalX >= 0 && normalX <= 7 && normalY >= 0 && normalY <= 7 && normalX!=-0 && normalY!=-0)
      return true;
    else
      return false;
  }

  transformWorldCoordToBoard(x, y) {
    var normalX = Math.trunc((x - 190 + 30) / 60);
    var normalY = Math.trunc((y - 190 + 30) / 60);
    console.log(normalX, normalY )
    return { normalX: normalX, normalY: normalY }
  }
}