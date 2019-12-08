export default class Board {
  constructor(name) {
    this.name = name
  }

  init() {
    this.drawSquares()
  }

  static drawSquares() {
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

  static squares() {
    return {
      a1: '.row-1 .col-a',
      b1: '.row-1 .col-b',
      c1: '.row-1 .col-c',
      d1: '.row-1 .col-d',
      e1: '.row-1 .col-e',
      f1: '.row-1 .col-f',
      g1: '.row-1 .col-g',
      h1: '.row-1 .col-h',
      a2: '.row-2 .col-a',
      b2: '.row-2 .col-b',
      c2: '.row-2 .col-c',
      d2: '.row-2 .col-d',
      e2: '.row-2 .col-e',
      f2: '.row-2 .col-f',
      g2: '.row-2 .col-g',
      h2: '.row-2 .col-h',
      a3: '.row-3 .col-a',
      b3: '.row-3 .col-b',
      c3: '.row-3 .col-c',
      d3: '.row-3 .col-d',
      e3: '.row-3 .col-e',
      f3: '.row-3 .col-f',
      g3: '.row-3 .col-g',
      h3: '.row-3 .col-h',
      a4: '.row-4 .col-a',
      b4: '.row-4 .col-b',
      c4: '.row-4 .col-c',
      d4: '.row-4 .col-d',
      e4: '.row-4 .col-e',
      f4: '.row-4 .col-f',
      g4: '.row-4 .col-g',
      h4: '.row-4 .col-h',
      a5: '.row-5 .col-a',
      b5: '.row-5 .col-b',
      c5: '.row-5 .col-c',
      d5: '.row-5 .col-d',
      e5: '.row-5 .col-e',
      f5: '.row-5 .col-f',
      g5: '.row-5 .col-g',
      h5: '.row-5 .col-h',
      a6: '.row-6 .col-a',
      b6: '.row-6 .col-b',
      c6: '.row-6 .col-c',
      d6: '.row-6 .col-d',
      e6: '.row-6 .col-e',
      f6: '.row-6 .col-f',
      g6: '.row-6 .col-g',
      h6: '.row-6 .col-h',
      a7: '.row-7 .col-a',
      b7: '.row-7 .col-b',
      c7: '.row-7 .col-c',
      d7: '.row-7 .col-d',
      e7: '.row-7 .col-e',
      f7: '.row-7 .col-f',
      g7: '.row-7 .col-g',
      h7: '.row-7 .col-h',
      a8: '.row-8 .col-a',
      b8: '.row-8 .col-b',
      c8: '.row-8 .col-c',
      d8: '.row-8 .col-d',
      e8: '.row-8 .col-e',
      f8: '.row-8 .col-f',
      g8: '.row-8 .col-g',
      h8: '.row-8 .col-h',
    }
  }

  // newStartingPosition() {1
  //   // pawns
  //   const secondRow = document.querySelector('.row-2')
  //   const secondRowChildren = secondRow.children
  //   const secondRowChildrenLengthArray = [...Array(secondRowChildren.length).keys()]

  //   secondRowChildrenLengthArray.forEach((number) => {
  //     secondRowChildren[number].append('P')
  //   })

  //   const seventhRow = document.querySelector('.row-7')
  //   const seventhRowChildren = seventhRow.children
  //   const seventhRowChildrenLengthArray = [...Array(seventhRowChildren.length).keys()]

  //   seventhRowChildrenLengthArray.forEach((number) => {
  //     seventhRowChildren[number].append('P')
  //   })

  //   // rooks (castles)
  //   const whiteRookOne = document.querySelector('.row-1 .col-a')
  //   const whiteRookTwo = document.querySelector('.row-8 .col-a')
  //   const blackRookOne = document.querySelector('.row-1 .col-h')
  //   const blackRookTwo = document.querySelector('.row-8 .col-h')
  //   const rooks = [whiteRookOne, whiteRookTwo, blackRookOne, blackRookTwo]
  //   rooks.forEach((rook) => rook.append('R'))

  //   // knights (horses)
  //   const whiteKnightOne = document.querySelector('.row-1 .col-b')
  //   const whiteKnightTwo = document.querySelector('.row-1 .col-g')
  //   const blackKnightOne = document.querySelector('.row-8 .col-b')
  //   const blackKnightTwo = document.querySelector('.row-8 .col-g')
  //   const knights = [whiteKnightOne, whiteKnightTwo, blackKnightOne, blackKnightTwo]
  //   knights.forEach((knight) => knight.append('H'))

  //   // bishops
  //   const whiteBishopOne = document.querySelector('.row-1 .col-c')
  //   const whiteBishopTwo = document.querySelector('.row-1 .col-f')
  //   const blackBishopOne = document.querySelector('.row-8 .col-c')
  //   const blackBishopTwo = document.querySelector('.row-8 .col-f')
  //   const bishops = [whiteBishopOne, whiteBishopTwo, blackBishopOne, blackBishopTwo]
  //   bishops.forEach((bishop) => bishop.append('B'))

  //   // queens
  //   const whiteQueen = document.querySelector('.row-1 .col-d')
  //   const blackQueen = document.querySelector('.row-8 .col-e')
  //   const queens = [whiteQueen, blackQueen]
  //   queens.forEach((queen) => queen.append('Q'))

  //   // kings
  //   const whiteKing = document.querySelector('.row-1 .col-e')
  //   const blackKing = document.querySelector('.row-8 .col-d')
  //   const kings = [whiteKing, blackKing]
  //   kings.forEach((king) => king.append('K*'))
  // }
}
