var a = [1, 2, 5, 3, 7, 8, 9];
var b = [6, 8, 9, 3, 4, 5];
var sequenceA = [];
var sequenceB = [];


function findSequence(a, b){
  var sequence = [];
  var compareNumber = 1;

  for(i=1; i<=a.length+1; i++){
    var singleNumber = a[i];
    if(compareNumber == singleNumber-1){
        if(compareNumber == sequence[sequence.length -1]){
          sequence.push(singleNumber)
        }else{
          sequence.push(compareNumber)
          sequence.push(singleNumber)
        }
    }
    compareNumber = singleNumber
  }
  console.log(sequence)
}
//  var lastNumber = 0;
//  var setArray = [];
//  for(number in sequence){
//    if(sequence[number] != lastNumber){
//      setArray.push(sequence[number])
//    }
//    lastNumber = sequence[number];
//  }
//    console.log(setArray)

findSequence(a, b)