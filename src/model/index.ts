const user = require('./user')
const student = require('./student')

module.exports = {
  ...user,
  ...student
}