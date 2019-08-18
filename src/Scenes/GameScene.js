import 'phaser'

import whiteCell from "../assets/white.png";
import blackCell from "../assets/black.png";

import whiteKing from "../assets/whiteKing.png";
import whiteBishop from "../assets/whiteBishop.png";
import whiteQueen from "../assets/whiteQueen.png";
import whiteKnight from "../assets/whiteKnight.png";
import whitePawn from "../assets/whitePawn.png";
import whiteRook from "../assets/whiteRook.png";

import blackKing from "../assets/blackKing.png";
import blackBishop from "../assets/blackBishop.png";
import blackQueen from "../assets/blackQueen.png";
import blackKnight from "../assets/blackKnight.png";
import blackPawn from "../assets/blackPawn.png";
import blackRook from "../assets/blackRook.png";

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
    this.load.image("whitePawn", whitePawn)
    this.load.image("whiteRook", whiteRook)
    this.load.image("whiteBishop", whiteBishop)
    this.load.image("whiteKnight", whiteKnight)
    this.load.image("whiteQueen", whiteQueen)
    this.load.image("whiteKing", whiteKing)

    this.load.image("blackPawn", blackPawn)
    this.load.image("blackRook", blackRook)
    this.load.image("blackBishop", blackBishop)
    this.load.image("blackKnight", blackKnight)
    this.load.image("blackQueen", blackQueen)
    this.load.image("blackKing", blackKing)

    this.load.image("whiteCell", whiteCell)
    this.load.image("blackCell", blackCell)
  }

  create() {
    var board = new Board(8, this)

    var whitePawn1 = new Pawn(this, 1, 2, board, 1)
    var whitePawn2 = new Pawn(this, 2, 2, board, 1)
    var whitePawn3 = new Pawn(this, 3, 2, board, 1)
    var whitePawn4 = new Pawn(this, 4, 2, board, 1)
    var whitePawn5 = new Pawn(this, 5, 2, board, 1)
    var whitePawn6 = new Pawn(this, 6, 2, board, 1)
    var whitePawn7 = new Pawn(this, 7, 2, board, 1)
    var whitePawn8 = new Pawn(this, 8, 2, board, 1)

    var whiteRook1 = new Rook(this, 1, 1, board, 1)
    var whiteRook2 = new Rook(this, 8, 1, board, 1)

    var whiteBishop1 = new Bishop(this, 3, 1, board, 1)
    var whiteBishop2 = new Bishop(this, 6, 1, board, 1)

    var whiteKnight1 = new Knight(this, 2, 1, board, 1)
    var whiteKnight2 = new Knight(this, 7, 1, board, 1)

    var whiteQueen = new Queen(this, 5, 1, board, 1)
    var whiteKing = new King(this, 4, 1, board, 1)


    var blackPawn1 = new Pawn(this, 1, 7, board, 0)
    var blackPawn2 = new Pawn(this, 2, 7, board, 0)
    var blackPawn3 = new Pawn(this, 3, 7, board, 0)
    var blackPawn4 = new Pawn(this, 4, 7, board, 0)
    var blackPawn5 = new Pawn(this, 5, 7, board, 0)
    var blackPawn6 = new Pawn(this, 6, 7, board, 0)
    var blackPawn7 = new Pawn(this, 7, 7, board, 0)
    var blackPawn8 = new Pawn(this, 8, 7, board, 0)

    var blackRook1 = new Rook(this, 1, 8, board, 0)
    var blackRook2 = new Rook(this, 8, 8, board, 0)

    var blackBishop1 = new Bishop(this, 3, 8, board, 0)
    var blackBishop2 = new Bishop(this, 6, 8, board, 0)

    var blackKnight1 = new Knight(this, 2, 8, board, 0)
    var blackKnight2 = new Knight(this, 7, 8, board, 0)

    var blackQueen = new Queen(this, 5, 8, board, 0)
    var blackKing = new King(this, 4, 8, board, 0)
  }

}