const Router = require('koa-router')
const router = new Router()

// 增加
router.get('/', async (ctx, next) => {
    
    await ctx.render('upload', { username: 'ycj' })  
})
module.exports = router