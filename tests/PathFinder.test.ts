import { Matrix } from '../src/models/Matrix';
import { PathFinder } from '../src/services/PathFinder';

describe('PathFinder', () => {
    let assignmentString: string;

    beforeEach(() => {
        assignmentString = ">---A-@-+\n        |\n+-U-+   C\n|   |   |\ns   C---+"
    });

    it('Test: Find Path Correctly', () => {
        const matrix = new Matrix(assignmentString);
        const pathFinder = new PathFinder(matrix);

        pathFinder.findPath();
        expect(pathFinder.getPath()).toBe('@---A-@-+|C|+---C|+-U-+|s');
    });

    it('Test: Append Letters Correctly', () => {
        const matrix = new Matrix(assignmentString);
        const pathFinder = new PathFinder(matrix);

        pathFinder.findPath();
        expect(pathFinder.getLetters()).toBe('ACCU');
    });

    it('Test: Empty Path', () => {
        const emptyLines = '>     \n     s';
        const emptyMatrix = new Matrix(emptyLines);
        const pathFinder = new PathFinder(emptyMatrix);

        pathFinder.findPath();

        expect(pathFinder.getPath()).toBe('@');
        expect(pathFinder.getLetters()).toBe('');
    });

    it('Test: No letters', () => {
        const noLetters = '>--@--+--|\n         d\n         |\ns--@--+--+';
        const noLettersMatrix = new Matrix(noLetters);
        const pathFinder = new PathFinder(noLettersMatrix);

        pathFinder.findPath();

        expect(pathFinder.getLetters()).toBe('');
    });

});
