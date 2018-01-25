/**
 * Created by 强 on 2017/12/29.
 */
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!documment.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    alert("我被调用了");
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement("+elementID+","+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat, interval);
}