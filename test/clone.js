
var simpleboard = require('../'),
    assert = require('assert');
    
// clone default board

var original = simpleboard.createBoard();
var board = original.clone();
assert.ok(board);
assert.equal(board.getWidth(), 8);
assert.equal(board.getHeight(), 8);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getContent(x, y), null);

// create rectangular board

var original = simpleboard.createBoard(4, 8);
var board = original.clone();
assert.ok(board);
assert.equal(board.getWidth(), 4);
assert.equal(board.getHeight(), 8);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getContent(x, y), null);

// create rectangular board 2

var original = simpleboard.createBoard(6, 3);
var board = original.clone();
assert.ok(board);
assert.equal(board.getWidth(), 6);
assert.equal(board.getHeight(), 3);

for (var x = 0; x < board.getWidth(); x++)
    for (var y = 0; y < board.getHeight(); y++)
        assert.equal(board.getContent(x, y), null);

// clone with content

var original = simpleboard.createBoard();
var content1 = { color: 1 };
var content2 = { color: 2 };

original.putContent(0, 0, content1);
original.putContent(1, 1, content2);

var board = original.clone();

var positions = board.getPositions();

assert.ok(positions);
assert.equal(positions.length, 2);
assert.equal(positions[0].x, 0);
assert.equal(positions[0].y, 0);
assert.equal(positions[0].content, content1);
assert.equal(positions[1].x, 1);
assert.equal(positions[1].y, 1);
assert.equal(positions[1].content, content2);
assert.deepEqual(positions, original.getPositions());

// then alter original board without chaning the cloned one

var content3 = { color: 3 };

original.putContent(2, 2, content3);

assert.equal(board.getPositions().length, 2);
assert.equal(original.getPositions().length, 3);

