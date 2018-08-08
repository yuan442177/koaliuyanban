/**
 * 回收站相关
 */
//查看zgmxqj网站表单留言
function getDataHuishou() {
    //window.location.href = "/admin1";

    if (document.getElementById("selectTime")) {
        document.getElementById("selectTime").parentNode.removeChild(document.getElementById("selectTime"));
    }
    var data = {
        del: '1'
    }
    $.ajax({
        data: data,
        type: "POST",
        url: "/admin1/huishouzhan",
        async: false,
        success: function (data) {
            debugger
            console.log(data)
            count = data.length
            //<thead> <tr> <th>ID</th><th>姓名</th> <th>号码</th> <th>时间</th> <th>地址</th> <th>IP</th> <th>来源</th> <th>状态/操作</th> </tr> </thead>
            var str_thead = "<table id='allMsg' class='table'><thead> <tr> <th>ID</th><th>姓名</th> <th>号码</th><th>QQ</th> <th>时间</th> <th>地址</th> <th>IP</th> <th>来源</th> <th>状态</th> <th>操作</th></tr> </thead><tbody>";
            var str_tbody = ""
            var huifu = '恢复'
            var remove = '彻底删除'
            var E_delect = '"确定删除吗?此操作将造成数据的不可恢复,请谨慎操作!"'
            for (var i = 0; i < data.length; i++) {
                str_tbody += "<tr><td>" + data[i].id + "</td>" +
                    "<td>" + data[i].name + "</td><td>" + data[i].tel + "</td><td>" + data[i].qq + "</td>" +
                    "<td>" + data[i].time + "</td><td>" + data[i].ads + "</td>" +
                    "<td>" + data[i].ip + "</td><td>" + data[i].url + "</td>" +
                    "<td>" + data[i].sta + "</td>" +
                    "<td class='tdC'><input type='button' id=" + data[i].id + " onclick='huifu(" + data[i].id + ")' class='upsta btn btn-default' value='" + huifu + "'>" +
                    "<input type='button' id=" + data[i].id + " onclick='cddelect(" + data[i].id + ")' class='cddeletes btn btn-default' value='" + remove + "'>" +
                    "</td></tr>"

            }
            var str_table = str_thead + str_tbody
            document.getElementById('Article').innerHTML = ''
            document.getElementById('Article').innerHTML = str_table
            document.getElementById('pagination_12').style.display = 'none'
            console.log('已获取到最新留言数据')
        },
        error: function () {
            // 状态码
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 错误信息   
            console.log(textStatus);
        }
    });
}
//删除
function cddelect(id) {
    if (confirm("确定删除吗?此操作将造成数据的不可恢复,请谨慎操作!")) {
        // var id = $(this).attr('id')
        let data = {
            id: id,
            tag: 'msg'
        }
        $.ajax({
            url: "/admin1/del",
            data: data,
            type: "POST",
            success: function (msg) {
                debugger
                if (msg) {
                    // alert('删除成功!')
                    // window.location.href = "/admin1";
                    getDataHuishou()
                }
                else {
                    alert('删除失败!')
                }

            },
            error: function () {
                alert('异常');
            }
        })
    }
    else {
        // alert("取消删除")
        return;
    }

}
//恢复
function huifu(id) {
    if (confirm("将恢复到留言列表确定吗?")) {
        // var id = $(this).attr('id')
        let data = {
            id: id,
            del: '2',
            tag: 'msg'
        }
        $.ajax({
            url: "/admin1/huishou",
            data: data,
            type: "POST",
            success: function (msg) {
                debugger
                if (msg) {
                    // alert('恢复成功!')
                    // window.location.href = "/admin1";
                    getDataHuishou()
                }
                else {
                    alert('恢复失败!')
                }

            },
            error: function () {
                alert('异常');
            }
        })
    }
    else {
        alert("取消删除")
        return;
    }
}