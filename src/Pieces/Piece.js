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
    var { normalX, normalY } = gameObject.transformWorldCoordToBoard(pointer.upX, pointer.upY);
    if (gameObject.isCorrectCell(normalX, normalY)) {
      gameObject.sendMoveToServer(normalX, normalY);
      gameObject.correctMoveEnding(normalX, normalY);
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

  correctMoveEnding(x, y) {
    this.lastX = this.board[x][y].x;
    this.lastY = this.board[x][y].y
    this.x = this.board[x][y].x;
    this.y = this.board[x][y].y
    this.board[this.boardX][this.boardY].piece = null
    this.boardX = x;
    this.boardY = y;
    this.board[x][y].piece = this;
  }

  isCorrectCell(x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      if (this.board[x][y].isActive())
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
  sendMoveToServer(x, y) {
    this.socket.emit('chat message', { xL: this.boardX, yL: this.boardY, xN: x, yN: y })
  }
}