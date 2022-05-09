"use strict";
/*
let drinks = [
  { nameof: "lemonade", price: 50 },
  { nameof: "lime", price: 10 },
  { nameof: "apelsinisok", price: 24 },
  { nameof: "VigiKampot", price: 15000000000 },
];

function sortDrinkByPrice(drinks) {
  // let sorteddrinks = drinks;
  let placeholder;
  for (let i = 0; i <= drinks.length; i++) {
    for (let j = 0; j <= drinks.length - 1; j++) {
      if (drinks[j].price > drinks[j + 1].price) {
        placeholder = drinks;
        drinks[j] = drinks[j + 1];
        drinks[j + 1] = placeholder;
      }
    }
  }
  return;
}
console.log(sortDrinkByPrice(drinks));

// price[i] > price[i + 1] ? placeholder = price[i]; price[i] = price[i +1]; price[i +1] = placeholder;
//    3     >        2    true        ph = 3             i = 2;  2        ;     i+1 = 3
*/
/*
const temp = [17, 21, 23, 50, 15, -6, 23, -18, 80];

function printforecast(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`${temp[i]}C in ${[i + 1]} days`);
  }
  return;
}
printforecast(temp);
*/

/*
let drinks = [
  { nameof: "lemonade", price: 50 },
  { nameof: "lime", price: 10 },
  { nameof: "apelsinisok", price: 24 },
  { nameof: "VigiKampot", price: 15000000000 },
];

function sortDrinkByPrice(drinks) {
  // let sorteddrinks = drinks;\
  let len = drinks.length;
  let placeholder;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (drinks[j].price > drinks[j + 1].price) {
        placeholder = drinks[j];
        drinks[j] = drinks[j + 1];
        drinks[j + 1] = placeholder;
      }
    }
  }
  return drinks;
}
let arr = sortDrinkByPrice(drinks);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(element => {
  console.log(sortDrinkByPrice(element));
});
*/