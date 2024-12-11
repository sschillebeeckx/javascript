import {Course} from './course.js';
import {CourseList} from "./courselist.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let idString = urlParams.get('id');
    console.log(idString);

    let course = CourseList.findCourseById(parseInt(idString));
    console.log(course);
    document.getElementById('courseinfo').innerHTML = course.getInfo();


});