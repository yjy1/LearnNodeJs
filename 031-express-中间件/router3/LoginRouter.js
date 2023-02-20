const express = require('express')

const LoginRouter = express.Router()

// 路由级别
LoginRouter.get('/',(req,res)=>{
    res.send('login')
})
LoginRouter.get('/aaa',(req,res)=>{
    res.send('login-aaa')
})

module.exports = LoginRouter