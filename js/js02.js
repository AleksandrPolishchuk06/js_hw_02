// <!-- 2.  Напишіть скрипт, якй приймає масив чисел [23,1,45,87,4,55,6], використовуючи
//     for of для пошуку найбільшого числа в масиві. -->

const numbers = [23, 1, 45, 87, 4, 55, 6];
let maxNumber;

for (let number of numbers) {
  number = Math.max(...numbers);
  console.log(number);
  maxNumber = number;
  break;
}

console.log(maxNumber);
