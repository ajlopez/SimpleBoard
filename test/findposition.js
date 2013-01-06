
var simpleboard = require('../'),
    assert = require('assert');
    
// Find position in empty board

var board = simpleboard.createBoard();

var position = board.findPosition(function(content) { return content.color === 1; });

assert.equal(position, null);

var content1 = { color: 1 };
var content2 = { color: 2 };

board.putContent(0, 0, content1);
board.putContent(1, 1, content2);

var position = board.findPosition(function(content) { return content.color === 1; });

assert.ok(position);
assert.equal(position.x, 0);
assert.equal(position.y, 0);

var position = board.findPosition(function(content) { return content.color === 2; });

assert.ok(position);
assert.equal(position.x, 1);
assert.equal(position.y, 1);
