// write a function, max value, that takes in array of numbers as an argument.
// the function should return the largest number in array.

function maxValue(arr){
    if(arr.length === 0) return undefined;

    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
let array = [1,2,3,4,5];
console.log(maxValue(array));