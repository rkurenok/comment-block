import { getFormData } from "./getFormData.js";
import { likePost } from "./event/likePost.js";
import { replyPost } from "./event/replyPost.js";
import { deletePost } from "./event/deletePost.js";

export function createPost() {
    let text, date, name;
    try {
        [text, date, name] = getFormData.bind(this)();
    } catch (e) {
        throw e;
    }

    let ul;
    if (!this.closest('.textarea').nextElementSibling) { // если новая ветка комментариев - создаем ul
        ul = createElem('ul', 'post-list');
    }
    else { // если главная ветка комментариев
        const comments = this.closest('.textarea').nextElementSibling;
        ul = comments.tagName == "DIV" ? comments.firstChild : comments;
    }

    let liPost = createElem('li', 'post');
    ul && ul.append(liPost);

    let divContent = createElem('div', 'post-content');
    liPost.append(divContent);

    let divHeader = createElem('div', 'post-header');
    divContent.append(divHeader);

    let spanAuthor = createElem('span', 'post-author');
    divHeader.append(spanAuthor);
    spanAuthor.innerHTML = name.value;

    let spanDate = createElem('span', 'post-date');
    divHeader.append(spanDate);
    spanDate.innerHTML = date.dataset.time;

    let divBody = createElem('div', 'post-body');
    divContent.append(divBody);

    let divMessage = createElem('div', 'post-message');
    divBody.append(divMessage);

    let div = document.createElement('div');
    divMessage.append(div);

    let p = document.createElement('p');
    div.append(p);
    p.innerHTML = text.value;

    let divFooter = createElem('div', 'post-footer');
    divContent.append(divFooter);

    let menuFooter = createElem('menu', 'post-footer__menu');
    divFooter.append(menuFooter);

    let liLike = createElem('li', 'post-like');
    menuFooter.append(liLike);

    let iLike = createElem('i', 'fa');
    iLike.classList.add('fa-heart-o');
    liLike.append(iLike);
    likePost(iLike);

    let liReply = createElem('li', 'reply');
    menuFooter.append(liReply);

    let aReply = createElem('a', 'post-footer__action');
    aReply.setAttribute('href', '#');
    liReply.append(aReply);
    replyPost(aReply);

    let spanReply = createElem('span', 'text');
    aReply.append(spanReply);
    spanReply.textContent = "Ответить";

    let divTrash = createElem('div', 'post-delete');
    divContent.append(divTrash);

    let aTrash = createElem('a', 'trash');
    divTrash.append(aTrash);

    let iTrash = createElem('i', 'fa');
    iTrash.classList.add('fa-trash-o');
    aTrash.append(iTrash);
    deletePost(iTrash);

    if (this.closest('.post')) {
        let divChildren = this.closest('.textarea').nextElementSibling;
        if (!divChildren) {
            divChildren = createElem('div', 'children');
            this.closest('.textarea').after(divChildren);
            divChildren.append(ul);
        }
        else {
            divChildren.querySelector('.post-list').append(liPost);
        }

        return divChildren;
    }

    return ul;
}

function createElem(tag, className) {
    let result = document.createElement(tag);
    result.classList.add(className);

    return result;
}