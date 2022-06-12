let year = 2002;
let month = 7;
let day = 4;


function jazda( a, b, c ) {
    if (2020-c > 18) {
        console.log("No to jazda!");
    } else if (a < 5 && b <= 7 && c===2002) {
        console.log("No to jazda!");
    } else {
        console.log("No to nie jazda:(");
    }
}

jazda (day, month, year);