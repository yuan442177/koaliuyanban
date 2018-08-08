const router = require('koa-router')()
// 处理数据库（之前已经写好，在mysql.js）
var userModel=require('../bin/mysql.js');
// 加密
var md5=require('md5')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

/**
 * 注册/登录
 */
/**
 * 登录
 */
// get '/signin'登录页面
router.get('/login',async (ctx,next)=>{
  await ctx.render('login',{
      session:ctx.session,
  })
})
// console.log(session);
// post '/signin'登录页面
router.post('/login',async (ctx,next)=>{
  console.log(ctx.request.body)
  var name=ctx.request.body.name;
  var pass=ctx.request.body.password;

  // 这里先查找用户名存在与否，存在则判断密码正确与否，不存在就返回false
  await userModel.findDataByName(name)
      .then(result =>{
          // console.log(reslut)
          var res=JSON.parse(JSON.stringify(result))
          if (name === res[0]['name'] && md5(pass) === res[0]['pass']) {
              ctx.body='true'
              // ctx.flash.success='登录成功!';
              ctx.session.user=res[0]['name']
              ctx.session.id=res[0]['id']
              console.log('ctx.session.id',ctx.session.id)
              // ctx.redirect('/posts')
              console.log('session',ctx.session)
              console.log('登录成功')
          }               
       }).catch(err=>{
          ctx.body='false'
          console.log('用户名或密码错误!')
          // ctx.redirect('/signin')
       })
})

/**
 * 注册
 */
router.get('/register', async (ctx, next) => {
  await ctx.render('register', {
    title: '注册',
    session:ctx.session
  })
})

// POST '/register' 注册页
router.post('/register',async (ctx,next)=>{
  //console.log('zhuce')
  //console.log(ctx.request.body)
  let open = false
  var user={
      name:ctx.request.body.name,
      pass:ctx.request.body.password,
      repeatpass:ctx.request.body.repeatpass
  }
  if(open){
    await userModel.findDataByName(user.name)
    .then(result=>{
        // var res=JSON.parse(JSON.stringify(reslut))
        console.log(result)

        if (result.length){
            try {
                throw Error('用户存在')
            }catch (error){
                //处理err
                console.log(error)  
            }           
            ctx.body={
                data:1
            };;             
        }else if (user.pass!==user.repeatpass || user.pass==''){
            ctx.body={
                data:2
            };              
        }else{
            ctx.body={
                data:3
            };
            console.log('注册成功')
            console.log(ctx.session)
            // ctx.session.user=ctx.request.body.name
            userModel.insertData([ctx.request.body.name,md5(ctx.request.body.password)])
        }                           
    })
  }else{
    ctx.body={
        data:4
    };
  }
})

module.exports = router
