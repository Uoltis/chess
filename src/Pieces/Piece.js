import 'phaser';

export default class Piece extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, board, socket) {
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
    this.socket = socket;
  }

  DragStart(pointer, gameObject) {
    gameObject.showCorrectCell();
  }

  DragEnd(pointer, gameObject, dropped) {
    if (gameObject.isCorrectCell(pointer.upX, pointer.upY)) {
      gameObject.correctMoveEnding(gameObject);
      gameObject.sendMoveToServer();
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

  correctMoveEnding(){
    var { normalX, normalY } = this.transformWorldCoordToBoard(pointer.upX, pointer.upY);
    this.board[this.boardX][this.boardY].piece = null
    this.lastX = this.board[normalX][normalY].x;
    this.lastY = this.board[normalX][normalY].y
    this.boardX = normalX;
    this.boardY = normalY;
    this.board[normalX][normalY].piece = this;
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
  sendMoveToServer(){
    this.socket.emit('chat message', 'hy from web')
  }
}