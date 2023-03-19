import { createPost } from "../createPost.js";
import { clearForm } from "../helpers/clearForm.js";
import { countComments } from "../countComments.js";
import { errorOnElement } from "../error/errorOnElement.js";

export function addNewPost(elem) {
    elem.addEventListener('click', e => {
        e.preventDefault();

        // убираем сообщения об ошибках
        const errors = elem.closest('.textarea').querySelectorAll('.error');
        for (let errorElem of errors) {
            if (errorElem.tagName == 'SPAN') {
                errorElem.innerHTML = "";
            }
            else {
                errorElem.classList.remove('error');
            }
        }

        try {
            let addPost = createPost.bind(elem);
            const divTextarea = elem.closest('.textarea');
            divTextarea.after(addPost());

            // очищаем форму
            clearForm(divTextarea.firstElementChild);
            divTextarea.querySelector('.textarea-text').style = `height:151px;overflow-y:hidden;`;

            const errors = elem.closest('.textarea').querySelectorAll('.error');
        for (let errorElem of errors) {
            if (errorElem.tagName == 'SPAN') {
                errorElem.innerHTML = "";
            }
            else {
                errorElem.classList.remove('error');
            }
        }
            // удаляем новую форму после отрисовки поста
            const buttonsForms = document.querySelectorAll('.post-actions__button');
            if (buttonsForms.length > 1 && elem != buttonsForms[0]) {
                divTextarea.remove();
            }

            // меняем количество комментариев
            countComments();
        } catch (error) {
            if (error.name == "ValidationError") {
                for (let element of error.elem) {
                    errorOnElement(element, error);
                }
            }
            else {
                console.log(error);
            }

        }

    });
}