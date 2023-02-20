const express = require('express')
const IndexRouter = require('./router2/IndexRouter')
const app = express()

// 应用级别
app.use(function(req,res,next){
    console.log('验证token')
    next()
})

// 应用级别
// app.use('/',IndexRouter)
app.use('/api',IndexRouter)

app.listen(3001, () => {
    console.log('server start')
})