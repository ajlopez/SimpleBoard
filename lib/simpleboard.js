
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

        this.getPositions = function () {
            var positions = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var cell = this.getCell(x, y);
                    if (cell)
                        positions.push({ x: x, y: y, cell: cell });
                }

            return positions;
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
