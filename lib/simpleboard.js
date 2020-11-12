
'use strict';

const simpleboard = (function () {
    function Board(width, height, initial) {
        width = width || 8;
        height = height || width;

        const size = width * height;
        let contents = [];
        
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
            const content = contents[offset];

            if (content)
                return content;

            return null;
        }

        this.get = function (x, y) {
            return getContentAtOffset(getOffset(x, y));
        };

        this.put = function (x, y, content) {
            contents[getOffset(x, y)] = content;
        };

        this.remove = function (x, y) {
            contents[getOffset(x, y)] = null;
        };

        this.getPositions = function () {
            const positions = [];

            for (const offset in contents) {
                const content = contents[offset];
                
                if (content) {
                    const position = getPosition(offset);
                    
                    position.content = content;
                    positions.push(position);
                }
            }

            return positions;
        };

        this.findPosition = function (predicate) {
            for (let offset in contents) {
                const content = contents[offset];
                
                if (content && predicate(content)) {
                    const position = getPosition(offset);
                    
                    position.content = content;
                    
                    return position;
                }
            }

            return null;
        };

        this.findPositions = function (predicate) {
            const positions = [];

            for (let offset in contents) {
                const content = contents[offset];
                
                if (content && predicate(content)) {
                    const position = getPosition(offset);
                    
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
            const x = offset % width;
            // http://stackoverflow.com/questions/4228356/integer-division-in-javascript
            const y = offset/width | 0;
            
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

