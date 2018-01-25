/**
 * Created by 强 on 2017/12/29.
 */
/**
function addLoadEvent(func) {
    var oldonload = window.onload();
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.postion = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";

}*/