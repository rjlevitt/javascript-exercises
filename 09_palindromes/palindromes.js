const palindromes = function (str) {
    const a = str.toLowerCase().replace(/[^A-Za-z]/g, '');
    const b = a.split("").reverse().join("")
    return b == a
};

// Do not edit below this line
module.exports = palindromes;
