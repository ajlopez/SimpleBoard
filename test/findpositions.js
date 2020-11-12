
const simpleboard = require('../');
const assert = require('assert');
    
// Find positions in empty board

{
    const board = simpleboard.createBoard();

    const positions = board.findPositions(function(content) { return content.color === 1; });

    assert.ok(positions);
    assert.equal(positions.length, 0);
}

// Find positions by color

{
    const board = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };

    board.put(0, 0, content1);
    board.put(1, 1, content2);

    const positions = board.findPositions(function(content) { return content.color === 1; });

    assert.ok(positions);
    assert.equal(positions.length, 1);
    assert.equal(positions[0].x, 0);
    assert.equal(positions[0].y, 0);

    const positions2 = board.findPositions(function(content) { return content.color === 2; });

    assert.ok(positions2);
    assert.equal(positions2.length, 1);
    assert.equal(positions2[0].x, 1);
    assert.equal(positions2[0].y, 1);
}

// Add content

{
    const board = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };

    board.put(0, 0, content1);
    board.put(1, 1, content2);
    board.put(0, 2, content1);
    board.put(1, 2, content2);

    const positions = board.findPositions(function(content) { return content.color === 1; });

    assert.ok(positions);
    assert.equal(positions.length, 2);

    const positions2 = board.findPositions(function(content) { return content.color === 2; });

    assert.ok(positions2);
    assert.equal(positions2.length, 2);
}

