const router = require('koa-router')()
var userModel = require('../bin/mysql.js');
var del = require('../server/del.js');
// 真分页
router.prefix('/admin1')

// router.get('/', async (ctx, next) => {
//   await ctx.render('admin', {
//     session:ctx.session,
//     posts:''
//   })
// })

router.get('/', async (ctx, next) => {
    // console.log(ctx.session.isLogin)
    await ctx.render('admin1', {
        session: ctx.session,
        posts: '1'
    })
})
/**
 * 导出到Excel页面
 */
router.get('/outexcel', async (ctx, next) => {
    // console.log(ctx.session.isLogin)
    if (ctx.session && ctx.session.user) {
        await ctx.render('OutExcel', {
            session: ctx.session,
            posts: '1'
        })
    } else {
        ctx.redirect('/')
    }
})
//获取留言列表
router.post('/', async (ctx, next) => {
    await userModel.findAllPost('msg')
        .then(result => {
            // console.log(result)
            res = JSON.parse(JSON.stringify(result))
            // console.log('post json', res)
            ctx.body = res;
        }).catch(() => {
            ctx.body = 'false'
        })
})
//获取留言列表2 回收站备份数据
router.post('/huishouzhan', async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        var del = ctx.request.body.del
        await userModel.selectInDel(del)
            .then(result => {
                // console.log(result)
                res = JSON.parse(JSON.stringify(result))
                // console.log('post json', res)
                ctx.body = res;
            }).catch(() => {
                ctx.body = 'false'
            })
    } else {
        ctx.body = '非法访问!'
    }
})

/**
 * 更新留言状态
 */
router.post('/upsta', async (ctx, next) => {
    //console.log(ctx.request.body)
    var sta = ctx.request.body.sta
    var id = ctx.request.body.id
    let result = await userModel.updatePost(sta, id)
    //console.log(result)
    if (result.affectedRows == 1) {
        ctx.body = 'true'
    } else {
        ctx.body = 'false'
    }
})

/**
 * 文章分页查询
 */
router.post('/allInPage', async (ctx, next) => {
    let pageSize = ctx.request.body.pageSize
    let pageIndex = ctx.request.body.pageIndex
    let del = `'2'`
    let result = []
    let count = await userModel.count('msg')
    let _sql = `SELECT * FROM msg where del = ${del} order by id desc LIMIT ${pageIndex}, ${pageSize}`
    let data = await userModel.query(_sql)
    //console.log(data)
    if (Array.isArray(data) && data.length > 0) {
        result[0] = count
        result[1] = data
        //console.log(result)
        ctx.body = result
    } else {
        result = null
    }
})
/**
 * 20180524新增
 * 20180524完成
 * 删除留言
 */
router.post('/del', async (ctx, next) => {
    if (ctx.session && ctx.session.user) {
        console.log(ctx.request.body)
        console.log('删除ID为' + JSON.stringify(ctx.request.body.id))
        if (ctx.request.body.id) {
            if (ctx.request.body.tag == 'msg') {
                let table = 'msg'
                // console.log('从表执行删除' + table)
                let result = await del.delete('msg', ctx.request.body.id)
                // console.log('sql执行返回' + JSON.stringify(result))
                if (result.affectedRows == 1) {
                    ctx.body = 'true'
                } else {
                    ctx.body = 'false'
                }

            } else if (ctx.request.body.tag == 'user') {
                let table = 'users'
                // console.log('从表执行删除' + table)
                let result = await userModel.deleteDataById('users', ctx.request.body.id)
                // console.log('sql执行返回' + JSON.stringify(result))
                if (result.affectedRows == 1) {
                    ctx.body = 'true'
                } else {
                    ctx.body = 'false'
                }

            }

        } else {
            // console.log('取消删除')
            ctx.body = '取消删除'

        }
    }
    else {
        // 没有登录态则跳转到错误页面
        await ctx.render('error', {
            body: 'error'
        })
    }

})

/**
 * 添加到回收站
 */
router.post('/huishou', async (ctx, next) => {
    console.log("送到回收站1")
    console.log(ctx.request.body)
    var del = ctx.request.body.del
    var id = ctx.request.body.id
    let result = await userModel.huishou(del, id)
    console.log("送到回收站2")
    console.log(result)
    if (result.affectedRows == 1) {
        ctx.body = 'true'
    } else {
        ctx.body = 'false'
    }
})
router.post('/huifu', async (ctx, next) => {
    console.log("回收站恢复至留言列表1")
    console.log(ctx.request.body)
    var del = ctx.request.body.del
    var id = ctx.request.body.id
    let result = await userModel.huishou(del, id)
    console.log("回收站恢复至留言列表2")
    console.log(result)
    if (result.affectedRows == 1) {
        ctx.body = 'true'
    } else {
        ctx.body = 'false'
    }
})
/**
 * 20180525增加按时间查询数据
 * 
 */
router.post('/selectByDate', async (ctx, next) => {
    //console.log(ctx.request.body)
    // let pageSize = ctx.request.body.pageSize
    // let pageIndex = ctx.request.body.pageIndex
    let time1 = ctx.request.body.time1
    let time2 = ctx.request.body.time2
    let result = []
    let count = await userModel.count('msg')
    let _sql = `SELECT * FROM msg where time between '${time1}' and '${time2}' order by id desc`
    // let _sql = `SELECT * FROM msg where time between ${time1} and ${time2} order by id desc LIMIT ${pageIndex}, ${pageSize}`
    let data = await userModel.query(_sql)
    //console.log(data)
    if (Array.isArray(data) && data.length > 0) {
        result[0] = count
        result[1] = data
        //console.log('数据返回集:' + JSON.stringify(result))
        ctx.body = result
    } else {
        result = false
        ctx.body = result
    }
})

/**
 * 按时间查找数据分页
 */
router.post('/selectByDateInPage', async (ctx, next) => {
    //console.log(ctx.request.body)
    // let pageSize = ctx.request.body.pageSize
    // let pageIndex = ctx.request.body.pageIndex
    let pageSize = ctx.request.body.pageSize
    let pageIndex = ctx.request.body.pageIndex
    let time1 = ctx.request.body.time1
    let time2 = ctx.request.body.time2
    let result = []
    let count = await userModel.count('msg')
    // let _sql = `SELECT * FROM msg where time between '${time1}' and '${time2}' order by id desc`
    let _sql = `SELECT * FROM msg where time between '${time1}' and '${time2}' order by id desc LIMIT ${pageIndex}, ${pageSize}`
    console.log('sql' + _sql)
    let data = await userModel.query(_sql)
    //console.log(data)
    if (Array.isArray(data) && data.length > 0) {
        result[0] = count
        result[1] = data
        //console.log('数据返回集:' + JSON.stringify(result))
        ctx.body = result
    } else {
        result = false
        ctx.body = result
    }
})

module.exports = router