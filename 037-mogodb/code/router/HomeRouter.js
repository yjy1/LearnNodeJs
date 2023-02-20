const express = require('express')

const HomeRouter = express.Router()

// 路由级别
HomeRouter.get('/',(req,res)=>{
    // res.send('home')
    var list = ['aaa','bbb','ccc']
    var myHtml = "<b>我是加粗</b>"
    res.render('home', { list: list, myHtml: myHtml })
})
 

module.exports = HomeRouter