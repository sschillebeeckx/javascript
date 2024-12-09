let id = 1;
let title = "JavaScript programming";
let numberOfDays = 3;
let pricePerDay = 570;
let releaseDate="23/09/2004";
let priorKnowledge = false;
let instructors = ["John","An","Bart"];

let totalPrice=numberOfDays*pricePerDay;
if (numberOfDays<3 && !priorKnowledge){
    totalPrice*=1.21;
}else{
    totalPrice*=1.15;
}

let priceLabel="";
switch (true){
    case totalPrice<500: priceLabel="CHEAP"; break;
    case totalPrice>=500 && totalPrice<=2000 : priceLabel="OK"; break;
    case totalPrice>2000 : priceLabel="EXPENSIVE";
}

let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
    ".\nThe total price is " + totalPrice + "€. This is " + priceLabel + ".\nPrior Knowledge is " + (!priorKnowledge? "not ":"") + "required."

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

let numberOfParticipants=0;
let moneyLeft=10000;
while (moneyLeft>=totalPrice){
    moneyLeft-=totalPrice;
    ++numberOfParticipants;
}
console.log("max participants: "+numberOfParticipants);