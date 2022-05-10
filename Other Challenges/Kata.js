"use strict";

// Holiday VI - Shark Pontoon
const shark = (
  pontoonDistance,
  sharkDistance,
  youSpeed,
  sharkSpeed,
  dolphin
) => {
  let youTime = pontoonDistance / youSpeed;
  let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);

  return sharkTime < youTime ? "Shark Bait!" : "Alive!";
};

// Vowel Count
function getCount(str) {
  let vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}

// Descending order
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

// List Filtering
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

// Sum of positives
function positiveSum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// Xs and Os
function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") sum++;
    if (str[i].toLowerCase() == "o") sum--;
  }
  return sum == 0;
}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

// Credit Card Mask
function maskify(cc) {
  return "#".repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
