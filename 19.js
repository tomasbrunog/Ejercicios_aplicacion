/* 19. Palindromo
Deben crear una función llamada “palíndromo” que indique si una 
palabra es palíndroma o no, debe retornar true en el caso que sea, 
y false en el caso que no. */

function palindromo(palabra) {
    palabra = palabra.toLowerCase();
    for (let i = 0; i < Math.floor(palabra.length / 2); i++) {
        const letraIzq = palabra[i];
        const letraDer = palabra[palabra.length - i - 1];
        if (letraDer !== letraIzq) return false;
    }
    return true;
}


// Ejemplo: 

console.log(palindromo('anilina')) // debe retornar true
console.log(palindromo('ana')) // debe retornar true
console.log(palindromo('Enrique')) // debe retornar false

// Numero par de caracteres:

console.log(palindromo('asddsa')) // debe retornar true
console.log(palindromo('asdfgh')) // debe retornar false

// Palabra con mayuscula inicial:
console.log(palindromo('Anilina')) // debe retornar true