export { }
const { student } = require('../../model/index')

async function addStudents (ctx: any) {
  const res = await student.create(Object.assign(
    ctx.request.body,
    {
      isRemoved: false,
      createTime: new Date(),
      updateTime: new Date()
    }
  ))
  if (res) {
    ctx.body = true
  }
}

module.exports = {
  addStudents
}