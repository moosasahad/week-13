const http  = require('http')

const port = 1000

const server = http.createServer((req,res)=>{
    res.end("Hello, World! Welcome to my first Node.js server!")
})
server.listen(port,()=>{
    console.log("server",port)
    
})