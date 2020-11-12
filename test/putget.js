
const simpleboard = require('../');
    assert = require('assert');
    
// putContent, getContent

{
    const board = simpleboard.createBoard();
    const cell = { color: 1 };

    board.put(0, 0, cell);
    board.put(1, 1, cell);

    assert.equal(board.get(0, 0), cell);
    assert.equal(board.get(1, 1), cell);
    assert.ok(board.get(0, 1) === null);
    assert.ok(board.get(1, 0) === null);
}

