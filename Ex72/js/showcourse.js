import {Course} from "./course.js";
import {goHome} from "./gohome.js";

let foundCourseS = sessionStorage.getItem('courseData');
let foundCourse=JSON.parse(foundCourseS);
let courseObject= new Course(foundCourse.id,foundCourse.title,foundCourse.numberOfDays,foundCourse.pricePerDay,foundCourse.releaseDate,foundCourse.priorKnowlegde,foundCourse.instructors);
let courseInfo = courseObject.getInfo();
document.getElementById('courseinfo').innerHTML = courseInfo;

document.getElementById("homeButton").addEventListener("click", ()=>goHome());
