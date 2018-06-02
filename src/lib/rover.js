const DIRECTION = require('../constants/direction');

// edge
// die stop move
// top
// down
// left
// right

module.exports = class Rover {
  constructor(x = 0, y = 0, direction = DIRECTION.NORTH) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  trunToDirection(direction) {
    
    this.direction = direction;
  }

  step() {
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
  }

  move(input) {
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