/**
 * Created by dell on 2017/11/28.
 */
function displayAbbreviations() {
    //判断检测
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //显示abbr列表
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //开始遍历
    for (var i=0; i<abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");//获得title属性
        var key = abbreviations[i].lastChild.nodeValue;//获得key键
        defs[key] = definition;
    }
    //取出键值，创建列表标签
    var dlist = document.createElement("dl");
    for (key in defs) {
        /**
         * <dt></dt><dd></dd>形式表
         * @type {Element}
         */
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createElement("dd");
        var definition = defs[key];
        dtitle.appendChild(document.createTextNode(key));
        dtitle_text.appendChild(document.createTextNode(definition));
        dlist.appendChild(dtitle);
        dlist.appendChild(dtitle_text);
    }
    //加入到body中
    var header = document.createElement("h2");
    header.appendChild(document.createTextNode("Abbreviations"));
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    if (quotes.length < 1)  return false;
    for (var i=0; i<quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length-1];
        var link = document.createElement("a");
        link.appendChild(document.createTextNode("source"));
        link.setAttribute("href", url);
        var sup = document.createElement("sup");
        sup.appendChild(link);
        elem.appendChild(sup);
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

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations());