let a = 676;
let b = "srtIng";
let c = "DtoTd";
let d = "Dt oTd";

function isPalidrom(m){
    m = m.toString().replace(/\s+/g, '');
    return m.toLowerCase() == m.toLowerCase().split('').reverse().join('');

}

console.log("The 676 is a palidrom: " +isPalidrom(a));
console.log("The strIng is a palidrom: " +isPalidrom(b));
console.log("The DtoTd is a palidrom: " +isPalidrom(c));
console.log("The Dt oTd is a palidrom: " +isPalidrom(d));
