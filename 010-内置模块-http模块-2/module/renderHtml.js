 function renderHtml(url){
    switch (url) {
        case '/home':
            return `
            <html>
                <b>hello world</b>
                <div>大家好</div>
            </html>
        `
        case '/list':
            return `
            <html>
                <div>list页面</div>
            </html>
        `
        case '/api/list':
            return `
            ['list1','list2','list3'] 
        `
        case '/api/home':
            return `
            {name:'ycj'}
        `
        default:
            return `
            <html>
                <div>not found</div>
            </html>
        `
    }
  
}
exports.renderHtml = renderHtml