const Koa = require('koa')
const path = require('path')
const cors = require('koa2-cors')
const serve = require('koa-static')
const compress = require('koa-compress')
const fs = require('fs')

// 根目录
const resolve = (dir) => path.join(__dirname, '../', dir)

const app = new Koa()

app.on('error', (err) => {
    console.log(err)
})
// 允许跨域
app.use(cors({
    origin: "*"
}))

// 静态目录
app.use(serve(resolve('dist'), {
    maxage: 365 * 24 * 60 *60 * 1000
}))


// 开启gz
app.use(compress({ threshold: 2048 }))

app.use( async (ctx, next) => {
    const headers = ctx.request.headers
    if(headers.accept && headers.accept.includes('text/html')){
        ctx.type = 'html';
        ctx.body = fs.createReadStream(resolve('dist/index.html'));
    } 
    return next()
})

app.listen(5006)

console.log('http://localhost:5006')