// 18. {value: key} kelue: vay

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. 
// Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo 
// de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. 
// Deberá tener todas las propiedades que sean un string puestas como key y el 
// value deberá ser el key anterior.

//     Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

function reverseKeys(obj) {
    if (typeof obj !== 'object') {
        return `error, input should be an object. Received: ${typeof obj}`
    } else if (obj instanceof Array) {
        return "error, input should be an object. Received: array"
    };

    let keys = Object.keys(obj);
    let newObj = {};

    keys.forEach(e => {
        const value = obj[e];
        if (typeof value === 'string') {
            newObj[value] = e;
        } else {
            newObj[e] = value;
        }
    });
    return newObj;

    //Usando reduce
    //
    // return keys.reduce((acc, x) => {
    //     let value = obj[x];
    //     if (typeof value === 'string') {
    //         acc[value] = x;
    //         return acc;
    //     }
    //     acc[x] = value;
    //     return acc;
    // }, newObj);

}



var prueba = {
    nombre: 'santi',
    edad: 22,
    nacionalidad: 'de otro planeta',
    documento: 44444444    
}

console.log(reverseKeys(prueba));
console.log(reverseKeys(344));
console.log(reverseKeys([]));
console.log(reverseKeys('hola'));
// debería devolver:
// {
// santi: ‘nombre’, 
// edad: 22,
// ‘’de otro planeta”: nacionalidad,
//  documento: 44444444
// }
