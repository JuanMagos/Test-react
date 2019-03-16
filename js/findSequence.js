// 1 - Encontrar la secuencia más larga de números consecutivos en 2 arrays de entrada

// Ejemplo: Input: [1, 2, 5, 3, 7, 8, 9] y [6, 8, 9, 3, 4, 5] Output: [3, 4, 5] o [7, 8, 9]

const a = [1, 2, 5, 3, 7, 8, 9];
const b = [6, 8, 9, 3, 4, 5];
let sequenceA = [];
let sequenceB = [];


function findSequence(n, c){
  let sequence = [];
  let compareNumber = 1;

  for(i=1; i<=n.length+1; i++){
    let singleNumber = n[i];
    let lastItemSequence = sequence[sequence.length -1]
    if(compareNumber == singleNumber-1){

        if(compareNumber == lastItemSequence){
          sequence.push(singleNumber)
        }else{
          sequence.push(compareNumber)
          sequence.push(singleNumber)
        }
    }else{
      if(sequence != ""){
        if(c == 1){
          sequenceA.push(sequence)
        }
        if(c == 2){
          sequenceB.push(sequence)
        }
      }
      sequence = []
    }
    compareNumber = singleNumber
  }
}

function start(){
  findSequence(a,  1)
  findSequence(b, 2)
}

function maxLengthSeq(x, y){
  let lastItemX = []
  let lastItemY = []
  for(item in x){
      if(x[item].length > lastItemX.length){
          lastItemX = x[item]
      }
  }
  for(item in y){
      if(y[item].length > lastItemY.length){
          lastItemY = y[item]
      }
  }
  if(lastItemX.length > lastItemY.length){
    console.log(lastItemX)
  }else if(lastItemX.length == lastItemY.length ){
    console.log(lastItemX)
    console.log(lastItemY)
  }else{
    console.log(lastItemY)
  }
}

start()
maxLengthSeq(sequenceA, sequenceB)