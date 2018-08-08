const router = require('koa-router')()
var userModel=require('../bin/mysql.js');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    session:ctx.session
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
/**
 * 注销
 */
router.get('/loginout',async (ctx,next)=>{
  ctx.session=null;
  console.log('登出成功')
  ctx.body='true'
  ctx.redirect('/')
})



module.exports = router
