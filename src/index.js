import './style.css'
import Pawn from './models/pawn.js'
import Board from './models/board.js'
import Game from './models/game.js'


let game = new Game()
game.init()

let numberOfMoves = 0
let selectedPiece = ''
let selectedMove = ''
let playersTurn = 'Player 1'

function makeMove() {
  document.addEventListener('click', (event) => {
    if (numberOfMoves === 0) {
      // first move
      selectedPiece = event.target
      selectedPiece.classList.add('selected-piece')
      numberOfMoves += 1
    } else if (numberOfMoves === 1) {
      const piece = selectedPiece.textContent
      selectedPiece.textContent = ''
      selectedPiece.classList.remove('selected-piece')
      selectedMove = event.target
      selectedMove.textContent = piece
      selectedMove.classList.add('selected-move')
      numberOfMoves += 1
    } else {
      if (playersTurn === 'Player 1') {
        playersTurn = 'Player 2'
      }

      if (playersTurn === 'Player 2') {
        playersTurn = 'Player 1'
      }

      numberOfMoves = 0
      selectedMove.classList.remove('selected-move')
      const info = document.querySelector('.player-info')
      info.textContent = ''
      info.textContent = playersTurn + 'turn'
      // next player turn
    }
  })
}

makeMove()

// const p = new Pawn('p1')
// console.log('pawn starting position', p.startingPosition)
// p.currentPosition = {square: 'a1', classSelector: 'asdf'}
// console.log('current position', p )
// console.log('pawn starting positions', Pawn.startingPositions())
// let pieces = []
// const pawnStartingPositions = Pawn.startingPositions()
// pawnStartingPositions.forEach((position) => {
//   let pawn = new Pawn('pawn')
//   pawn.currentPosition = position
//   pieces.push(pawn)
// })
// console.log(pieces)
