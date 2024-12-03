// const http = require('http')
// const fs = require('fs')
// const { error } = require('console')


// fs.writeFileSync("newtext.txt","dsdsds file")
// const server = http.createServer((req,res)=>{

//    fs.readFile("newtext.txt",'utf-8',(error,data)=>{
//     res.write(data)
//     res.end()
//    })
// })
// server.listen(4000,()=>{
//     console.log('server runned',3000)
// })

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log("hallow")
    res.send('halow')
})

app.listen(2000,()=>{
    console.log("server runned");
    
})