import {CourseService} from "./courseService.js";
import {goHome} from "./gohome.js";
import {CourseNotFoundError} from "./course-not-found-error.js";

document.addEventListener("DOMContentLoaded", () => {
    let searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => searchCourse());

    function searchCourse() {
        let courseId = document.getElementById("courseId").value;

        if (courseId === "") {
            alert("Course ID is required");
            return;
        }
        let courseIdNum = Number(courseId);
        console.log(courseIdNum);
        if (isNaN(courseIdNum)) {
            alert("Course ID should numeric");
            return;
        }
        if (!Number.isInteger(courseIdNum)) {
            alert("Course ID should be a whole number");
            return;
        }

        try {
            let course = findCourseById(courseId);
            console.log(course);
            let courseJSON = JSON.stringify(course);
            sessionStorage.setItem('courseData', courseJSON);
            window.location.href = "showcourse.html";
        } catch (error) {
            let errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = error.message;
            errorMessage.style.color = "red";
        }

    }

});
document.getElementById("homeButton").addEventListener("click", () => goHome());

function findCourseById(cid) {
    let cs = CourseService.getInstance(cid);
    let course = cs.findCourseById(parseInt(cid));
    console.log(course);

    if (course === undefined) {
        throw new CourseNotFoundError("Course with id " + cid + " was not found");
    }
    return course;

}