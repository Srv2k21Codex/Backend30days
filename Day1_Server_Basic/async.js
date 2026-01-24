const fs = require("fs")
const https = require("https")
const crypto = require("crypto")

var a = 8324421;
var b = 23523223;

console.log("hello world")

fs.readFileSync("./file.txt","utf-8");
console.log("sync reading of file is successful");

crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("first key is generated")

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,res)=>{
    console.log("first key is generated");
})

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("file data :",data);
})

setTimeout(()=>{
    console.log("timer is set for 5 sec")
},5000)

function multiplication(x,y){
    const result = x * y;
    return result;
}

var c = multiplication (a,b);
console.log("result of multiplication is :",c)

