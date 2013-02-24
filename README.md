# SimpleBoard

Generic Game Board

## Installation

Via npm on Node:

```
npm install simpleboard
```


## Usage

Reference in your program:

```js
var simpleboard = require('simpleboard');
```

Create a board:
```js
var board = simpleboard.createBoard(with, height);
```

Put a content in a cell
```js
board.putContent(x, y, content);
```
The content is a game-dependent value/object.

Get the content of a cell
```js
board.getContent(x, y);
```
If the cell is empty, the returned content is `null`.

Remove the content from a cell
```js
board.removeContent(x, y);
```

Get an array with the board positions
```js
var positions = board.getPositions();
```
Each position is an object with properties `x`, `y` and `content`.

Find a position that satifies a predicate
```js
var position = board.findPosition(function (pos) { return pos.color == 2 });
```

Find all the positions that satify a predicate
```js
var position = board.findPositions(function (pos) { return pos.piece == 'bishop' });
```

Clone a board
```js
var clone = board.clone();
```
This method is useful when you must explore a tree in a game: you can clone the current position before a
new move.

## Development

```
git clone git://github.com/ajlopez/SimpleBoard.git
cd SimpleBoard
npm install
npm test
```

## Samples

TBD

## To do

- Samples

## Versions

- 0.0.1: Published

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleBoard) and submit
[pull requests](https://github.com/ajlopez/SimpleBoard/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

