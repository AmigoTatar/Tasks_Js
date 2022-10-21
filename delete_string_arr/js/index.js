//Удаление каждого второго элемента в массиве
 let arrayM = ['hello',2,'friends','world','aue','sveta',7,8,9,10];
//let arrayM=  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i = 0; i < arrayM.length; i++) {
    arrayM.splice(i+1,1);
}
console.log(arrayM);
// codeweaprs

function removeEveryOther(arr){
     arr=[1,2,3,4,5,6,7,8,9,10]
    for(let i = 0; i < arr.length; i++) {
        arr.splice(i+1,1);
    }
  return arr 
  }
  removeEveryOther();
  console.log(removeEveryOther());

 