/* 6. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el 
comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

function split(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        array.push(e);
    }
    return array;
}

console.log(split("hola"));
console.log(split("chau"));