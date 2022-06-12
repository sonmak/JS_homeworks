let liczba = 9;
let check=true;



function isPrime(n) {
    for ( let i = 2; i < liczba; i++) {
        if ( liczba!=2 && i!= liczba && liczba%i==0 ) {
            check = false;
            break; 
        } 
    }
    return check;
}



if (isPrime(liczba)==true) {
    console.log("The variable is prime");
} else {
    console.log("The variable isn't  prime");
}

