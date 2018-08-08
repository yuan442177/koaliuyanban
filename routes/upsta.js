const router = require('koa-router')()
var userModel = require('../bin/mysql.js');

router.prefix('/upsta')

// 更新留言状态
router.get('/', async (ctx, next) => {
    // ctx.body = '更新留言状态'
    console.log('更新留言状态'+ctx.body)
    //let data = await userModel.updatePost('已审核', ctx.query.id)
    // console.log('updataadmin' + JSON.stringify(data))
    // await ctx.render('admin', {
    //     data
    // })
})

module.exports = router