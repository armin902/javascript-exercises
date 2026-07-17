const sumAll = function(startIndex, endIndex) {
    if (!(Number.isInteger(startIndex)) || !(Number.isInteger(endIndex))) {
        return "ERROR";
    }
    if (startIndex < 0 || endIndex < 0) {
        return "ERROR";
    }

    let finalSum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
