let id = 1;
let title = "JavaScript programming";
let numberOfDays = 3;
let pricePerDay = 570;
let releaseDate="23/09/2004";
let priorKnowledge = false;

let totalPrice=numberOfDays*pricePerDay;

let info = "Course "+ id + ":\n" + title + " was first released on " + releaseDate +
    ".\nThe total price is " + totalPrice + "€.\nPrior Knowledge required: "+ priorKnowledge + "."

console.log(info);