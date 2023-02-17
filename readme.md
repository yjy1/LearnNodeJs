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