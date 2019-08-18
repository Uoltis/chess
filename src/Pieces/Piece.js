import 'phaser';

export default class Piece extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, board) {
    super(scene, board[x - 1][y - 1].x, board[x - 1][y - 1].y, texture, frame);
    scene.add.existing(this);

    this.setScale(1.2);

    this.setInteractive();
    scene.input.setDraggable(this);

    scene.input.on('drag', this.Drag)
    scene.input.on('dragstart', this.DragStart)
    scene.input.on('dragend', this.DragEnd)
    this.lastX = board[x - 1][y - 1].x;
    this.lastY = board[x - 1][y - 1].y;
    this.boardX = x;
    this.boardY = y;
    this.board = board;
    this.side = null;
  }

  DragStart(pointer, gameObject) {
    gameObject.showCorrectCell();
  }

  DragEnd(pointer, gameObject, dropped) {
    if (gameObject.isCorrectCell(pointer.upX, pointer.upY)) {
      var {normalX,normalY} = gameObject.transformWorldCoordToBoard(pointer.upX, pointer.upY);
      gameObject.board[gameObject.boardX-1][gameObject.boardY-1].piece = null
      gameObject.lastX = gameObject.board[normalX-1][normalY-1].x;
      gameObject.lastY = gameObject.board[normalX-1][normalY-1].y
      gameObject.boardX = normalX;
      gameObject.boardY = normalY;
      gameObject.board[normalX-1][normalY-1].piece=gameObject;

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
    if (normalX >= 1 && normalX <= 8 && normalY >= 1 && normalY <= 8){
      if(this.board[normalX-1][normalY-1].isActive())
        return true;     
    }
    return false;
  }

  transformWorldCoordToBoard(x, y) {
    var xx = (x - 190 + 30) / 60;
    var yy = (y - 190 + 30) / 60;
    var normalX = 0;
    var normalY = 0;
    if(xx>0 && yy > 0){
      normalX = Math.trunc(xx) + 1;
      normalY = Math.trunc(yy) + 1;
    }
    return { normalX: normalX, normalY: normalY }
  }

  showCorrectCell(){

  }
  myCorrectMove(){
    
  }
  enemyCorrectMove(){

  }
  isAlly(x,y){
    if(this.board[x-1][y-1].piece.side==this.side){
      return true
    }
    return false
  }
  isPiece(x,y){
    console.log(x,y);
    console.log(this.board)
    if(this.board[x-1][y-1].piece!==null){
      return true
    }
    return false
  }
}