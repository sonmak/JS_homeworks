var arr1 = [ 1, 2, 3];
var arr2 = [ 4, 5, 6];
var arr3 = [ 7, 8, 9];

function f1(a, b, c) {
    var arrMain = [a, b, c];
    for ( let i in arrMain) {
        for ( let g = 0; g < 3; g++) {
            console.log(arrMain[i][g]);
        } 
    }
}

f1(arr1, arr2, arr3);