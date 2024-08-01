import { PathFindingException } from '../exceptions/PathFindingException';

export class Matrix {
    private matrix: string[][];
    private numberOfRows: number;
    private numberOfColumns: number;

    constructor(input: string) {
        const lines = input.split('\n');
        this.numberOfRows = lines.length;
        this.numberOfColumns = Math.max(...lines.map(line => line.length));
        this.matrix = Array.from({ length: this.numberOfRows }, (_, i) =>
            lines[i].padEnd(this.numberOfColumns, ' ').split('')
        );
    }

    getNumberOfRows(): number {
        return this.numberOfRows;
    }

    getNumberOfColumns(): number {
        return this.numberOfColumns;
    }

    getValueOfElement(row: number, col: number): string {
        return this.matrix[row][col];
    }

    findStartingPoint(): number[] {
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                if (this.matrix[i][j] === '>') {
                    return [i, j];
                }
            }
        }
        throw new PathFindingException("There is no starting point.");
    }
}
