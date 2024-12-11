import {CourseList} from "./courselist.js";

document.addEventListener("DOMContentLoaded", () => {
    let myTable = document.getElementById("coursesTable");
    let courses = sessionStorage.getItem('courses');
    console.log("courses:")
    console.log(courses);

    console.log("courses parsed:")
    let parsedCourses = JSON.parse(courses);
    if (parsedCourses!==null){
        CourseList.courseList=JSON.parse(courses);
    } 

   let allCourses= CourseList.findAllCourses();


    for (let course of allCourses){
        let newrow = myTable.insertRow();
        let idrow = newrow.insertCell(0);
        let idlink = document.createElement("a");
        idlink.href="showcourse.html?id="+course.id;
        idlink.textContent=course.id;
        idrow.appendChild(idlink);
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
