const DIRECTION = require('../constants/direction');
const { getNextDirection } = require('../util/directionHelper')

function isNumber(num) {
  return typeof num === 'number'
}

module.exports = class Rover {
  constructor(x = 0, y = 0, direction = DIRECTION.NORTH, grid) {
    if (!isNumber(x) || !isNumber(y)) {
      throw new Error('coordinate must be integer number')
    }
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.isDead = false;
    this.grid = grid;
  }

  trunToDirection(next) {
    this.direction = getNextDirection(this.direction, next);
  }

  markAsDead() {
    this.isDead = true;
  }

  caculateNextCoordinate() {
    const nextCoordinate = {x: this.x, y: this.y};

    if (this.direction === DIRECTION.NORTH){
      nextCoordinate.y = this.y + 1;
    }
    if (this.direction === DIRECTION.SOUTH) {
      nextCoordinate.y = this.y - 1;
    }
    if (this.direction === DIRECTION.WEST) {
      nextCoordinate.x = this.x - 1;
    }
    if (this.direction === DIRECTION.EAST) {
      nextCoordinate.x = this.x + 1;
    }
    return nextCoordinate;
  }

  step() {
    const nextCoordinate = this.caculateNextCoordinate();

    if (this.grid.inDangerArea(nextCoordinate)) {
      return;
    }
    if (this.grid.outOfGrid(nextCoordinate)) {
      this.markAsDead();
      this.grid.setBeacon(nextCoordinate);
      return;
    }
    this.x = nextCoordinate.x;
    this.y = nextCoordinate.y;
  }

  move(input) {
    const instructions = input.split('');
    instructions.forEach(instruction => {
      if (this.isDead) return;

      if (instruction === 'M') {
        this.step(instruction);
      } else {
        this.trunToDirection(instruction);
      }
    });
  }

  state() {
    const coordinate = [this.x, this.y, this.direction];
    const rip = 'RIP';
    return this.isDead ? [...coordinate, rip].join(' ') : coordinate.join(' ')
  }

  print() {
    console.log(this.state());
  }
}