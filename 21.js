/* 21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un 
string y retorne cuantos consecutivos similares hay en un string.  */

function consecutivosSimilares(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1]
        if (current === next) count++;
    }
    return count;
}


// Ejemplo: 
console.log(consecutivosSimilares('AAAA')) // debe retornar 3
console.log(consecutivosSimilares('BBBBB')) // debe retornar 4
console.log(consecutivosSimilares('ABABABAB')) // debe retornar 0
console.log(consecutivosSimilares('BABABA')) // debe retornar 0
console.log(consecutivosSimilares('AAABBB')) // debe retornar 4