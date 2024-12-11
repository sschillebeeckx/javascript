import {Course} from './course.js';

let info = document.getElementById("infoButton");

info.addEventListener("click", () => showCourseInfo());

function showCourseInfo() {
    document.getElementById("courseinfo").style.display = "block";
    let course = new Course(1,"Javascript Programming", 3,570,"23/09/2004",false,["John", "An", "Bart"]);
    document.getElementById('courseinfo').innerHTML = course.getInfo();
    info.style.display = "none";
}