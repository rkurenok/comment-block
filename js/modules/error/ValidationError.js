export class ValidationError extends Error {
    constructor(elem, message) {
        super(message);
        this.name = "ValidationError";
        this.elem = elem;
    }
}