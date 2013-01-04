
var simpleboard = require('../'),
    assert = require('assert');
    
// putContent, getContent

var board = simpleboard.createBoard();
var content1 = { color: 1 };
var content2 = { color: 2 };

board.putContent(0, 0, content1);
board.putContent(1, 1, content2);

var positions = board.getPositions();

assert.ok(positions);
assert.equal(positions.length, 2);
assert.equal(positions[0].x, 0);
assert.equal(positions[0].y, 0);
assert.equal(positions[0].content, content1);
assert.equal(positions[1].x, 1);
assert.equal(positions[1].y, 1);
assert.equal(positions[1].content, content2);