
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    if(req.url === '/favicon.ico') return
    console.log(1111111)
    next()

    console.log(333333333)
    res.send('hello world')
})

app.use((req,res,next)=>{
    console.log(222222222)
})

app.listen(3001)