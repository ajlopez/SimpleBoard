
'use strict';

var simpleboard = (function () {
    function Board(width, height, initial) {
        width = width || 8;
        height = height || width;

        var size = width * height;
        var contents = [];
        
        if (initial)
            contents = initial.slice();

        this.clone = function () {
            return new Board(width, height, contents);
        };

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

            for (var offset in contents) {
                var content = contents[offset];
                if (content) {
                    var position = getPosition(offset);
                    position.content = content;
                    positions.push(position);
                }
            }

            return positions;
        };

        this.findPosition = function (predicate) {
            for (var offset in contents) {
                var content = contents[offset];
                if (content && predicate(content)) {
                    var position = getPosition(offset);
                    position.content = content;
                    return position;
                }
            }

            return null;
        };

        this.findPositions = function (predicate) {
            var positions = [];

            for (var offset in contents) {
                var content = contents[offset];
                if (content && predicate(content)) {
                    var position = getPosition(offset);
                    position.content = content;
                    positions.push(position);
                }
            }

            return positions;
        };

        function getOffset(x, y) {
            return x + y * width;
        }

        function getPosition(offset) {
            var x = offset % width;
            // http://stackoverflow.com/questions/4228356/integer-division-in-javascript
            var y = offset/width | 0;
            return { x: x, y: y };
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
