const Koa = require('koa')
const path = require('path')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
// const compress = require('koa-compress')
const session = require('koa-session')
const views = require('koa-views')

const app = new Koa()

const {
  router
} = require('./src/router/index')

// session
app.keys = ['some secret hurr']

const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 30 * 60 * 1000,  // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true,  //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true,   //签名默认true
  rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false,  //(boolean) renew session when session is nearly expired,
}
app.use(session(CONFIG, app))
// 添加模板引擎
app.use(views(path.join(__dirname, './public/view'), { extension: 'ejs' }))
// gizp压缩
// app.use(compress({ threshold: 1024 }))
// 跨域
// app.use(cors())
// 解析body
app.use(bodyParser())
// 路由
app
  .use(router.routes())
  .use(router.allowedMethods())

app.use((ctx: any, next: any) => {
  if (ctx.request.path === '/') {
    ctx.response.redirect('/login')
  }
  next()
})

app.listen(3002, () => {
  console.log('service is start! post is 3002')
})