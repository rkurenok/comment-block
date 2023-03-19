import * as flsFunctions from "./modules/isWebp.js";
import { addComment } from "./modules/addComment.js";
import { countComments } from "./modules/countComments.js";

window.onload = () => {
    flsFunctions.isWebp();
    countComments();
    addComment();
}