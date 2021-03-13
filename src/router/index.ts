export { }
const Router: any = require('@koa/router')

const router: any = new Router()
const loginRouter: any = require('./login')
const studentInformationRouter: any = require('./student-information')



router.use(loginRouter.routes())
router.use(studentInformationRouter.routes())

module.exports = {
  router
}