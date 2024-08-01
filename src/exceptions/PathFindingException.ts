export class PathFindingException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PathFindingException';
    }
}
