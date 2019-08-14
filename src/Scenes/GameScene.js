import 'phaser'

import whiteCell from "../assets/white.png";
import blackCell from "../assets/black.png";

import whiteKing from "../assets/whiteKing.png";
import whiteBishop from "../assets/whiteBishop.png";
import whiteQueen from "../assets/whiteQueen.png";
import whiteKnight from "../assets/whiteKnight.png";
import whitePawn from "../assets/whitePawn.png";
import whiteRook from "../assets/whiteRook.png";

import Board from './../Board/Board';
import Pawn from '../Pieces/Pawn';
import Bishop from '../Pieces/Bishop';
import Knight from '../Pieces/Knight';
import Queen from '../Pieces/Queen';
import King from '../Pieces/King';
import Rook from '../Pieces/Rook';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }
  preload() {
    this.load.image("Pawn", whitePawn)
    this.load.image("Rook", whiteRook)
    this.load.image("Bishop", whiteBishop)
    this.load.image("Knight", whiteKnight)
    this.load.image("Queen", whiteQueen)
    this.load.image("King", whiteKing)
    this.load.image("whiteCell", whiteCell)
    this.load.image("blackCell", blackCell)

  }

  create() {
    var board = new Board(8, this)

    var whitePawn1 = new Pawn(this, 0, 1, board)
    var whitePawn2 = new Pawn(this, 1, 1, board)
    var whitePawn3 = new Pawn(this, 2, 1, board)
    var whitePawn4 = new Pawn(this, 3, 1, board)
    var whitePawn5 = new Pawn(this, 4, 1, board)
    var whitePawn6 = new Pawn(this, 5, 1, board)
    var whitePawn7 = new Pawn(this, 6, 1, board)
    var whitePawn8 = new Pawn(this, 7, 1, board)

    var whiteRook1 = new Rook(this, 0, 0, board)
    var whiteRook2 = new Rook(this, 7, 0, board)

    var whiteBishop1 = new Bishop(this, 2, 0, board)
    var whiteBishop2 = new Bishop(this, 5, 0, board)

    var whiteKnight1 = new Knight(this, 1, 0, board)
    var whiteKnight2 = new Knight(this, 6, 0, board)

    var whiteQueen = new Queen(this, 4, 0, board)
    var whiteKing = new King(this, 3, 0, board)

  }

}