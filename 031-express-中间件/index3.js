const express = require('express')
const app = express()
const HomeRouter = require('./router3/HomeRouter')
const LoginRouter = require('./router3/LoginRouter')
// 应用级别
app.use(function(req,res,next){
    console.log('验证token')
    next()
})

// 应用级别
app.use('/home',HomeRouter)
app.use('/login',LoginRouter)

// 错误中间件 匹配不到路由时执行
app.use((req,res)=>{
    res.status(404).send('丢了')
})
app.listen(3001, () => {
    console.log('server start')
})