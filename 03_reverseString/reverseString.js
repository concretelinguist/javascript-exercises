const reverseString = function(stringInput) {
    let reversed = "";
    //for single word case

    //loop through original length of the string from back to front
    for (let i = stringInput.length - 1; i > -1; i--){
        const currentLetter = stringInput[i];
        reversed = reversed + currentLetter;
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
