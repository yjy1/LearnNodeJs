
const Koa = require('koa')
const app = new Koa()
const router = require('./routes') 
const static = require('koa-static')
const path = require('path')

app.use(static(path.join(__dirname,'public')))
// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)