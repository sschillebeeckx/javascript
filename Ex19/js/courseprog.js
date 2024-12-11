function calculateTotalPrice(numberOfDays,pricePerDay,priorKnowledge){
    let totalPrice=numberOfDays*pricePerDay;
    if (numberOfDays<3 && !priorKnowledge){
        totalPrice*=1.21;
    }else{
        totalPrice*=1.15;
    }
    return totalPrice;
}

function labelPrice(totalPrice){
    let priceLabel="";
    switch (true){
        case totalPrice<500: priceLabel="CHEAP"; break;
        case totalPrice>=500 && totalPrice<=2000 : priceLabel="OK"; break;
        case totalPrice>2000 : priceLabel="EXPENSIVE";
    }
    return priceLabel;
}

const roundToTwoDecimals = num => Math.round(num * 100) / 100;

function printInfo(id,title,releaseDate,totalPrice,priceLabel,priorKnowledge,instructors){
    let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
        ".\nThe total price is " + roundToTwoDecimals(totalPrice) + "€. This is " + priceLabel + ".\nPrior Knowledge is " + (!priorKnowledge? "not ":"") + "required."

    let instructorSentence = (instructors.length===1)? "The instructor is: " : "The instructors are: ";
    for (i in instructors){
        if (i<instructors.length-1) {
            instructorSentence+= instructors[i] +", ";
        } else {
            instructorSentence +=  instructors[i] +".";
        }

    }

    console.log(info);
    console.log(instructorSentence);
}

function calculateMaxParticipants(totalPrice, maxBudget){
    let numberOfParticipants=0;
    let moneyLeft=maxBudget;
    while (moneyLeft>=totalPrice){
        moneyLeft-=totalPrice;
        ++numberOfParticipants;
    }
    return numberOfParticipants;

}


let id = 1;
let title = "JavaScript programming";
let numberOfDays = 3;
let pricePerDay = 570;
let releaseDate="23/09/2004";
let priorKnowledge = false;
let instructors = ["John","An","Bart"];

let totalPrice = calculateTotalPrice(numberOfDays,pricePerDay,priorKnowledge);
let priceLabel = labelPrice(totalPrice);
printInfo(id,title,releaseDate,totalPrice,priceLabel,priorKnowledge,instructors);
console.log("max participants: "+calculateMaxParticipants(totalPrice,10000));