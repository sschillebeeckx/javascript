import {CourseService} from "./courseService.js";
import {Course} from "./course.js";

let courseService= new CourseService();

let course1= courseService.findCourseById(1);
console.log("course 1");
console.log(course1);

let angular= courseService.findCourseByTitle("ang");
console.log("course by title");
console.log(angular);

let newcourse = new Course(4,"new course",4,300,"09/12/2024",false,["Me"]);
courseService.addCourse(newcourse);

console.log("all after adding new course");
let allCourses= courseService.findAllCourses();
console.log(allCourses);


