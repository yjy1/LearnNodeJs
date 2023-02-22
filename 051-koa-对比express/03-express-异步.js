
const express = require('express')

const app = express()

app.use(async(req,res,next)=>{
    if(req.url === '/favicon.ico') return
    console.log(1111111)
    await next()

    // console.log(44444444,res.token)
    // res.send('hello world')
})

app.use(async(req,res,next)=>{
    console.log(222222222)

    // 异步
    await delay(1000)
    res.token = 'ewruoiwer78687342'
    console.log(33333333)

    console.log(44444444,res.token)
    res.send('hello world')
})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout( resolve, time);
    })
}

app.listen(3001)