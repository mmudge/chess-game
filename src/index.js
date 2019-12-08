import './style.css'



function drawBoardSquares() {
  const board = document.querySelector('.board')
  // const letterRows = 'abcdefgh'
  const numberRows = '87654321'

  numberRows.split('').forEach((number, index) => {
    const numberRowString = `<div class="row-${number}"></div>`
    board.insertAdjacentHTML('beforeend', numberRowString)

    const row = document.querySelector(`.row-${number}`)
    row.classList.add('board-row')
    const letterColumns = 'abcdefgh'

    letterColumns.split('').forEach((letter) => {
      let numberColumnString = ''
      let evenIndex = index % 2 === 0
      const evenNumber = letterColumns.indexOf(letter) % 2 === 0
      if (evenIndex) {
        if (evenNumber) {
          numberColumnString = `<div class="col-${letter} white board-square"></div>`
        } else {
          numberColumnString = `<div class="col-${letter} black board-square"></div>`
        }
      } else {
        if (evenNumber) {
          numberColumnString = `<div class="col-${letter} black board-square"></div>`
        } else {
          numberColumnString = `<div class="col-${letter} white board-square"></div>`
        }
      }

      row.insertAdjacentHTML('beforeend', numberColumnString)
    })
  })
}

drawBoardSquares()

function newStartingPosition() {
  // pawns
  const secondRow = document.querySelector('.row-2')
  const secondRowChildren = secondRow.children
  const secondRowChildrenLengthArray = [... Array(secondRowChildren.length).keys()]

  secondRowChildrenLengthArray.forEach((number) => {
    secondRowChildren[number].append('P')
  })

  const seventhRow = document.querySelector('.row-7')
  const seventhRowChildren = seventhRow.children
  const seventhRowChildrenLengthArray = [... Array(seventhRowChildren.length).keys()]

  seventhRowChildrenLengthArray.forEach((number) => {
    seventhRowChildren[number].append('P')
  })

  // rooks (castles)
  const whiteRookOne = document.querySelector('.row-1 .col-a')
  const whiteRookTwo = document.querySelector('.row-8 .col-a')
  const blackRookOne = document.querySelector('.row-1 .col-h')
  const blackRookTwo = document.querySelector('.row-8 .col-h')
  const rooks = [ whiteRookOne, whiteRookTwo, blackRookOne, blackRookTwo ]
  rooks.forEach((rook) => rook.append('R'))

  // knights (horses)
  const whiteKnightOne = document.querySelector('.row-1 .col-b')
  const whiteKnightTwo = document.querySelector('.row-1 .col-g')
  const blackKnightOne = document.querySelector('.row-8 .col-b')
  const blackKnightTwo = document.querySelector('.row-8 .col-g')
  const knights = [ whiteKnightOne, whiteKnightTwo, blackKnightOne, blackKnightTwo ]
  knights.forEach((knight) => knight.append('H'))

  // bishops
  const whiteBishopOne = document.querySelector('.row-1 .col-c')
  const whiteBishopTwo = document.querySelector('.row-1 .col-f')
  const blackBishopOne = document.querySelector('.row-8 .col-c')
  const blackBishopTwo = document.querySelector('.row-8 .col-f')
  const bishops = [ whiteBishopOne, whiteBishopTwo, blackBishopOne, blackBishopTwo ]
  bishops.forEach((bishop) => bishop.append('B'))

  // queens
  const whiteQueen = document.querySelector('.row-1 .col-d')
  const blackQueen = document.querySelector('.row-8 .col-e')
  const queens = [whiteQueen, blackQueen]
  queens.forEach((queen) => queen.append('Q'))

  // kings
  const whiteKing = document.querySelector('.row-1 .col-e')
  const blackKing = document.querySelector('.row-8 .col-d')
  const kings = [whiteKing, blackKing]
  kings.forEach((king) => king.append('K*'))
}

newStartingPosition()

// async function makeMove() {
//   await document.addEventListener('click', (event) => {
//     event.target.textContent = ''
//   })

//   await document.addEventListener('click', (event) => {
//     event.target.append('K')
//   })
// }

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
// import Pawn from './pieceClasses/pawn.js'

class Pawn {
  constructor(name) {
    this.name = name
  }

  test() {
    return 'hello world' + this.name
  }
}

let board = {
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


console.log(board.a2.classSelector)


