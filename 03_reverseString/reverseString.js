const reverseString = function(string) {
    new_string = "";
    for(i=string.length; i>0; i--){
        new_string += string.slice(i-1, i);
    }
    return new_string
};

// Do not edit below this line
module.exports = reverseString;
