
const Koa = require('koa')
const app = new Koa()
const router = require('./routes') 
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

app.use(bodyParser()) // 获取post参数
app.use(static(path.join(__dirname,'public'))) //静态资源

// 配置模板引擎
app.use(views(path.join(__dirname,'views'),{extension:'ejs'}))

// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3001)