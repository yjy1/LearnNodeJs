const fs = require('fs').promises



fs.readdir('./avatar').then(async data => {
    // console.log(data)
    // let arr = []
    // data.forEach(item => {
    //     arr.push(fs.unlink(`./avatar/${item}`))
    // })


    await Promise.all(data.map(item => fs.unlink(`./avatar/${item}`)))

    // await Promise.all(arr)
    await fs.rmdir('./avatar')
    // Promise.all(arr).then(res=>{
    //     fs.rmdir('./avatar')
    // })
})