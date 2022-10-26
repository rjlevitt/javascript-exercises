const fibonacci = function(number) {
    number = Number(number)
    if( number >= 0){
        let n1 = 0;
        let n2 = 1;
        let nextNumber;
        for(i=1; i<=number; i++){
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
        }
        return n1;
    }
    else{
        return "OOPS"
    }


};

// Do not edit below this line
module.exports = fibonacci;
