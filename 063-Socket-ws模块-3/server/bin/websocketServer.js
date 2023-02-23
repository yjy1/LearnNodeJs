
// websocket响应
const WebSocket = require('ws');
const JWT = require('../util/JWT');
const WebSocketServer = WebSocket.WebSocketServer

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    // console.log(req.url)

    const myURL = new URL(req.url, 'http://127.0.0.1:3000')
    console.log(myURL.searchParams.get('token'))

    const token = myURL.searchParams.get('token')
    //校验token
    const payload = JWT.verify(token)
    console.log('============', payload)
    if (payload) {
        // 重新设置token时间
        console.log(payload)
        ws.send(createMessage(WebSocketType.GroupChat, null, '欢迎来到聊天室'))

        ws.user = payload

        // 群发
        sendAll()
    } else {
        ws.send(createMessage(WebSocketType.Error, null, 'token过期'))
    }

    ws.on('message', function message(data) {
        // console.log('received: %s', data);

        // // 转发给其他人
        // wss.clients.forEach(function each(client) {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //         client.send(data, { binary: false });
        //     }
        // });

        const msgObjP = JSON.parse(data)



        switch (msgObjP.type) {
            case WebSocketType.GroupList:
                console.log('aaaaaaaaaa=====', Array.from(wss.clients).map(item => item.user))

                ws.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(Array.from(wss.clients).map(item => item.user))))

                break;
            case WebSocketType.GroupChat:
                console.log(msgObjP.data)
                wss.clients.forEach(function each(client) {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.GroupChat,ws.user,msgObjP.data), { binary: false });
                    }
                });

                break;
            case WebSocketType.SingleChat:
                console.log(msgObjP.data)

                wss.clients.forEach(function each(client) {
                    if (client.user.username == msgObjP.to && client.readyState === WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.SingleChat,msgObjP.to,msgObjP.data), { binary: false });
                    }
                });
                break;
            default:
                break;
        }
    });

    ws.onclose = ()=>{
        wss.clients.delete(ws.user)
        sendAll()
        // console.log(ws.user)
    }
});

const WebSocketType = {
    Error: 0,//错误
    GroupList: 1,
    GroupChat: 2,
    SingleChat: 3
}
function createMessage(type, user, data) {
    return JSON.stringify({
        type,
        user,
        data
    })
}

function sendAll() {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(Array.from(wss.clients).map(item => item.user))))
        }
    });
}