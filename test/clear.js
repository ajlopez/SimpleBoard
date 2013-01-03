
var simpleboard = require('../'),
    assert = require('assert');
    
// putCells and clear

var board = simpleboard.createBoard();
var cell1 = { color: 1 };
var cell2 = { color: 2 };
var cell3 = { color: 1 };

board.putCell(0, 0, cell1);
board.putCell(1, 1, cell2);
board.putCell(2, 1, cell3);

board.clearCell(1, 1);

var positions = board.getPositions();

assert.ok(positions);
assert.equal(positions.length, 2);
assert.equal(positions[0].x, 0);
assert.equal(positions[0].y, 0);
assert.equal(positions[0].cell, cell1);
assert.equal(positions[1].x, 2);
assert.equal(positions[1].y, 1);
assert.equal(positions[1].cell, cell3);