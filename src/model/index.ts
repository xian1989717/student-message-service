const user = require('./user')
const student = require('./student')
const myGrade = require('./grade.ts')
const myClass = require('./class.ts')

module.exports = {
  ...user,
  ...student,
  ...myGrade,
  ...myClass
}