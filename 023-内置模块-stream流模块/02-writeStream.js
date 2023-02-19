const  fs = require('fs')

const ws = fs.createWriteStream('./2.txt','utf-8')

ws.write('111111111')
ws.write('222222222')
ws.write('333333333')

ws.end()