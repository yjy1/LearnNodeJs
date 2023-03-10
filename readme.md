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


    2.业务分层
    routerjs:负责将请求分发给C层
    controllerjs:C层负责处理业务逻辑 (V与M之间的沟通)
    views: V层: 负责展示页面
    model: M层:负责处理数据 (增删改查)

## 五、登录鉴权
    1.Cookie&Session
    [HTTP 无状态我们知道，HTTP 是无状态的。也就是说，HTTP 请求方和响应方间无法维护状态，都是一次性的，它不知道前后的请求都发生了什么。但有的场景下，我们需要维护状态。最典型的，一个用户登陆微博，发布、关注、评论，都应是在登录后的用户状态下的。[标记]那解决办法是什么呢?

    2.Session
        constexpress = require("express");
        constsession = require( express-session"):
        constMongostore = require("connect-mongo")
        const app = express();

        app.use(
            session({
                secret:"this is session"，// 服务器生成 session 的签名
                resave: true ，
                saveUninitialized: true，/制将为初始化的 session 存储
                cookie:{
                    maxAge: 1000*60*10,// 过期时间
                    secure: false，// 为 rue 时候表示只有 https 协议才能访问cookie
                },
                rolling: true，//为 true 表示 超时前刷新，cookie 会重新计时; 为 false 表示在超时前刷新多少次都是按照第一次刷新开始计时。
                store: Mongostore.create({
                    mongourl: 'mongodb://127.0.0.1:27017/kerwin_session'
                    ttl: 1000*60*10 // 过期时间
                }),

            })
        );


    JWT
        (2)实现
        //jsonwebtoken 封装
        const jsonwebtoken = require("jsonwebtoken")
        const secret = "kerwin"
        const JWT = {
            generate(value,exprires){
                return jsonwebtoken.sign(value,secret,fexpiresIn:exprires})
            },
            verify(token){
                try{
                    return jsonwebtoken.verify(token,secret)
                }catch(e){
                    return false
                }
            }
        }

        module.exports = JWT


## 七、APIDOC-API文档生成工具
    apidoc 是一个简单的 RESTful APl 文档生成工具，它从代码注释中提取特定格式的内容生成文档。支持诸如Go.ava、C++、Rust等大部分开发语言，具体可使用 apidoc lang 命令行查看所有的支持列表。
    apidoc 拥有以下特点:
        1.跨平台，linux、windows、macos 等都支持
        2.支持语言广泛，即使是不支持，也很方便扩展
        3.支持多个不同语言的多个项目生成一份文档;
        4.输出模板可自定义
        5.根据文档生成mock数据;
    npm insta11 -g apidoc


## 八、Koa2
                koa
    基于 Node.js 平台的下一代 web 开发框架
    1.简介
        koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健的 Web 架。使用 koa 编写web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。
    2.快速开始
        2.1 安装koa2
            # 初始化package.json
            npm init
            # 安装koa2
            npm insta11 koa

        2.2 hello world 代码
            const Koa = require('koa')
            const app = new Koa()
            app.use( async ( ctx ) =>{
                ctx.body =T'he11o koa2'//json数据
            })
            app.1isten(3000)

    3. koa vs express
        通常都会说 Koa 是洋葱模型，这重点在于中间件的设计。但是按照上面的分析，会发现 Express 也是类似的，不同的是Express 中间件机制使用了 Callback 实现，这样如果出现异步则可能会使你在执行顺序上感到困惑，因此如果我们想做接口耗时统计、错误处理 Koa 的这种中间件模式处理起来更方便些。最后一点响应机制也很重要，Koa 不是立即响应，是整个中间件处理完成在最外层进行了响应，而 Express 则是立即响应

        3.1更轻量
            .koa 不提供内置的中间件;
            .koa 不提供路由，而是把路由这个库分离出来了 (koa/router)
        3.2 Context对象
            koa增加了一个Context的对象，作为这次请求的上下文对象(在koa2中作为中间件的第一个参数传入)。同时Context上也挂载了Request和Response两个对象。和Express类似，这两个对象都提供了大量的便捷方法辅助开发,这样的话对于在保存一些公有的参数的话变得更加合情合理
        3.3 异步流程控制
            express采用callback来处理异步，koa v1采用generator，koa v2 采用async/awaitgenerator和async/await使用同步的写法来处理异步，明显好于callback和promise
        3.4 中间件模型
            express基于connect中间件，线性模型
            koa中间件采用洋葱模型(对于每个中间件，在完成了一些事情后，可以非常优雅的将控制权传递给下一个中间件，并能够等待它完成，当后续的中间件完成处理后，控制权又回到了自己)
    
    4.路由
        4.1基本用法
            var Koa = require("koa")
            var Router = require("koa-router")

            var app = new Koa()
            var router = new Router

            router.post("/list",(ctx)=>{
                ctx.body=["111","222","333"]
            })

            app.use(router.routes()).use(router.a11owedMethods(0))
            app.listen(3000)

    5.静态资源
        const Koa = require('koa')
        const path = require('path')
        const static = require('koa-static')

        const app = new Koa()
        app.use(static(
            path.join( _dirname,"pub1ic")
        ))
        app.use( async ( ctx ) =>{
            ctx.body = 'he11o wor1d
        })
         
        app.listen(3000，() => {
            console.log('[demo] static-use-middleware is starting at port 3000')
        })


    6.获取请求参数
        6.1get参数
            在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法，query返回是格式化好的参数对象，querystring返的是请求字符串，由于ctx对request的API有直接引用的方式，所以获取GET请求数据有两个途径。
                ·是从上下文中直接获取 请求对象ctx.query，返回如{a:1,b:2}请求字符串 tx.querystring，返回如a=1&b=2
                .是从上下文的request对象中获取 请求对象ctx.request.query，返回如{a:1,b:2}请求字符串.ctx.request.querystring，返回如 a=1&b=2
        6.2post参数
            对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
                const bodyParser = require('koa-bodyparser')
                // 使用ctx.body解析中间件
                app.use(bodyParser())


    8. cookie&session
        8.1 cookie
        koa提供了从上下文直接读取、写入cookie的方法
            .ctx.cookies.get(name,[options]) 读取上下文请求中的cookie 
            .ctx.cookies.set(name, value,[options]) 在上下文中写入cookie
        8.2 session
            .koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口。
                const session = require('koa-session-minima1')
                app.use(session({
                    key:'SESSION ID'
                    cookie: {
                        maxAge:1000*60
                    }
                }))
    

    10.上传文件
    https://www.npmjs.com/package/@koa/multer
    npm insta11 --save @koa/multer multer

    const muter = require('@koa/multer');
    const upload = multer([ dest: 'public/uploads/' })

    router.post("/",upload.single('avatar') ,
    (ctx,next)=>{
        console.1og(ctx.request.body,ctx.file)
        ctx.body={
            ok:1,
            info:"add user success'
        }
    })


    11.操作MongoDB
        const mongoose = require("mongoose")
        
        mongoose.connect("mongodb://127.0.0.1:27017/kerwin_project")/插入集合和数据，数据库kerwin_project会自动创建
        
        const mongoose = require("mongoose")
        const Schema = mongoose.schema
        const UserType = {
            username:string
            password:string,
            age:Number
            avatar:string
        }

        const UserMode1 = mongoose.mode1("user",new Schema(userType))
        // 模型user 将会对应 users 集合，
        module.exports = UserMode1



## 九、MysQL
    1.介绍
    付费的商用数据库:
        .Oracle，典型的高富帅;
        .SQL Server，微软自家产品，Windows定制专款
        .DB2，IBM的产品，听起来挺高端;
        .Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡
    这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、 Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库:
        .MySQL，大家都在用，一般错不了
        .PostgreSQL，学术气息有点重，其实挺不错，但知名度没有MySQL高
        .sqlite，嵌入式数据库，适合桌面和移动应用。
    作为一个avaScript全栈工程师，选择哪个免费数据库呢? 当然是MySQL。因为MySQL普及率最高，出了错，可以很容易找到解决方法。而且，围绕MySQL有一大堆监控和运维的工具，安装和使用很方便。


    2.与非关系数据库区别
    关系型和非关系型数据库的主要差异是数据存储的方式。关系型数据天然就是表格式的，因此存储在数据表的行和列中。数据表可以彼此关联协作存储，也很容易提取数据。

    与其相反，非关系型数据不适合存储在数据表的行和列中，而是大块组合在一起。非关系型数据通常存储在数据集中，就像文档、键值对或者图结构。你的数据及其特性是选择数据存储和提取方式的首要影响因素。

    关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织
    优点:
        1、易于维护:都是使用表结构，格式一致;
        2、使用方便: SQL语言通用，可用于复杂查询:
        3、复杂操作:支持SQL，可用于一个表以及多个表之间非常复杂的查询
    缺点:
        1、读写性能比较差，尤其是海量数据的高效率读写
        2、固定的表结构，灵活度稍欠;
        3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈

    非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合，可以是文档或者键值对等。
    优点:
        1、格式灵活:存储数据的格式可以是keyvalue形式、文档形式、图片形式等等，文档形式、图片形式等等，使用灵活，应用场景广泛，而关系型数据库则只支持基础类型
        2、速度快: nosql可以使用硬盘或者随机存储器作为载体，而关系型数据库只能使用硬盘
        3、高扩展性;
        4、成本低: nosql数据库部署简单，基本都是开源软件
    缺点:
        1、不提供sql支持
        2、无事务处理;
        3、数据结构相对复杂，复杂查询方面稍欠



## 十、Socket编程
    1.websocket介绍

    应用场景:
        .弹幕
        .媒体聊天
        .协同编辑
        .基于位置的应用
        .体育实况更新
        .股票基金报价实时更新

    WebSocket并不是全新的协议，而是利用了HTTP协议来建立连接。我们来看看WebSocket连接是如何创建的。首先，WebSocket连接必须由浏览器发起，因为请求协议是一个标准的HTTP请求，格式如下:

    GET ws://1ocalhost:3000/ws/chat HTTP/1.1
    Host: 1ocalhost
    Upgrade: websocket
    Connection: Upgrade
    origin: http://1ocalhost:3000
    Sec-Websocket-Key: cient-random-string
    Sec-Websocket-Version: 13

    该请求和普通的HTTP请求有几点不同
        1.GET请求的地址不是类似/path/，而是以ws://开头的地址;
        2.请求头upgrade: websocket和connection: upgrade表示这个连接将要被转换为WebSocket连接
        3.sec-websocket-Key是用于标识这个连接，并非用于加密数据
        4.sec-websocket-Version指定了WebSocket的协议版本随后，服务器如果接受该请求，就会返回如下响应:

        HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: server-random-string

        该响应代码101表示本次连接的HTTP协议即将被更改，更改后的协议就是upgrade: websocket 指定的WebSocket协议。

        版本号和子协议规定了双方能理解的数据格式，以及是否支持压缩等等。如果仅使用WebSocket的AP1，就不需要关心这些。

        现在，一个WebSocket连接就建立成功，浏览器和服务器就可以随时主动发送消息给对方。消息有两种，一种是文本，一种是二进制数据。通常，我们可以发送JSON格式的文本，这样，在浏览器处理起来就十分容易

        为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢?实际上HTTP协议是建立在TCP协议之上的，TCP协议本身就实现了全双工通信，但是HTTP协议的请求-应答机制限制了全双工通信。Websocket连接建立以后其实只是简单规定了一下: 接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。

        安全的WebSocket连接机制和HTTPS类似。首先，浏览器用wss://xxx 创建WebSocket连接时，会先通过HTTPS创建安全的连接，然后，该HTTPS连接升级为WebSocket连接，底层通信走的仍然是安全的SSL/TLS协议。

        浏览器支持
        很显然，要支持WebSocket通信，，浏览器得支持这个协议，这样才能发出ws://xxx的请求。目前，支持WebSocket的主流浏览器如下:
            .Chrome
            .Firefox
            .IE>=10
            .Sarafi >= 60
            .Android >= 4.4
            .iOS >=8
        服务器支持
            由于WebSocket是一个协议，服务器具体怎么实现，取决于所用编程语言和框架本身。Node.js本身支持的协议包括TCP协议和HTTP协议，要支持WebSocket协议，需要对Node.is提供的HTTPServer做额外的开发。已经有若干基于Nodeis的稳定可靠的WebSocket实现，我们直接用npm安装使用即可

    2.ws模块
    服务器:
        constwebSocket = require("ws")
        Websocketserver = websocket.websocketserver
        const wss = new websocketserver({port: 8080});
        wss.on('connection'，function connection(ws){
             ws.on('message'，function message(data，isBinary) {
                wss.clients.forEach(function each(client) {
                    if (client !== ws && client.readystate === Websocket.OPEN) {
                        client.send(data, {binary: isBinary });
                    }
                });
            });

            ws.send(欢迎加入聊天室');
        })