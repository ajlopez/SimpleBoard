
var simpleboard = require('../'),
    assert = require('assert');
    
// putContent, getContent

var board = simpleboard.createBoard();
var cell = { color: 1 };

board.putContent(0, 0, cell);
board.putContent(1, 1, cell);

assert.equal(board.getContent(0, 0), cell);
assert.equal(board.getContent(1, 1), cell);
assert.ok(board.getContent(0, 1) === null);
assert.ok(board.getContent(1, 0) === null);

