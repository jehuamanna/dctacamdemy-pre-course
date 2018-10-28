/*
Write a function sumArray that takes an array of numbers and returns of the positive numbers. If the array does not contain any numbers then you should return 0.
Examples numbers = [10, 52, 4.5, -10]; console.log(sumArray(numbers)) // 66.5
*/

function sumArray(a) {
    var sum = 0;
    for (i =0; i<a.length; i++){
        if(a[i]>0)
        sum += a[i];
    }
    return sum;
}

numbers = [10, 52, 4.5, -10]

console.log(sumArray(numbers));