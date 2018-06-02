const DIRECTION = require('../constants/direction');
const { getNextDirection } = require('../util/directionHelper')

// die stop move (done)
// edge judge (done)
// skip dandger area
// top
// down
// left
// right

module.exports = class Rover {
  constructor(x = 0, y = 0, direction = DIRECTION.NORTH, grid) {
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

  step() {
    const originalCoordinate = [this.x, this.y];

    if (this.direction === DIRECTION.NORTH){
      this.y = this.y + 1;
    }
    if (this.direction === DIRECTION.SOUTH) {
      this.y = this.y - 1;
    }
    if (this.direction === DIRECTION.WEST) {
      this.x = this.x - 1;
    }
    if (this.direction === DIRECTION.EAST) {
      this.x = this.x + 1;
    }
    if (this.grid.outOfGrid(this.x, this.y)) {
      this.markAsDead();
      this.grid.setBeacon(...originalCoordinate);
    }
  }

  move(input) {
    if (this.isDead) return;
    const instructions = input.split('');

    instructions.forEach(instruction => {
      if (instruction === 'M') {
        this.step(instruction);
      } else {
        this.trunToDirection(instruction);
      }
    });
  }
}