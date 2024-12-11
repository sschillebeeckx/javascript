export class Course {

    constructor(id,title,numberOfDays,pricePerDay,releaseDate,priorKnowledge,instructors){
        this.id = id;
        this.title = title;
        this.numberOfDays = numberOfDays;
        this.pricePerDay = pricePerDay;
        this.releaseDate = releaseDate;
        this.priorKnowledge = priorKnowledge;
        this.instructors = instructors;
    }

     calculateTotalPrice(){
        let totalPrice=this.numberOfDays*this.pricePerDay;
         if (this.numberOfDays<3 && !this.priorKnowledge){
             totalPrice=totalPrice + 0.21*totalPrice;
         } else{
             totalPrice=totalPrice + 0.15*totalPrice;
         }
         return totalPrice;
    }

    getInfo(){
        let info = "Course "+ this.id + ":\n" + this.title.toUpperCase() + " was first released on " + this.releaseDate +
            ".\nThe total price is " + this.calculateTotalPrice() + "€.\nPrior Knowledge is " + (!this.priorKnowledge? "not ":"") + "required."

        let instructorSentence ="The instructors are: " + this.instructors.join(" - ");

        return info + "\n" + instructorSentence + ".";
    }



}