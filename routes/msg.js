const router = require('koa-router')()
// 处理数据库（之前已经写好，在mysql.js）
var userModel=require('../bin/mysql.js');
// 时间中间件
var moment=require('moment')

router.prefix('/msg')

router.get('/', async (ctx, next) => {
  await ctx.render('msg', {
    session: ctx.session
  })
})


router.post('/', async (ctx, next) => {
    console.log(ctx.session.user)
    console.log(ctx.request.body)   
    var name=ctx.request.body.name
    var tel=ctx.request.body.tel
    var QQ=ctx.request.body.QQ
    var date=moment().format('YYYY-MM-DD HH:mm')
    var ads=ctx.request.body.ads
    var ip=ctx.request.body.ip
    var url=ctx.request.body.url
    var sta = '未审核'
    console.log('cerate msg ↓')
    console.log([name,tel,date,ads,ip,url,sta,QQ])
  //   [ '测试',
  // '15973370670',
  // '2018-05-17 10:45',
  // '广东省广州市荔湾区',
  // '58.62.30.21',
  // 'http://127.0.0.1:3000/msg' ]
    // 这里我们向数据库插入用户名、标题、内容、发表文章用户的id、时间，成功返回true，失败为false
    await userModel.insertPost([name,tel,date,ads,ip,url,sta,QQ])
        .then(()=>{
            ctx.body='true'
        }).catch(()=>{
            ctx.body='false'
        })
})

router.post('/2', async (ctx, next) => {
  console.log(ctx.session.user)
  console.log(ctx.request.body)   
  var name=ctx.request.body.name
  var tel=ctx.request.body.tel
  var date=moment().format('YYYY-MM-DD HH:mm')
  var ads=ctx.request.body.ads
  var ip=ctx.request.body.ip
  var url=ctx.request.body.url
  var sta = '未审核'
  console.log('cerate msg ↓')
  console.log([name,tel,date,ads,ip,url,sta])
//   [ '测试',
// '15973370670',
// '2018-05-17 10:45',
// '广东省广州市荔湾区',
// '58.62.30.21',
// 'http://127.0.0.1:3000/msg' ]
  // 这里我们向数据库插入用户名、标题、内容、发表文章用户的id、时间，成功返回true，失败为false
  await userModel.insertPost2([name,tel,date,ads,ip,url,sta])
      .then(()=>{
          ctx.body='true'
      }).catch(()=>{
          ctx.body='false'
      })
})

module.exports = router