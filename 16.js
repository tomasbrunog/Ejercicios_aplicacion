/* 16. Guerra de palabras
     Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,
    o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como 
parámetro y devuelva la ganadora según la suma del valor de sus letras 
(dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship” */

function warWords(str1, str2) {
    const str1Score = getScore(str1);
    const str2Score = getScore(str2);
    return str1Score > str2Score ? str1 : str2;
}

// Con loop
//
function getScore(str) {
    let score = 0;
    for (let i = 0; i < str.length; i++) {
        score += abc[str[i]];        
    }
    return score;
}

// Con reduce()
//
// function getScore(str) {
//     let charArray = str.split('');
//     return charArray.reduce((acc, x) => {
//         acc += abc[x];
//         return acc;
//     }, 0)
// }

var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

console.log(warWords('hola', 'chau')); // debe retornar  “hola” (36 > 33)
console.log(warWords('love', 'friendship')); // debe retornar “friendship” 