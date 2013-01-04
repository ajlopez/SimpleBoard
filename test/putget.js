
var simpleboard = require('../'),
    assert = require('assert');
    
// putCell, getCell

var board = simpleboard.createBoard();
var cell = { color: 1 };

board.putCell(0, 0, cell);
board.putCell(1, 1, cell);

assert.equal(board.getCell(0, 0), cell);
assert.equal(board.getCell(1, 1), cell);
assert.ok(board.getCell(0, 1) === null);
assert.ok(board.getCell(1, 0) === null);

