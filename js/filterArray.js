// 2 - Filtrar del array los elementos repetidos.

// Ejemplo: Input: [1, 3, 2, 3, 4, 5, 6, h, s, c, h, 3, 6] output: [1, 3, 2, 4, 5 ,6, h, s, c]
const items = ["1", "3", "2", "3", "4", "5", "6", "h", "s", "c", "h", "3", "6"];

let x = (items) => items.filter((v,i) => items.indexOf(v) === i)
console.log(x(items)); 
