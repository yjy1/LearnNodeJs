
const Router = require('koa-router')
const userRouter = require('./user')
const listRouter = require('./list')
const homeRouter = require('./home')
const loginRouter = require('./login')
const router = new Router()

// 统一加前缀
// router.prefix('/api')

// 先注册成路由级的组件
router.use('/user',userRouter.routes(),userRouter.allowedMethods())
router.use('/list',listRouter.routes(),listRouter.allowedMethods())
router.use('/home',homeRouter.routes(),homeRouter.allowedMethods())
router.use('/login',loginRouter.routes(),loginRouter.allowedMethods())

router.redirect('/','/home') //重定向
 
module.exports = router