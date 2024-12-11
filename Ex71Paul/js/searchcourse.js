import {Course} from "./course.js";

let courseList=[
  new Course(1,"Javascript Programming", 3,570,"23/09/2004",false,["John", "An", "Bart"]),
  new Course(2,"Angular", 2,600,"20/11/2020",true,["Jean"]),
  new Course(3,"Spring APIs", 5,512.35,"09/02/2018",true,[ "An", "Jean"])
]

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => searchCourse());

function searchCourse() {
    console.log("clicked");
    let courseId = document.getElementById("courseId").value;
    console.log(courseId);

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


    let found=null;
    for (let course of courseList){
       if (course.id===courseIdNum){
         found=course;
       }
    }
    console.log(found);
    let courseJSON=JSON.stringify(found);
    sessionStorage.setItem('courseData', courseJSON);
    window.location.href = "showcourse.html";
}


