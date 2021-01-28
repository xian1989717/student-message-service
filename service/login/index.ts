export { }
const { httpUrl } = require('../../const')

async function randerHtml (ctx: any) {
  const { userinfo } = ctx.session

  if (userinfo && userinfo.account && userinfo.password) {
    ctx.redirect(httpUrl)
  }
  await ctx.render('login')
}

module.exports = {
  randerHtml
}