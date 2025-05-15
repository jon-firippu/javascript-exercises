const removeFromArray = function(array,...num) {
    for(j = 0; j < array.length; j++) {
        for(i = 0; i < num.length; i++) {
            if(array[j] === num[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
