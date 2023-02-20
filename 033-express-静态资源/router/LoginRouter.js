const express = require('express')

const LoginRouter = express.Router()

// 路由级别-响应前端的get请求
LoginRouter.get('/',(req,res)=>{
    // 
    console.log(req.query)
    res.send('login-success')
})

// 路由级别-响应前端的post请求
LoginRouter.post('/',(req,res)=>{
    console.log(req.body) // 必须配置中间件
    const { username, password } = req.body
    if (username === 'ycj' && password === '123')
        res.send({ ok: 1 })
    else
        res.send({ ok: 0 })
})

// 路由级别-响应前端的put,delete请求


LoginRouter.get('/aaa',(req,res)=>{
    res.send('login-aaa')
})

module.exports = LoginRouter