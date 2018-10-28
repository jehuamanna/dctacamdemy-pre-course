/*
Given an array, write a function that returns the minimum number(should be greater than 0) to be added to the array so the sum of array becomes even

var numbers1 = [1,2,3,4,5];
var numbers2 = [1,2,3,,5,6,7];

makeEven(numbers1); // 1
makeEven(numbers2); // 2
*/

function makeEven(numbers){
    var sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    if(sum %2 === 0)
        return 2;
    else
        return 1;
}

console.log(makeEven([1,2,3,4,5]))
console.log(makeEven([1,2,3,4,5,6,7]));
