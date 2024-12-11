import {CourseService} from "./courseService.js";
import {goHome} from "./gohome.js";
document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", () => searchCourse());
  function searchCourse() {
    let courseId = document.getElementById("courseId").value;

    if (courseId===""){
      alert("Course ID is required");
      return;
    }
    let courseIdNum = Number(courseId);
    console.log(courseIdNum);
    if (isNaN(courseIdNum)){
      alert("Course ID should numeric");
      return;
    }
    if (!Number.isInteger(courseIdNum)){
      alert("Course ID should be a whole number");
      return;
    }

    let cs = CourseService.getInstance();
    let course = cs.findCourseById(parseInt(courseId));
    let courseJSON=JSON.stringify(course);
    sessionStorage.setItem('courseData', courseJSON);
    window.location.href = "showcourse.html";
    }

});
document.getElementById("homeButton").addEventListener("click", ()=>goHome());

