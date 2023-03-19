export function deletePost(elem) {
    elem.addEventListener('click', e => {
        const postText = elem.closest('.post-content').querySelector('.post-message p');
        postText.classList.add('deleted');
        postText.innerHTML = 'Это сообщение было удалено пользователем.';
        elem.style.display = 'none';
    })
}