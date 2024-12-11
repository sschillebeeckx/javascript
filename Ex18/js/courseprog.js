function calculateTotalPrice(numberOfDays,pricePerDay,priorKnowlegde){
    let totalPrice=numberOfDays*pricePerDay;
    if (numberOfDays<3 && !priorKnowlegde){
        totalPrice*=1.21;
    }else{
        totalPrice*=1.15;
    }
    return totalPrice;
}

function getInfo(id,title,releaseDate,totalPrice,priceLabel,priorKnowledge,instructors){
    let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
        ".\nThe total price is " + totalPrice + "€. This is " + priceLabel + ".\nPrior Knowledge is "
        + (!priorKnowledge? "not ":"") + "required."

    let instructorSentence = "The instructors are: ";
    for (let instructor of instructors){
        instructorSentence+= instructor+" ";
    }

   /* let instructorSentence = (instructors.length===1)? "The instructor is: " : "The instructors are: ";
    for (i in instructors){
        if (i<instructors.length-1) {
            instructorSentence+= instructors[i] +", ";
        } else {
            instructorSentence +=  instructors[i] +".";
        }

    }*/
    return info + "\n" + instructorSentence + ".";
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
let info = getInfo(id,title,releaseDate,totalPrice,priceLabel,priorKnowledge,instructors);
console.log(info);
//console.log("max participants: "+calculateMaxParticipants(totalPrice,10000));