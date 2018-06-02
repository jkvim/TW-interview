const Rover = require('./lib/rover');
const Grid = require('./lib/grid');


// IO
// read from console
// read from file
// output to file or console
// save last position

// case 1 Hardcode

function main() {
  const inputs = [
    ['1 2 N', 'LMLMLMLMM'],
    ['3 3 E', 'MMRMMLMRRM'],
    ['4 1 S', 'MLMLMRMRM'],
  ];
  const grid = new Grid(5, 5);

  inputs.forEach(line => {
    const coordinate = line[0].split(' ');
    const x = parseInt(coordinate[0]);
    const y = parseInt(coordinate[1]);
    const direction = coordinate[2];
    const rover = new Rover(x, y, direction, grid);
    rover.move(line[1]);
    rover.print();
  });
}

main();