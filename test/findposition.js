
const simpleboard = require('../');
const assert = require('assert');
    
// Find position in empty board

{
    const board = simpleboard.createBoard();
    const position = board.findPosition(function(content) { return content.color === 1; });

    assert.equal(position, null);
}

// Find position by color
{
    const board = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };

    board.put(0, 0, content1);
    board.put(1, 1, content2);

    const position = board.findPosition(function(content) { return content.color === 1; });

    assert.ok(position);
    assert.equal(position.x, 0);
    assert.equal(position.y, 0);

    const position2 = board.findPosition(function(content) { return content.color === 2; });

    assert.ok(position2);
    assert.equal(position2.x, 1);
    assert.equal(position2.y, 1);
}

