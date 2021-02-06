export { }
const { httpUrl } = require('../../../const')
const { user } = require('../../model/index')

async function randerHtml (ctx: any) {
  const { userinfo } = ctx.session

  if (userinfo && userinfo.account && userinfo.password) {
    ctx.redirect(httpUrl)
  }
  await ctx.render('login')
}

async function registerHtml (ctx: any) {
  await ctx.render('register')
}

async function register (ctx: any) {
  const data = Object.assign(
    ctx.request.body,
    {
      isRemoved: false,
      isClassTeacher: false,
      createTime: new Date(),
      updateTime: new Date()
    }
  )
  console.log(data)
  const res = await user.create(data)
  if (res) {
    ctx.body = true
  }
}
async function checkAccount (ctx: any) {
  const { userName } = ctx.query
  const res = await user.findAll({
    attributes: ['id'],
    where: {
      account: userName,
      isRemoved: false
    }
  })
  if (res.length) {
    ctx.body = '当前账号已被注册'
    return
  }
  ctx.body = '通过'
}

module.exports = {
  randerHtml,
  registerHtml,
  register,
  checkAccount
}