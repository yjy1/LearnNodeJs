const JWT = require('../util/JWT')

 function start(server){
    const io = require('socket.io')(server);
    io.on('connection', (socket,req) => { 
        console.log('1111111111',socket.handshake.query.token)

        var token = socket.handshake.query.token
        const payload = JWT.verify(token)
        if (payload) {
            socket.user = payload

            // 发送 欢迎
            socket.emit(WebSocketType.GroupChat,createMessage( socket.user,'欢迎来到聊天室'))
            // 给所有人发送用户列表

        } else {
            // 
            socket.emit(WebSocketType.Error,createMessage( socket.user,'token  过期'))
        }
    });
   
 }
 
const WebSocketType = {
    Error: 0,//错误
    GroupList: 1,
    GroupChat: 2,
    SingleChat: 3
}
function createMessage ( user, data) {
    return  {
        user,
        data
    } 
}

function sendAll() {
   
}

module.exports = start