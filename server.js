const http = require("node:http")

const server = http.createServer((req,res) => {
    
    if(req.url === '/getSecretData'){
        res.end('There is no secret data');
    }
    res.end("hello world")
})

server.listen(1234);