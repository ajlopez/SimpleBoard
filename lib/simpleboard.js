
'use strict';

var simpleboard = (function () {
    function Board(width, height) {
        width = width || 8;
        height = height || width;

        var size = width * height;
        var contents = [];

        this.getWidth = function () {
            return width;
        };

        this.getHeight = function () {
            return height;
        };

        function getContentAtOffset(offset) {
            var content = contents[offset];

            if (content)
                return content;

            return null;
        }

        this.getContent = function (x, y) {
            return getContentAtOffset(getOffset(x, y));
        };

        this.putContent = function (x, y, content) {
            contents[getOffset(x, y)] = content;
        };

        this.removeContent = function (x, y) {
            contents[getOffset(x, y)] = null;
        };

        this.getPositions = function () {
            var positions = [];

            for (var x = 0; x < width; x++)
                for (var y = 0; y < height; y++) {
                    var content = this.getContent(x, y);
                    if (content)
                        positions.push({ x: x, y: y, content: content });
                }

            return positions;
        };

        function getOffset(x, y) {
            return x + y * width;
        }
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
