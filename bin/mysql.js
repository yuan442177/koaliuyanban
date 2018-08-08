var mysql = require('mysql');
var config = require('../bin/config.js')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let query = function (sql, values) {
    console.log('mysql')
    console.log(sql)
    console.log(values)
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

// 注册用户
let insertData = function (value) {
    let _sql = "insert into users(name,pass) values(?,?);"
    console.log(_sql)
    //insert into users(name,pass) values(?,?);
    return query(_sql, value)
}
// 通过名字查找用户
let findDataByName = function (name) {
    let _sql = `
      SELECT * from users
        where name="${name}"
        `
    return query(_sql)
}
// 发表留言
//[name,tel,date,ads,ip,url]
let insertPost = function (value) {
    let _sql = "insert into msg(name,tel,time,ads,ip,url,sta,QQ) values(?,?,?,?,?,?,?,?);"
    console.log(_sql)
    //insert into msg(name,tel,time,ads,ip,url) values(?,?,?,?,?,?);
    return query(_sql, value)
}
let insertPost2 = function (value) {
    let _sql = "insert into msg2(name,tel,time,ads,ip,url,sta) values(?,?,?,?,?,?,?);"
    console.log(_sql)
    //insert into msg(name,tel,time,ads,ip,url) values(?,?,?,?,?,?);
    return query(_sql, value)
}
// 查询所有留言
let findAllPost = function (table) {
    let _sql = `
      SELECT * FROM ${table} order by id desc
        `
    return query(_sql)
}
// 更新留言状态
let updatePost = function (sta, values) {
    let _sql = `update msg set sta='${sta}' where id=${values}`
    return query(_sql)
}
// 回收留言/恢复留言
let huishou = function (del, values) {
    let _sql = `update msg set del='${del}' where id=${values}`
    return query(_sql)
}
//更具del值查找数据
let selectInDel = function(del){
    let _sql = `SELECT * FROM msg where del=${del}`
    return query(_sql)
}
//查询表中未被回收留言的数量
let count = function (table) {
    let _sql = "SELECT COUNT(*) AS msg FROM ?? where del=2"
    return query(_sql, [table])
}
//删除操作where id
let deleteDataById = function (table, id) {
    let _sql = "DELETE FROM ?? WHERE id = ?"
    return query(_sql, [table, id])
}
//按日期查询数据
let selectByDate = function (table, date1, date2, pageIndex, pageSize) {
    let _sql = "SELECT * FROM ?? where time between ? and ? order by id desc LIMIT ?, ?"
}

module.exports = {
    query,
    insertData,
    findDataByName,
    insertPost,
    insertPost2,
    findAllPost,
    updatePost,
    huishou,
    selectInDel,
    count,
    deleteDataById
}