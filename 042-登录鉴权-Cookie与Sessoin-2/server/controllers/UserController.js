const UserService = require("../services/UserService")

const UserController = {
    addUser: async (req, res) => {
        console.log(req.body)

        // 插入数据库
        // 1.创建一个模型（user,限制filed类型），一一对应数据库的集合（users）
        // user.create user.find user.delete

        const { username, password, age } = req.body

        await UserService.addUser(username, password, age)

        res.send({ ok: 1 })
    },
    updateUser: async (req, res) => {
        console.log(req.body, req.params)
        const { username, password, age } = req.body
        await UserService.updateUser(req, username, password, age)
        res.send({ ok: 1 })
    },
    deleteUser: async (req, res) => {
        // console.log(req)
        await UserService.deleteUser(req)

        res.end({ ok: 1 })
    },
    getUser: async (req, res) => {
        console.log(req.query)

        const { page, limit } = req.query
        var data = await UserService.getUser(page, limit)

        res.send(data)
    },
    checkUser: async (req, res) => {
        const { username, password } = req.body
        var data = await UserService.checkUser(username, password)
        if (data.length > 0){
            // 设置session
            req.session.user = data[0] // 设置session对象
            //默认存在内存中
            res.send({ ok: 1 })
        }
        else{
            res.send({ ok: 0 })
        }

    }
}

module.exports = UserController