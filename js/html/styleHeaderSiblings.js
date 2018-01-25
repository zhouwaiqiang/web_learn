/**
 * Created by dell on 2017/11/29.
 */
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
        elem.style.color = "yellow";
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
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

addLoadEvent(styleHeaderSiblings);