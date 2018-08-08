const router = require('koa-router')()
var userModel = require('../bin/mysql.js');

module.exports = {
/**
 * 按时间查找数据
 */
async delete(table,date1,date2,pageIndex,pageSize){
    let result = await userModel.deleteDataById(table,date1,date2,pageIndex,pageSize)
    return result
}
}