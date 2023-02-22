
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 增加
router.post('/user',(ctx,next)=>{
    ctx.body = {
        ok:1,
        info:"add user success"
    }
}) 
.get('/user',(ctx,next)=>{
    ctx.body = ['aaa','bbb','ccc']
})
.put('/user/:id',(ctx,next)=>{
    console.log(ctx.params)
    ctx.body = {
        ok:1,
        info:"put user success"
    }
})
// delete
.del('/user/:id',(ctx,next)=>{
    ctx.body = {
        ok:1,
        info:"delete user success"
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3002)