const EventEmiter = require("events")

const event = new EventEmiter()

event.on("play",(data)=>{
    console.log("事件触发了-play",data)
})


event.on("run",(data)=>{
    console.log("事件触发了-run",data)
})


setTimeout(() => {
    event.emit("play",'1111111')
    event.emit("run",'2222222')
}, 2000);