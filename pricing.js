const plan = "pro";
const period = "year";
const age = 21;
const promo = "sale";

let price;
let hasError = false;

switch (plan) {
    case "pro": price = 1000;
        break;
    case "team": price = 700;
        break;
    case "basic": price = 500;
        break;
    default:
        console.log("Error! Incorrect tariff name");
        hasError = true;
}

if (!hasError) {
    if (period === "year") {
        price = price * 0.8;
    }

    if (typeof age === "number" && !isNaN(age)) {
        price = (age < 23 || age >= 65) ? price * 0.9 : price;
    } else {
        console.log("Error! Age has to be a number");
        hasError = true;
    }
}

if (!hasError) {
    if (promo ?? false) {
        price = price * 0.95;
    } else {
        console.log(promo ?? "без промокода");
    }
    console.log("Final price:", price);
} else {
    console.log("Error! Price is invalid, correct the above errors first");
}