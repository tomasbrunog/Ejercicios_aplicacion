/* 20. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, 
y debera retornar un nuevo arreglo con los elementos rotados la cantidad de 
veces como sea el número a la derecha. */

function rotar(arr, n) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        let newPosition = i + n;
        if (newPosition > arr.length - 1) newPosition -= arr.length;
        newArray[newPosition] = e;        
    }
    return newArray;
}

// Ejemplo: 
console.log(rotar([1, 2, 3, 4, 5], 2)) // debe retornar [4, 5, 1, 2, 3]
console.log(rotar([1, 2, 3, 4, 5], 3)) // debe retornar [3, 4, 5, 1, 2]