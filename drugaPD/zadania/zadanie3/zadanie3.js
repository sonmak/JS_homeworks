var arr1 = [ 1, 2, 3];
var arr2 = [ 4, 5, 6];
var arr3 = [ 7, 8, 9];

function f1(a, b, c) {
    var arrMain = [];
    for ( let i = 0; i < a.length; i++) {
        arrMain[i] = arr1[i];
    }
    for ( let i = a.length; i < a.length + b.length; i++) {
        arrMain[i] = arr2[i - a.length];
    }
    for ( let i = a.length+b.length; i < a.length + b.length +c.length; i++) {
        arrMain[i] = arr3[i - a.length - b.length];
    }
    for (let i in arrMain) {
        console.log(arrMain[i]);
    }
   
}

f1(arr1, arr2, arr3);