export { }
const Router: any = require('@koa/router')

const router: any = new Router()
const loginRouter: any = require('./login')



router.use(loginRouter.routes())

module.exports = {
  router
}