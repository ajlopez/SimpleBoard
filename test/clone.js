
const simpleboard = require('../');
const assert = require('assert');
    
// clone default board

{
    const original = simpleboard.createBoard();
    const board = original.clone();
    assert.ok(board);
    assert.equal(board.getWidth(), 8);
    assert.equal(board.getHeight(), 8);

    for (let x = 0; x < board.getWidth(); x++)
        for (let y = 0; y < board.getHeight(); y++)
            assert.equal(board.getContent(x, y), null);
}

// create rectangular board

{
    const original = simpleboard.createBoard(4, 8);
    const board = original.clone();
    
    assert.ok(board);
    assert.equal(board.getWidth(), 4);
    assert.equal(board.getHeight(), 8);

    for (let x = 0; x < board.getWidth(); x++)
        for (let y = 0; y < board.getHeight(); y++)
            assert.equal(board.getContent(x, y), null);
}

// create rectangular board 2

{
    const original = simpleboard.createBoard(6, 3);
    const board = original.clone();

    assert.ok(board);
    assert.equal(board.getWidth(), 6);
    assert.equal(board.getHeight(), 3);

    for (let x = 0; x < board.getWidth(); x++)
        for (let y = 0; y < board.getHeight(); y++)
            assert.equal(board.getContent(x, y), null);
}

// clone with content

{
    const original = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };

    original.putContent(0, 0, content1);
    original.putContent(1, 1, content2);

    const board = original.clone();

    const positions = board.getPositions();

    assert.ok(positions);
    assert.equal(positions.length, 2);
    assert.equal(positions[0].x, 0);
    assert.equal(positions[0].y, 0);
    assert.equal(positions[0].content, content1);
    assert.equal(positions[1].x, 1);
    assert.equal(positions[1].y, 1);
    assert.equal(positions[1].content, content2);
    assert.deepEqual(positions, original.getPositions());
}

// then alter original board without chaning the cloned one

{
    const original = simpleboard.createBoard();
    const content1 = { color: 1 };
    const content2 = { color: 2 };

    original.putContent(0, 0, content1);
    original.putContent(1, 1, content2);

    const board = original.clone();

    const content3 = { color: 3 };

    original.putContent(2, 2, content3);

    assert.equal(board.getPositions().length, 2);
    assert.equal(original.getPositions().length, 3);
}

