export class CourseNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "CourseNotFoundError";
    }
}