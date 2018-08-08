let pageSize = 8
let count = ""
let date1 = ""
let date2 = ""

function addAllData() {
    getData(0)
    console.log(count)
    $("#pagination_12").whjPaging({
        css: 'css-2',
        totalSize: count,
        totalPage: Math.ceil(count / pageSize),
        isShowTotalSize: true,
        isShowTotalPage: false,
        isShowRefresh: false,
        isShowSkip: false,
        isShowPageSizeOpt: false,
        callBack: function (currPage, pageSize) {
            console.log('currPage:' + currPage + '     pageSize:' + pageSize);
            //setDatePageIndex = (currPage - 1) * 8
            getData((currPage - 1) * 8)

        }
    });
}

//查询所有数据
function getData(clickPage) {
    $.ajax({
        type: "POST",
        url: "/admin1/allInPage",
        async: false,
        data: { pageSize: pageSize, pageIndex: clickPage },//pageIndex起始位置
        success: function (data) {
            console.log(data)
            count = data[0][0].msg
            //<thead> <tr> <th>ID</th><th>姓名</th> <th>号码</th> <th>时间</th> <th>地址</th> <th>IP</th> <th>来源</th> <th>状态/操作</th> </tr> </thead>
            var str_thead = "<table id='allMsg' class='table'><thead> <tr> <th>ID</th><th>姓名</th> <th>号码</th><th>QQ</th> <th>时间</th> <th>地址</th> <th>IP</th> <th>来源</th> <th>状态/操作</th> </tr> </thead><tbody>";
            var str_tbody = ""
            var update = '未审核'
            var remove = '回收'
            var E_delect = '"确定删除吗"'
            for (var i = 0; i < data[1].length; i++) {
                str_tbody += "<tr><td>" + data[1][i].id + "</td>" +
                    "<td>" + data[1][i].name + "</td><td>" + data[1][i].tel + "</td><td>" + data[1][i].qq + "</td>" +
                    "<td>" + data[1][i].time + "</td><td>" + data[1][i].ads + "</td>" +
                    "<td>" + data[1][i].ip + "</td><td>" + data[1][i].url + "</td>" +
                    "<td class='tdC'><input type='button' id=" + data[1][i].id + " class='upsta btn btn-default' value='" + data[1][i].sta + "'>" +
                    "<input type='button' id=" + data[1][i].id + " class='delete btn btn-default' value='" + remove + "'>" +
                    "</td></tr>"

            }
            var str_table = str_thead + str_tbody
            document.getElementById('Article').innerHTML = ''
            document.getElementById('Article').innerHTML = str_table
            var a = document.getElementsByClassName("upsta")
            for (let i = 0; i < a.length; i++) {
                if (a[i].value == '未审核') {
                    a[i].className = 'upsta btn btn-danger'
                } else {
                    a[i].className = 'upsta btn btn-success'
                }
            }
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
    //更新状态
    $('.upsta').click(function () {
        console.log($(this).attr('id'));
        console.log($(this).attr('value'));
        var sta = $(this).attr('value')
        var setClass = $(this).attr('class');
        var id = $(this).attr('id')
        //var ids = '#'+id;
        if (sta == '未审核') {
            sta = '已审核'
            $(this).attr("class", "upsta btn btn-success")
        } else if (sta == '已审核') {
            sta = '未审核'
            $(this).attr("class", "upsta btn btn-danger")
        } else {
            sta = '已审核'
        }
        var data = {
            sta: sta,
            id: id
        }
        $.ajax({
            type: "post",
            url: "/admin/upsta",
            data: data,
            success: function (rul) {
                console.log(rul)
                //$(this).attr('value') = sta
                var setValueId = document.getElementById(id)
                setValueId.value = sta
                console.log(setValueId)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息   
                console.log(textStatus);
            }
        })
    });

    //移到回收站
    $('.delete').click(function () {
        if (confirm("将移动到回收站?")) {
            var id = $(this).attr('id')

            let data = {
                id: id,
                del: '1',
                tag: 'msg'
            }
            $.ajax({
                url: "/admin1/huishou",
                data: data,
                type: "POST",
                success: function (msg) {
                    debugger
                    if (msg) {
                        // alert('成功!')
                        window.location.href = "/admin1";
                    }
                    else {
                        alert('失败!')
                    }

                },
                error: function () {
                    alert('异常');
                }
            })
        }
        else {
            alert("取消")
            return;
        }


    })
}

