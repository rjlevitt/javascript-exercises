const repeatString = function(string, num) {
    let repeat_string = "";
    let i = 0;
    if(num<0){
        return "ERROR"
    }else{
        while(i<num){
            repeat_string += string;
            i++;
        }
        return repeat_string
    }
};

// Do not edit below this line
module.exports = repeatString;
