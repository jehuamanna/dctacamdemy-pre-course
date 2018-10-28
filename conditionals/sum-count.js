/*
Given an array of integers.
Return an array, where the first element is the sum of positives numbers and the second element is count of negative numbers.
var numbers = [10,-10,20,-20,30,-30];
sumCount(numbers); // [60,3]
*/


function sumCount(numbers){
    var sum=0,count=0;
    numbers.forEach(function (number){
        if (number>=0){
            sum += number;
        }
        else
            count++;
    })
    return [sum, count]
}

console.log(sumCount([10,-10,-20,20,30,-30]));
