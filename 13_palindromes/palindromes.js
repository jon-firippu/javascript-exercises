const palindromes = function (str) {
    //remove white spaces and punctuations
    const strCleaned = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
    //reverse the string
    let reversed = "";
    for (i = strCleaned.length - 1 ; i >= 0 ; i--) {
        reversed += strCleaned[i];
    }
    return strCleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;