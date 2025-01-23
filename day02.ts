
//soal 1
let number1: number = 9;

for(let i = 1; i <= 10; i++){
  console.log(`${number1} x ${i}`)
}

//soal 2
let word: string = "madam";
let isPalindrome;
let wordReversed: string = word.split("").reverse().join("");

if(word === wordReversed){
  isPalindrome = "huruf palindrome";
} else{
  isPalindrome = "bukan palindrome";
};

console.log(isPalindrome);

//soal 3
let centimeter: number = 100000;
let toKilometer: number = centimeter/100000;

console.log(`${toKilometer} Km`);

//soal 4
let number2: number = 1000;
let toCurrency = number2.toLocaleString("id-ID",{
    style: "currency",
    currency: "IDR"
})

console.log(toCurrency);

//soal 5
let string: string = "Hello World";
let searchString: string = "ell";

let replace: string = string.replace(searchString, "");

console.log(replace);

//soal 6
let word1 = "hello world";
let kapital = 
    word1.slice(0,1).toUpperCase() + 
    word1.slice(1,6) + 
    word1.slice(6, 7).toUpperCase() + 
    word1.slice(7);

console.log(kapital);

//soal 7 (On Progress)

//soal 8 
let num1: number= 42;
let num2: number = 27;

if(num1 > num2){
  console.log("num1 lebih besar dari num2")
} else if(num1 < num2){
  console.log("num2 lebih besar dari num1")
} else{
  console.log("kedua angka sama")
}


//soal 9 (On Progress)

//soal 10
let inputType = "hello";
let checkType;

if(typeof inputType === "string"){
  checkType = 1;
} else if(typeof inputType === "number"){
  checkType = 2;
} else{
  checkType = 3;
};

console.log(checkType);

//soal 11
let word2 = "An apple a day keeps the doctor away";

let changeWord = word2.replace(/a/gi, "*");

console.log(changeWord)