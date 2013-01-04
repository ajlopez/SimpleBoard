
'use strict';

var simpleboard = (function () {
    function Board(width, height) {
        width = width || 8;
        height = height || width;

        var size = width * height;
        var cells = [];

        this.getWidth = function () {
            return width;
        };

        this.getHeight = function () {
            return height;
        };

        function getCellAtOffset(offset) {
            var cell = cells[offset];

            if (cell)
                return cell;

            return null;
        }

        this.getCell = function (x, y) {
            return getCellAtOffset(getOffset(x, y));
        };

        function getOffset(x, y) {
            return x + y * width;
        }

        this.putCell = function (x, y, cell) {
            cells[getOffset(x, y)] = cell;
        };

        this.clearCell = function (x, y) {
            cells[getOffset(x, y)] = null;
        };

        this.getPositions = function () {
            var positions = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var cell = this.getCell(x, y);
                    if (cell)
                        positions.push({ x: x, y: y, content: cell });
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
