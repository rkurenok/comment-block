import { replyPost } from "./event/replyPost.js";
import { addNewPost } from "./event/addNewPost.js";
import { inputValidation } from "./event/inputValidation.js";
import { resizeTextarea } from "./event/resizeTextarea.js";

export function addComment() {
    const btn = document.querySelector('.post-actions__button');
    const reply = document.querySelectorAll('a.post-footer__action');
    const form = document.querySelector('form#addPost');
    const textarea = document.querySelector('textarea');

    addNewPost(btn); // вешаем обработчик на кнопку формы

    reply.forEach(el => { // вешаем обработчик на ссылки reply
        replyPost(el);
    })

    inputValidation(form); // валидация формы при вводе

    document.addEventListener('keydown', e => { // отправка формы на enter
        if (e.key == "Enter" && !e.shiftKey) {
            e.preventDefault();

            const addBtn = document.activeElement.closest('form#addPost').querySelector('.post-actions__button');
            addBtn.click();
        }
    });

    resizeTextarea(textarea); // увеличение textarea
}