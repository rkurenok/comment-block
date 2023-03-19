import { setPostDate } from "../setPostDate.js";
import { validationForm } from "../helpers/validationForm.js";
import { errorOnElement } from "../error/errorOnElement.js";
export function inputValidation(form) {
    let text = form.elements.text;
    let date = form.elements.display_date;
    let name = form.elements.display_name;

    [text, date, name].forEach(field => {
        field.addEventListener('input', e => {
            try {
                if (field.name == "display_date") {
                    date.setAttribute('data-time', setPostDate(date));
                }
                // проверяем содержимое поля
                [field] = validationForm([field]);

                // если не пустое - удаляем ошибки
                field.classList.remove('error');
                let borderError = field.parentElement.parentElement;
                borderError.classList.remove('error');
                let span = borderError.parentElement.firstElementChild;
                span.innerHTML = "";
            } catch (e) {
                // иначе добавляем ошибки
                errorOnElement(field, e);
            }
        })
    })

}