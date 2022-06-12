let liczba = 3;
let potega = 4;
let liczbaBefore = liczba;
let liczbaFactorial = 1;

//liczba = Math.pow(liczba, potega);

for (let i = 1; i < potega; i++) {
    liczba*=liczbaBefore;
}

console.log("Potęga "+potega+" liczby "+liczbaBefore+" to "+liczba);


if (liczbaBefore < 0) {
    console.log("Factorial of negative number is impossible")
}
else if (liczbaBefore == 0) {
    console.log( "Silnia liczby 1")
}
else  {
    for (let i = 1; i <= liczbaBefore; i++) {
        liczbaFactorial*=i;
    }
    console.log("Silnia liczby "+liczbaBefore+ " to "+liczbaFactorial);
}


