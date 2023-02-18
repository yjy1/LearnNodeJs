 function renderStatus(url){
    const arr = ['/home','/list','/api/list','/api/home']
    return arr.includes(url) ? 200 : 404
    // switch (url) {
    //     case '/home','/list':
    //         return 200
    //     default:
    //         return 404
    // }
}
exports.renderStatus = renderStatus