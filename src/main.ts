import { Matrix } from './models/Matrix';
import { PathFinder } from './services/PathFinder';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readInputFromConsole(): Promise<string> {
    console.log("Write your input here.");
    console.log("Note: You need an empty line to finish the input.");

    return new Promise((resolve) => {
        const input: string[] = [];
        rl.on('line', (line) => {
            if (line.trim() === '') {
                rl.close();
                resolve(input.join('\n'));
            } else {
                input.push(line);
            }
        });
    });
}

(async () => {
    const input = await readInputFromConsole();
    const matrix = new Matrix(input);
    const pathFinder = new PathFinder(matrix);

    try {
        pathFinder.findPath();
        console.log("Path ", pathFinder.getPath());
        console.log("Letters ", pathFinder.getLetters());
    } catch (error) {
        console.error(error);
    }
})();
