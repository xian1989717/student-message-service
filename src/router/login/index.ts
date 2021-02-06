export { }
const Router: any = require('@koa/router')

const router: any = new Router()

const {
  randerHtml,
  registerHtml,
  register,
  checkAccount
} = require('../../service')

router
  .get('/login', randerHtml)
  .get('/register', registerHtml)
  .post('/register', register)
  .get('/register/check', checkAccount)

module.exports = router