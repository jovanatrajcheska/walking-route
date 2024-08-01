"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFinder = void 0;
class PathFinder {
    constructor(matrix) {
        this.matrix = matrix;
        this.pathString = [];
        this.lettersString = [];
        this.visitedCoordinate = Array.from({ length: matrix.getNumberOfRows() }, () => Array(matrix.getNumberOfColumns()).fill(false));
    }
    findPath() {
        const [startRow, startCol] = this.matrix.findStartingPoint();
        let currentRow = startRow;
        let currentCol = startCol;
        while (this.checkBounds(currentRow, currentCol)) {
            this.visitedCoordinate[currentRow][currentCol] = true;
            const currentCoordinate = this.matrix.getValueOfElement(currentRow, currentCol);
            this.appendToPathString(currentCoordinate);
            this.appendToLettersString(currentCoordinate);
            if (currentCoordinate === 's') {
                break;
            }
            const nextCoordinate = this.moveToNextCoordinate(currentRow, currentCol);
            if (!nextCoordinate) {
                break;
            }
            [currentRow, currentCol] = nextCoordinate;
        }
    }
    getPath() {
        return this.pathString.join('');
    }
    getLetters() {
        return this.lettersString.join('');
    }
    checkBounds(row, col) {
        return row >= 0 && row < this.matrix.getNumberOfRows() && col >= 0 && col < this.matrix.getNumberOfColumns();
    }
    appendToLettersString(char) {
        if (char.match(/[A-Z]/)) {
            this.lettersString.push(char);
        }
    }
    appendToPathString(char) {
        this.pathString.push(char === '>' ? '@' : char);
    }
    moveToNextCoordinate(row, col) {
        for (const [dRow, dCol] of PathFinder.directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;
            if (this.checkBounds(newRow, newCol) && !this.visitedCoordinate[newRow][newCol] && this.matrix.getValueOfElement(newRow, newCol) !== ' ') {
                return [newRow, newCol];
            }
        }
        return null;
    }
}
exports.PathFinder = PathFinder;
PathFinder.directions = [
    [0, 1], [0, -1], [-1, 0], [1, 0]
];
