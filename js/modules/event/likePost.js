export function likePost(elem) {
    elem.addEventListener('click', e => {
        elem.classList.toggle('fa-heart-o');
        elem.classList.toggle('fa-heart');
        if (elem.classList.contains('fa-heart')) {
            elem.style.color = "red";
        }
        else {
            elem.style.color = "";
        }
    })
}