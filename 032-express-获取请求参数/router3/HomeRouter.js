const express = require('express')

const HomeRouter = express.Router()

// 路由级别
HomeRouter.get('/',(req,res)=>{
    res.send('home')
})

HomeRouter.get('/swiper',(req,res)=>{
    res.send('home-swiper')
})
 
HomeRouter.get('/slide',(req,res)=>{
    res.send('home-slide')
})
 
 

module.exports = HomeRouter