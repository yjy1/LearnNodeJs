const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    // res.write('hello world')
    // res.end()
    // res.send('hello world')
    // res.send(`
    //     <html>
    //         <h1>hello world</h1>
    //     </html>
    // `)

    res.send({
        name:'ycj',
        age:26
    })
})

app.get('/login',(req,res)=>{
    res.write('login')
    res.end()
})

app.listen(3000,()=>{
    console.log('server start')
})