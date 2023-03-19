import { clearForm } from "../helpers/clearForm.js";
import { addNewPost } from "./addNewPost.js";
import { inputValidation } from "./inputValidation.js";

export function replyPost(elem) {
    elem.addEventListener('click', e => {
        let target = e.target;
        const postContent = target.closest('.post-content');

        if (postContent.nextElementSibling && postContent.nextElementSibling.classList.contains('textarea')) return false; // если уже есть форма в этой ветке - новую не создаем

        let formClone = document.querySelector('div.textarea').cloneNode(true); // клонируем форму
        clearForm(formClone.firstElementChild); // очищаем новую форму
        addNewPost(formClone.querySelector('.post-actions__button')); // вешаем обработчик на кнопку новой формы
        inputValidation(formClone.firstElementChild); // вешаем обработчики на поля формы
        formClone.querySelectorAll('.error').forEach(err => {
            if (err.tagName == 'SPAN') {
                err.innerHTML = "";
            }
            else {
                err.classList.remove('error');
            }
        })
        formClone.querySelector('.textarea-text').style = `height:151px;overflow-y:hidden;`;
        postContent.after(formClone);
    });
}