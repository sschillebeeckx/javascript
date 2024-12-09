let id = 1;
let title = "JavaScript programming";
let numberOfDays = 3;
let pricePerDay = 570;
let releaseDate="23/09/2004";
let priorKnowledge = false;

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

console.log(info);