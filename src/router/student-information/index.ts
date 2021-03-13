export { }
const Router: any = require('@koa/router')

const router: any = new Router()

const {
  addStudents
} = require('../../service')

router
  .post('/student', addStudents)

module.exports = router
