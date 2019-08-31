import { runInThisContext } from "vm";

export default class SendMove {
  constructor(x, y, piece, socket) {
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.socket = socket;
    this.send();
  }

  send(){
    this.soket.emit('sendMove', {"x":this.x, "y":this.y});
  }
}