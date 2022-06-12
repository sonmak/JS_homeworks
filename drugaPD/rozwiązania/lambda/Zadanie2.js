/*
   Zmień podane wyrażenie lambda na zwykłe funkcję
*/

////////////////// FUNCTION NR 1 //////////////////

const add = (a, b) => a + b;

function add2(a, b) {
  return a + b;
}

////////////////// FUNCTION NR 2 //////////////////

const sayHello = () => {
  let d = "World";
  return "Hello" + d + "!";
};

function sayHello2() {
  let d = "World";
  return "Hello" + d + "!";
}

////////////////// FUNCTION NR 3 //////////////////

const isBigger = (a, b) => (a > b ? true : false);

function isBigger2(a, b) {
  return a > b ? true : false;
}

////////////////// FUNCTION NR 4 //////////////////

const isSmaller = (a, b) => {
  let c = false;
  if (a < b) {
    c = true;
  } else {
    c = false;
  }
  return c;
};
function isSmaller2(a, b) {
  let c = false;
  if (a < b) {
    c = true;
  } else {
    c = false;
  }
  return c;
}

////////////////// FUNCTION NR 5 //////////////////

const isSumOdd = (d, k) => {
  return (d + k) % 2 == 1 ? true : false; //również zapisz tą funkcję w postaci if.. else..
};

function isSumOdd2 (d, k) {
  return (d + k) % 2 == 1 ? true : false;
}
////////////////// FUNCTION NR 6 //////////////////

const one = () => 1;

function one1 () {
  return 1;
}
