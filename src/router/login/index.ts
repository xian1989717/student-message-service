export { }
const Router: any = require('@koa/router')

const router: any = new Router()

const {
  randerHtml,
  registerHtml,
  register,
  checkAccount,
  login,
  getMessage
} = require('../../service')

router
  .get('/login', randerHtml)
  .get('/register', registerHtml)
  .get('/register/check', checkAccount)
  .post('/register', register)
  .post('/login', login)
  .get('/register/message', getMessage)

module.exports = router