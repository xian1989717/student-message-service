export { }
const { httpUrl } = require('../../const')
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
  const res = await user.create(
    Object.assign(
      ctx.request.body,
      {
        isRemoved: false,
        isClassTeacher: false,
        createTime: new Date(),
        updateTime: new Date()
      }
    )
  )
  if (res) {
    ctx.body = true
  }
}

module.exports = {
  randerHtml,
  registerHtml,
  register
}