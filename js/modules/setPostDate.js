import { ValidationError } from "./error/ValidationError.js";

export function setPostDate(date) {
    let result;
    let temp = date.value;
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let diffInDays = -1;
    if (date.value.trim()) {
        temp = date.value.split('.').map(el => Number(el)); // избавляенмся от лишних нудей в дате
        day = temp[0];
        month = temp[1];
        let today = new Date(now.getFullYear(), month - 1, day);
        let diff = now - today; // разница в миллисекундах
        diffInDays = diff / 1000 / 60 / 60 / 24; // разница в днях
    }
    else {
        diffInDays = 0;
    }

    if (isNaN(diffInDays) || (day <= 0 || day > 31) || (month <= 0 || month > 12)) {
        throw new ValidationError([date], "* Неверный формат (пример даты: 30.05)");
    } 
    
    [day, month, hours, minutes] = [day, month, hours, minutes].map(el => String(el).padStart(2, "0"));

    if (diffInDays > 1 && diffInDays < 2) {
        result = 'Вчера, ';
    }
    else if (diffInDays < 1 && diffInDays >= 0) {
        result = 'Сегодня, ';
    }
    else {
        result = `${day}.${month}, `;
    }

    return result + `${hours}:${minutes}`;
}