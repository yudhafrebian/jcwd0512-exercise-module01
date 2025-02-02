// soal 1

function sortArray() {
  let array: number[] = [12, 5, 23, 18, 4, 45, 32];
  let lowest: number = array[0];
  let highest: number = array[0];
  let sum: number = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }
    if (array[i] > highest) {
      highest = array[i];
    }
    sum += array[i];
  }
  let average: number = sum / array.length;
  return `Lowest = ${lowest}, Highest = ${highest}, Average = ${average}`;
}

console.log(sortArray());

//soal 2
let arr: string[] = ["apple", "banana", "cherry", "date"];

function concatenating() {
  let firstWords = arr.slice(0, -1).join(", ");
  let lastIndex = arr.at(-1);

  let result = `${firstWords} and ${lastIndex}`;
  return result;
}

console.log(concatenating());

//soal 3

let numbers: number[] = [5, 3, 1, 7, 2, 6];

function secondSmallest() {
  numbers.sort((a, b) => a - b);
  return numbers[1];
}

console.log(secondSmallest());

//soal 4

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [3, 2, 1];

function sumArray() {
  let result: number[] = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

console.log(sumArray());
