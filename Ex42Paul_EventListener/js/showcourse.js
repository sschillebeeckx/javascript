import {Course} from "./course.js";

let infoButton = document.getElementById("infoButton");
infoButton.addEventListener("click",()=> showCourseInfo());

function showCourseInfo(){
    let c = new Course(1,"JavaScript programming",3,570,"23/09/2004",false,["John","An","Bart"])
    let result = c.getInfo();
    document.getElementById('courseinfo').innerHTML = result;
    document.getElementById("courseinfo").style.display = "block";
    infoButton.style.display = "none";
}



