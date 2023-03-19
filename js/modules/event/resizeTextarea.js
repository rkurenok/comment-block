export function resizeTextarea(elem) {
    elem.setAttribute("style", "height:" + (elem.scrollHeight + 36) + "px;overflow-y:hidden;");
    elem.addEventListener("input", e => {
        elem.style.height = 0;
        elem.style.height = (elem.scrollHeight) + "px";
        console.log(elem.scrollHeight);
    }, false);
}