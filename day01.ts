//soal 1 (dari kak brian)
let angka1: number = 20;
let angka2: number = 10;

if (angka1 > angka2){
  console.log("angka1 lebih besar dari angka2")
} else if (angka1 < angka2){
  console.log("angka1 lebih kecil dari angka2")
} else {
  console.log("kedua angka sama")
}

//soal 2 (dari kak brian)
let umur: number = 18;

if (umur > 19){
  console.log("Punya KTP");
} else if (umur >= 17 && umur < 19){
  console.log("Bisa membuat KTP");
} else {
  console.log("Tidak bisa membuat KTP")
}


// soal Excercise
//soal 1 
let numberA: number = 24;
let checkOddEven;

if (numberA % 2 === 0){
  checkOddEven = "The Number Is Even";
} else {
  checkOddEven = "The Number Is Odd";
};

console.log(checkOddEven);

//soal 2
const number: number = 7;
let checkPrime: boolean = true;

if (number < 2){
  checkPrime = false;
};

for (let i = 2; i <= Math.sqrt(number); i++){
  if(number % i === 0){
    checkPrime = false;
    break;
  }
}

if(checkPrime){
  console.log("Number is a Prime");
}else {
  console.log("Number is not a Prime")
}


//soal 3 
let sum: number = 0;

for(let i = 0; i <= 5; i++){
  sum += i;
};

console.log(sum);

//soal 4 
let factorial: number = 1;

for(let i = 5 ; i >= 1; i--){
  factorial *= i;
};

console.log(factorial)

//soal 5
let fibonanci: number[] = [0,1];

for(let i = 2; i <16; i++){
  fibonanci[i] = fibonanci[i - 1] + fibonanci[i - 2];
};

console.log(fibonanci)