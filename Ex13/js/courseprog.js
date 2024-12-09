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

let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
    ".\nThe total price is " + totalPrice + "€.\nPrior Knowledge required: "+ priorKnowledge + "."

console.log(info);