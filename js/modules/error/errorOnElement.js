export function errorOnElement(element, error) {
    element.classList.add('error');
    let borderError = element.parentElement.parentElement;
    borderError.classList.add('error');
    let span = borderError.parentElement.firstElementChild;
    span.innerHTML = error.message;
}