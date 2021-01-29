export { }
const Router: any = require('@koa/router')

const router: any = new Router()

const {
  randerHtml,
  registerHtml,
  register
} = require('../../service')

router
  .get('/login', randerHtml)
  .get('/register', registerHtml)
  .post('/register', register)

module.exports = router