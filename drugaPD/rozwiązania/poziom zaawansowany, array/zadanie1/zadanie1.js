var twit = "#duzo#pracy#domowej#!#!";

function findHashtage (a) {
    var hashtages = twit.split('#');
    const uniqueArr = [...new Set(hashtages)];
    for (let i in uniqueArr) {
        console.log(uniqueArr[i]);
    }
}

findHashtage(twit);