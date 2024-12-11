function calculateTotalPrice(numberOfDays,pricePerDay){
    let totalPrice=numberOfDays*pricePerDay;
    if (numberOfDays<3 && !priorKnowledge){
        totalPrice=totalPrice + 0.21*totalPrice;
    }else{
        totalPrice=totalPrice + 0.15*totalPrice;
    }
    return totalPrice;
}

function getInfo(id,title,releaseDate,totalPrice,priorKnowledge,instructors){
    let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
        ".\nThe total price is " + totalPrice + "€.\nPrior Knowledge is " + (!priorKnowledge? "not ":"") + "required."

    let instructorSentence ="The instructors are: ";
    for (instructor of instructors){
       instructorSentence +=instructor+" ";
    }

    return info + "\n" + instructorSentence + ".";
}

function showCourseInfo(){
    document.getElementById("courseinfo").style.display = "block";
    document.getElementById("infoButton").style.display = "none";
}