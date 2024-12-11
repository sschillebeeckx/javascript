export class Course {

    constructor(id, title, numberOfDays, pricePerDay, releaseDate, priorKnowledge, instructors) {
        this.id = id;
        this.title = title;
        this.numberOfDays = numberOfDays;
        this.pricePerDay = pricePerDay;
        this.releaseDate = releaseDate;
        this.priorKnowledge = priorKnowledge;
        this.instructors = instructors;
    }

    calculateTotalPrice() {
        let totalPrice = this.numberOfDays * this.pricePerDay;
        if (this.numberOfDays < 3 && !this.priorKnowledge) {
            totalPrice = totalPrice + 0.21 * totalPrice;
        } else {
            totalPrice = totalPrice + 0.15 * totalPrice;
        }
        return totalPrice;
    }

    getInfo() {
        let info = "Course " + this.id + ":\n" + this.title.toUpperCase() + " was first released on " + this.releaseDate +
            ". This was " + this.calculateCourseAge() + " years ago." +
            ".\nThe total price is " + this.calculateTotalPrice() + "€.\nPrior Knowledge is " + (!this.priorKnowledge ? "not " : "") + "required."

        let instructorSentence = "The instructors are: " + this.instructors.join(" - ");

        return info + "\n" + instructorSentence + ".";
    }

    calculateCourseAge() {
        //  02/09/2014
        let released = this.releaseDate;
        let day = released.substring(0, 2);
        let month = released.substring(3, 5) - 1;
        let year = released.substring(6, 10);
        let rDate = new Date(year, month, day);

        let now = new Date();

        let yearsDifference = now.getFullYear() - rDate.getFullYear();
        const monthDifference = now.getMonth() - rDate.getMonth();
        const dayDifference = now.getDate() - rDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            yearsDifference--;  // Subtract 1 if the later date is before the earlier date's birthday in the year
        }

        return yearsDifference;
    }


}