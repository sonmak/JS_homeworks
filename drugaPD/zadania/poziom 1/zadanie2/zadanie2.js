function subtraction (a,b) {
    return a-b;
}

console.log(subtraction(2,3));

function parity(a) {
    if (a%2===0) return 0;
    else return 1;
}

console.log(parity(4));

function printParity(a) {
    if (a==1) console.log("Liczba jest nieparzysta.");
    else if (a==0) console.log("Liczba jest parzysta.");
    else console.log("ERROR");
}

printParity(parity(4));