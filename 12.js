/* 12. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo 
de números desordenados  y devuelva la suma entre los dos números más chicos.

Ejemplo: 
minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
minSum([1, 10, 43, 900, 20, 8]) debe retornar 9 */

function minSum(arr) {
    let temp = arr.sort((a, b) => a - b);
    return temp[0] + temp[1];
}

console.log(minSum([7, 6, 5, 4, 3, 2, 1]));
console.log(minSum([1, 10, 43, 900, 20, 8]));