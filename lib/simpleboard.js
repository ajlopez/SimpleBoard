
'use strict';

var simpleboard = (function () {
    function Board(width, height) {
        width = width || 8;
        height = height || width;
        var cells = Array(width);

        for (var x = 0; x < width; x++)
            cells[x] = Array(height);

        this.getWidth = function () {
            return width;
        };

        this.getHeight = function () {
            return height;
        };

        this.getCell = function (x, y) {
            return cells[x][y];
        };

        this.putCell = function (x, y, cell) {
            cells[x][y] = cell;
        };
    }

    function createBoard(width, height) {
        return new Board(width, height);
    }

    return {
        createBoard: createBoard
    }
})();

if (typeof window === 'undefined') {
	module.exports = simpleboard;
}
