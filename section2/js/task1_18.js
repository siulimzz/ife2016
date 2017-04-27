//事件绑定函数，兼容浏览器差异
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
    else {
        element["on" + event] = listener;
    }
}
var screen = document.getElementById('num-input');
var btn = document.getElementsByTagName("input");
var ul = document.getElementsByTagName('ul')[0];
btn[1].onclick = function () {
    if (screen.value.length <= 0) {
        alert('输入为空');
        return false;
    }
    var newNode = document.createElement('li');
    newNode.innerHTML = screen.value;
    //if (ul.childElementCount== 0) {
      //  ul.appendChild(newNode);
    //}else{
    ul.insertBefore(newNode, ul.firstChild);
    //screen.value = null;
}
btn[2].onclick = function () {
    if (screen.value.length <= 0) {
        alert('输入为空');
        return false;
    }
    var newNode = document.createElement('li');
    newNode.innerHTML = screen.value;
    ul.appendChild(newNode);
    screen.value = null;
}
btn[3].onclick = function () {
    if (ul.hasChildNodes()) {
        alert(ul.firstChild.innerHTML);
        ul.removeChild(ul.firstChild);
    } else {
        alert('队列为空');
        return false;
    }
}
btn[4].onclick = function () {
    if (ul.hasChildNodes()) {
        alert(ul.lastChild.innerHTML);
        ul.removeChild(ul.lastChild);
    } else {
        alert('队列为空');
        return false;
    }
}
