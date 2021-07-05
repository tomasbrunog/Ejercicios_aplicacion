/* 15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos 
como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, 
teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

function oneProperty(arr, str) {
    let temp = [];

    arr.reduce((acc, x) => {
        acc.push({[str]: x[str]})
        return acc;
    }, temp);
    
    return temp;
}

var arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ];
console.log(oneProperty(arreglo, "edad")); //debe retornar [ { edad: 20 }, { edad: 22 } ]
console.log(oneProperty(arreglo, "name")); //debe retornar [ { name: “lucas”}, { name: “santi” } ] */