const router = require('koa-router')()
var userModel = require('../bin/mysql.js');

module.exports = {
/**
 * 删除操作
 */
async delete(table,id){
    let result = await userModel.deleteDataById(table, id)
    return result
}
}