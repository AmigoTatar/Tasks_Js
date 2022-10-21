

let min = function(list){
    list= [1,2,4,-4,-66,-5]
  return  Math.min.apply(null, list)  
    
}
 console.log(min());
let max = function(list){
    list= [1,2,4,-4,-66,-5]
    return Math.max.apply(null, list)
}
console.log(max());


//работа фкнкций min max
let nums=[2,-2,3,4,2,165,4,2]

console.log(Math.min.apply(null, nums));
console.log(Math.max.apply(null, nums));