// <!-- 4.  Напиши скрипт, який рахує суму елементів двох масивів.

//         const array1 = [5, 10, 15, 20];
//         const array2 = [10, 20, 30];
//  -->

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total1 = 0;
let total2 = 0;
let total = 0;

// for (array of array1) {
//   total1 += array;
// }

// console.log(total1);

// for (array of array2) {
//   total2 += array;
// }

// total = total1 + total2;
// console.log(total);

let array3 = array1.concat(array2);
// console.log(array3);
for (let element of array3) {
  total1 += element;
}

console.log(total1);
