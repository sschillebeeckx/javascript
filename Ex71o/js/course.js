export class Course {

    constructor(id, title,numberOfDays,pricePerDay,releaseDate,priorKnowledge,instructors){
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
            totalPrice*=1.21;
        }else{
            totalPrice*=1.15;
        }
        return totalPrice;
    }

    labelPrice(){
        let totalPrice=this.calculateTotalPrice();
        let priceLabel="";
        switch (true){
            case totalPrice<500: priceLabel="CHEAP"; break;
            case totalPrice>=500 && totalPrice<=2000 : priceLabel="OK"; break;
            case totalPrice>2000 : priceLabel="EXPENSIVE";
        }
        return priceLabel;
    }

    roundToTwoDecimals(num) {
        return Math.round(num * 100) / 100;
    }

    getInfo(){
        let info = "Course "+ this.id + ":\n" + this.title + " was first released on " + this.releaseDate +
            ".\nThe total price is " + this.roundToTwoDecimals(this.calculateTotalPrice()) + "€. This is " + this.labelPrice() + ".\nPrior Knowledge is " + (!this.priorKnowledge? "not ":"") + "required."

        let instructors = this.instructors;
        let instructorSentence = (instructors.length===1)? "The instructor is: " : "The instructors are: ";
        for (let i in instructors){
            if (i<instructors.length-1) {
                instructorSentence+= instructors[i] +", ";
            } else {
                instructorSentence +=  instructors[i] +".";
            }

        }

        return info + "\n" + instructorSentence;

    }

    calculateMaxParticipants(maxBudget){
        let numberOfParticipants=0;
        let moneyLeft=maxBudget;
        totalPrice=this.calculateTotalPrice();
        while (moneyLeft>=totalPrice){
            moneyLeft-=totalPrice;
            ++numberOfParticipants;
        }
        return numberOfParticipants;

    }

    calculateCourseAge(){
        //  02/09/2014

        let released = this.releaseDate;
        let day=released.substring(0,2);
        let month = released.substring(3,5) - 1;
        let year = released.substring(6,10) ;
        let rDate = new Date(year,month,day);

        let now = new Date();

        let yearsDifference = now.getFullYear()-rDate.getFullYear();
        const monthDifference = now.getMonth() - rDate.getMonth();
        const dayDifference = now.getDate() - rDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            yearsDifference--;  // Subtract 1 if the later date is before the earlier date's birthday in the year
        }

        return yearsDifference;
    }
}