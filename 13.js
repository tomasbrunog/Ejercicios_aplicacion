/* 13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como 
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` 
que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */

function arregloDeObjetos(n) {
    let temp = [];
    for (let i = 1; i <= n; i++) {
        temp.push({valor: i});        
    }
    return temp;
}

console.log(arregloDeObjetos(5));
console.log(arregloDeObjetos(3));