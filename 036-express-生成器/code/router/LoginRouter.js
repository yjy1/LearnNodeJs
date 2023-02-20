const express = require('express')

const LoginRouter = express.Router()

// 路由级别-响应前端的get请求
LoginRouter.get('/',(req,res)=>{
    // 
    // console.log(req.query)
    // res.send('<b>sdfa</b>') // send 片段&json
    // res.json([1,2,3]) //json
    // 渲染模板后返回给前端
    res.render('login', { error: '' }) // 找views文件夹下的login.ejs文件
})
 
LoginRouter.post('/',(req,res)=>{
    if(req.body.username === 'ycj' && req.body.password === '123'){
        console.log('登录成功')
        //res.send('成功')
        // 重定向到home
        res.redirect('/home')
    }else{
        console.log('登录失败')
        //res.send('失败')
        res.render('login', { error: "用户名或密码错误" })
    }
})
module.exports = LoginRouter