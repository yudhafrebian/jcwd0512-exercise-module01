//soal 2
function FizzBuzz(n: number) {
  let hasil: string = "";
  for (let i: number = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      hasil += "FizzBuzz";
    } else if (i % 3 === 0) {
      hasil += "Fizz";
    } else if (i % 5 === 0) {
      hasil += "Buzz";
    } else {
      hasil += i;
    }
    hasil += " ";
  }
  return hasil;
}

console.log(FizzBuzz(15));

//soal 3
function calculateBMI(weigth, height) {
  let calculate = weigth / (height * height);
  let hasil: string = "";
  if (calculate < 18.5) {
    hasil = "less weigth";
  } else if (calculate < 24.9) {
    hasil = "ideal";
  } else if (calculate < 29.9) {
    hasil = "overweigth";
  } else if (calculate < 39.9) {
    hasil = "very overweigth";
  } else {
    hasil = "obesity";
  }
  console.log(hasil);
}

calculateBMI(56, 1.78);

//soal 4
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function replaceEvent() {
  let result: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(replaceEvent());

//soal 5

let greet: string = "Hello World";

function splitString() {
  return greet.split(" ");
}

console.log(splitString());

let greeting = "hai there";

for (let i = 0; i < greeting.length; i++) {
  let result: string[] = [];
  if(greeting[i] === " "){
    result.push(greeting[i])
    console.log(result[i]);
    
  }
}

console.log([...greeting]);
