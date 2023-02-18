var str = "name=ycj&age=100&location=guangzhou"
var querystring = require('querystring')

var obj = querystring.parse(str)
console.log(obj)

var myObj = {
    a: 1,
    b: 2,
    c: 3
}
var myStr = querystring.stringify(myObj)
console.log(myStr)

var str = 'id=3&city=北京&urFhttps://www.baidu.com'
var escaped = querystring.escape(str)
console.log('--escaped--',escaped)

var escaped1 = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26urFhttps%3A%2F%2Fwww.baidu.com'
var unescape = querystring.unescape(escaped1)
console.log('--unescape--',unescape)