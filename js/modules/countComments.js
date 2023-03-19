export function countComments() {
    const comments = document.querySelectorAll('.post');
    document.querySelector('.comments__count > span').innerHTML = `${comments.length} ` + declOfNum(comments.length, ['комментарий', 'комментария', 'комментариев']);
}

function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}