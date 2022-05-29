const sumAll = function(num1, num2) {
    let sum = 0;
    
    // check if both numbers are positive
    if (num1 > -1 && num2 > -1 && typeof num1 === typeof num2){
        //first num is larger
        if (num1 > num2){
            while(num1 >= num2){
                sum = sum + num1;
                num1--;
            }
            return sum;
        }
        //first num is smaller
        else if (num1 < num2){
            while(num1 <= num2){
                sum = sum + num1;
                num1++;
            }
            return sum;
        }
    }

    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
