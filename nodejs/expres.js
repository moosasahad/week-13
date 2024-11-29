const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("hi")
})
const port = 4
app.listen(port,(err)=>{
    console.log('server runned',port)
})