export { }
const { httpUrl } = require('../../../const')
const { user, myGrade, myClass } = require('../../model/index')

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
  const res = await user.create(Object.assign(
    ctx.request.body,
    {
      isRemoved: false,
      isClassTeacher: false,
      createTime: new Date(),
      updateTime: new Date()
    }
  ))
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

async function login (ctx: any) {
  if (!ctx.session.userinfo) {
    const { account, password } = ctx.request.body
    const res = await user.findOne({
      where: {
        account,
        password,
        isRemoved: false
      }
    })
    if (res) {
      ctx.session.userinfo = ctx.request.body
    } else {
      ctx.response.type = 'html'
      ctx.response.body = '<script>alert("账号或者密码错误，请重试！");window.location.href="/login"</script>'
    }
  }
  ctx.redirect(httpUrl)
}

async function getMessage (ctx: any) {
  const { userName } = ctx.query

  const [data1, data2] = await Promise.all([
    myGrade.findAll({
      attributes: ['id', 'name'],
      where: {
        isRemoved: false
      }
    }),
    myClass.findAll({
      attributes: ['id', 'gradeId', 'name'],
      where: {
        isRemoved: false
      }
    })
  ])
  ctx.body = {
    state: true,
    data: {
      grade: data1,
      class: data2
    }
  }
}

module.exports = {
  randerHtml,
  registerHtml,
  register,
  checkAccount,
  login,
  getMessage
}