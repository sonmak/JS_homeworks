var samochodny = [1, 2, 3, 4]

function f1 (a) {
    for ( let i in samochodny) {
        console.log ( i+")"+ samochodny[i]);
    }
}

f1(samochodny);