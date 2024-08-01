"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathFindingException = void 0;
class PathFindingException extends Error {
    constructor(message) {
        super(message);
        this.name = 'PathFindingException';
    }
}
exports.PathFindingException = PathFindingException;
