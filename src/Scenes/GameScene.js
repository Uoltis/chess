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
import io from 'socket.io-client';

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
    window.board = board;
    var socket = io();
    socket.on('chat message',moveObj => {
      var {xL, yL, xN, yN} = moveObj;
      board[xL][yL].piece.correctMoveEnding(xN, yN)
    });

    var whitePawn1 = new Pawn(this, 0, 1, board, 1, socket)
    var whitePawn2 = new Pawn(this, 1, 1, board, 1, socket)
    var whitePawn3 = new Pawn(this, 2, 1, board, 1, socket)
    var whitePawn4 = new Pawn(this, 3, 1, board, 1, socket)
    var whitePawn5 = new Pawn(this, 4, 1, board, 1, socket)
    var whitePawn6 = new Pawn(this, 5, 1, board, 1, socket)
    var whitePawn7 = new Pawn(this, 6, 1, board, 1, socket)
    var whitePawn8 = new Pawn(this, 7, 1, board, 1, socket)

    var whiteRook1 = new Rook(this, 0, 0, board, 1, socket)
    var whiteRook2 = new Rook(this, 7, 0, board, 1, socket)

    var whiteBishop1 = new Bishop(this, 2, 0, board, 1, socket)
    var whiteBishop2 = new Bishop(this, 5, 0, board, 1, socket)

    var whiteKnight1 = new Knight(this, 1, 0, board, 1, socket)
    var whiteKnight2 = new Knight(this, 6, 0, board, 1, socket)

    var whiteQueen = new Queen(this, 4, 0, board, 1, socket)
    var whiteKing = new King(this, 3, 0, board, 1, socket)


    var blackPawn1 = new Pawn(this, 0, 6, board, 0, socket)
    var blackPawn2 = new Pawn(this, 1, 6, board, 0, socket)
    var blackPawn3 = new Pawn(this, 2, 6, board, 0, socket)
    var blackPawn4 = new Pawn(this, 3, 6, board, 0, socket)
    var blackPawn5 = new Pawn(this, 4, 6, board, 0, socket)
    var blackPawn6 = new Pawn(this, 5, 6, board, 0, socket)
    var blackPawn7 = new Pawn(this, 6, 6, board, 0, socket)
    var blackPawn8 = new Pawn(this, 7, 6, board, 0, socket)

    var blackRook1 = new Rook(this, 0, 7, board, 0, socket)
    var blackRook2 = new Rook(this, 7, 7, board, 0, socket)

    var blackBishop1 = new Bishop(this, 2, 7, board, 0, socket)
    var blackBishop2 = new Bishop(this, 5, 7, board, 0, socket)

    var blackKnight1 = new Knight(this, 1, 7, board, 0, socket)
    var blackKnight2 = new Knight(this, 6, 7, board, 0, socket)

    var blackQueen = new Queen(this, 4, 7, board, 0, socket)
    var blackKing = new King(this, 3, 7, board, 0, socket)
  }

}