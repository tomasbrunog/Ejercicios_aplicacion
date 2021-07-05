/* 7. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro 
y devuelva sus caracteres del medio.

Ejemplo: 
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s” */

function middleCharacter(str) {
    let middleIndex = Math.floor(str.length / 2);
    if (str.length % 2 !== 0) return str.slice(middleIndex, middleIndex + 1);
    return str.slice(middleIndex - 1, middleIndex + 1);
}

console.log(middleCharacter("plataforma5"));
console.log(middleCharacter("hola"));
console.log(middleCharacter("cosas"));