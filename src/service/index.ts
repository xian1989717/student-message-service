const login = require('./login')
const studentInformation = require('./student-information')

module.exports = {
  ...login,
  ...studentInformation
}