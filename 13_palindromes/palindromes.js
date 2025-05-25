const palindromes = function (str) {
    //remove white spaces and punctuations
    const strCleaned = str.split('').filter(char => {
        /[a-zA-Z0-9]/.test(char);
    }).join('');
    //reverse the string
    let reversed = "";
    for (i = strCleaned.length - 1 ; i >= 0 ; i--) {
        reversed += strCleaned[i];
    }
    if (strCleaned === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
