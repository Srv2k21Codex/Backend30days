
const {multiplication,sum} = require("./calculate")
var a = 10;
var b = 20;
const data = require("./calculate/data.json")
console.log(JSON.stringify(data))
multiplication(a,b);
sum(a,b);
//here what i have learnt this is javascript and nodejs embeds v8 engine to make javascript code machine understandable and to
//run this javascript code we need nodejs runtime enviornment.how to run by using "node app.js"