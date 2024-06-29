const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

// const arr1.push(arr2)
// console.log(arr1);

// const arr3 = arr1.concat(arr2)
// console.log(arr3);

const arr3 = [...arr1 , ...arr2]
console.log(arr3);

const arr = [1,2,3,[4,5,[6,7,[8,9]]]]
const real_arr = arr.flat(Infinity)
console.log(real_arr);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));