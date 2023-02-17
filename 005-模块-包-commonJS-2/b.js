var moduleA = require('./a')
function test(){
    console.log('test-bbb')
}
console.log(moduleA.upper('b-bbb')) 
module.exports = test