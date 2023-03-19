import { validationForm } from "./helpers/validationForm.js";

export function getFormData() {
    const form = this.closest('#addPost'); // получаем форму из контекста
    let text = form.elements.text;
    let date = form.elements.display_date;
    let name = form.elements.display_name;

    let formData = [text, date, name];

    try {
        formData = validationForm(formData);
    } catch (e) {
        throw e;
    }

    return formData;
}