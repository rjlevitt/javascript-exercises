const sumAll = function(start, end) {
    let sum = 0;
    if(Number.isInteger(start) && Number.isInteger(end)){
        if(start >= 0 && end >= 0){
            if(start > end){
                const temp = start;
                start = end;
                end = temp;
            }
            for(i=start; i<=end; i++){
                sum+=i
            }
            return sum
        }
        else{
            return "ERROR" 
        }
    }
    else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
