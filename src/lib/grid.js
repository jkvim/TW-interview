
module.exports = class Grid {
  constructor(x = 5, y = 5) {
    this.width = x;
    this.height = y;
    this.dangerArea = [];
  }

  setBeacon(x, y) {
    this.dangerArea.push({x, y});
  }

  outOfGrid(x, y) {
    if (x > this.width || y > this.height || x < 0 || y < 0) {
      return true
    }
    return false;
  }
};