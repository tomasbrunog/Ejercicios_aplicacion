// 3. Sumatoria
// Debés crear una función llamada `sumattion` que reciba un número como 
// parámetro y que devuelva la sumatoria de todos sus números anteriores, 
// incluso ese mismo.
//
// Ejemplo: 
// sumattion(3) debe retornar 6 porque hace (1 +2 +3)
// sumattion(8) debe retornar 36

function sumattion(n) {
    if (n === 1) return n;
    let acumulador = n;

    n -= 1;

    return acumulador + sumattion(n);
}

console.log(sumattion(3));
console.log(sumattion(8));