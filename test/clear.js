
const simpleboard = require('../');
const assert = require('assert');
    
// putCells and clear

{
    const board = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };
    const content3 = { color: 1 };

    board.put(0, 0, content1);
    board.put(1, 1, content2);
    board.put(2, 1, content3);

    board.remove(1, 1);

    const positions = board.getPositions();

    assert.ok(positions);
    assert.equal(positions.length, 2);
    assert.equal(positions[0].x, 0);
    assert.equal(positions[0].y, 0);
    assert.equal(positions[0].content, content1);
    assert.equal(positions[1].x, 2);
    assert.equal(positions[1].y, 1);
    assert.equal(positions[1].content, content3);
}

