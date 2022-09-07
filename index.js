// code your solution here
function saturdayFun(fun="roller-skate") {
    return `This Saturday, I want to ${fun}!`
}
function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}
// let wrapAdjective = function( start="you are") {
//      let highlight = "*"
//      let spec = "a hard worker"
//     return `${start}${highlight}${spec}${highlight}`
// }

let wrapAdjective = function(highlight="*") {
    return function(spec="special") {
      return `You are ${highlight}${spec}${highlight}!`
    }
  }