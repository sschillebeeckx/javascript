import {Course} from "./course.js";

console.log("in showcourse");
let foundCourseS = sessionStorage.getItem('courseData');
console.log(foundCourseS);
let foundCourse=JSON.parse(foundCourseS);
console.log(foundCourse);
let courseObject= new Course(foundCourse.id,foundCourse.title,foundCourse.numberOfDays,foundCourse.pricePerDay,foundCourse.releaseDate,foundCourse.priorKnowlegde,foundCourse.instructors);
console.log(courseObject);
let courseInfo = courseObject.getInfo();
console.log(courseInfo);
document.getElementById('courseinfo').innerHTML = courseInfo;

