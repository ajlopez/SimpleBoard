
var simpleboard = require('../'),
    assert = require('assert');
    
// createBoard defined

assert.ok(simpleboard.createBoard);
assert.equal(typeof simpleboard.createBoard, 'function');

// create default board

var board = simpleboard.createBoard();
assert.ok(board);
assert.equal(board.getWidth(), 8);
assert.equal(board.getHeight(), 8);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getCell(x, y), null);

// create rectangular board

var board = simpleboard.createBoard(4, 8);
assert.ok(board);
assert.equal(board.getWidth(), 4);
assert.equal(board.getHeight(), 8);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getCell(x, y), null);

// create rectangular board 2

var board = simpleboard.createBoard(6, 3);
assert.ok(board);
assert.equal(board.getWidth(), 6);
assert.equal(board.getHeight(), 3);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getCell(x, y), null);
