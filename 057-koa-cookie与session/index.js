
const Koa = require('koa')
const app = new Koa()
const router = require('./routes')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const session = require('koa-session-minimal')

app.use(bodyParser()) // 获取post参数
app.use(static(path.join(__dirname, 'public'))) //静态资源

// 配置模板引擎
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }))

// session配置
app.use(session({
    key: 'ycjSessionId',
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

// session 判断拦截
app.use(async (ctx, next) => {
    if (ctx.url.includes('login')) {
        await next()
        return 
    }

    if(ctx.session.user){
        ctx.session.date = Date.now()
        await next()
    }else{
        ctx.redirect('/login')
    }
})


// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)