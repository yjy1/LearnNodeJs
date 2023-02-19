const fs = require('fs')

try {
    fs.mkdirSync('./avatar')
} catch (error) {
    console.log('111',error)    
}

// 阻塞后面代码执行