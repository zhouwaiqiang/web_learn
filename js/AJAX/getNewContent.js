/**
 * Created by dell on 2017/11/24.
 */
function getNewContent() {
    var request = new getHTTPObject();//获取request对象
    if (request) {
        //处理获取新内容
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            } else {
                alert("error");
            }
        };
    } else {
        alert('sorry, your browser doesn\'t support XMLHttpRequest');
    }
}

function addLoadEvent(func) {
    //该函数的作用是收录所有window.onload操作,使其可以并行执行
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        //有新的直接覆盖
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(getNewContent);

