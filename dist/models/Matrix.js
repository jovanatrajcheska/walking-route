"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
const PathFindingException_1 = require("../exceptions/PathFindingException");
class Matrix {
    constructor(input) {
        const lines = input.split('\n');
        this.numberOfRows = lines.length;
        this.numberOfColumns = Math.max(...lines.map(line => line.length));
        this.matrix = Array.from({ length: this.numberOfRows }, (_, i) => lines[i].padEnd(this.numberOfColumns, ' ').split(''));
    }
    getNumberOfRows() {
        return this.numberOfRows;
    }
    getNumberOfColumns() {
        return this.numberOfColumns;
    }
    getValueOfElement(row, col) {
        return this.matrix[row][col];
    }
    findStartingPoint() {
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                if (this.matrix[i][j] === '>') {
                    return [i, j];
                }
            }
        }
        throw new PathFindingException_1.PathFindingException("There is no starting point.");
    }
}
exports.Matrix = Matrix;
