const router = require('koa-router')()
var userModel = require('../bin/mysql.js');

router.prefix('/admin')

// router.get('/', async (ctx, next) => {
//   await ctx.render('admin', {
//     session:ctx.session,
//     posts:''
//   })
// })

router.get('/', async (ctx, next) => {
    // console.log(ctx.session.isLogin)
    await ctx.render('admin', {
        session: ctx.session,
        posts: '1'
    })
})
//获取留言列表
router.post('/', async (ctx, next) => {
    await userModel.findAllPost()
        .then(result => {
            // console.log(result)
            res = JSON.parse(JSON.stringify(result))
            // console.log('post json', res)
            ctx.body = res;
        }).catch(() => {
            ctx.body = 'false'
        })
    // await ctx.render('admin', {
    //     session: ctx.session,
    //     msgJson: res
    // })
})

// 更新留言
// router.post('/upsta', async (ctx, next) => {
//     ctx.body = '更新留言状态'
//     console.log('更新留言状态'+ctx.body)
//     //let data = await userModel.updatePost('已审核', ctx.query.id)
//     // console.log('updataadmin' + JSON.stringify(data))
//     // await ctx.render('admin', {
//     //     data
//     // })
// })
router.post('/upsta',async (ctx,next)=>{
    console.log(ctx.request.body)
    var sta=ctx.request.body.sta
    var id=ctx.request.body.id
    let result = await userModel.updatePost(sta,id)
    console.log(result)
    if(result.affectedRows == 1){
        ctx.body = 'true'
    }else{
        ctx.body = 'false'
    }
  })
  
    /**
     * 文章分页查询
     */
router.post('allInPage',async(ctx,next)=>{
        let pageSize = ctx.request.body.pageSize
        let pageIndex = ctx.request.body.pageIndex
        let result = []
        let count = await userModel.count('msg')
        let _sql = `SELECT * FROM msg  LIMIT ${pageIndex}, ${pageSize}`
        let data = await userModel.query( _sql )
        if(Array.isArray(data) && data.length > 0 ){
            result[0] = count
            result[1] = data
            return result
        } else {
            result = null
        }
})
module.exports = router