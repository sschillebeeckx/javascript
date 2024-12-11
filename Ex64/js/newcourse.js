import {CourseService} from "./courseService.js";
import {Course} from "./course.js";
import {goHome} from "./gohome.js";
document.addEventListener('DOMContentLoaded', () => {

    let priceInput = document.getElementById('coPrice');
    priceInput.addEventListener('change', (e) => {
        console.log("price changed" );
        const days = document.getElementById('coDays').value;
        const price = e.target.value;
        console.log("price entered " +e.target.value);
        let course = new Course(0,"",days,price,"",false,[]);
        let priceElement = document.getElementById("totalPriceCalculated");
        priceElement.textContent= "Total price is " + days*price;
        priceElement.style.display = 'block';


    })

    let button = document.getElementById('submitBtn');
    console.log(button);
    button.addEventListener("click", () => addNewCourse());

    function addNewCourse() {
        console.log('clicked');

        const id = document.getElementById('coId').value;
        console.log(id);
        const title = document.getElementById('coTitle').value;
        console.log(title);
        const days = document.getElementById('coDays').value;
        console.log(days);
        const price = document.getElementById('coPrice').value;
        console.log(price);
        const releaseDateS = document.getElementById('coDate').value;
        console.log(releaseDateS);2024-11-25
        let year = releaseDateS.substring(0,4);
        let month = releaseDateS.substring(5,7);
        let day = releaseDateS.substring(8,10);
        let releaseDate=day+"/"+month+"/"+year;
        const priorKnowledge = document.querySelector('input[name="coPrior"]:checked');
        console.log(priorKnowledge);
        const selectElement = document.getElementById('instructors');
        const instructors = Array.from(selectElement.selectedOptions).map(option => option.value);
        console.log(instructors);
        const course = new Course(id, title, days, price, releaseDate, priorKnowledge, instructors);
        console.log(course);
        let courseService = CourseService.getInstance();
        courseService.addCourse(course);
        let allCourses= courseService.findAllCourses();
        console.log(allCourses);
        sessionStorage.setItem('courses', JSON.stringify(allCourses));
        window.location.href = "allCourses.html";
    }

    document.getElementById("homeButton").addEventListener("click", ()=>goHome());
});


