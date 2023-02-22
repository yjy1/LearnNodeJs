const Router = require('koa-router')
const router = new Router()


// 增加
router.post('/',(ctx,next)=>{
    ctx.body = {
        ok:1,
        info:"add user success"
    }
}) 
.get('/',(ctx,next)=>{
    ctx.body = ['aaa','bbb','ccc']
})
.put('/:id',(ctx,next)=>{
    console.log(ctx.params)
    ctx.body = {
        ok:1,
        info:"put user success"
    }
})
// delete
.del('/:id',(ctx,next)=>{
    ctx.body = {
        ok:1,
        info:"delete user success"
    }
})

module.exports = router