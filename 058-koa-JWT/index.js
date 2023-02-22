
const Koa = require('koa')
const app = new Koa()
const router = require('./routes')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const session = require('koa-session-minimal')
const JWT = require('./util/JWT')

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
 
//token 判断拦截
app.use(async (ctx,next)=>{
    if(ctx.url.includes('login')){
        await next()
        return
    }

    const token = ctx.headers['authorization']?.split(' ')[1]
    if(token){
        const payload = JWT.verify(token)
        if(payload){
            // 重新计算过期时间
            const newToken = JWT.generate({  
                id: '1111',
                username: 'ycj'
            }, '10s')
            ctx.set('Authorization',newToken)
            await next()
        }else{
            // 401
            ctx.status = 401
            ctx.body = { errCode: -1, errInfo: 'token过期' }
        }
    }else{
        await next()
    }
})

// 应用级
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)