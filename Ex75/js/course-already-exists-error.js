export class CourseAlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = "CourseAlreadyExistsError";
    }
}