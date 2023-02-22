const Router = require('koa-router')
const router = new Router()

// 增加
router.get('/', async (ctx, next) => {
    // 获取cookie
    console.log(ctx.cookies.get('name'))
    // 设置cookie
    ctx.cookies.set('location','guangzhou')
    await ctx.render('login', { username: 'ycj' })  
})
module.exports = router