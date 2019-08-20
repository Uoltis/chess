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
    this.boardX = x;
    this.boardY = y;
    this.board = board;
    this.side = null;
    this.board[x][y].piece = this;
  }

  DragStart(pointer, gameObject) {
    gameObject.showCorrectCell();
  }

  DragEnd(pointer, gameObject, dropped) {
    if (gameObject.isCorrectCell(pointer.upX, pointer.upY)) {
      var { normalX, normalY } = gameObject.transformWorldCoordToBoard(pointer.upX, pointer.upY);
      gameObject.board[gameObject.boardX][gameObject.boardY].piece = null
      gameObject.lastX = gameObject.board[normalX][normalY].x;
      gameObject.lastY = gameObject.board[normalX][normalY].y
      gameObject.boardX = normalX;
      gameObject.boardY = normalY;
      gameObject.board[normalX][normalY].piece = gameObject;
    }
    else {
      gameObject.x = gameObject.lastX;
      gameObject.y = gameObject.lastY;
    }
    gameObject.board.clearBoard();
  }

  Drag(pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX
    gameObject.y = dragY
  }

  isCorrectCell(x, y) {
    var { normalX, normalY } = this.transformWorldCoordToBoard(x, y)
    if (normalX >= 0 && normalX <= 7 && normalY >= 0 && normalY <= 7) {
      if (this.board[normalX][normalY].isActive())
        return true;
    }
    return false;
  }

  transformWorldCoordToBoard(x, y) {
    var xx = (x - 190 + 30) / 60;
    var yy = (y - 190 + 30) / 60;
    var normalX = 0;
    var normalY = 0;
    if (xx > 0 && yy > 0) {
      normalX = Math.trunc(xx);
      normalY = Math.trunc(yy);
    }
    return { normalX: normalX, normalY: normalY }
  }

  showCorrectCell() {

  }
  myCorrectMove() {

  }
  enemyCorrectMove() {

  }
  isAlly(x, y) {
    if (this.board[x][y].piece.side == this.side) {
      return true
    }
    return false
  }
  isPiece(x, y) {
    if (this.board[x][y].piece) {
      return true;
    } else {
      return false;
    }
  }
}