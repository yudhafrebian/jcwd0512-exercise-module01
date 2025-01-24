// soal dari kak abdi
let resultA = "";
let products = ["Indomie", "Golda"];

for (let index = 0; index < 2; index++){
  let listProduct = products[index];
  resultA += `${index + 1}. ${listProduct} `
}
console.log(resultA);