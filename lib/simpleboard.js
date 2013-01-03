
'use strict';

var simpleboard = (function () {
    function Board(width, height) {
        width = width || 8;
        height = height || width;

        this.getWidth = function () {
            return width;
        };

        this.getHeight = function () {
            return height;
        };

        this.getCell = function (x, y) {
            return null;
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
