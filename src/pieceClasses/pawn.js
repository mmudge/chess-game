export default class Pawn {
  constructor(name) {
    this.name = name
  }

  test() {
    return 'hello world' + this.name
  }
}

module.exports = Pawn
