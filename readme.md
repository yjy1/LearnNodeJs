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