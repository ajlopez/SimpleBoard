
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
