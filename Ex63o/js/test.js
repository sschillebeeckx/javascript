import {CourseList} from "./courselist.js";
import {Course} from "./course.js";

let courseList= new CourseList();

let course1= courseList.findCourseById(1);
console.log("course 1");
console.log(course1);

let angular= courseList.findCourseByTitle("ang");
console.log("course by title");
console.log(angular);

let newcourse = new Course(4,"new course",4,300,"09/12/2024",false,["Me"]);
courseList.addCourse(newcourse);

console.log("all after adding new course");
let allCourses= courseList.findAllCourses();
console.log(allCourses);


console.log("calculate difference years");
let course2= courseList.findCourseById(2);
console.log("course was released on " + course2.releaseDate + " and is " + course2.calculateCourseAge() + " years old.");

