export { }
const Router: any = require('@koa/router')

const router: any = new Router()

const {
  randerHtml
} = require('../../service')

router
  .get('/login', randerHtml)

module.exports = router