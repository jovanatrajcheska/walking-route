import { IFinder } from '../interfaces/IFinder';
import { Matrix } from '../models/Matrix';
import { PathFindingException } from '../exceptions/PathFindingException';

export class PathFinder implements IFinder {
    private matrix: Matrix;
    private pathString: string[];
    private lettersString: string[];
    private visitedCoordinate: boolean[][];

    private static readonly directions: number[][] = [
        [0, 1], [0, -1], [-1, 0], [1, 0]
    ];

    constructor(matrix: Matrix) {
        this.matrix = matrix;
        this.pathString = [];
        this.lettersString = [];
        this.visitedCoordinate = Array.from({ length: matrix.getNumberOfRows() }, () => Array(matrix.getNumberOfColumns()).fill(false));
    }

    findPath(): void {
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

    getPath(): string {
        return this.pathString.join('');
    }

    getLetters(): string {
        return this.lettersString.join('');
    }

    private checkBounds(row: number, col: number): boolean {
        return row >= 0 && row < this.matrix.getNumberOfRows() && col >= 0 && col < this.matrix.getNumberOfColumns();
    }

    private appendToLettersString(char: string): void {
        if (char.match(/[A-Z]/)) {
            this.lettersString.push(char);
        }
    }

    private appendToPathString(char: string): void {
        this.pathString.push(char === '>' ? '@' : char);
    }

    private moveToNextCoordinate(row: number, col: number): number[] | null {
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
