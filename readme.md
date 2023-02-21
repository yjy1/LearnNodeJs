## 4.Npm&Yarn
    01 npm的使用
        npm init
        npm install 包名 -g (uninstall,update)
        npm install 包名 --save-dev (uninstall,update)
        npm list -g (不加-g，列举当前目录下的安装包)
        npm info 包名(详细信息) npm info 包名 version(获取最新版本)
        npm install md5@1 (安装指定版本)
        npm outdated( 检查包是否已经过时)
        "dependencies":{"md5":"^2.1.0"} 表示 如果 直接npm install 将会 安md5 2.'.'最新版本
        "dependencies":{md5":"~2.1.0"} ~ 表示 如果 直接npm install 将会 安装md5 2.1.*最新版本
        "dependencies":{md5":"*"}表示如果 直接npm install 将会安装 md5 最新版本


## 02 全局安装nrm
    NRM(npm registry manager)是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在
    npm 源间切换。  
    手动切换方法: npm config set registry https://registry.npm.taobao.org
    安装nrm
        在命令行执行命令，npminstall-gnrm，全局安装nrm。
    使用nrm
        执行命令nrmls 查看可选的源。其中，带*的是当前使用的源，上面的输出表明当前源是官方源
    切换nrm
        如果要切换到taobao源，执行命令nrm use taobao。
    测试速度
        你还可以通过nrm test测试相应源的响应时间
            nrm test

    扩展:
        中国NPM 镜像
        这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟一次以保证尽量与官方服务同步。
        npm install -g cnpm --registry=https://registry.npmmirror.com

## 03 yarn使用
    npm install -g yarn
    对比npm:
        速度超快: Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。
        超级安全: 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
    开始新项目
        yarn init
    添加依赖包
        yarn add [package]
        yarn add [package]@[version]
        yarn add [package] --dev
    升级依赖包
        yarn upgrade [package]@[version]
    移除依赖包
        yarn remove [package]
    安装项目的全部依赖


## 5.内置模块
    01 http模块
    要使用 HTTP 服务器和客户端，则必须require('http')。
        //第一种写法
        const http = require('http');
        // 创建本地服务器来从其接收数据
        const server = http.createServer((req，res) => {
            res.writeHead(200，{Content-Type':'application/json' });
            res.end(JsoN.stringify({
                data: 'He11o wor1d!'
            }));
        });
        server.listen(8000);

        //第二种写法
        const http = require('http');
        // 创建本地服务器来从其接收数据
        const server = http.createServer();
        // 监听请求事件
        server.on('request',(req,res)=>{
            if(req.url==="/favicon.ico"){
                // todo 读取本地图标
                return
            }
            res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
            res.write(moduleRenderHtml.renderHtml(req.url))
            res.end()
        })
        server.listen(3000,()=>{
            console.log('server start')
        })


## 02 url模块
    02.1 parse
        const url = require('url')
        const urlString= "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110"
        const parsedStr = url.parse(urlString)
        console.1og(parsedStr)
    02.2 format
        const url = require('url')
        const urlObject = {
            protocol: 'https',
            sTashes: true ,
            auth: null,
            host: 'www.baidu.com:443',
            port:'443',
            hostname : 'www.baidu.com',
            hash:'#tag=110',
            search: '?id=8&name=mouse',
            query: { id:'8', name: 'mouse' },
            pathname:'/ad/index.htm1',
            path: '/ad/index.htm1?id=8&name=mouse'
        }
        const parsedObj = url.format(urlObject)
        console.log(parsedObj)
    02.3 resolve
        const url = require('url')
        var a = url.resolve('/one/two/three','four') ( 注意最后加/ ，不加/的区别 )
        var b = url.resolve('http://example.com/','/one' )
        var c = url.resolve('http://example.com/one'，'/two')
        console.log(a + "," + b + "，" + c)


## 03 querystring模块
    03.1 parse
        const querystring = require('querystring')
        var qs ='X=3&y=4!'
        var parsed = querystring.parse(qs)
        console.log(parsed)
    03.2 stringify
        const querystring = require('querystring')
        var qo = {
            x: 3,
            y:4
        }
        var parsed = querystring.stringify(qo)
        console.1og(parsed)
    03.3 escape/unescape
        'use strict';

        const mysql = require( 'mysql');

        let param = 'ns';
        let pool = mysql.createpool({
            user: 'root'
            password: 'root',
            database: 'nlp dict
        });
        pool.getConnection(function (err, conn) {
            let sql = 'select * from tb_nature where nature = "' + param + '" and del_status=1';
            conn.query(sgl, function (err, result) {
                conle.log(result);
            })
        })


        这时正常情况下能查询到一条数据，如果将param修改成
        let param = 'ns"-- 
        sql语句就会变成
        select * from tb nature where nature = "ns"-- " and del status=1
        后面的del_status就会被参数中的-- 注释掉，失去作用，能查询到多条数据。
        如果对param使用escape包装下，就能将参数中的特殊字符进行转义，防止sql的注入

        const querystring = require('querystring')
        var str = 'id=3&city=北京&urFhttps://www.baidu.com'
        var escaped = querystring.escape(str)
        console.1og(escaped)

        const querystring = require('querystringvar')
        str ='id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26ur1%3Dhttps%3A%2F%2Fwww.baidu.com'
        var unescaped = querystring.unescape(str)
        conso1e.Tog(unescaped)


## 04http模块补充
    04.1接口:jsonp
        const http = require('http')
        const ur1 = require('ur1')
        const app = http.createServer((req，res) => {
            let urlobj = ur1.parse(req.ur1， true)
            switch (urlobj.pathname) {
                case '/api/user':
                    res.end(`${urlobj.query.cb}({"name": "gp145"})`)
                    break
                default:
                    res.end('404.')
                    break
            }
        })

        app.listen(8080，() => {
            console.1og('localhost:8080')
        })

    04.2 跨域 cros
        const http = require('http')
        const url = require('url')
        const querystring = require('querystring')
        const app = http.createServer((req，res) => {
            let data = ''
            let urlobj = url.parse(req.url,true)

            res.writeHead(200，{
                'content-type': 'application/json;charset=utf-8',
                'Access-Contro-A11ow-origin':'*'
            })

            req.on('data'，(chunk) => {
                data += chunk
            })

            reg.on('end'，() => {
                responseResu1t(querystring.parse(data))
            })

            function responseResu1t(data) {
                switch (urlobj.pathname) {
                    case '/api/1ogin':
                        res.end(JsoN.stringify({
                            message: data
                        }))


## 05 event模块
    const EventEmitter = require('events ')
    class MyEventEmitter extends EventEmitter {}
    const event = new MyEventEmitter()
    event.on('play'，(movie) => {
        console.1og(movie)
    })
    event.emit('play',"我和我的祖国")
    event.emit('play',"中国机长")


## 06fs文件操作模块
    const fs = require('fs')
    // 创建文件夹
    fs.mkdir('./logs'， (err) => {
        conso1e. 1og('done.')
    }）
    // 文件夹改名
    fs.rename('./logs','./1og' , () => {
        console.log('done')
    })
    // 删除文件夹
    fs.rmdir('./1og'，() =>{
        conso1e. 1og(' done.')
    })
    // 写内容到文件里
    fs.writeFile('./avatar/a.text','你好',(err)=>{
        console.log(err)
    })


    // 同步读取文件
    try {
        const content = fs.readFileSync('./logs/log-1.txt'，'utf-8')
        console.log(content)
        conso1e.log(0)
    } catch (e) {
        conso1e.log(e.message)
    }
    //异步读取文件: 方法一
    fs.readFile('./logs/log-0.txt'，'utf-8'，(err， content) => {
        console.log(content)
        conso1e.log(0)
    })
    console.log(1)
    // 异步读取文件: 方法二
    const fs = require("fs").promises
    fs.readFile('./logs/log-0.txt'，'utf-8').then(result => {
        console.log(result)
    })

    js在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢:
        .由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
        .服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。


## 07stream流模块
    stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持流”这种数据结构。
    什么是流?流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方(例如自来水厂)源源不断地到达另一个地方(比如你家的洗手池》。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字:标准输入流(stdin) 。

    如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字:标准输出流(stdout)。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。

    有些流用来读取数据，比如从文件读取数据时，可以打开一个文件流，然后从文件流中不断地读取数据。有些流用来写入数据，比如何文件写入数据时，只需要把数据不断地往文件流中写进去就可以了。

    在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了: data 事件表示流的数据已经可以读取了end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
        var fs = require('fs'):
        // 打开一个流:
        var rs = fs.createReadstream('sample.txt','utf-8');
        rs.on('data'，function (chunk) {
            console.1og('DATA:')
            console.1og(chunk);
        })

        rs.on('end', function () {
            console.1og('END');
        })

        rs.on('error',function (err) {
            console.log('ERROR'+err)
        });
        要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束:


## 08 zlib
    const fs = require('fs')
    const zlib = require('zlib')
    const gzip = zlib.createGzip()
    const readstream = fs.createReadstream('./note.txt')
    const writestream = fs.createwritestream('./note2.txt')
    readstream
        .pipe(gzip)
        .pipe(writestream)


## 09 crypto
    .crypto模块的目的是为了提供通用的加密和哈希算法。用纯Javacript代码实现这些功能不是不可能，但速度会非常慢。Nodeis用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。

    .MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示
        const crypto = require('crypto');
        const hash = crypto.createHash('md5');
        // 可任意多次调用update():
        hash.update('Hello，world!');
        hash.update('Hello，nodejs!') ;
        console.log(hash.digest('hex'));
    .update(方法默认字符串编码为UTF-8，也可以传Buffer。
    .如果要计算SHA1，只需要把“md5 改成sha1 ，就可以得到SHA1的结果
        1f32b9c9932c02227819a415feed43e13laca40
    .Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥:
        const crypto = require('crypto');


    .AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用:
        const crypto = require("crypto");
        function encrypt (key, iv，data) {
            let decipher = crypto.createcipheriv('aes-128-cbc'，key， iv);
            //decipher.setAutoPadding(true);
            return decipher.update(data, 'binary', 'hex') + decipher.final('hex');
        }
        function decrypt (key， iv， crypted) {
            crypted = Buffer.from(crypted,'hex').tostring('binary');
            let decipher = crypto.createDecipheriv('aes-128-cbc'，key，iv);
            return decipher.update(crypted,'binary', 'utf8') + decipher.final('utf8');
        }
    .可以看出，加密后的字符串通过解密又得到了原始内容.
  

## 6.路由
    01 基础
    var fs = require("fs")
    var path = require("path")
    function render(res, path) {
        res.writeHead(200，{"content-Type": "text/html;charset=utf8"})
        res.write(fs.readFileSync(path，"utf8"))
        res.end()
    }
    const route = {
        "/login": (req,res) => {
            render(res，"./static/login.html")
        },
        "/home": (req，res) => {
            render(res，"./static/home. html")
        },
        "/404": (req，res) => {
            render(res，"./static/home. html")
        }


## 二、Express
    https://www.expressjs.com.cn/
    基于Node.is 平台，快速、开放、极简的 web 开发框架
    1.特色
        1、Web 应用
            Express 是一个基于 Nodeis 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
        2、API
            丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单
        3、性能
            Express不对 Nodejs 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能
    2.安装
        npm install express --save

 
    路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式
    // 匹配根路径的请求
    app.get('/'，function (req, res) {
        res.send('root') ;
    }
    // 匹配 /about 路径的请求
    app.get('/about'，function (req，res) {
        res.send('about');
    };
    // 匹配 /random.text 路径的请求
    app.get('/random.text', function (req， res) {
        res.send('random.text') 
    })

    使用字符串模式的路由路径示例:
    // 匹配 acd 和 abcd
    app.get('/ab?cd'，function(req，res) {
        res . send("ab?cd');
    });
    // 匹配 /ab/******
    app.get('/ab/:id'， function(req，res) {
        res.send('aaaaaaa');
    });
    // 匹配 abcd、abbcd、abbbcd等
    app.get('/ab+cd'，function(req，res) {
        res . send('ab+cd');
    });
    // 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
    app.get('/ab*cd'，function(req，res) {
        res.send('ab*cd') ;
    }）
    // 匹配 /abe 和 /abcde
    app.get('/ab(cd)?e'，function(req，res) {
        res.send('ab(cd)?e');
    });

    使用正则表达式的路由路径示例:
    // 匹配任何路径中含有 a 的路径:
    app.get(/a/，function(req，res) {
        res.send('/a/');
    });

    // 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
    app.get(/.*f1y$/，function(req，res) {
        res.send('/.*f1y$/');
    });

    可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next(route方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。
    
    app.get('/example/a'，function (req，res) {
        res.send('Hello from A!');
    });

    使用多个回调函数处理路由(记得指定next 对象):
    app.get('/example/b'，function (req，res， next) {
        console.log('response wil1 be sent by the next function ...')
        next();
    }),
    function (req，res){
        res.send('He11o from B!')  
    })


    4.中间件
        Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架:从本质上来说，一个Express应用就是在调用各种中间件。
        中间件(Middleware) 是一个函数，它可以访问请求对象 (request obiect(reg),响应对象(response obiect(res))和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。
        中间件的功能包括:
            .执行任何代码
            .修改请求和响应对象
            .终结请求-响应循环。
            .调用堆栈中的下一个中间件
        如果当前中间件没有终结请求-响应循环，则必须调用 next) 方法将控制权交给下一个中间件，否则请求就会持起。
        Express应用可使用如下几种中间件:
            .应用级中间件
            .路由级中间件
            .错误处理中间件
            .内置中间件
            .第三方中间件

        使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在个挂载点上创建一个子中间件栈。
            (1)应用级中间件
                应用级中间件绑定到app 对象使用app.use()和app.METHOD0，其中，METHOD 是需要处理的 HTTP 请求的方法，例如 GET,PUT,POST 等等，全部小写。例如:
                var app = express()
                // 没有挂载路径的中间件，应用的每个请求都会执行该中间件
                app.use(function (req, res，next) {
                    console.log('Time :' ，Date.now())
                }

            (2)路级中间件
                路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。
                var router = express.Router()
                var app = express()
                var router = express.Router()
                // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
                router.use(function (req, res, next) {
                    console.1og('Time:' ，Date.now())
                    next()
                })

                //一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
                router.use('/user/:id', function(req， res, next) {
                    console.1og('Request URL:'，req.originalUrl)
                    next()
                },
                function (req, res, next) {
                    console.log('Request Type:'，req.method)
                    next()
                })
                // 一个中间件栈，处理指向 /user/:id 的 GET 请求
                router.get('/user/:id', function (req, res, next) {
                    // 如果 user id 为 0，跳到下一个路由
                    if (req.params.id == 0) next('route')
                    // 负责将控制权交给栈中下一个中间件
                    else next() //
                }， function (req, res, next) {
                    // 染常规页面
                    res.render('regular')
                }）

                // 处理 /user/:id， 染一个特殊页面
                router.get('/user/:id', function (req, res, next) {
                    consoTe.1og(req.params.id)
                    res.render('special')
                }）
                // 将路由挂载至应用
                app.use('/'，router)

                (3)错误处理中间件
                    错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是3个，其签名如下: (err,req,res, next)。
                    app.use(function(err, req，res, next) {
                        console.error(err.stack)
                        res.status(500).send('something broke!')
                    }）
                (4)内置的中间件
                    express.static是Express 唯一内置的中间件。它基于serve-static，负责在 Express 应用中提托管静态资源。每个应用可有多个静态目录。
                    app.use(express.static('pub1ic'))
                    app.use(express.static('uploads'))
                    app.use(express.static('files'))

                 5)第三方中间件
                    安装所需功能的node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载下面的例子安装并加载了一个解析 cookie 的中间件: cookie-parser
                    $ npm insta77cookie-parser
                    var express = require('express')
                    var app = express
                    var cookieParser = require('cookie-parser')

                    // 加载用于解析 cookie 的中间件
                    app.use(cookieParser())

    6.利用 Express 托管静态文件
        通过xpress 内置的express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等.将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和JavaScript 文件，你就可以:
        app.use(express.static('public'))

        现在，public 目录下面的文件就可以访问了。
        http://1ocalhost:3000/images/kitten.jpg
        http://1ocalhost:3000/css/style.css
        http://1ocalhost:3000/js/app.js
        http://1ocalhost:3000/images/bg.png
        http://1ocalhost:3000/he11o.html

        所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在URL中
        如果你的静态资源存放在多个目录下面，你可以多次调用express.static中间件:
        app.use(express.static('public'))
        app.use(express.static('files'))

        访问静态资源文件时，express.static中间件会根据目录添加的顺序查找所需的文件

    7.服务端染(模板引擎)
        1.服务器染，后端嵌套模板，后端染模板，SSR (后端把页面组装)
            a.做好静态页面，动态效果。
            b.把前端代码提供给后端，后端要把静态html以及里面的假数据给删掉通过模板进行动态生成html的内容
        2.前后端分离，BSR (前端中组装页面)
            a.做好静态页面，动态效果。
            b.ison 模拟，aiax,动态创建页面
            c.真实接口数据，前后联调。
            d.把前端提供给后端静态资源文件夹。
        npm i ejs
        需要在应用中进行如下设置才能让Express染模板文件
            .views,放模板文件的目录，比如: app.set('views'，'./views')
            .view engine模板引擎，比如: app.set('view engine'，'ejs')


## 三、MongoDB
    1.关系型与非关系型数据库
        关系型数据库与非关系型数据库的区别
            1.关系型数据库
                特点:
                    (1)sql语句增删改查操作
                    (2)保持事务的一致性事物机制 (回)
                        mysql,sqlserver,db2oracle
            2.非关系型数据库
                特点:
                    (1) no sql:not only sql;
                    (2) 轻量，高效,自由。
                        mongodb Hbase,Redis
            3.为啥喜欢mongodb?
                由于MongoDB独特的数据处理方式，可以将热点数据加载到内存故而对查询来讲，会非常快 (当然也会非常消耗内存);
                同时由于采用了BSON的方式存储数据故而对JSON格式数据具有非常好的支持性以及友好的表结构修改性文档式的存储方式，数据友好可见;数据库的分片集群负载具有非常好的扩展性以及非常不错的自动故障转福

            4.在命令行中操作数据库
                (1)Help查看命令提示
                    help
                    db.help()
                    db.test.help()
                    db.test.find().help()
                (2)创建/切换数据库
                    use music
                (3)查询数据库
                    show dbs
                (4)查看当前使用的数据库
                    db/db.getName()
                (5)显示当前DB状态
                    db.stats()
                (6)查看当前DB版本
                    db.version()
                (7)查看当前DB的链接机器地址
                    db.getMongo()
                (8)删除数据库
                    db.dropDatabase()

                (1)创建一个聚集集合
                    db.createCollection("collName", {size: 5242880, capped: true.max: 5000); 最大存储空间为 5m，最多 5000 个文档的集合
                (2)得到指定名称的聚集集合
                    db.getCollection("account");
                (3)得到当前db的所有聚集集合
                    db.getCollectionNames();
                (4)显示当前db所有聚集的状态
                    db.printCollectionStats():
                (5)删除
                    db.users.drop()

                1)添加
                    db.users.save(fname: zhangsan', age: 25, sex: true));
                    db.users.save([name: 'zhangsan', age: 25, sex: truel,fname:"kerin",age:1001);
                (2)修改
                    db.users.update(fage: 25), { $set: {name: 'changeName'}}, false, true);
                    相当于: update users set name = 'changeName' where age = 25 
                    db.users.update({name: "Lisi , {$inc: {age: 50}}, false, true);
                    相当于 update users set ageage + 50 where name = 'Lisi'
                   

            增加数据
                UserMode1.create({
                    introduction,username , gender ,avatar ,password,role
                })
            查询数据
                UserModel.find({username :"kerwin"},
                ["username" ,"role","introduction" ,"password"]).sort([createTime:-1}).skip(10).limit(10)
            更新数据
                UserMode1.updateone({
                    _id
                },{
                    introduction,username , gender ,avatar
                })
            删除数据
                UserModel.deleteOne({_id})



## 四、接口规范与业务分层
    1.接口规范
        RESTful架构
            服务器上每一种资源，比如一个文件，一张图片，一部电影，都有对应的url地址，如果我们的客户端需要对服务器上的这个资源进行操作，就需要通过http协议执行相应的动作来操作它，比如进行获取，更新，删除。

            简单来说就是url地址中只包含名词表示资源，使用http动词表示动作进行操作资源举个例子:左边是错误的设计，而右边是正确的
                GET /blog/getArticles --> GET /blog/Articles  获取所有文章
                GET /blog/addArticles --> POST /blog/Articles 添加一篇文章
                GET /blog/editArticles --> PUT /blog/Articles 修改一篇文章
                GET /rest/api/deleteArticles?id=1 -->DELETE /blog/Articles/1 删除一篇文章
    使用方式
        GET http://www.birjemin.com/api/user # 获取列表
        POST http://www.birjemin.com/api/user # 创建用户
        PUT http://www.birjemin.com/api/user/fid} # 修改用户信息


    过滤信息
    用于补充规范一些通用字段
    ?limit=10 # 指定返回记录的数量
    ?offset=10 # 指定返回记录的开始位置
    ?page=2&per_page=100 # 指定第几页，以及每页的记录数
    ?sortby=name&order=asc # 指定返回结果按照哪个属性排序，以及排序顺序
    ?state=close # 指定筛选条件