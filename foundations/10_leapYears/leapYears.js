const leapYears = function(inputYear) {
    let divBy4 = inputYear % 4;
    let divBy100 = inputYear % 100;
    let divBy400 = inputYear % 400;

    if ((divBy4 === 0 && !(divBy100 === 0)) || (divBy100 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
