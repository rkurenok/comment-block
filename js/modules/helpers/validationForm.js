import { setPostDate } from "../setPostDate.js";
import { ValidationError } from "../error/ValidationError.js";

export function validationForm(arr) {
    let errorElements = [];
    for (let dataForm of arr) {
        if (dataForm.name == "display_date") {
            try {
                dataForm.setAttribute('data-time', setPostDate(dataForm));
            } catch (e) {
                throw e;
            }
        }
        if (!dataForm.value.trim() && !dataForm.dataset.time) {
            errorElements.push(dataForm);
        }
    }

    if (errorElements.length != 0) throw new ValidationError(errorElements, "* Поле не может быть пустым");

    return arr;
}