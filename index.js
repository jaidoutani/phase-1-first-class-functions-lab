const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function() {
    const newArray = [...drivers];
    return newArray.slice(0,2);
}

//should return an array of the last two drivers
const returnLastTwoDrivers = function() {
    const newArray = [...drivers];
    return newArray.slice(2,4);
}

//This is an array containing two elements: the two functions that we previously defined 
//(returnFirstTwoDrivers() and returnLastTwoDrivers()).
//allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//This is a higher-order function that takes in one argument, an integer, and returns 
// a function that will multiply a fare for a ride accordingly. 
function createFareMultiplier(num) {
    return fareFunction => num * num;
}

//Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//is a function; doubles fares
const fareDoubler = function(fareFunction) {
    return fareFunction * 2;
}

//Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
//is a function; triples fares
const fareTripler = function(fareFunction) {
    return fareFunction * 3;
}

//This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() 
//or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() 
//will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(arrayOfDrivers, fun) {
    if (arrayOfDrivers === "Antonia", "Nuru") {
        return fun(returnFirstTwoDrivers);
    } else if (arrayOfDrivers === "Amari", "Mo") {
        return fun(returnLastTwoDrivers);
    }
}

