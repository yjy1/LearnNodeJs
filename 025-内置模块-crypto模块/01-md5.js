const crypto = require('crypto')

// const hash = crypto.createHash('sha1')
const hash = crypto.createHash('md5')

hash.update('hello world')
hash.update('qwedwq')

console.log(hash.digest('hex'))