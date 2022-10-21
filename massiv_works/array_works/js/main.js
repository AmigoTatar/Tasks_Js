
// 1Работа с массивом
function pin(code){
code = [1,2,3]
console.log(code.length);

if(code.length === 4){return true}
else if(code.length === 5 ){return true}
else if(code.length === 6 ){return true}
else{return false}
}

console.log(pin())
//2 сокращенная запись масиив  занчни от 4 до 6 
function pin2(code2){
    code2 = [1,2,3,4,5,6,7]
    console.log(code2.length);
    if(code2.length >=4 && code2.length <= 6){return true}
    else{return false}
    }
    console.log(pin2())

//3 если есть отрицательные числа то убираем их из массива
function pin3(code3){
    code3 = [1,2,-3,-4,5,-6];
    // фильтр отрицательных чисел
    let positiveArr = code3.filter(function(number) {
        return number > 0;
      });
    console.log(positiveArr.length);
    if(positiveArr.length >=4 && positiveArr.length <= 6){return true}
    else{return false}
    }
    console.log(pin3())

    //4 убираем из массиива строки и оставляем только цифры

    function pin4(code4){
  code4 = [20, 33, "Человек","Человек","Человек", 3,4,5,6,-7];
let barr = code4;
for (var i = code4.length - 1; i >= 0; i--) {
  if (typeof code4[i] !== "number")
    code4.splice(i, 1);
}
if(code4.length >=4 && code4.length <= 6){return true}
    else{return false}
    }
    console.log(pin4())

//5 совмещаем оба метода все работатает !

function pin5(code5){
    code5 = [1,2,-3,-4,5,-6, 'd'];
    let barr = code5;
    for (var i = code5.length - 1; i >= 0; i--) {
     if (typeof code5[i] !== "number")
     code5.splice(i, 1);}
     let positiveArr = code5.filter(function(number) {
        return number > 0;
      });
    console.log(positiveArr.length);
    if(positiveArr.length >=4 && positiveArr.length <= 6){return true}
    else{return false}
    }
    console.log(pin5())
