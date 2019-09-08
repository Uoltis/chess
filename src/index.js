import Phaser from "../node_modules/phaser";
import config from './Config'
import GameScene from "./Scenes/GameScene";


class Game extends Phaser.Game{
  constructor(){
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

window.onload = function(){
  window.game = new Game();
}