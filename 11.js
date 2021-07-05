/* 11. Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento 
de manera lógica al igual que lo hiciste en el ejercicio número 5: 
1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50] */

function join(arr, separator) {
    let str = '';
    arr.forEach(e => {
        str += e + separator;
    });
    str = str.slice(0, str.length - 1);
    return str;
}

console.log(join([1,2,3,4,5], ' '));

function pop(arr) {
    let temp = [];
    let poppedElement = arr[arr.length - 1]

    for (let i = 0; i < arr.length - 1; i++) {
        const e = arr[i];
        temp.push(e);
    }
    arr = temp;
    
    return poppedElement;
}

console.log(pop([1,5,3,4,5]));


function filter(arr, fn) {
    let temp = [];
    arr.forEach(x => {
        if (fn(x)) temp.push(x);
    })
    return temp;
}

console.log(filter([1,2,3,4,5], (e)=>{return e%2===0}));

function map(arr, fn) {
    let temp = [];
    arr.forEach(e => {
        temp.push(fn(e));
    });
    return temp;
}

console.log(map([1,2,3,4,5], (e)=>{return e * 10}));