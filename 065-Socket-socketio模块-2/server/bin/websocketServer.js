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
            sendAll(io)
        } else {
            // 
            socket.emit(WebSocketType.Error,createMessage( socket.user,'token  过期'))
        }

        socket.on(WebSocketType.GroupList,()=>{
            console.log(Array.from(io.sockets.sockets).map(item=>item[1].user))
        })

        socket.on(WebSocketType.GroupChat,(msg)=>{
            // 给所有人发 
            // io.sockets.emit(WebSocketType.GroupChat,createMessage(socket.user, msg.data))

            // 只给其他人发
            socket.broadcast.emit(WebSocketType.GroupChat,createMessage(socket.user, msg.data))

            console.log(msg)
        })

        socket.on(WebSocketType.SingleChat,(msg)=>{
            console.log(msg)
            Array.from(io.sockets.sockets).forEach(item=>{
                if (item[1].user.username === msg.to){
                    item[1].emit(WebSocketType.SingleChat,createMessage(socket.user,msg.data))
                }
            })
        })

        socket.on('disconnect',()=>{
            sendAll(io)
        })
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

function sendAll(io) {
   io.sockets.emit(WebSocketType.GroupList,createMessage(null,Array.from(io.sockets.sockets).map(item=>item[1].user).filter(item=>item)))
}

module.exports = start