const removeFromArray = function(array, ...args) {
    //search the array for the value
    // let exist = false;

    // do {
    //     for (let i = 0; i < array.length; i++){
    //         if (array[i] === value){
    //             exist = true;
    //             for (let i = 0; i < array.length; i++){
    //                 if (array[i] === value){
    //                     //remove this value
    //                     array.splice(i, 1);
    //                     exist = false;
    //                 }
    //             }
    //         }
    //         if (i == array.length - 1 && exist === false){
    //             return array;
    //         }
    //     }
    // } while(exist === true);
    
    // return array;
    return array.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
