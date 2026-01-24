
var c = 10;
function multiplication(a,b){
    let result = a * b;
    console.log(result)
}
console.log("this is coming from module 2");
module.exports = {
    multiplication,
   c
}
