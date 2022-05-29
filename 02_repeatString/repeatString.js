const repeatString = function(phrase, num) {
    //check if number is negative and return error
    if (num < 0){
        return "ERROR";
    }
    
    let multiplied="";
    for (let i = 0; i < num; i++){
        multiplied = multiplied+phrase;
    }
    
    //return value
    return multiplied;
};

// Do not edit below this line
module.exports = repeatString;
