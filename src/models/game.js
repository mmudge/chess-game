import Board from './board.js'
import Pawn from './pawn.js'

export default class Game {
  constructor(){
    this.state = {}
  }

  init() {
    Board.drawSquares()
    this.setInitialState()
    this.initializePieces()
    this.drawState()
  }

  initializePieces() {
    // this will create new instances of all pieces
    this.initializePawns()
  }

  initializePawns() {
    const squares = Board.squares()
    const squaresKeys = Object.keys(squares)

    const pawnStartingPositions = Pawn.startingPositions()
    squaresKeys.forEach((squareKey) => {
      pawnStartingPositions.forEach((pPosition, index) => {
        if (squareKey === pPosition.position) {
          //TODO figure out pawn names
          const p = new Pawn(`p${index}`)

          this.state[squareKey].piece = p

        }
      })
    })
  }

  drawState() {
    const boardSquares = Object.keys(this.state)
    boardSquares.forEach((square) => {
      const selectedSquare = document.querySelector(this.state[square].classSelector)
      // if there is a piece on the square then draw it
      if (this.state[square].piece) {
        selectedSquare.innerText = this.state[square].piece.name
      }
    })
  }

  setInitialState() {
    this.state = {
      a1: { classSelector: '.row-1 .col-a', piece: null },
      b1: { classSelector: '.row-1 .col-b', piece: null },
      c1: { classSelector: '.row-1 .col-c', piece: null },
      d1: { classSelector: '.row-1 .col-d', piece: null },
      e1: { classSelector: '.row-1 .col-e', piece: null },
      f1: { classSelector: '.row-1 .col-f', piece: null },
      g1: { classSelector: '.row-1 .col-g', piece: null },
      h1: { classSelector: '.row-1 .col-h', piece: null },
      a2: { classSelector: '.row-2 .col-a', piece: null },
      b2: { classSelector: '.row-2 .col-b', piece: null },
      c2: { classSelector: '.row-2 .col-c', piece: null },
      d2: { classSelector: '.row-2 .col-d', piece: null },
      e2: { classSelector: '.row-2 .col-e', piece: null },
      f2: { classSelector: '.row-2 .col-f', piece: null },
      g2: { classSelector: '.row-2 .col-g', piece: null },
      h2: { classSelector: '.row-2 .col-h', piece: null },
      a3: { classSelector: '.row-3 .col-a', piece: null },
      b3: { classSelector: '.row-3 .col-b', piece: null },
      c3: { classSelector: '.row-3 .col-c', piece: null },
      d3: { classSelector: '.row-3 .col-d', piece: null },
      e3: { classSelector: '.row-3 .col-e', piece: null },
      f3: { classSelector: '.row-3 .col-f', piece: null },
      g3: { classSelector: '.row-3 .col-g', piece: null },
      h3: { classSelector: '.row-3 .col-h', piece: null },
      a4: { classSelector: '.row-4 .col-a', piece: null },
      b4: { classSelector: '.row-4 .col-b', piece: null },
      c4: { classSelector: '.row-4 .col-c', piece: null },
      d4: { classSelector: '.row-4 .col-d', piece: null },
      e4: { classSelector: '.row-4 .col-e', piece: null },
      f4: { classSelector: '.row-4 .col-f', piece: null },
      g4: { classSelector: '.row-4 .col-g', piece: null },
      h4: { classSelector: '.row-4 .col-h', piece: null },
      a5: { classSelector: '.row-5 .col-a', piece: null },
      b5: { classSelector: '.row-5 .col-b', piece: null },
      c5: { classSelector: '.row-5 .col-c', piece: null },
      d5: { classSelector: '.row-5 .col-d', piece: null },
      e5: { classSelector: '.row-5 .col-e', piece: null },
      f5: { classSelector: '.row-5 .col-f', piece: null },
      g5: { classSelector: '.row-5 .col-g', piece: null },
      h5: { classSelector: '.row-5 .col-h', piece: null },
      a6: { classSelector: '.row-6 .col-a', piece: null },
      b6: { classSelector: '.row-6 .col-b', piece: null },
      c6: { classSelector: '.row-6 .col-c', piece: null },
      d6: { classSelector: '.row-6 .col-d', piece: null },
      e6: { classSelector: '.row-6 .col-e', piece: null },
      f6: { classSelector: '.row-6 .col-f', piece: null },
      g6: { classSelector: '.row-6 .col-g', piece: null },
      h6: { classSelector: '.row-6 .col-h', piece: null },
      a7: { classSelector: '.row-7 .col-a', piece: null },
      b7: { classSelector: '.row-7 .col-b', piece: null },
      c7: { classSelector: '.row-7 .col-c', piece: null },
      d7: { classSelector: '.row-7 .col-d', piece: null },
      e7: { classSelector: '.row-7 .col-e', piece: null },
      f7: { classSelector: '.row-7 .col-f', piece: null },
      g7: { classSelector: '.row-7 .col-g', piece: null },
      h7: { classSelector: '.row-7 .col-h', piece: null },
      a8: { classSelector: '.row-8 .col-a', piece: null },
      b8: { classSelector: '.row-8 .col-b', piece: null },
      c8: { classSelector: '.row-8 .col-c', piece: null },
      d8: { classSelector: '.row-8 .col-d', piece: null },
      e8: { classSelector: '.row-8 .col-e', piece: null },
      f8: { classSelector: '.row-8 .col-f', piece: null },
      g8: { classSelector: '.row-8 .col-g', piece: null },
      h8: { classSelector: '.row-8 .col-h', piece: null }
    }
  }

}
