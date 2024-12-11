import {CourseService} from "./courseService.js";

document.addEventListener("DOMContentLoaded", () => {
    let myTable = document.getElementById("coursesTable");

    let allCoursesJSON= sessionStorage.getItem("courses");
    console.log(allCoursesJSON);
    let allCourses=null;
    if (allCoursesJSON!==null){
        allCourses = JSON.parse(allCoursesJSON);
    } else {
        allCourses=CourseService.getInstance().findAllCourses();
    }

    for (let course of allCourses){
        let newrow = myTable.insertRow();
        newrow.insertCell(0).textContent=course.id;
        newrow.insertCell(1).textContent=course.title;
        newrow.insertCell(2).textContent=course.numberOfDays;
        newrow.insertCell(3).textContent=course.pricePerDay;
        newrow.insertCell(4).textContent=course.releaseDate;
        newrow.insertCell(5).textContent= (course.priorKnowledge)?"yes":"no";
        let instructorSentence = "";
        let instructors=course.instructors;
        for (let i in instructors){
            if (i<instructors.length-1) {
                instructorSentence+= instructors[i] +", ";
            } else {
                instructorSentence +=  instructors[i] +".";
            }
        }
        newrow.insertCell(6).textContent= instructorSentence;
    }


})
