import { Matrix } from '../src/models/Matrix';
import { PathFindingException } from '../src/exceptions/PathFindingException';


describe('Matrix', () => {

    let inputWithStartingPoint: string;
    let inputWithoutStartingPoint: string;
    let assignmentString: string
    beforeEach(() => {
        inputWithStartingPoint = "---A-@>-+\n        |\ns-B-+   C\n    |   |\n    +===+";
        inputWithoutStartingPoint = "--A--f--@-|\n          C\ns-B--A    |";
        assignmentString = ">---A-@-+\n        |\n+-U-+  C\n|   |   |\ns   C---+"
    });

    it('Test: Initialize Matrix', () => {
        //const input = '>.. \n..s';
        const matrix = new Matrix(assignmentString);

        expect(matrix.getNumberOfRows()).toBe(5);
        expect(matrix.getNumberOfColumns()).toBe(9);
    });

    it('Test: Find Starting Point', () => {
        const matrix = new Matrix(inputWithStartingPoint);
        const [row, column] = matrix.findStartingPoint();

        expect(row).toBe(0);
        expect(column).toBe(6);
    });

    it('Test: Get Value on Specific Coordinate', () => {
        const matrix = new Matrix(assignmentString);

        expect(matrix.getValueOfElement(2,2)).toBe('U');
        expect(matrix.getValueOfElement(4,5)).toBe('-');
        expect(matrix.getValueOfElement(0,4)).toBe('A');

    })

    it('Test: Cannot Find Starting Point', () => {
        const matrix = new Matrix(inputWithoutStartingPoint);

        expect(() => matrix.findStartingPoint()).toThrow(PathFindingException);
    });
});
