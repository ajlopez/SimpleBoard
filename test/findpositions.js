
var simpleboard = require('../'),
    assert = require('assert');
    
// Find positions in empty board

var board = simpleboard.createBoard();

var positions = board.findPositions(function(content) { return content.color === 1; });

assert.ok(positions);
assert.equal(positions.length, 0);

// Find positions by color

var content1 = { color: 1 };
var content2 = { color: 2 };

board.putContent(0, 0, content1);
board.putContent(1, 1, content2);

var positions = board.findPositions(function(content) { return content.color === 1; });

assert.ok(positions);
assert.equal(positions.length, 1);
assert.equal(positions[0].x, 0);
assert.equal(positions[0].y, 0);

var positions = board.findPositions(function(content) { return content.color === 2; });

assert.ok(positions);
assert.equal(positions.length, 1);
assert.equal(positions[0].x, 1);
assert.equal(positions[0].y, 1);

// Add content

board.putContent(0, 2, content1);
board.putContent(1, 2, content2);

var positions = board.findPositions(function(content) { return content.color === 1; });

assert.ok(positions);
assert.equal(positions.length, 2);

var positions = board.findPositions(function(content) { return content.color === 2; });

assert.ok(positions);
assert.equal(positions.length, 2);

