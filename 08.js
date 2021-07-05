/* 8. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba 
un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 
moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

function moveZeros(arr) {
    let nonZeroArray = arr.filter(x => x !== 0);
    let zeroArray = arr.filter(x => x === 0);
    return nonZeroArray.concat(zeroArray);

    //Usando loops:
    // let newArray = [];
    // nonZeroArray.forEach(e => {
    //     newArray.push(e);
    // });
    // zeroArray.forEach(e => {
    //     newArray.push(e);
    // });
    // return newArray;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));