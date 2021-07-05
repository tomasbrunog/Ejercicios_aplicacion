/* 14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una 
palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad 
llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}] */

function arregloDeObjetos(n, palabra) {
    let temp = [];
    for (let i = 1; i <= n; i++) {
        temp.push({[palabra]: i});
    }
    return temp;
}

console.log(arregloDeObjetos(5, "hola"));
console.log(arregloDeObjetos(3, "chau"));