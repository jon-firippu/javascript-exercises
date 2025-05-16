const sumAll = function (first, second) {
    let sum = 0;
    
    if (Number.isInteger(first) && Number.isInteger(second) && first > 0 && second > 0) {
        if (first < second) {
            for (i = first; i < second; i++) {
                sum += i;
            }
            return sum + second;
        }
        else {
            for (i = second; i < first; i++) {
                sum += i;
            }
            return sum + first;
        }
    }
    return "ERROR";

};


// Do not edit below this line
module.exports = sumAll;
