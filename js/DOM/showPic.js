/**
 * Created by dell on 2017/11/17.
 */

function preparePlaceholder() {
    //测试
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    //动态创建图片
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("name", "IMG");
    placeholder.setAttribute("src","../image/bulbon.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
    //document.getElementsByTagName("body")[0].appendChild(placeholder);
    //document.getElementsByTagName("body")[0].appendChild(description);
    //document.body.appendChild(placeholder);
    //document.body.appendChild(description);
}

function showPic(whichpic) {
            //首先需要做检测和测试
            if (!document.getElementById("placeholder")) return false;
            var source = whichpic.getAttribute("href");
            var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
            var placeholder = document.getElementById("placeholder");
            if (placeholder.nodeName != "IMG") return false;
            if (document.getElementById("description")) {
                var descrition = document.getElementById("description");
                placeholder.setAttribute("src", source);
                /*这是一种方式可以改变内容的值
                descrition.innerHTML = text;*/
                //使用 DOM中的childNodes实现，在childNodes中第一个节点可以用firstChild代替，最后一个可以用lastChild代替
                //nodeValue可以获得节点变量值
                descrition.firstChild.nodeValue = text;
            }
            return true;
        }
function countBodyChildren() {
    /*getElementsByTagName可以得到body元素，但是该方法是返回所有的body元素，因为在一个html文件中只有一个
    body元素，所以索引为0，然后通过childNodes属性可以获得所有的子节点
     */
    var body_element = document.getElementsByTagName("body")[0];
    //alert("数量为："+body_element.childNodes.length);
    alert(body_element.nodeType);
}

function prepareGallery() {
    //将javascript和html分离
    //检查是否支持js功能，仅仅是测试，但是很有用
    if (!document.getElementsByTagName) return false;//测试用时，去掉括号
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) {
        //如果不支持则直接返回false
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
            return showPic(this)?false:true;
        };
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
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;//找到父节点
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);//如果target是最后一个节点就在后面接上
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);//在target后的兄弟节点之前插入
    }
}
alert("执行我");
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);