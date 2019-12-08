export default class Pawn {
  constructor(name) {
    this.name = name
    this.startingPosition = {
      position: 'a1'
    }

  }

  static startingPositions() {
    const letters = 'abcdefgh'
    const positions = []
    letters.split('').forEach((letter) => {
      const whitePosition = { position: `${letter}2` }
      const blackPosition = { position: `${letter}7` }
      positions.push(whitePosition)
      positions.push(blackPosition)
    })
    return positions
  }

  // the pawns dont really have to have current positions,
  // i think the STATE of the game should have positions that
  // the pawns or whatever pieces are in

  get currentPosition() {
    return this._currentPosition
  }

  set currentPosition(value) {
    this._currentPosition = value
  }

}
