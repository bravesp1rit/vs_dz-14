'use strict';

// Task #1
for(let i = 0; i <= 100; i++){
    console.log(i);
}

// Task #2
for(let i = 100; i >= 1; i--){
    console.log(i);
}

// Task #3
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

// Task #4
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i <= arr.length - 1; i++){
    sum += arr[1];
}
console.log(sum);

// Task #5
const arr1 = [1, 2, 3, 4, 5];
let sumOfSquares = null;
let sumOfArr = null;
for(let i = 0; i <= arr1.length - 1; i++){
    sumOfSquares = arr1[i] ** 2;
    sumOfArr += sumOfSquares;
}
console.log(sumOfArr);
