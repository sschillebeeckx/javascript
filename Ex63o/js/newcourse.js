import {CourseList} from "./courselist.js";
import {Course} from "./course.js";

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
        const releaseDate = document.getElementById('coDate').value;
        console.log(releaseDate);
        const priorKnowledge = document.querySelector('input[name="coPrior"]:checked');
        console.log(priorKnowledge);
        const selectElement = document.getElementById('instructors');
        const instructors = Array.from(selectElement.selectedOptions).map(option => option.value);
        console.log(instructors);
        const course = new Course(id, title, days, price, releaseDate, priorKnowledge, instructors);
        console.log(course);
        CourseList.addCourse(course);
        sessionStorage.setItem('courses', JSON.stringify(CourseList.courseList));
        window.location.href = "allCourses.html";
    }
});


