/*
   Zmień podane zwykłe funkcję na wyrażenie lambda
*/

////////////////// FUNCTION NR 1 //////////////////

// function addFive(a){
//     return a + 5;
// }

var f1 = a => a + 5;
console.log(f1(3));

////////////////// FUNCTION NR 2 //////////////////

// const factorial = function(a){
//     let result = 1;
//     for (let i=1; i<=a; i++){
//         result = result*i;
//     }
//     return result;
// }

var f2 = a => {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result = result * i;
  }
  return result;
};
console.log(f2(3));

////////////////// FUNCTION NR 3 //////////////////

// const Palindrome = function (data){
//     let result = 0;
//     while(data>0){
//        result = result*10 + data % 10;
//        data = Math.floor(data / 10);
//     }
//     return result;
// }

var f3 = data => {
  let result = 0;
  while (data > 0) {
    result = result * 10 + (data % 10);
    data = Math.floor(data / 10);
  }
  return result;
};
console.log(f3(34367));

////////////////// FUNCTION NR 4 //////////////////

// function sayHi(times){
//   for (let i=0; i<times; i++){
//       console.log("Hi!");
//   }
// }

var f4 = times => {
  for (let i = 0; i < times; i++) {
    console.log("Hi!");
  }
};
console.log(f4(3));

////////////////// FUNCTION NR 5 //////////////////

// function ShowMessage(firstName){
//     function SayHello() {
//         console.log("Hello " + firstName);
//     }
//     return SayHello();
// }

var f5 = firstName => {
  function SayHello() {
    console.log("Hello " + firstName);
  }
  return SayHello();
};
console.log(f5("Sonya"));

////////////////// FUNCTION NR 6 //////////////////

// const showPrimes = function(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         continue nextPrime;
//       }
//     }
//     console.log(i);
//   }
// };

var f6 = n => {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
    }
    console.log(i);
  }
};
console.log(f6(2));
